export default function AdminBadge({ status, label }) {
  return (
    <span className={`admin-badge ${status}`}>
      {label || status}
    </span>
  )
}
