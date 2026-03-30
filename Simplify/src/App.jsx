import { useState, useCallback, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Loja from './pages/Loja'
import Setups from './pages/Setups'
import Auth from './pages/Auth'
import SmartCompare from './components/SmartCompare'
import Sidebar from './components/Sidebar'

// ─── Default setups structure ───
const DEFAULT_SETUPS = { work: [], gaming: [], travel: [], studio: [] }

function loadSetups() {
  try {
    const saved = localStorage.getItem('ia-setups')
    return saved ? JSON.parse(saved) : DEFAULT_SETUPS
  } catch {
    return DEFAULT_SETUPS
  }
}

export default function App() {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [page, setPage] = useState('home')
  const [wishlist, setWishlist] = useState({})
  const [setups, setSetups] = useState(loadSetups)

  // ─── Persist setups to localStorage ───
  useEffect(() => {
    localStorage.setItem('ia-setups', JSON.stringify(setups))
  }, [setups])

  // ─── Auth ───
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

  // ─── Fetch wishlist on login ───
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

  // ─── Wishlist actions ───
  const toggleWishlist = useCallback(async (productId) => {
    if (!user) return
    setWishlist(prev => {
      const next = { ...prev }
      if (next[productId]) {
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

  // ─── Setup actions ───
  const addProductToSetup = useCallback((setupId, productId) => {
    setSetups(prev => {
      const current = prev[setupId] || []
      if (current.includes(productId)) return prev
      return { ...prev, [setupId]: [...current, productId] }
    })
  }, [])

  const removeProductFromSetup = useCallback((setupId, productId) => {
    setSetups(prev => ({
      ...prev,
      [setupId]: (prev[setupId] || []).filter(id => id !== productId),
    }))
  }, [])

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

  const titles = { home: 'Meu Setup', loja: 'Loja', setups: 'Setups', comparador: 'Comparador' }

  return (
    <div className="app">
      {/* Desktop sidebar — oculto no mobile via CSS */}
      <Sidebar active={page} onChange={setPage} user={user} onLogout={handleLogout} />

      {/* Wrapper que contém header + conteúdo + nav */}
      <div className="app-main">
        <Header title={titles[page] || 'Simplify'} user={user} onLogout={handleLogout} />

        {page === 'home' && (
          <Home
            wishlist={wishlist}
            toggleOwned={toggleOwned}
            toggleWishlist={toggleWishlist}
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

        {page === 'setups' && (
          <Setups
            setups={setups}
            wishlist={wishlist}
            onAddProduct={addProductToSetup}
            onRemoveProduct={removeProductFromSetup}
          />
        )}

        {page === 'comparador' && (
          <div className="page" style={{ padding: 0, background: '#f8f8f6' }}>
            <SmartCompare />
          </div>
        )}

        <BottomNav
          active={page}
          onChange={setPage}
          wishlistCount={Object.keys(wishlist).length}
        />
      </div>
    </div>
  )
}
