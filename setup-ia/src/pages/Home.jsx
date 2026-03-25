import { useState } from 'react'
import ScoreCard from '../components/ScoreCard'
import WishlistItem from '../components/WishlistItem'

export default function Home({ wishlist, toggleOwned, removeFromWishlist, goToLoja }) {
  const [tab, setTab] = useState('all')

  const total = Object.keys(wishlist).length
  const ownedCount = Object.values(wishlist).filter(v => v.owned).length
  const wantedCount = total - ownedCount

  // Filtrar por tab
  let entries = Object.entries(wishlist)
  if (tab === 'owned') entries = entries.filter(([, v]) => v.owned)
  if (tab === 'wanted') entries = entries.filter(([, v]) => !v.owned)

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

      {/* Lista */}
      {entries.map(([pid, data]) => (
        <WishlistItem
          key={pid}
          productId={pid}
          owned={data.owned}
          onToggleOwned={toggleOwned}
          onRemove={removeFromWishlist}
        />
      ))}

      {/* Empty filtrado */}
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

      {/* Empty geral */}
      {total === 0 && (
        <div className="empty">
          <div className="empty-icon">🛒</div>
          <h3 className="empty-title">Sua wishlist está vazia</h3>
          <p className="empty-text">
            Explore a Loja e favorite os produtos que quer ter no seu setup.
          </p>
          <button className="empty-cta" onClick={goToLoja}>
            🏪 Ir pra Loja
          </button>
        </div>
      )}
    </div>
  )
}
