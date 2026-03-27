export default function AdminDataTable({
  columns,
  rows,
  sortCol,
  sortDir,
  onSort,
  page,
  pageSize,
  total,
  onPageChange,
  loading,
  emptyText = 'Nenhum resultado.'
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={sortCol === col.key ? `sort-${sortDir}` : ''}
                onClick={() => col.sortable !== false && onSort && onSort(col.key)}
                style={{ cursor: col.sortable === false ? 'default' : 'pointer', width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={columns.length} className="admin-empty">Carregando...</td></tr>
          ) : rows.length === 0 ? (
            <tr><td colSpan={columns.length} className="admin-empty">{emptyText}</td></tr>
          ) : (
            rows.map((row, i) => (
              <tr key={row.id ?? i}>
                {columns.map(col => (
                  <td key={col.key} className={col.mono ? 'col-mono' : ''}>
                    {col.render ? col.render(row) : row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="admin-pagination">
        <span>{total} registros · página {page} de {totalPages}</span>
        <div className="admin-pagination-btns">
          <button
            className="admin-pagination-btn"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >‹ Anterior</button>
          <button
            className="admin-pagination-btn"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >Próxima ›</button>
        </div>
      </div>
    </div>
  )
}
