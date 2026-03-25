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
      <div className="status-bar">
        <span>9:41</span>
        <div className="status-icons">
          <svg viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </div>
      </div>
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
