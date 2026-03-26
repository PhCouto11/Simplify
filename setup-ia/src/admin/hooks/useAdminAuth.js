import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export function useAdminAuth() {
  const [state, setState] = useState({ loading: true, user: null, isAdmin: false })

  useEffect(() => {
    let mounted = true

    async function checkRole(user) {
      if (!user) {
        if (mounted) setState({ loading: false, user: null, isAdmin: false })
        return
      }
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle()
      if (error) console.error('useAdminAuth error:', error)
      if (mounted) setState({ loading: false, user, isAdmin: !!data })
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      checkRole(session?.user ?? null)
    })

    return () => { mounted = false; subscription.unsubscribe() }
  }, [])

  return state
}
