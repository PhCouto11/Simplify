import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export function useAdminAuth() {
  const [state, setState] = useState({ loading: true, user: null, isAdmin: false })

  useEffect(() => {
    let mounted = true

    async function check() {
      try {
        console.log('[admin] checking session...')
        const { data: { session } } = await supabase.auth.getSession()
        console.log('[admin] session:', session?.user?.email ?? 'null')
        if (!session?.user) {
          if (mounted) setState({ loading: false, user: null, isAdmin: false })
          return
        }
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .eq('role', 'admin')
          .maybeSingle()
        if (error) console.error('useAdminAuth error:', error)
        if (mounted) setState({ loading: false, user: session.user, isAdmin: !!data })
      } catch (err) {
        console.error('useAdminAuth catch:', err)
        if (mounted) setState({ loading: false, user: null, isAdmin: false })
      }
    }

    check()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => check())
    return () => { mounted = false; subscription.unsubscribe() }
  }, [])

  return state
}
