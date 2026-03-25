import { useState } from 'react'
import { CAT_COLORS } from '../data/products'

export default function ProductCard({ product, inWishlist, onToggle }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={`product-card ${inWishlist ? 'in-wishlist' : ''}`}>
      <div className="product-thumb">
        {product.img && !imgError ? (
          <img
            src={product.img}
            alt={product.name}
            className="product-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="product-img-placeholder"
            style={{ background: CAT_COLORS[product.cat] }}
          >
            {product.emoji}
          </div>
        )}
        {product.badge && (
          <span className={`product-badge ${product.badge === 'novo' ? 'badge-novo' : 'badge-popular'}`}>
            {product.badge === 'novo' ? '✦ Novo' : '★ Popular'}
          </span>
        )}
      </div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-name">{product.name}</div>
      {product.desc && (
        <div className="product-desc">{product.desc}</div>
      )}
      <div className="product-price">R$ {product.price.toLocaleString('pt-BR')}</div>
      <button
        className={`product-fav ${inWishlist ? 'is-fav' : 'not-fav'}`}
        onClick={() => onToggle(product.id)}
      >
        {inWishlist ? '♥ No meu setup' : '+ Adicionar ao setup'}
      </button>
    </div>
  )
}
