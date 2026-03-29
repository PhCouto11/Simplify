import { useState } from 'react'

// Placeholder para visualização de setup no ambiente real (IA - em breve)
export default function RoomVisualizer({ products, setupName, onBack }) {
  const [previewUrl, setPreviewUrl] = useState(null)

  function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  return (
    <div className="page active">
      {/* Header */}
      <div className="setup-detail-header">
        <button className="setup-back-btn" onClick={onBack}>←</button>
        <div>
          <div className="setup-detail-name">Visualizar no espaço</div>
          <div className="setup-detail-desc">{setupName}</div>
        </div>
      </div>

      {/* Texto explicativo */}
      <p className="viz-explain">
        Em breve: envie uma foto do seu espaço e veja como os produtos ficam no seu ambiente.
      </p>

      {/* Upload de foto */}
      <label className="viz-upload-btn">
        📷 Enviar foto do ambiente
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </label>

      {/* Preview da foto */}
      <div className="viz-preview-area">
        {previewUrl ? (
          <img src={previewUrl} alt="Seu ambiente" className="viz-preview-img" />
        ) : (
          <div className="viz-preview-placeholder">
            <span className="viz-preview-icon">🏠</span>
            <span className="viz-preview-label">Sua foto aparecerá aqui</span>
          </div>
        )}
        {/* Banner "Em breve" sobreposto */}
        <div className="viz-coming-soon-banner">
          🚀 Em breve
        </div>
      </div>

      {/* Lista de produtos do setup escolhido */}
      <div className="viz-products-section">
        <div className="viz-section-title">Produtos do seu setup</div>
        {products.map(product => (
          <div key={product.id} className="viz-product-item">
            <span className="viz-product-emoji">{product.emoji}</span>
            <div className="viz-product-info">
              <div className="viz-product-name">{product.name}</div>
              <div className="viz-product-brand">{product.brand}</div>
            </div>
            <div className="viz-product-price">
              R$ {product.price.toLocaleString('pt-BR')}
            </div>
          </div>
        ))}
      </div>

      {/* Botão desabilitado */}
      <button className="viz-generate-btn" disabled>
        ✨ Gerar visualização
      </button>
      <p className="viz-disabled-note">Disponível em breve</p>
    </div>
  )
}
