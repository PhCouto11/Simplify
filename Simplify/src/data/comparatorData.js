// ============================================
// COMPARADOR A/B — Mock data dos ambientes
// Cada ambiente tem 2 variações (A e B)
// ============================================

export const ENVIRONMENTS = [
  { id: 'viagem',     emoji: '✈️',  name: 'Viagem',     desc: 'Leve e eficiente' },
  { id: 'escritorio', emoji: '🖥️', name: 'Escritório',  desc: 'Produtividade máxima' },
  { id: 'quarto',     emoji: '🛏️', name: 'Quarto',      desc: 'Conforto e relaxo' },
  { id: 'gaming',     emoji: '🎮',  name: 'Gaming',      desc: 'Performance e imersão' },
]

export const SETUP_VARIATIONS = {
  viagem: {
    A: {
      name: 'Compacto & Leve',
      products: ['nb5', 'a2', 's4', 'wr3'],
      score: 82,
    },
    B: {
      name: 'Performance Mobile',
      products: ['nb7', 'a1', 's6', 'wr7', 'h6'],
      score: 76,
    },
  },
  escritorio: {
    A: {
      name: 'Home Office Completo',
      products: ['m2', 'p1', 'p2', 'h4', 'v2', 'v1'],
      score: 91,
    },
    B: {
      name: 'Setup Mínimo Mac',
      products: ['nb5', 'p3', 'p7', 'h1', 'v4'],
      score: 78,
    },
  },
  quarto: {
    A: {
      name: 'Relaxo Inteligente',
      products: ['ci10', 'ci12', 'st1', 'a2', 'wr3', 'ci14'],
      score: 74,
    },
    B: {
      name: 'Gamer Noturno',
      products: ['st11', 'm3', 'a1', 'ci15', 'ci3'],
      score: 88,
    },
  },
  gaming: {
    A: {
      name: 'PC Gaming Ultimate',
      products: ['m3', 'cp1', 'cp17', 'cp19', 'p6', 'p4'],
      score: 95,
    },
    B: {
      name: 'Console + PC Balance',
      products: ['st12', 'st14', 'm1', 'a1', 'cp4', 'p5'],
      score: 80,
    },
  },
}
