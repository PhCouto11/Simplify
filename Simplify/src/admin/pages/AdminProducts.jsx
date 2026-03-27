import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAdminData } from '../hooks/useAdminData'
import { PRODUCTS } from '../../data/products'
import AdminDataTable from '../components/AdminDataTable'
import AdminSearchBar from '../components/AdminSearchBar'
import AdminBadge from '../components/AdminBadge'
import AdminConfirmModal from '../components/AdminConfirmModal'

const EMPTY_FORM = { emoji: '', brand: '', name: '', cat: '', price: '', desc: '', img: '', badge: '' }

export default function AdminProducts() {
  const [flags, setFlags] = useState({})
  const [dbProducts, setDbProducts] = useState([])
  const [modal, setModal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  const { page, setPage, pageSize, sortCol, sortDir, handleSort, search, handleSearch, filters, handleFilter } = useAdminData(25)

  useEffect(() => {
    async function loadData() {
      const [{ data: flagsData }, { data: productsData }] = await Promise.all([
        supabase.from('product_flags').select('*'),
        supabase.from('products').select('*').order('created_at', { ascending: false })
      ])
      const map = {}
      ;(flagsData || []).forEach(f => { map[f.product_id] = f })
      setFlags(map)
      setDbProducts(productsData || [])
      setLoading(false)
    }
    loadData()
  }, [])

  const allProducts = [...dbProducts, ...PRODUCTS]

  let filtered = allProducts.filter(p => {
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

  const dbIds = new Set(dbProducts.map(p => p.id))

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

  async function addProduct() {
    if (!form.brand || !form.name || !form.price || !form.cat) return
    setSaving(true)
    const { data, error } = await supabase.from('products').insert({
      emoji: form.emoji || '📦',
      brand: form.brand,
      name: form.name,
      cat: form.cat,
      price: parseFloat(form.price),
      desc: form.desc,
      img: form.img || null,
      badge: form.badge || null,
    }).select().single()
    if (!error && data) setDbProducts(prev => [data, ...prev])
    setSaving(false)
    setModal(null)
    setForm(EMPTY_FORM)
  }

  async function deleteProduct(product) {
    await supabase.from('products').delete().eq('id', product.id)
    setDbProducts(prev => prev.filter(p => p.id !== product.id))
    setModal(null)
  }

  const staticCats = [...new Set(PRODUCTS.map(p => p.cat))]
  const categories = ['all', ...new Set(allProducts.map(p => p.cat))]

  const columns = [
    { key: 'emoji', label: '', sortable: false, width: 36, render: r => <span style={{ fontSize: 20 }}>{r.emoji}</span> },
    {
      key: 'name', label: 'Produto', sortable: true,
      render: r => (
        <span>
          <strong>{r.brand}</strong> {r.name}
          {dbIds.has(r.id) && (
            <span style={{ marginLeft: 6, fontSize: 10, background: 'var(--cyan)', color: '#000', borderRadius: 4, padding: '1px 5px', verticalAlign: 'middle' }}>
              custom
            </span>
          )}
        </span>
      )
    },
    { key: 'cat', label: 'Categoria', sortable: false },
    {
      key: 'price', label: 'Preço', sortable: true, mono: true,
      render: r => `R$ ${Number(r.price).toLocaleString('pt-BR')}`
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
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            className={`admin-btn ${flags[r.id]?.flagged ? 'admin-btn-ghost' : 'admin-btn-warn'}`}
            onClick={() => setModal({ product: r, type: flags[r.id]?.flagged ? 'unflag' : 'flag' })}
          >
            {flags[r.id]?.flagged ? 'Remover flag' : 'Sinalizar'}
          </button>
          {dbIds.has(r.id) && (
            <button className="admin-btn admin-btn-danger" onClick={() => setModal({ product: r, type: 'delete' })}>
              Excluir
            </button>
          )}
        </div>
      )
    },
  ]

  return (
    <div>
      <div className="admin-page-title">Produtos</div>
      <div className="admin-page-subtitle">{total} produtos no catálogo</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
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
        <button
          className="admin-btn admin-btn-primary"
          style={{ marginLeft: 12, whiteSpace: 'nowrap' }}
          onClick={() => { setForm(EMPTY_FORM); setModal({ type: 'add' }) }}
        >
          + Adicionar Produto
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
      {modal?.type === 'delete' && (
        <AdminConfirmModal
          title="Excluir produto"
          body={`Excluir permanentemente "${modal.product.brand} ${modal.product.name}"? Esta ação não pode ser desfeita.`}
          confirmLabel="Excluir"
          confirmClass="admin-btn-danger"
          onConfirm={() => deleteProduct(modal.product)}
          onCancel={() => setModal(null)}
        />
      )}

      {modal?.type === 'add' && (
        <div className="admin-modal-overlay" onClick={() => setModal(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 520 }}>
            <div className="admin-modal-title">Adicionar Produto</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
              <input
                className="admin-search-input"
                placeholder="Emoji (ex: 🖥️)"
                value={form.emoji}
                onChange={e => setForm(f => ({ ...f, emoji: e.target.value }))}
              />
              <select
                className="admin-filter-select"
                value={form.badge}
                onChange={e => setForm(f => ({ ...f, badge: e.target.value }))}
              >
                <option value="">Sem badge</option>
                <option value="novo">novo</option>
                <option value="popular">popular</option>
                <option value="destaque">destaque</option>
              </select>
              <input
                className="admin-search-input"
                placeholder="Marca *"
                value={form.brand}
                onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
              />
              <input
                className="admin-search-input"
                placeholder="Nome do produto *"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                className="admin-search-input"
                placeholder="Categoria *"
                value={form.cat}
                onChange={e => setForm(f => ({ ...f, cat: e.target.value }))}
                list="cat-suggestions"
              />
              <datalist id="cat-suggestions">
                {staticCats.map(c => <option key={c} value={c} />)}
              </datalist>
              <input
                className="admin-search-input"
                placeholder="Preço (R$) *"
                type="number"
                min="0"
                value={form.price}
                onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
              />
              <input
                className="admin-search-input"
                style={{ gridColumn: '1 / -1' }}
                placeholder="Descrição"
                value={form.desc}
                onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
              />
              <input
                className="admin-search-input"
                style={{ gridColumn: '1 / -1' }}
                placeholder="URL da imagem (opcional)"
                value={form.img}
                onChange={e => setForm(f => ({ ...f, img: e.target.value }))}
              />
            </div>
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-ghost" onClick={() => { setModal(null); setForm(EMPTY_FORM) }}>
                Cancelar
              </button>
              <button
                className="admin-btn admin-btn-primary"
                onClick={addProduct}
                disabled={saving || !form.brand || !form.name || !form.price || !form.cat}
              >
                {saving ? 'Salvando...' : 'Adicionar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
