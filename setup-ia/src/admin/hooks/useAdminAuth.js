import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export function useAdminAuth() {
  const [state, setState] = useState({ loading: true, user: null, isAdmin: false })

  useEffect(() => {
    let mounted = true

    async function check() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) {
        if (mounted) setState({ loading: false, user: null, isAdmin: false })
        return
      }
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle()
      if (mounted) setState({ loading: false, user: session.user, isAdmin: !!data })
    }

    check()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => check())
    return () => { mounted = false; subscription.unsubscribe() }
  }, [])

  return state
}
