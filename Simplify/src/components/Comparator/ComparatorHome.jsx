import { useState } from 'react'
import { ENVIRONMENTS } from '../../data/comparatorData'
import SetupComparison from './SetupComparison'

// Tela principal do comparador — grid 2x2 com os 4 ambientes
export default function ComparatorHome() {
  const [selectedEnv, setSelectedEnv] = useState(null)

  if (selectedEnv) {
    return (
      <SetupComparison
        environment={selectedEnv}
        onBack={() => setSelectedEnv(null)}
      />
    )
  }

  return (
    <div className="page active">
      <div className="comp-home-header">
        <div className="comp-home-title">Comparador A/B</div>
        <div className="comp-home-subtitle">Compare variações de setup por ambiente</div>
      </div>

      <div className="comp-env-grid">
        {ENVIRONMENTS.map(env => (
          <button
            key={env.id}
            className="comp-env-card"
            onClick={() => setSelectedEnv(env)}
          >
            <span className="comp-env-icon">{env.emoji}</span>
            <span className="comp-env-name">{env.name}</span>
            <span className="comp-env-desc">{env.desc}</span>
            <span className="comp-env-tag">2 variações</span>
          </button>
        ))}
      </div>

      <div className="setups-tip">
        <span className="setups-tip-icon">💡</span>
        <p className="setups-tip-text">
          Cada ambiente tem duas variações de setup (A e B). Compare produtos, preços e scores para escolher o ideal para você.
        </p>
      </div>
    </div>
  )
}
