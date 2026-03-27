import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAdminData } from '../hooks/useAdminData'
import AdminDataTable from '../components/AdminDataTable'
import AdminSearchBar from '../components/AdminSearchBar'
import AdminBadge from '../components/AdminBadge'
import AdminConfirmModal from '../components/AdminConfirmModal'

export default function AdminUsers() {
  const [rows, setRows] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)

  const { page, setPage, pageSize, range, sortCol, sortDir, handleSort, search, handleSearch } = useAdminData(20)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      let q = supabase
        .from('admin_user_overview')
        .select('*', { count: 'exact' })
        .range(range.from, range.to)

      if (search) q = q.ilike('email', `%${search}%`)
      if (sortCol) q = q.order(sortCol, { ascending: sortDir === 'asc' })
      else q = q.order('created_at', { ascending: false })

      const { data, count } = await q
      if (!cancelled) {
        setRows(data || [])
        setTotal(count || 0)
        setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [page, sortCol, sortDir, search])

  async function blockUser(user) {
    await supabase.from('user_blocks').upsert({ user_id: user.id, reason: 'Bloqueado pelo admin' })
    setModal(null)
    setRows(r => r.map(u => u.id === user.id ? { ...u, is_blocked: true } : u))
  }

  async function unblockUser(user) {
    await supabase.from('user_blocks').delete().eq('user_id', user.id)
    setModal(null)
    setRows(r => r.map(u => u.id === user.id ? { ...u, is_blocked: false } : u))
  }

  const columns = [
    { key: 'email', label: 'Email', sortable: true },
    { key: 'display_name', label: 'Nome', sortable: true },
    {
      key: 'created_at', label: 'Cadastro', sortable: true, mono: true,
      render: r => r.created_at ? new Date(r.created_at).toLocaleDateString('pt-BR') : '—'
    },
    {
      key: 'last_sign_in_at', label: 'Último acesso', sortable: true, mono: true,
      render: r => r.last_sign_in_at ? new Date(r.last_sign_in_at).toLocaleDateString('pt-BR') : '—'
    },
    { key: 'wishlist_count', label: 'Wishlist', sortable: true, mono: true },
    {
      key: 'is_blocked', label: 'Status', sortable: false,
      render: r => <AdminBadge status={r.is_blocked ? 'blocked' : 'active'} label={r.is_blocked ? 'Bloqueado' : 'Ativo'} />
    },
    {
      key: 'actions', label: 'Ações', sortable: false,
      render: r => (
        <div className="col-actions">
          {r.is_blocked ? (
            <button className="admin-btn admin-btn-primary" onClick={() => setModal({ type: 'unblock', user: r })}>
              Desbloquear
            </button>
          ) : (
            <button className="admin-btn admin-btn-danger" onClick={() => setModal({ type: 'block', user: r })}>
              Bloquear
            </button>
          )}
        </div>
      )
    },
  ]

  return (
    <div>
      <div className="admin-page-title">Usuários</div>
      <div className="admin-page-subtitle">{total} usuários cadastrados</div>

      <AdminSearchBar
        value={search}
        onChange={handleSearch}
        placeholder="Buscar por email..."
      />

      <AdminDataTable
        columns={columns}
        rows={rows}
        sortCol={sortCol}
        sortDir={sortDir}
        onSort={handleSort}
        page={page}
        pageSize={pageSize}
        total={total}
        onPageChange={setPage}
        loading={loading}
        emptyText="Nenhum usuário encontrado."
      />

      {modal?.type === 'block' && (
        <AdminConfirmModal
          title="Bloquear usuário"
          body={`Tem certeza que deseja bloquear ${modal.user.email}? O usuário não conseguirá acessar o app.`}
          confirmLabel="Bloquear"
          confirmClass="admin-btn-danger"
          onConfirm={() => blockUser(modal.user)}
          onCancel={() => setModal(null)}
        />
      )}
      {modal?.type === 'unblock' && (
        <AdminConfirmModal
          title="Desbloquear usuário"
          body={`Desbloquear ${modal.user.email}?`}
          confirmLabel="Desbloquear"
          confirmClass="admin-btn-primary"
          onConfirm={() => unblockUser(modal.user)}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  )
}
