export default function BottomNav({ active, onChange, wishlistCount }) {
  return (
    <nav className="bottom-nav">
      {/* Home / Meu Setup */}
      <button
        className={`nav-item ${active === 'home' ? 'active' : ''}`}
        onClick={() => onChange('home')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
        </svg>
        <span className="nav-label">Meu Setup</span>
      </button>

      {/* Loja */}
      <button
        className={`nav-item ${active === 'loja' ? 'active' : ''}`}
        onClick={() => onChange('loja')}
      >
        {wishlistCount > 0 && (
          <span className="nav-badge">{wishlistCount > 9 ? '9+' : wishlistCount}</span>
        )}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span className="nav-label">Loja</span>
      </button>

      {/* Comparador */}
      <button
        className={`nav-item ${active === 'comparador' ? 'active' : ''}`}
        onClick={() => onChange('comparador')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 3h-4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
        </svg>
        <span className="nav-label">Comparar</span>
      </button>

      {/* Setups */}
      <button
        className={`nav-item ${active === 'setups' ? 'active' : ''}`}
        onClick={() => onChange('setups')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="nav-label">Setups</span>
      </button>

      {/* Redesign */}
      <button
        className={`nav-item ${active === 'redesign' ? 'active' : ''}`}
        onClick={() => onChange('redesign')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="nav-label">Novo</span>
      </button>
    </nav>
  )
}
