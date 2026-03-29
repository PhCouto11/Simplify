import { useState } from 'react'
import { SETUP_VARIATIONS } from '../../data/comparatorData'
import VariationCard from './VariationCard'
import RoomVisualizer from '../Visualizer/RoomVisualizer'
import { PRODUCTS } from '../../data/products'

// Carrega preferência salva no localStorage
function loadChosen(envId) {
  try { return localStorage.getItem(`comparator-chosen-${envId}`) || null } catch { return null }
}

// Tela de comparação A vs B de um ambiente específico
export default function SetupComparison({ environment, onBack }) {
  const [activeTab, setActiveTab] = useState('A')
  const [chosen, setChosen] = useState(() => loadChosen(environment.id))
  const [showVisualizer, setShowVisualizer] = useState(false)

  const variations = SETUP_VARIATIONS[environment.id]
  const varA = variations.A
  const varB = variations.B

  // Calcula produtos exclusivos de cada variação (diferenças)
  const setA = new Set(varA.products)
  const setB = new Set(varB.products)
  const diffA = varA.products.filter(id => !setB.has(id))
  const diffB = varB.products.filter(id => !setA.has(id))

  function handleChoose(tab) {
    setChosen(tab)
    try { localStorage.setItem(`comparator-chosen-${environment.id}`, tab) } catch {}
  }

  if (showVisualizer) {
    const chosenVariation = chosen ? variations[chosen] : variations.A
    const products = chosenVariation.products
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean)
    return (
      <RoomVisualizer
        products={products}
        setupName={`${environment.name} — ${chosenVariation.name}`}
        onBack={() => setShowVisualizer(false)}
      />
    )
  }

  return (
    <div className="page active">
      {/* Header com botão voltar */}
      <div className="setup-detail-header">
        <button className="setup-back-btn" onClick={onBack}>←</button>
        <span className="setup-detail-icon">{environment.emoji}</span>
        <div>
          <div className="setup-detail-name">{environment.name}</div>
          <div className="setup-detail-desc">Compare as variações A e B</div>
        </div>
      </div>

      {/* Tabs A e B */}
      <div className="comp-tabs">
        {['A', 'B'].map(tab => (
          <button
            key={tab}
            className={`comp-tab ${activeTab === tab ? 'comp-tab-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="comp-tab-letter">{tab}</span>
            <span className="comp-tab-name">{variations[tab].name}</span>
            {chosen === tab && <span className="comp-tab-chosen">✓</span>}
          </button>
        ))}
      </div>

      {/* Card da variação ativa */}
      <VariationCard
        variation={variations[activeTab]}
        diffIds={activeTab === 'A' ? diffA : diffB}
        isChosen={chosen === activeTab}
        onChoose={() => handleChoose(activeTab)}
      />

      {/* Legenda dos destaques */}
      <div className="comp-diff-legend">
        <span className="comp-diff-dot" />
        <span className="comp-diff-text">Produto exclusivo desta variação</span>
      </div>

      {/* Botão Visualizar — aparece quando um setup está escolhido */}
      {chosen && (
        <button
          className="comp-visualize-btn"
          onClick={() => setShowVisualizer(true)}
        >
          📸 Visualizar no meu espaço
        </button>
      )}

      <div style={{ height: 8 }} />
    </div>
  )
}
