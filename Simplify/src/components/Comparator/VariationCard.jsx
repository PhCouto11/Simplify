import { PRODUCTS } from '../../data/products'

// Card de uma variação (A ou B) com lista de produtos e total
export default function VariationCard({ variation, allProducts, diffIds, isChosen, onChoose }) {
  // Filtra e resolve produtos desta variação
  const products = variation.products
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean)

  const total = products.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className={`var-card ${isChosen ? 'var-card-chosen' : ''}`}>
      {/* Lista de produtos */}
      <div className="var-product-list">
        {products.map(product => {
          // Produto exclusivo desta variação (diferença em relação à outra)
          const isUnique = diffIds.includes(product.id)
          return (
            <div
              key={product.id}
              className={`var-product-item ${isUnique ? 'var-product-unique' : ''}`}
            >
              <span className="var-product-emoji">{product.emoji}</span>
              <div className="var-product-info">
                <div className="var-product-name">{product.name}</div>
                <div className="var-product-brand">{product.brand}</div>
              </div>
              <div className="var-product-price">
                R$ {product.price.toLocaleString('pt-BR')}
              </div>
            </div>
          )
        })}
      </div>

      {/* Score */}
      <div className="var-score-row">
        <span className="var-score-label">Score</span>
        <div className="var-score-track">
          <div className="var-score-fill" style={{ width: `${variation.score}%` }} />
        </div>
        <span className="var-score-val">{variation.score}</span>
      </div>

      {/* Total + CTA */}
      <div className="var-footer">
        <div>
          <div className="var-total-label">Total estimado</div>
          <div className="var-total">R$ {total.toLocaleString('pt-BR')}</div>
        </div>
        <button
          className={`var-choose-btn ${isChosen ? 'var-choose-btn-active' : ''}`}
          onClick={onChoose}
        >
          {isChosen ? '✓ Escolhido' : 'Escolher setup'}
        </button>
      </div>
    </div>
  )
}
