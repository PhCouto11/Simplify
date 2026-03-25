import { useState } from 'react'
import { CAT_COLORS } from '../data/products'

export default function RecommendCard({ product, onAdd }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="rec-card">
      <div className="rec-thumb">
        {product.img && !imgError ? (
          <img
            src={product.img}
            alt={product.name}
            className="rec-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="rec-img-placeholder"
            style={{ background: CAT_COLORS[product.cat] }}
          >
            {product.emoji}
          </div>
        )}
      </div>
      <div className="rec-why">{product.reason}</div>
      <div className="rec-brand">{product.brand}</div>
      <div className="rec-name">{product.name}</div>
      <div className="rec-price">R$ {product.price.toLocaleString('pt-BR')}</div>
      <button className="rec-btn" onClick={() => onAdd(product.id)}>
        + Adicionar ao setup
      </button>
    </div>
  )
}
