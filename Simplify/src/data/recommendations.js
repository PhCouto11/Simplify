// ============================================
// SMART RECOMMENDATION ENGINE - SIMPLIFY
// ============================================

// Category complement map: if user has X, they need Y
const COMPLEMENTS = {
  pc:         { cats: ['monitor', 'periferico', 'audio', 'movel'], reason: 'Para potencializar seu PC' },
  monitor:    { cats: ['periferico', 'movel', 'pc'],               reason: 'Para usar com seu monitor' },
  periferico: { cats: ['monitor', 'pc', 'audio'],                  reason: 'Para seu setup de input' },
  audio:      { cats: ['pc', 'periferico', 'movel'],               reason: 'Para seu setup de áudio' },
  movel:      { cats: ['monitor', 'pc', 'periferico'],             reason: 'Para completar seu espaço' },
}

// How much each category contributes to a "complete setup" (total = 100)
const CATEGORY_WEIGHTS = {
  pc:         30,
  monitor:    25,
  periferico: 20,
  audio:      15,
  movel:      10,
}

/**
 * Returns recommended products the user doesn't have yet,
 * based on their existing wishlist categories.
 */
export function getRecommendations(wishlist, allProducts, limit = 6) {
  const wishlistIds = new Set(Object.keys(wishlist))

  const ownedProducts = allProducts.filter(p => wishlistIds.has(p.id))
  const ownedCats = new Set(ownedProducts.map(p => p.cat))

  // No products in wishlist → return popular items as a starter
  if (ownedCats.size === 0) {
    return allProducts
      .filter(p => p.badge === 'popular')
      .slice(0, limit)
      .map(p => ({ ...p, reason: 'Mais popular entre usuários' }))
  }

  // Find which categories the user is missing based on what they have
  const neededCats = new Map() // cat → reason
  ownedCats.forEach(cat => {
    const rule = COMPLEMENTS[cat]
    if (!rule) return
    rule.cats.forEach(neededCat => {
      if (!ownedCats.has(neededCat) && !neededCats.has(neededCat)) {
        neededCats.set(neededCat, rule.reason)
      }
    })
  })

  // Score candidates: prefer popular/novo badges, prefer cheaper options
  const candidates = allProducts
    .filter(p => neededCats.has(p.cat) && !wishlistIds.has(p.id))
    .map(p => ({
      ...p,
      reason: neededCats.get(p.cat),
      score: (p.badge === 'popular' ? 3 : p.badge === 'novo' ? 2 : 1),
    }))
    .sort((a, b) => b.score - a.score || a.price - b.price)

  // If not enough from missing cats, pad with popular items not in wishlist
  if (candidates.length < limit) {
    const popular = allProducts
      .filter(p => p.badge === 'popular' && !wishlistIds.has(p.id) && !candidates.find(c => c.id === p.id))
      .map(p => ({ ...p, reason: 'Popular entre usuários' }))
    candidates.push(...popular)
  }

  return candidates.slice(0, limit)
}

/**
 * Calculates how "complete" the user's setup is across categories.
 * Uses owned items only. Returns 0–100.
 */
export function getSetupScore(wishlist, allProducts) {
  const ownedIds = new Set(
    Object.entries(wishlist)
      .filter(([, v]) => v.owned)
      .map(([id]) => id)
  )

  if (ownedIds.size === 0) return 0

  const productsByCat = {}
  allProducts.forEach(p => {
    if (!productsByCat[p.cat]) productsByCat[p.cat] = []
    productsByCat[p.cat].push(p)
  })

  let score = 0
  Object.entries(CATEGORY_WEIGHTS).forEach(([cat, weight]) => {
    const catProds = productsByCat[cat] || []
    if (catProds.length === 0) return
    const ownedInCat = catProds.filter(p => ownedIds.has(p.id)).length
    // Having ≥1 product in a category = 60% credit; each extra product adds up to 100%
    const coverage = ownedInCat > 0
      ? Math.min(0.6 + (ownedInCat - 1) * 0.1, 1.0)
      : 0
    score += weight * coverage
  })

  return Math.round(Math.min(score, 100))
}

/**
 * Returns which categories are missing from the user's setup.
 */
export function getMissingCategories(wishlist, allProducts) {
  const wishlistIds = new Set(Object.keys(wishlist))
  const ownedCats = new Set(
    allProducts.filter(p => wishlistIds.has(p.id)).map(p => p.cat)
  )
  return Object.keys(CATEGORY_WEIGHTS).filter(cat => !ownedCats.has(cat))
}

export { CATEGORY_WEIGHTS }
