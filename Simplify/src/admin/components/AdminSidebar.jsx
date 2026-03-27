export default function AdminSidebar({ active, onNavigate }) {
  const sections = [
    {
      label: 'Geral',
      items: [
        { id: 'dashboard', icon: '▦', label: 'Dashboard' },
      ]
    },
    {
      label: 'Gestão',
      items: [
        { id: 'users',    icon: '◉', label: 'Usuários' },
        { id: 'products',   icon: '◈', label: 'Produtos' },
        { id: 'categories', icon: '◫', label: 'Categorias' },
        { id: 'alerts',     icon: '◎', label: 'Alertas' },
      ]
    },
    {
      label: 'Sistema',
      items: [
        { id: 'logs', icon: '≡', label: 'Logs' },
      ]
    },
  ]

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        ⚡ Simplify <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>Admin</span>
      </div>

      {sections.map(section => (
        <div key={section.label}>
          <div className="admin-nav-section">{section.label}</div>
          {section.items.map(item => (
            <button
              key={item.id}
              className={`admin-nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      ))}

      <div style={{ marginTop: 'auto', padding: '16px 8px' }}>
        <a
          href="/"
          className="admin-nav-item"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontSize: 12, color: 'var(--text-muted)' }}
        >
          <span>↗</span> Ver App
        </a>
      </div>
    </aside>
  )
}
