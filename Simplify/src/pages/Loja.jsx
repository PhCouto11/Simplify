import { useState, useRef, useEffect } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { getMinPrice } from '../data/storePrices'
import { supabase } from '../lib/supabase'
import ProductCard from '../components/ProductCard'

const SORT_OPTIONS = [
  { key: 'rel',  label: 'Relevância' },
  { key: 'asc',  label: 'Menor preço' },
  { key: 'desc', label: 'Maior preço' },
]

export default function Loja({ wishlist, toggleWishlist }) {
  const [cat, setCat] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('rel')
  const [sortOpen, setSortOpen] = useState(false)
  const [affiliates, setAffiliates] = useState({}) // { product_id: url }
  const sortRef = useRef(null)

  useEffect(() => {
    supabase.from('product_affiliates').select('product_id, url').then(({ data }) => {
      const map = {}
      ;(data || []).forEach(a => { map[a.product_id] = a.url })
      setAffiliates(map)
    })
  }, [])

  useEffect(() => {
    function onOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [])

  let filtered = PRODUCTS
  if (cat !== 'all') filtered = filtered.filter(p => p.cat === cat)
  if (search.trim()) {
    const q = search.toLowerCase()
    filtered = filtered.filter(p =>
      (p.name + ' ' + p.brand + ' ' + (p.desc || '')).toLowerCase().includes(q)
    )
  }

  if (sort === 'asc')  filtered = [...filtered].sort((a, b) => getMinPrice(a) - getMinPrice(b))
  if (sort === 'desc') filtered = [...filtered].sort((a, b) => getMinPrice(b) - getMinPrice(a))

  const inWishlistCount = Object.keys(wishlist).length
  const activeSort = SORT_OPTIONS.find(o => o.key === sort)

  return (
    <div className="page active">
      <div className="store-header">
        <div className="store-header-text">
          <h2 className="store-title">Loja</h2>
          <p className="store-subtitle">
            {inWishlistCount > 0
              ? `${inWishlistCount} produto${inWishlistCount > 1 ? 's' : ''} no seu setup`
              : 'Encontre o que falta no seu setup'}
          </p>
        </div>
        {inWishlistCount > 0 && (
          <div className="store-count-badge">{inWishlistCount}</div>
        )}
      </div>

      {/* Search + Sort */}
      <div className="search-sort-row">
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder="Buscar produto, marca..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoComplete="off"
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')}>×</button>
          )}
        </div>

        <div className="sort-wrap" ref={sortRef}>
          <button
            className={`sort-btn ${sort !== 'rel' ? 'sort-btn-active' : ''}`}
            onClick={() => setSortOpen(o => !o)}
          >
            <span className="sort-btn-icon">↕</span>
            <span className="sort-btn-label">{activeSort?.label}</span>
          </button>
          {sortOpen && (
            <div className="sort-dropdown">
              {SORT_OPTIONS.map(o => (
                <button
                  key={o.key}
                  className={`sort-option ${sort === o.key ? 'sort-option-active' : ''}`}
                  onClick={() => { setSort(o.key); setSortOpen(false) }}
                >
                  {sort === o.key && <span style={{ color: 'var(--cyan)', marginRight: 6 }}>✓</span>}
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="cat-tabs">
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            className={`cat-tab ${cat === c.key ? 'active' : ''}`}
            onClick={() => setCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {(search || cat !== 'all') && filtered.length > 0 && (
        <div className="results-count">
          {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </div>
      )}

      <div className="product-grid">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            inWishlist={!!wishlist[p.id]}
            onToggle={toggleWishlist}
            affiliateUrl={affiliates[p.id]}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty">
          <div className="empty-icon">🔍</div>
          <h3 className="empty-title">Nenhum produto encontrado</h3>
          <p className="empty-text">Tente outra busca ou categoria.</p>
          {(search || cat !== 'all') && (
            <button className="empty-cta" onClick={() => { setSearch(''); setCat('all') }}>
              Ver todos os produtos
            </button>
          )}
        </div>
      )}
    </div>
  )
}
