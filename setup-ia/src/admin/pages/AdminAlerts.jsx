import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAdminData } from '../hooks/useAdminData'
import AdminDataTable from '../components/AdminDataTable'
import AdminSearchBar from '../components/AdminSearchBar'
import AdminBadge from '../components/AdminBadge'
import AdminConfirmModal from '../components/AdminConfirmModal'

export default function AdminAlerts() {
  const [rows, setRows] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [sending, setSending] = useState(false)
  const [newAlert, setNewAlert] = useState({ title: '', body: '', type: 'custom' })

  const { page, setPage, pageSize, range, sortCol, sortDir, handleSort, search, handleSearch, filters, handleFilter } = useAdminData(20)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      let q = supabase
        .from('alerts')
        .select('*', { count: 'exact' })
        .range(range.from, range.to)
        .order('sent_at', { ascending: false })

      if (filters.status && filters.status !== 'all') q = q.eq('status', filters.status)
      if (filters.type && filters.type !== 'all') q = q.eq('type', filters.type)

      const { data, count } = await q
      if (!cancelled) {
        setRows(data || [])
        setTotal(count || 0)
        setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [page, sortCol, sortDir, filters.status, filters.type])

  async function resendAlert(alert) {
    setSending(true)
    await supabase.from('alerts').insert({
      user_id: alert.user_id,
      product_id: alert.product_id,
      type: alert.type,
      title: alert.title,
      body: alert.body,
      status: 'sent',
    })
    setSending(false)
    setModal(null)
    setPage(1)
  }

  async function sendNewAlert() {
    if (!newAlert.title) return
    setSending(true)
    await supabase.from('alerts').insert({ ...newAlert, status: 'sent' })
    setSending(false)
    setModal(null)
    setNewAlert({ title: '', body: '', type: 'custom' })
    setPage(1)
  }

  const columns = [
    {
      key: 'title', label: 'Título', sortable: false,
      render: r => <span><strong>{r.title}</strong>{r.body && <><br /><span style={{ color: 'var(--text-muted)', fontSize: 11 }}>{r.body}</span></>}</span>
    },
    { key: 'type', label: 'Tipo', mono: true, sortable: false },
    {
      key: 'sent_at', label: 'Enviado em', sortable: false, mono: true,
      render: r => r.sent_at ? new Date(r.sent_at).toLocaleString('pt-BR') : '—'
    },
    {
      key: 'status', label: 'Status', sortable: false,
      render: r => <AdminBadge status={r.status} label={r.status} />
    },
    {
      key: 'actions', label: 'Ações', sortable: false,
      render: r => (
        <button className="admin-btn admin-btn-primary" onClick={() => setModal({ type: 'resend', alert: r })}>
          Reenviar
        </button>
      )
    },
  ]

  return (
    <div>
      <div className="admin-page-title">Alertas</div>
      <div className="admin-page-subtitle">{total} alertas no sistema</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <AdminSearchBar
          value={search}
          onChange={handleSearch}
          placeholder="Buscar..."
          filters={[
            {
              key: 'status', value: filters.status || 'all',
              options: [
                { value: 'all', label: 'Todos status' },
                { value: 'sent', label: 'Enviados' },
                { value: 'failed', label: 'Falhou' },
                { value: 'pending', label: 'Pendente' },
              ]
            },
            {
              key: 'type', value: filters.type || 'all',
              options: [
                { value: 'all', label: 'Todos tipos' },
                { value: 'price_drop', label: 'Queda de preço' },
                { value: 'back_in_stock', label: 'Em estoque' },
                { value: 'custom', label: 'Custom' },
              ]
            }
          ]}
          onFilterChange={handleFilter}
        />
        <button className="admin-btn admin-btn-primary" style={{ marginLeft: 12, whiteSpace: 'nowrap' }} onClick={() => setModal({ type: 'new' })}>
          + Novo Alerta
        </button>
      </div>

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
        emptyText="Nenhum alerta encontrado."
      />

      {modal?.type === 'resend' && (
        <AdminConfirmModal
          title="Reenviar alerta"
          body={`Reenviar o alerta "${modal.alert.title}"?`}
          confirmLabel={sending ? 'Enviando...' : 'Reenviar'}
          confirmClass="admin-btn-primary"
          onConfirm={() => resendAlert(modal.alert)}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.type === 'new' && (
        <div className="admin-modal-overlay" onClick={() => setModal(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 480 }}>
            <div className="admin-modal-title">Novo Alerta</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              <input
                className="admin-search-input"
                placeholder="Título do alerta *"
                value={newAlert.title}
                onChange={e => setNewAlert(a => ({ ...a, title: e.target.value }))}
              />
              <input
                className="admin-search-input"
                placeholder="Mensagem (opcional)"
                value={newAlert.body}
                onChange={e => setNewAlert(a => ({ ...a, body: e.target.value }))}
              />
              <select
                className="admin-filter-select"
                value={newAlert.type}
                onChange={e => setNewAlert(a => ({ ...a, type: e.target.value }))}
              >
                <option value="custom">Custom</option>
                <option value="price_drop">Queda de preço</option>
                <option value="back_in_stock">Em estoque</option>
                <option value="new_product">Novo produto</option>
              </select>
            </div>
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-ghost" onClick={() => setModal(null)}>Cancelar</button>
              <button className="admin-btn admin-btn-primary" onClick={sendNewAlert} disabled={sending || !newAlert.title}>
                {sending ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
