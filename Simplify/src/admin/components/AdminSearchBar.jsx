export default function AdminSearchBar({ value, onChange, placeholder, filters = [], onFilterChange }) {
  return (
    <div className="admin-search-bar">
      <input
        className="admin-search-input"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || 'Buscar...'}
      />
      {filters.map(f => (
        <select
          key={f.key}
          className="admin-filter-select"
          value={f.value}
          onChange={e => onFilterChange(f.key, e.target.value)}
        >
          {f.options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ))}
    </div>
  )
}
