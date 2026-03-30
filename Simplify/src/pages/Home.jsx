import { useMemo } from 'react'
import ScoreCard from '../components/ScoreCard'
import RecommendCard from '../components/RecommendCard'
import { PRODUCTS } from '../data/products'
import { getRecommendations } from '../data/recommendations'

export default function Home({ wishlist, toggleWishlist, goToLoja }) {
  const recommendations = useMemo(
    () => getRecommendations(wishlist, PRODUCTS, 6),
    [wishlist]
  )

  return (
    <div className="page active">
      <ScoreCard wishlist={wishlist} />

      {Object.keys(wishlist).length === 0 && (
        <div className="empty">
          <div className="empty-icon">🛒</div>
          <h3 className="empty-title">Sua lista está vazia</h3>
          <p className="empty-text">
            Explore a Loja e adicione os produtos que quer ter no seu setup.
          </p>
          <button className="empty-cta" onClick={goToLoja}>
            🏪 Explorar Loja
          </button>
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="rec-section">
          <div className="rec-header">
            <div>
              <div className="rec-title">Recomendado para você</div>
              <div className="rec-subtitle">Baseado no seu setup atual</div>
            </div>
            <span className="rec-tag">✦ IA</span>
          </div>
          <div className="rec-grid">
            {recommendations.map(product => (
              <RecommendCard
                key={product.id}
                product={product}
                onAdd={toggleWishlist}
              />
            ))}
          </div>
        </div>
      )}

      <div style={{ height: 8 }} />
    </div>
  )
}
