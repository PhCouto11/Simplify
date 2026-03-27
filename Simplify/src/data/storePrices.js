// ============================================
// PREÇOS POR LOJA — gerados de forma determinística
// por produto (sem API real). Variação de ±12% do
// preço base para simular diferenças entre lojas.
// ============================================

export const STORES = [
  { key: 'amazon', label: 'Amazon',        color: '#FF9900', textColor: '#000', abbr: 'A'  },
  { key: 'ml',     label: 'Mercado Livre', color: '#FFE600', textColor: '#222', abbr: 'ML' },
  { key: 'kabum',  label: 'KaBuM!',        color: '#6C1FD5', textColor: '#fff', abbr: 'K'  },
  { key: 'pichau', label: 'Pichau',        color: '#0352A0', textColor: '#fff', abbr: 'P'  },
]

function hash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h * 31) + str.charCodeAt(i)) & 0xFFFFFF
  }
  return h
}

// Retorna preços simulados por loja para um produto.
// Determinístico: mesmo produto sempre retorna os mesmos preços.
export function getStorePrices(product) {
  const base = product.price
  const h = hash(product.id)

  // 4 nibbles independentes → variações diferentes por loja
  const pcts = [
    ((h & 0xF) - 6) / 100,           // amazon:  -6% a +9%
    (((h >> 4) & 0xF) - 8) / 100,    // ml:      -8% a +7%
    (((h >> 8) & 0xF) - 10) / 100,   // kabum:  -10% a +5%
    (((h >> 12) & 0xF) - 4) / 100,   // pichau:  -4% a +11%
  ]

  return {
    amazon: Math.round(base * (1 + pcts[0])),
    ml:     Math.round(base * (1 + pcts[1])),
    kabum:  Math.round(base * (1 + pcts[2])),
    pichau: Math.round(base * (1 + pcts[3])),
  }
}

// Retorna o menor preço entre todas as lojas
export function getMinPrice(product) {
  const prices = getStorePrices(product)
  return Math.min(...Object.values(prices))
}
