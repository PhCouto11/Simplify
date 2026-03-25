import { useState, useMemo } from 'react'
import ScoreCard from '../components/ScoreCard'
import WishlistItem from '../components/WishlistItem'
import RecommendCard from '../components/RecommendCard'
import { PRODUCTS } from '../data/products'
import { getRecommendations, getSetupScore } from '../data/recommendations'

export default function Home({ wishlist, toggleOwned, removeFromWishlist, toggleWishlist, goToLoja }) {
  const [tab, setTab] = useState('all')

  const total = Object.keys(wishlist).length
  const ownedCount = Object.values(wishlist).filter(v => v.owned).length
  const wantedCount = total - ownedCount

  let entries = Object.entries(wishlist)
  if (tab === 'owned') entries = entries.filter(([, v]) => v.owned)
  if (tab === 'wanted') entries = entries.filter(([, v]) => !v.owned)

  const recommendations = useMemo(
    () => getRecommendations(wishlist, PRODUCTS, 6),
    [wishlist]
  )

  const smartScore = useMemo(
    () => getSetupScore(wishlist, PRODUCTS),
    [wishlist]
  )

  return (
    <div className="page active">
      <ScoreCard wishlist={wishlist} />

      {/* Tabs */}
      <div className="home-tabs">
        {[
          { key: 'all', label: 'Todos', count: total },
          { key: 'owned', label: '✅ Tenho', count: ownedCount },
          { key: 'wanted', label: '🎯 Quero', count: wantedCount },
        ].map(t => (
          <button
            key={t.key}
            className={`home-tab ${tab === t.key ? 'active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
            <span className="tab-count">{t.count}</span>
          </button>
        ))}
      </div>

      {/* Wishlist Items */}
      {entries.map(([pid, data]) => (
        <WishlistItem
          key={pid}
          productId={pid}
          owned={data.owned}
          onToggleOwned={toggleOwned}
          onRemove={removeFromWishlist}
        />
      ))}

      {/* Empty filtered state */}
      {total > 0 && entries.length === 0 && (
        <div className="empty" style={{ padding: 24 }}>
          <div className="empty-icon">{tab === 'owned' ? '📦' : '✨'}</div>
          <p className="empty-text">
            {tab === 'owned'
              ? 'Nenhum produto marcado como "já tenho" ainda.'
              : 'Todos os produtos já foram conquistados!'}
          </p>
        </div>
      )}

      {/* Empty — no wishlist at all */}
      {total === 0 && (
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

      {/* Smart Recommendations */}
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
