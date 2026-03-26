import { supabase } from '../../lib/supabase'

export default function AdminTopBar({ user, title }) {
  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <header className="admin-topbar">
      <span className="admin-topbar-title">{title || 'Admin Panel'}</span>
      <div className="admin-topbar-actions">
        <span className="admin-topbar-email">{user?.email}</span>
        <button className="admin-btn admin-btn-ghost" onClick={handleLogout}>Sair</button>
      </div>
    </header>
  )
}
