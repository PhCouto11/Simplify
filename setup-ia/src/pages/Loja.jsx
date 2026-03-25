import { useState } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Loja({ wishlist, toggleWishlist }) {
  const [cat, setCat] = useState('all')
  const [search, setSearch] = useState('')

  let filtered = PRODUCTS
  if (cat !== 'all') filtered = filtered.filter(p => p.cat === cat)
  if (search.trim()) {
    const q = search.toLowerCase()
    filtered = filtered.filter(p =>
      (p.name + ' ' + p.brand + ' ' + (p.desc || '')).toLowerCase().includes(q)
    )
  }

  const inWishlistCount = Object.keys(wishlist).length

  return (
    <div className="page active">
      {/* Store Header */}
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

      {/* Search */}
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

      {/* Results count */}
      {(search || cat !== 'all') && filtered.length > 0 && (
        <div className="results-count">
          {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            inWishlist={!!wishlist[p.id]}
            onToggle={toggleWishlist}
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
