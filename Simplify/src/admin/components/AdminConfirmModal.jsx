export default function AdminConfirmModal({ title, body, confirmLabel = 'Confirmar', confirmClass = 'admin-btn-danger', onConfirm, onCancel }) {
  return (
    <div className="admin-modal-overlay" onClick={onCancel}>
      <div className="admin-modal" onClick={e => e.stopPropagation()}>
        <div className="admin-modal-title">{title}</div>
        <div className="admin-modal-body">{body}</div>
        <div className="admin-modal-actions">
          <button className="admin-btn admin-btn-ghost" onClick={onCancel}>Cancelar</button>
          <button className={`admin-btn ${confirmClass}`} onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  )
}
