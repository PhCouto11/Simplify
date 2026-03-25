import { useState, useCallback } from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Loja from './pages/Loja'

// ============================================
// Estado inicial da wishlist (demo)
// Formato: { productId: { owned: true/false } }
// ============================================
const INITIAL_WISHLIST = {
  'm4': { owned: true },
  'p1': { owned: true },
  'p2': { owned: false },
  'a1': { owned: false },
  'v1': { owned: false },
}

export default function App() {
  const [page, setPage] = useState('home')
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST)

  // ─── Ações da Wishlist ───
  const toggleWishlist = useCallback((productId) => {
    setWishlist(prev => {
      const next = { ...prev }
      if (next[productId]) {
        delete next[productId]
      } else {
        next[productId] = { owned: false }
      }
      return next
    })
  }, [])

  const toggleOwned = useCallback((productId) => {
    setWishlist(prev => ({
      ...prev,
      [productId]: { owned: !prev[productId]?.owned }
    }))
  }, [])

  const removeFromWishlist = useCallback((productId) => {
    setWishlist(prev => {
      const next = { ...prev }
      delete next[productId]
      return next
    })
  }, [])

  // ─── Título dinâmico ───
  const titles = { home: 'Meu Setup', loja: 'Loja' }

  return (
    <div className="app">
      <Header title={titles[page] || 'Setup IA'} />

      {page === 'home' && (
        <Home
          wishlist={wishlist}
          toggleOwned={toggleOwned}
          removeFromWishlist={removeFromWishlist}
          goToLoja={() => setPage('loja')}
        />
      )}

      {page === 'loja' && (
        <Loja
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      )}

      <BottomNav
        active={page}
        onChange={setPage}
        wishlistCount={Object.keys(wishlist).length}
      />
    </div>
  )
}
