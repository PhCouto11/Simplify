import { useState } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Loja({ wishlist, toggleWishlist }) {
  const [cat, setCat] = useState('all')
  const [search, setSearch] = useState('')

  // Filtrar
  let filtered = PRODUCTS
  if (cat !== 'all') filtered = filtered.filter(p => p.cat === cat)
  if (search.trim()) {
    const q = search.toLowerCase()
    filtered = filtered.filter(p =>
      (p.name + ' ' + p.brand).toLowerCase().includes(q)
    )
  }

  return (
    <div className="page active">
      {/* Busca */}
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          placeholder="Buscar produto, marca..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Categorias */}
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

      {/* Grid */}
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
          <p className="empty-text">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  )
}
