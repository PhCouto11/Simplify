import { PRODUCTS, CAT_COLORS } from '../data/products'

export default function WishlistItem({ productId, owned, onToggleOwned, onRemove }) {
  const product = PRODUCTS.find(p => p.id === productId)
  if (!product) return null

  return (
    <div className={`wish-item ${owned ? 'owned' : 'wanted'}`}>
      <div className="wish-icon" style={{ background: CAT_COLORS[product.cat] || 'var(--surface-3)' }}>
        {product.emoji}
      </div>
      <div className="wish-info">
        <div className="wish-name">{product.name}</div>
        <div className="wish-meta">{product.brand} · {product.cat}</div>
        <div className="wish-price">R$ {product.price.toLocaleString('pt-BR')}</div>
      </div>
      <button
        className={`wish-toggle ${owned ? 'is-owned' : ''}`}
        onClick={() => onToggleOwned(productId)}
      >
        {owned ? '✅ Tenho' : 'Marcar'}
      </button>
      <button
        className="wish-remove"
        onClick={() => onRemove(productId)}
        title="Remover"
      >
        ✕
      </button>
    </div>
  )
}
