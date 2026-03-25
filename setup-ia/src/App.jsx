import { useState, useCallback, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Loja from './pages/Loja'
import Auth from './pages/Auth'

export default function App() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [page, setPage] = useState('home')
  const [wishlist, setWishlist] = useState({})

  // ─── Auth: verificar sessão e escutar mudanças ───
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setAuthLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  // ─── Buscar wishlist quando o usuário logar ───
  useEffect(() => {
    if (user) {
      fetchWishlist(user.id)
    } else {
      setWishlist({})
    }
  }, [user])

  async function fetchWishlist(userId) {
    const { data, error } = await supabase
      .from('wishlist')
      .select('*')
      .eq('user_id', userId)

    if (error) { console.error('Erro ao buscar wishlist:', error); return }

    if (data) {
      const loaded = {}
      data.forEach(item => { loaded[item.product_id] = { owned: item.owned } })
      setWishlist(loaded)
    }
  }

  // ─── Ações da Wishlist ───
  const toggleWishlist = useCallback(async (productId) => {
    if (!user) return
    setWishlist(prev => {
      const next = { ...prev }
      const isRemoving = !!next[productId]
      if (isRemoving) {
        supabase.from('wishlist').delete().eq('product_id', productId).eq('user_id', user.id).then()
        delete next[productId]
      } else {
        supabase.from('wishlist').insert([{ product_id: productId, owned: false, user_id: user.id }]).then()
        next[productId] = { owned: false }
      }
      return next
    })
  }, [user])

  const toggleOwned = useCallback(async (productId) => {
    if (!user) return
    setWishlist(prev => {
      const newStatus = !prev[productId]?.owned
      supabase.from('wishlist').update({ owned: newStatus }).eq('product_id', productId).eq('user_id', user.id).then()
      return { ...prev, [productId]: { owned: newStatus } }
    })
  }, [user])

  const removeFromWishlist = useCallback(async (productId) => {
    if (!user) return
    setWishlist(prev => {
      const next = { ...prev }
      supabase.from('wishlist').delete().eq('product_id', productId).eq('user_id', user.id).then()
      delete next[productId]
      return next
    })
  }, [user])

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  // ─── Render ───
  if (authLoading) {
    return <div className="auth-loading">⚡ Carregando...</div>
  }

  if (!user) {
    return <Auth />
  }

  const titles = { home: 'Meu Setup', loja: 'Loja' }

  return (
    <div className="app">
      <Header title={titles[page] || 'Setup IA'} user={user} onLogout={handleLogout} />

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
