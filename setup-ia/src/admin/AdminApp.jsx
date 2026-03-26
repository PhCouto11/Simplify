import { useState } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useAdminAuth } from './hooks/useAdminAuth'
import AdminSidebar from './components/AdminSidebar'
import AdminTopBar from './components/AdminTopBar'
import AdminDashboard from './pages/AdminDashboard'
import AdminUsers from './pages/AdminUsers'
import AdminProducts from './pages/AdminProducts'
import AdminAlerts from './pages/AdminAlerts'
import AdminLogs from './pages/AdminLogs'

const PAGE_MAP = {
  '/admin': 'dashboard',
  '/admin/': 'dashboard',
  '/admin/users': 'users',
  '/admin/products': 'products',
  '/admin/alerts': 'alerts',
  '/admin/logs': 'logs',
}

const PAGE_TITLES = {
  dashboard: 'Dashboard',
  users: 'Usuários',
  products: 'Produtos',
  alerts: 'Alertas',
  logs: 'Logs',
}

const PAGES = {
  dashboard: AdminDashboard,
  users: AdminUsers,
  products: AdminProducts,
  alerts: AdminAlerts,
  logs: AdminLogs,
}

export default function AdminApp() {
  const { loading, user, isAdmin } = useAdminAuth()
  const [page, setPage] = useState(PAGE_MAP[window.location.pathname] || 'dashboard')

  if (loading) {
    return <div className="admin-loading">Verificando acesso...</div>
  }

  if (!user) {
    window.location.href = '/'
    return null
  }

  if (!isAdmin) {
    return (
      <div className="admin-loading" style={{ flexDirection: 'column', gap: 8 }}>
        <div className="admin-forbidden">403</div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Acesso restrito ao painel admin.</div>
        <a href="/" style={{ color: 'var(--cyan)', fontSize: 13, marginTop: 8 }}>← Voltar ao app</a>
      </div>
    )
  }

  function navigate(p) {
    setPage(p)
    history.pushState(null, '', p === 'dashboard' ? '/admin' : `/admin/${p}`)
  }

  const PageComponent = PAGES[page] || AdminDashboard

  return (
    <div className="admin-shell">
      <AdminSidebar active={page} onNavigate={navigate} />
      <AdminTopBar user={user} title={PAGE_TITLES[page]} />
      <main className="admin-main">
        <PageComponent />
      </main>
      <SpeedInsights />
    </div>
  )
}
