import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const isAdmin = window.location.pathname.startsWith('/admin')

if (isAdmin) {
  Promise.all([
    import('./admin/admin.css'),
    import('./admin/AdminApp')
  ]).then(([, { default: AdminApp }]) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode><AdminApp /></React.StrictMode>
    )
  })
} else {
  import('./App').then(({ default: App }) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode><App /></React.StrictMode>
    )
  })
}
