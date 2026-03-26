import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAdminData } from '../hooks/useAdminData'
import { PRODUCTS } from '../../data/products'
import AdminDataTable from '../components/AdminDataTable'
import AdminSearchBar from '../components/AdminSearchBar'
import AdminBadge from '../components/AdminBadge'
import AdminConfirmModal from '../components/AdminConfirmModal'

export default function AdminProducts() {
  const [flags, setFlags] = useState({})
  const [modal, setModal] = useState(null)
  const [loading, setLoading] = useState(true)

  const { page, setPage, pageSize, sortCol, sortDir, handleSort, search, handleSearch, filters, handleFilter } = useAdminData(25)

  useEffect(() => {
    async function loadFlags() {
      const { data } = await supabase.from('product_flags').select('*')
      const map = {}
      ;(data || []).forEach(f => { map[f.product_id] = f })
      setFlags(map)
      setLoading(false)
    }
    loadFlags()
  }, [])

  // Filter + search on the static products array
  let filtered = PRODUCTS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false
    if (filters.cat && filters.cat !== 'all' && p.cat !== filters.cat) return false
    if (filters.flagged === 'yes' && !flags[p.id]?.flagged) return false
    if (filters.flagged === 'no' && flags[p.id]?.flagged) return false
    return true
  })

  if (sortCol === 'price') {
    filtered = [...filtered].sort((a, b) => sortDir === 'asc' ? a.price - b.price : b.price - a.price)
  } else if (sortCol === 'name') {
    filtered = [...filtered].sort((a, b) => sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
  }

  const total = filtered.length
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize)

  async function toggleFlag(product) {
    const current = flags[product.id]
    const isFlagged = current?.flagged
    if (isFlagged) {
      await supabase.from('product_flags').upsert({ product_id: product.id, flagged: false, flag_reason: null, updated_at: new Date().toISOString() })
      setFlags(f => ({ ...f, [product.id]: { ...current, flagged: false } }))
    } else {
      await supabase.from('product_flags').upsert({ product_id: product.id, flagged: true, flag_reason: modal?.reason || 'Marcado pelo admin', updated_at: new Date().toISOString() })
      setFlags(f => ({ ...f, [product.id]: { product_id: product.id, flagged: true, flag_reason: modal?.reason || 'Marcado pelo admin' } }))
    }
    setModal(null)
  }

  const categories = ['all', ...new Set(PRODUCTS.map(p => p.cat))]

  const columns = [
    { key: 'emoji', label: '', sortable: false, width: 36, render: r => <span style={{ fontSize: 20 }}>{r.emoji}</span> },
    { key: 'name', label: 'Produto', sortable: true, render: r => <span><strong>{r.brand}</strong> {r.name}</span> },
    { key: 'cat', label: 'Categoria', sortable: false },
    {
      key: 'price', label: 'Preço', sortable: true, mono: true,
      render: r => `R$ ${r.price.toLocaleString('pt-BR')}`
    },
    {
      key: 'flagged', label: 'Status', sortable: false,
      render: r => flags[r.id]?.flagged
        ? <AdminBadge status="flagged" label="Sinalizado" />
        : <AdminBadge status="active" label="Normal" />
    },
    {
      key: 'actions', label: 'Ações', sortable: false,
      render: r => (
        <button
          className={`admin-btn ${flags[r.id]?.flagged ? 'admin-btn-ghost' : 'admin-btn-warn'}`}
          onClick={() => setModal({ product: r, type: flags[r.id]?.flagged ? 'unflag' : 'flag' })}
        >
          {flags[r.id]?.flagged ? 'Remover flag' : 'Sinalizar'}
        </button>
      )
    },
  ]

  return (
    <div>
      <div className="admin-page-title">Produtos</div>
      <div className="admin-page-subtitle">{total} produtos no catálogo</div>

      <AdminSearchBar
        value={search}
        onChange={handleSearch}
        placeholder="Buscar produto ou marca..."
        filters={[
          {
            key: 'cat', value: filters.cat || 'all',
            options: categories.map(c => ({ value: c, label: c === 'all' ? 'Todas categorias' : c }))
          },
          {
            key: 'flagged', value: filters.flagged || 'all',
            options: [
              { value: 'all', label: 'Todos' },
              { value: 'yes', label: 'Sinalizados' },
              { value: 'no', label: 'Normais' },
            ]
          }
        ]}
        onFilterChange={handleFilter}
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
        emptyText="Nenhum produto encontrado."
      />

      {modal?.type === 'flag' && (
        <AdminConfirmModal
          title="Sinalizar produto"
          body={`Sinalizar "${modal.product.name}" como inválido ou com problema?`}
          confirmLabel="Sinalizar"
          confirmClass="admin-btn-warn"
          onConfirm={() => toggleFlag(modal.product)}
          onCancel={() => setModal(null)}
        />
      )}
      {modal?.type === 'unflag' && (
        <AdminConfirmModal
          title="Remover sinalização"
          body={`Remover a sinalização de "${modal.product.name}"?`}
          confirmLabel="Remover"
          confirmClass="admin-btn-primary"
          onConfirm={() => toggleFlag(modal.product)}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  )
}
