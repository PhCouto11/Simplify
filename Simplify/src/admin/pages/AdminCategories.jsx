import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import AdminDataTable from '../components/AdminDataTable'
import AdminConfirmModal from '../components/AdminConfirmModal'

const EMPTY_FORM = { name: '', emoji: '' }

export default function AdminCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    setLoading(true)
    const { data } = await supabase.from('categories').select('*').order('name')
    setCategories(data || [])
    setLoading(false)
  }

  async function addCategory() {
    if (!form.name) return
    setSaving(true)
    const { data, error } = await supabase
      .from('categories')
      .insert({ name: form.name.trim(), emoji: form.emoji || null })
      .select()
      .single()
    if (!error && data) {
      setCategories(prev => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)))
    }
    setSaving(false)
    setModal(null)
    setForm(EMPTY_FORM)
  }

  async function saveEdit() {
    if (!modal?.cat || !form.name) return
    setSaving(true)
    const { error } = await supabase
      .from('categories')
      .update({ name: form.name.trim(), emoji: form.emoji || null })
      .eq('id', modal.cat.id)
    if (!error) {
      setCategories(prev =>
        prev.map(c => c.id === modal.cat.id ? { ...c, name: form.name.trim(), emoji: form.emoji || null } : c)
          .sort((a, b) => a.name.localeCompare(b.name))
      )
    }
    setSaving(false)
    setModal(null)
    setForm(EMPTY_FORM)
  }

  async function deleteCategory(cat) {
    await supabase.from('categories').delete().eq('id', cat.id)
    setCategories(prev => prev.filter(c => c.id !== cat.id))
    setModal(null)
  }

  const columns = [
    {
      key: 'emoji', label: '', sortable: false, width: 36,
      render: r => <span style={{ fontSize: 20 }}>{r.emoji || '🏷️'}</span>
    },
    { key: 'name', label: 'Nome', sortable: false },
    {
      key: 'created_at', label: 'Criada em', sortable: false, mono: true,
      render: r => r.created_at ? new Date(r.created_at).toLocaleDateString('pt-BR') : '—'
    },
    {
      key: 'actions', label: 'Ações', sortable: false,
      render: r => (
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            className="admin-btn admin-btn-ghost"
            onClick={() => { setForm({ name: r.name, emoji: r.emoji || '' }); setModal({ type: 'edit', cat: r }) }}
          >
            Editar
          </button>
          <button
            className="admin-btn admin-btn-danger"
            onClick={() => setModal({ type: 'delete', cat: r })}
          >
            Excluir
          </button>
        </div>
      )
    },
  ]

  return (
    <div>
      <div className="admin-page-title">Categorias</div>
      <div className="admin-page-subtitle">{categories.length} categorias cadastradas</div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => { setForm(EMPTY_FORM); setModal({ type: 'add' }) }}
        >
          + Nova Categoria
        </button>
      </div>

      <AdminDataTable
        columns={columns}
        rows={categories}
        sortCol={null}
        sortDir="asc"
        onSort={() => {}}
        page={1}
        pageSize={Math.max(categories.length, 1)}
        total={categories.length}
        onPageChange={() => {}}
        loading={loading}
        emptyText="Nenhuma categoria cadastrada ainda."
      />

      {(modal?.type === 'add' || modal?.type === 'edit') && (
        <div className="admin-modal-overlay" onClick={() => setModal(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 400 }}>
            <div className="admin-modal-title">
              {modal.type === 'add' ? 'Nova Categoria' : 'Editar Categoria'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              <input
                className="admin-search-input"
                placeholder="Emoji (ex: 🖥️)"
                value={form.emoji}
                onChange={e => setForm(f => ({ ...f, emoji: e.target.value }))}
              />
              <input
                className="admin-search-input"
                placeholder="Nome da categoria *"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                autoFocus
              />
            </div>
            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-ghost" onClick={() => { setModal(null); setForm(EMPTY_FORM) }}>
                Cancelar
              </button>
              <button
                className="admin-btn admin-btn-primary"
                onClick={modal.type === 'add' ? addCategory : saveEdit}
                disabled={saving || !form.name}
              >
                {saving ? 'Salvando...' : modal.type === 'add' ? 'Criar' : 'Salvar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {modal?.type === 'delete' && (
        <AdminConfirmModal
          title="Excluir categoria"
          body={`Excluir a categoria "${modal.cat.name}"? Produtos com essa categoria não serão afetados.`}
          confirmLabel="Excluir"
          confirmClass="admin-btn-danger"
          onConfirm={() => deleteCategory(modal.cat)}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  )
}
