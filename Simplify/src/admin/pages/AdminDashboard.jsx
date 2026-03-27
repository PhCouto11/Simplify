import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import AdminStatCard from '../components/AdminStatCard'
import { AdminAreaChart } from '../components/AdminChart'

function formatSignupsChart(users) {
  const counts = {}
  users.forEach(u => {
    const d = new Date(u.created_at)
    const key = `${d.getMonth() + 1}/${d.getDate()}`
    counts[key] = (counts[key] || 0) + 1
  })
  return Object.entries(counts)
    .slice(-14)
    .map(([date, users]) => ({ date, users }))
}

function formatWishlistChart(items) {
  const counts = {}
  items.forEach(item => {
    const d = new Date(item.created_at || Date.now())
    const key = `${d.getMonth() + 1}/${d.getDate()}`
    counts[key] = (counts[key] || 0) + 1
  })
  return Object.entries(counts)
    .slice(-14)
    .map(([date, items]) => ({ date, items }))
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, dau: 0, mau: 0, wishlistItems: 0, alerts: 0, blocked: 0 })
  const [signupsChart, setSignupsChart] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const now = new Date()
      const day1 = new Date(now - 86400000).toISOString()
      const day30 = new Date(now - 30 * 86400000).toISOString()

      const [usersRes, dauRes, mauRes, wishRes, alertRes, blockedRes] = await Promise.all([
        supabase.from('admin_user_overview').select('id, created_at', { count: 'exact' }),
        supabase.from('admin_user_overview').select('id', { count: 'exact' }).gte('last_sign_in_at', day1),
        supabase.from('admin_user_overview').select('id', { count: 'exact' }).gte('last_sign_in_at', day30),
        supabase.from('wishlist').select('product_id, created_at', { count: 'exact' }),
        supabase.from('alerts').select('id', { count: 'exact' }),
        supabase.from('user_blocks').select('id', { count: 'exact' }),
      ])

      setStats({
        users: usersRes.count ?? 0,
        dau: dauRes.count ?? 0,
        mau: mauRes.count ?? 0,
        wishlistItems: wishRes.count ?? 0,
        alerts: alertRes.count ?? 0,
        blocked: blockedRes.count ?? 0,
      })

      setSignupsChart(formatSignupsChart(usersRes.data || []))
      setLoading(false)
    }

    load()
  }, [])

  return (
    <div>
      <div className="admin-page-title">Dashboard</div>
      <div className="admin-page-subtitle">Visão geral do sistema Simplify</div>

      <div className="admin-stat-grid">
        <AdminStatCard label="Total de Usuários" value={loading ? '...' : stats.users} accent="cyan" />
        <AdminStatCard label="Ativos (últimas 24h)" value={loading ? '...' : stats.dau} accent="green" />
        <AdminStatCard label="Ativos (últimos 30d)" value={loading ? '...' : stats.mau} accent="purple" />
        <AdminStatCard label="Itens na Wishlist" value={loading ? '...' : stats.wishlistItems} accent="yellow" />
        <AdminStatCard label="Alertas Enviados" value={loading ? '...' : stats.alerts} accent="cyan" />
        <AdminStatCard label="Usuários Bloqueados" value={loading ? '...' : stats.blocked} accent="red" />
      </div>

      <AdminAreaChart
        data={signupsChart}
        dataKey="users"
        xKey="date"
        color="#00D9FF"
        title="Novos usuários (últimos 14 dias)"
      />
    </div>
  )
}
