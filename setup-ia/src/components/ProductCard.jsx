export default function ProductCard({ product, inWishlist, onToggle }) {
  return (
    <div className={`product-card ${inWishlist ? 'in-wishlist' : ''}`}>
      <div className="product-thumb">
        {product.emoji}
        {product.badge && (
          <span className={`product-badge ${product.badge === 'novo' ? 'badge-novo' : 'badge-popular'}`}>
            {product.badge === 'novo' ? '✦ Novo' : '★ Popular'}
          </span>
        )}
      </div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">R$ {product.price.toLocaleString('pt-BR')}</div>
      <button
        className={`product-fav ${inWishlist ? 'is-fav' : 'not-fav'}`}
        onClick={() => onToggle(product.id)}
      >
        {inWishlist ? '♥ Na wishlist' : '♡ Quero ter'}
      </button>
    </div>
  )
}
