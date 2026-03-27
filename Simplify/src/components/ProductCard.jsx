import { useState } from 'react'
import { CAT_COLORS } from '../data/products'
import { STORES, getStorePrices, getMinPrice } from '../data/storePrices'
import { trackClick } from '../lib/trackClick'

export default function ProductCard({ product, inWishlist, onToggle, affiliateUrl }) {
  const [imgError, setImgError] = useState(false)
  const [activeStore, setActiveStore] = useState(null)

  const storePrices = getStorePrices(product)
  const minPrice = getMinPrice(product)
  const activeStoreData = STORES.find(s => s.key === activeStore)

  function handleBuy(e) {
    e.preventDefault()
    trackClick(product.id, affiliateUrl)
    window.open(affiliateUrl, '_blank', 'noopener,noreferrer')
  }

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

      {/* Price + store badges */}
      <div className="product-price-block">
        <div>
          <div className="product-from">a partir de</div>
          <div className="product-price">R$ {minPrice.toLocaleString('pt-BR')}</div>
        </div>
        <div className="store-badges">
          {STORES.map(s => (
            <button
              key={s.key}
              className={`store-badge ${activeStore === s.key ? 'store-badge-active' : ''}`}
              style={{ background: s.color, color: s.textColor }}
              onClick={() => setActiveStore(prev => prev === s.key ? null : s.key)}
              title={`${s.label}: R$ ${storePrices[s.key].toLocaleString('pt-BR')}`}
            >
              {s.abbr}
            </button>
          ))}
        </div>
      </div>

      {activeStore && (
        <div className="store-price-tip" style={{ borderColor: activeStoreData?.color }}>
          <span style={{ color: activeStoreData?.color, fontWeight: 600 }}>
            {activeStoreData?.label}
          </span>
          <span className="store-price-value">
            R$ {storePrices[activeStore].toLocaleString('pt-BR')}
          </span>
        </div>
      )}

      {/* Buy button — only when affiliate URL is set */}
      {affiliateUrl && (
        <button className="product-buy" onClick={handleBuy}>
          Comprar →
        </button>
      )}

      <button
        className={`product-fav ${inWishlist ? 'is-fav' : 'not-fav'}`}
        onClick={() => onToggle(product.id)}
      >
        {inWishlist ? '♥ No meu setup' : '+ Adicionar ao setup'}
      </button>
    </div>
  )
}
