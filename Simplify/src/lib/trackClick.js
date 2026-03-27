import { supabase } from './supabase'

/**
 * Registra um clique em link afiliado.
 * Fire-and-forget — não bloqueia a navegação.
 */
export function trackClick(productId, affiliateUrl) {
  supabase.auth.getSession().then(({ data: { session } }) => {
    supabase.from('click_events').insert({
      product_id: productId,
      user_id: session?.user?.id || null,
      affiliate_url: affiliateUrl,
    })
  })
}
