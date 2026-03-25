// ============================================
// CATÁLOGO DE PRODUTOS - SETUP IA
// ============================================
// Para adicionar novos produtos, basta adicionar
// um novo objeto seguindo o formato abaixo.
//
// Campos:
//   id     → identificador único (ex: "m7")
//   cat    → categoria: monitor | periferico | audio | movel | pc
//   brand  → marca do produto
//   name   → nome completo do produto
//   price  → preço em reais (número inteiro)
//   emoji  → emoji representativo
//   badge  → "novo" | "popular" | null
// ============================================

export const PRODUCTS = [
  // ─── MONITORES ────────────────────────────
  { id: 'm1', cat: 'monitor', brand: 'LG',      name: 'LG 27" UltraGear 27GP850-B',   price: 1899, emoji: '🖥', badge: 'popular' },
  { id: 'm2', cat: 'monitor', brand: 'Dell',     name: 'Dell S2722QC 27" 4K USB-C',     price: 2199, emoji: '🖥', badge: null },
  { id: 'm3', cat: 'monitor', brand: 'Samsung',  name: 'Samsung Odyssey G5 34" Curvo',   price: 2499, emoji: '🖥', badge: null },
  { id: 'm4', cat: 'monitor', brand: 'AOC',      name: 'AOC 24G2 24" 144Hz IPS',        price: 899,  emoji: '🖥', badge: 'popular' },
  { id: 'm5', cat: 'monitor', brand: 'BenQ',     name: 'BenQ GW2780 27" IPS Eye-Care',  price: 1099, emoji: '🖥', badge: null },
  { id: 'm6', cat: 'monitor', brand: 'ASUS',     name: 'ASUS ProArt PA278QV 27" 2K',    price: 1799, emoji: '🖥', badge: null },

  // ─── PERIFÉRICOS ──────────────────────────
  { id: 'p1', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Keys Mini',         price: 649, emoji: '⌨️', badge: 'popular' },
  { id: 'p2', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Master 3S',         price: 549, emoji: '🖱', badge: 'popular' },
  { id: 'p3', cat: 'periferico', brand: 'Razer',    name: 'Razer DeathAdder V3',            price: 399, emoji: '🖱', badge: null },
  { id: 'p4', cat: 'periferico', brand: 'Redragon', name: 'Redragon Kumara K552 RGB',       price: 189, emoji: '⌨️', badge: null },
  { id: 'p5', cat: 'periferico', brand: 'HyperX',   name: 'HyperX Alloy Origins Core',      price: 449, emoji: '⌨️', badge: null },
  { id: 'p6', cat: 'periferico', brand: 'Logitech', name: 'Logitech G305 Wireless',         price: 249, emoji: '🖱', badge: null },
  { id: 'p7', cat: 'periferico', brand: 'Razer',    name: 'Razer Viper Mini',               price: 199, emoji: '🖱', badge: null },
  { id: 'p8', cat: 'periferico', brand: 'Logitech', name: 'Logitech G733 Headset',          price: 699, emoji: '🎧', badge: null },

  // ─── ÁUDIO ────────────────────────────────
  { id: 'a1', cat: 'audio', brand: 'HyperX',         name: 'HyperX Cloud II',                price: 399,  emoji: '🎧', badge: 'popular' },
  { id: 'a2', cat: 'audio', brand: 'JBL',             name: 'JBL Quantum 100',                price: 179,  emoji: '🎧', badge: null },
  { id: 'a3', cat: 'audio', brand: 'Edifier',         name: 'Edifier R1280T Caixas de Som',   price: 499,  emoji: '🔊', badge: null },
  { id: 'a4', cat: 'audio', brand: 'Audio-Technica',  name: 'Audio-Technica ATH-M50x',        price: 1199, emoji: '🎧', badge: null },
  { id: 'a5', cat: 'audio', brand: 'SteelSeries',     name: 'SteelSeries Arctis Nova 7',      price: 899,  emoji: '🎧', badge: 'novo' },
  { id: 'a6', cat: 'audio', brand: 'Maono',           name: 'Maono AU-PM421 Microfone USB',   price: 349,  emoji: '🎙', badge: null },

  // ─── MOBÍLIA ──────────────────────────────
  { id: 'v1', cat: 'movel', brand: 'DT3',      name: 'DT3 Office Alera+ Cadeira',    price: 1299, emoji: '🪑', badge: 'popular' },
  { id: 'v2', cat: 'movel', brand: 'FlexForm',  name: 'Mesa Flexform Pro 1.40m',      price: 899,  emoji: '🪵', badge: null },
  { id: 'v3', cat: 'movel', brand: 'ELG',       name: 'ELG Suporte Braço Monitor F80N', price: 159, emoji: '🦾', badge: null },
  { id: 'v4', cat: 'movel', brand: 'Acevida',   name: 'Standing Desk Acevida 1.20m',  price: 1899, emoji: '🪵', badge: 'novo' },
  { id: 'v5', cat: 'movel', brand: 'Husky',     name: 'Husky Storm Cadeira Gamer',    price: 999,  emoji: '🪑', badge: null },

  // ─── HARDWARE ─────────────────────────────
  { id: 'h1', cat: 'pc', brand: 'Baseus',  name: 'Hub USB-C Baseus 7-em-1',     price: 189, emoji: '🔌', badge: null },
  { id: 'h2', cat: 'pc', brand: 'Logitech', name: 'Logitech Brio 4K Webcam',     price: 899, emoji: '📷', badge: null },
  { id: 'h3', cat: 'pc', brand: 'Elgato',  name: 'Elgato Key Light Mini',        price: 599, emoji: '💡', badge: 'novo' },
  { id: 'h4', cat: 'pc', brand: 'WD',      name: 'WD Black SN850X 1TB NVMe',    price: 549, emoji: '💾', badge: null },
  { id: 'h5', cat: 'pc', brand: 'Corsair', name: 'Corsair RM750x Fonte 750W',   price: 699, emoji: '⚡', badge: null },
  { id: 'h6', cat: 'pc', brand: 'Kingston', name: 'Kingston Fury Beast 16GB DDR5', price: 379, emoji: '🧠', badge: null },
]

// Mapa de cores por categoria
export const CAT_COLORS = {
  monitor:    'var(--cyan-dim)',
  periferico: 'var(--purple-dim)',
  audio:      'var(--yellow-dim)',
  movel:      'var(--green-dim)',
  pc:         'var(--red-dim)',
}

// Categorias disponíveis
export const CATEGORIES = [
  { key: 'all',        label: 'Todos' },
  { key: 'monitor',    label: '🖥 Monitores' },
  { key: 'periferico', label: '⌨️ Periféricos' },
  { key: 'audio',      label: '🎧 Áudio' },
  { key: 'movel',      label: '🪑 Mobília' },
  { key: 'pc',         label: '💻 Hardware' },
]
