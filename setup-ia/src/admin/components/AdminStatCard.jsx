export default function AdminStatCard({ label, value, delta, deltaLabel, accent }) {
  const accentStyle = accent ? { borderTopColor: `var(--${accent})`, borderTopWidth: 2 } : {}

  return (
    <div className="admin-stat-card" style={accentStyle}>
      <div className="admin-stat-label">{label}</div>
      <div className="admin-stat-value">{value ?? '—'}</div>
      {delta !== undefined && (
        <div className={`admin-stat-delta ${delta >= 0 ? 'up' : 'down'}`}>
          {delta >= 0 ? '↑' : '↓'} {Math.abs(delta)}{deltaLabel || ''}
        </div>
      )}
    </div>
  )
}
