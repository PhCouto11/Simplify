import { useState } from 'react'

export default function Header({ title, user, onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  const name = user?.user_metadata?.full_name?.split(' ')[0]
    || user?.user_metadata?.name?.split(' ')[0]
    || user?.email?.split('@')[0]
    || 'Você'

  const initial = name[0].toUpperCase()

  return (
    <>
      <div className="header">
        <div className="header-top">
          <div>
            <div className="header-greeting">Olá, <span>{name}</span> 👋</div>
            <h1 className="header-title">{title}</h1>
          </div>
          <div style={{ position: 'relative' }}>
            <button className="header-avatar" onClick={() => setShowMenu(v => !v)}>
              {initial}
            </button>
            {showMenu && (
              <div className="header-menu">
                <div className="header-menu-email">{user?.email}</div>
                <button className="header-menu-logout" onClick={onLogout}>
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
