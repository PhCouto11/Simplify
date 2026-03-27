import { useState } from 'react'
import { PRODUCTS } from '../data/products'

const PRESET_SETUPS = [
  { id: 'work',    name: 'Work Setup',    icon: '💼', color: 'cyan',   desc: 'Produtividade e foco' },
  { id: 'gaming',  name: 'Gaming Setup',  icon: '🎮', color: 'purple', desc: 'Performance máxima' },
  { id: 'travel',  name: 'Travel Setup',  icon: '✈️', color: 'yellow', desc: 'Portátil e eficiente' },
  { id: 'studio',  name: 'Studio Setup',  icon: '🎙️', color: 'green',  desc: 'Criação de conteúdo' },
]

const COLOR_MAP = {
  cyan:   { border: 'var(--cyan)',   bg: 'var(--cyan-dim)',   text: 'var(--cyan)' },
  purple: { border: 'var(--purple)', bg: 'var(--purple-dim)', text: 'var(--purple)' },
  yellow: { border: 'var(--yellow)', bg: 'var(--yellow-dim)', text: 'var(--yellow)' },
  green:  { border: 'var(--green)',  bg: 'var(--green-dim)',  text: 'var(--green)' },
}

export default function Setups({ setups, onAddProduct, onRemoveProduct, wishlist }) {
  const [selected, setSelected] = useState(null)   // setup id being viewed
  const [showPicker, setShowPicker] = useState(false)

  const selectedSetup = PRESET_SETUPS.find(s => s.id === selected)
  const selectedProducts = selected
    ? (setups[selected] || []).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
    : []

  // Products available to add: all wishlist items not already in this setup
  const currentSetupIds = new Set(setups[selected] || [])
  const wishlistProducts = PRODUCTS.filter(
    p => wishlist[p.id] && !currentSetupIds.has(p.id)
  )

  function handleBack() {
    setSelected(null)
    setShowPicker(false)
  }

  // ── Detail View ──────────────────────────────
  if (selected && selectedSetup) {
    const colors = COLOR_MAP[selectedSetup.color]

    return (
      <div className="page active">
        {/* Header */}
        <div className="setup-detail-header">
          <button className="setup-back-btn" onClick={handleBack}>←</button>
          <span className="setup-detail-icon">{selectedSetup.icon}</span>
          <div>
            <div className="setup-detail-name">{selectedSetup.name}</div>
            <div className="setup-detail-desc">{selectedSetup.desc}</div>
          </div>
        </div>

        {/* Products in setup */}
        {selectedProducts.length === 0 ? (
          <div className="empty" style={{ padding: '32px 16px' }}>
            <div className="empty-icon">📦</div>
            <h3 className="empty-title">Setup vazio</h3>
            <p className="empty-text">
              Adicione produtos da sua lista a este setup.
            </p>
          </div>
        ) : (
          selectedProducts.map(product => (
            <div key={product.id} className="setup-product-item">
              <div className="setup-product-emoji">{product.emoji}</div>
              <div className="setup-product-info">
                <div className="setup-product-name">{product.name}</div>
                <div className="setup-product-brand">{product.brand} · R$ {product.price.toLocaleString('pt-BR')}</div>
              </div>
              <button
                className="setup-product-remove"
                onClick={() => onRemoveProduct(selected, product.id)}
                title="Remover do setup"
              >
                ×
              </button>
            </div>
          ))
        )}

        {/* Add product button */}
        <button
          className="setup-add-btn"
          onClick={() => setShowPicker(true)}
          style={{ borderColor: colors.border, color: colors.text }}
        >
          + Adicionar produto do meu setup
        </button>

        {/* Product Picker Modal */}
        {showPicker && (
          <div className="modal-overlay" onClick={() => setShowPicker(false)}>
            <div className="modal-sheet" onClick={e => e.stopPropagation()}>
              <div className="modal-handle" />
              <div className="modal-title">Escolher produto</div>

              {wishlistProducts.length === 0 ? (
                <div className="empty" style={{ padding: '24px 0' }}>
                  <p className="empty-text">
                    Todos os seus produtos já estão neste setup,<br />
                    ou você ainda não adicionou nenhum à lista.
                  </p>
                </div>
              ) : (
                wishlistProducts.map(product => (
                  <div
                    key={product.id}
                    className="modal-item"
                    onClick={() => {
                      onAddProduct(selected, product.id)
                      setShowPicker(false)
                    }}
                  >
                    <span className="modal-item-emoji">{product.emoji}</span>
                    <div className="modal-item-info">
                      <div className="modal-item-name">{product.name}</div>
                      <div className="modal-item-brand">{product.brand}</div>
                    </div>
                    <span className="modal-item-arrow">→</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── Grid View (all setups) ──────────────────
  return (
    <div className="page active">
      <div className="setups-page-header">
        <h2 className="setups-title">Seus Setups</h2>
        <p className="setups-subtitle">Organize seus produtos por contexto</p>
      </div>

      <div className="setup-grid">
        {PRESET_SETUPS.map(setup => {
          const colors = COLOR_MAP[setup.color]
          const productCount = (setups[setup.id] || []).length

          return (
            <button
              key={setup.id}
              className="setup-card"
              onClick={() => setSelected(setup.id)}
              style={productCount > 0
                ? { borderColor: colors.border, background: colors.bg }
                : {}}
            >
              <div className="setup-card-icon">{setup.icon}</div>
              <div className="setup-card-name">{setup.name}</div>
              <div className="setup-card-desc">{setup.desc}</div>
              <div className="setup-card-count" style={{ color: colors.text }}>
                {productCount === 0
                  ? 'Vazio'
                  : `${productCount} produto${productCount > 1 ? 's' : ''}`}
              </div>
            </button>
          )
        })}
      </div>

      {/* Tips */}
      <div className="setups-tip">
        <div className="setups-tip-icon">💡</div>
        <p className="setups-tip-text">
          Agrupe seus produtos por contexto de uso — trabalho, gaming, viagem ou estúdio.
          Adicione produtos da sua wishlist em cada setup.
        </p>
      </div>
    </div>
  )
}
