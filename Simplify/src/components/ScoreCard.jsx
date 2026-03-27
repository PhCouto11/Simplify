import { useEffect, useRef, useState } from 'react'

export default function ScoreCard({ wishlist }) {
  const total = Object.keys(wishlist).length
  const owned = Object.values(wishlist).filter(v => v.owned).length
  const wanted = total - owned
  const score = total > 0 ? Math.round((owned / total) * 100) : 0

  // Animated counter
  const [displayScore, setDisplayScore] = useState(0)
  const prevScoreRef = useRef(0)

  useEffect(() => {
    const from = prevScoreRef.current
    const to = score
    prevScoreRef.current = score
    const duration = 700
    const start = performance.now()

    function step(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayScore(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [score])

  // Badge
  let badgeText = '--'
  let badgeStyle = { background: 'var(--surface-3)', color: 'var(--text-muted)' }

  if (total === 0) {
    badgeText = 'Vazio'
  } else if (score >= 80) {
    badgeText = '🔥 Quase lá!'
    badgeStyle = { background: 'var(--green-dim)', color: 'var(--green)' }
  } else if (score >= 50) {
    badgeText = '📈 Metade feita'
    badgeStyle = { background: 'var(--yellow-dim)', color: 'var(--yellow)' }
  } else if (score > 0) {
    badgeText = '🚧 Em progresso'
    badgeStyle = { background: 'var(--purple-dim)', color: 'var(--purple)' }
  } else {
    badgeText = '🎯 Começando'
    badgeStyle = { background: 'var(--cyan-dim)', color: 'var(--cyan)' }
  }

  // Explanation text
  let explain
  if (total === 0) {
    explain = (
      <>Adicione produtos à sua wishlist na <strong>Loja</strong> e marque os que já tem. Seu score é a porcentagem do setup ideal que você já conquistou.</>
    )
  } else if (score === 100) {
    explain = (
      <>🎉 <strong>Setup completo!</strong> Você tem todos os <span className="num">{total}</span> produtos que planejou. Missão cumprida.</>
    )
  } else {
    const pointsPer = total > 0 ? Math.round(100 / total) : 0
    explain = (
      <>Você tem <span className="num">{owned}</span> de <span className="num">{total}</span> produtos do seu setup ideal. Faltam <span className="num">{wanted}</span> para completar — cada um que comprar sobe <span className="num">+{pointsPer}</span> pontos.</>
    )
  }

  return (
    <div className="score-card">
      <div className="score-glow" />
      <div className="score-label">
        <div className="score-dot" /> Setup Score
      </div>
      <div className="score-main">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span className="score-value">{displayScore}</span>
          <span className="score-max">/100</span>
        </div>
        <span className="score-badge" style={badgeStyle}>{badgeText}</span>
      </div>
      <div className="score-bar-track">
        <div className="score-bar-fill" style={{ width: `${score}%` }} />
      </div>
      <div className="score-explain">{explain}</div>
    </div>
  )
}
