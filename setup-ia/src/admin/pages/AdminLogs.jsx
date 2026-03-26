import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAdminData } from '../hooks/useAdminData'
import AdminDataTable from '../components/AdminDataTable'

export default function AdminLogs() {
  const [rows, setRows] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const { page, setPage, pageSize, range, sortCol, sortDir, handleSort } = useAdminData(25)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      const { data, count } = await supabase
        .from('admin_logs')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(range.from, range.to)

      if (!cancelled) {
        setRows(data || [])
        setTotal(count || 0)
        setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [page])

  const ACTION_LABELS = {
    block_user: '🔴 Bloquear usuário',
    unblock_user: '🟢 Desbloquear usuário',
    flag_product: '🟡 Sinalizar produto',
    unflag_product: '⚪ Remover flag',
    send_alert: '📩 Enviar alerta',
    delete_user: '❌ Deletar usuário',
  }

  const columns = [
    {
      key: 'created_at', label: 'Data/Hora', mono: true, sortable: false,
      render: r => r.created_at ? new Date(r.created_at).toLocaleString('pt-BR') : '—'
    },
    { key: 'admin_id', label: 'Admin ID', mono: true, sortable: false, render: r => r.admin_id?.slice(0, 8) + '...' },
    {
      key: 'action', label: 'Ação', sortable: false,
      render: r => ACTION_LABELS[r.action] || r.action
    },
    { key: 'target_type', label: 'Alvo', mono: true, sortable: false },
    { key: 'target_id', label: 'ID do Alvo', mono: true, sortable: false, render: r => r.target_id ? r.target_id.slice(0, 12) + '...' : '—' },
    {
      key: 'metadata', label: 'Detalhes', sortable: false,
      render: r => r.metadata ? (
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)' }}>
          {JSON.stringify(r.metadata).slice(0, 60)}
        </span>
      ) : '—'
    },
  ]

  return (
    <div>
      <div className="admin-page-title">Logs</div>
      <div className="admin-page-subtitle">{total} ações registradas — somente leitura</div>

      {total === 0 && !loading && (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 20px', marginBottom: 16 }}>
          <p style={{ fontSize: 13, color: 'var(--text-2)', margin: 0 }}>
            <strong>Nota:</strong> Os logs são escritos via Supabase Edge Function usando a service role key.
            Ações admin (bloquear usuário, sinalizar produto, etc.) serão registradas aqui automaticamente
            quando a Edge Function <code>log-admin-action</code> estiver configurada.
          </p>
        </div>
      )}

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
        emptyText="Nenhum log registrado ainda."
      />
    </div>
  )
}
