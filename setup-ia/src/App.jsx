import { useState, useCallback, useEffect } from 'react'
import { supabase } from './lib/supabase' // Importando a conexão que você acabou de criar
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Loja from './pages/Loja'

export default function App() {
  const [page, setPage] = useState('home')
  const [wishlist, setWishlist] = useState({}) // Agora começa vazio até puxar do banco

  // ─── Buscar dados do Supabase ao carregar o app ───
  useEffect(() => {
    fetchWishlist()
  }, [])

  async function fetchWishlist() {
    // Busca todos os itens da tabela 'wishlist'
    const { data, error } = await supabase
      .from('wishlist')
      .select('*')

    if (error) {
      console.error('Erro ao buscar dados do Supabase:', error)
      return
    }

    // Transforma o array que vem do banco de volta para o formato de objeto que seus componentes usam
    if (data) {
      const loadedWishlist = {}
      data.forEach(item => {
        loadedWishlist[item.product_id] = { owned: item.owned }
      })
      setWishlist(loadedWishlist)
    }
  }

  // ─── Ações da Wishlist integradas ao banco ───
  const toggleWishlist = useCallback(async (productId) => {
    setWishlist(prev => {
      const next = { ...prev }
      const isRemoving = !!next[productId]

      if (isRemoving) {
        // Remove do banco e do estado local
        supabase.from('wishlist').delete().eq('product_id', productId).then()
        delete next[productId]
      } else {
        // Adiciona no banco e no estado local
        supabase.from('wishlist').insert([{ product_id: productId, owned: false }]).then()
        next[productId] = { owned: false }
      }
      return next
    })
  }, [])

  const toggleOwned = useCallback(async (productId) => {
    setWishlist(prev => {
      const currentStatus = prev[productId]?.owned
      const newStatus = !currentStatus

      // Atualiza o status "owned" no banco
      supabase.from('wishlist').update({ owned: newStatus }).eq('product_id', productId).then()

      return {
        ...prev,
        [productId]: { owned: newStatus }
      }
    })
  }, [])

  const removeFromWishlist = useCallback(async (productId) => {
    setWishlist(prev => {
      const next = { ...prev }
      
      // Remove do banco
      supabase.from('wishlist').delete().eq('product_id', productId).then()
      
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
