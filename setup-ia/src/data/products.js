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
  { id: 'm1', cat: 'monitor', brand: 'LG',      name: 'LG 27" UltraGear 27GS95QE OLED',   price: 3299, emoji: '🖥️', badge: 'novo' },
  { id: 'm2', cat: 'monitor', brand: 'Dell',    name: 'Dell U2724D 27" 4K USB-C 120Hz',    price: 2799, emoji: '🖥️', badge: null },
  { id: 'm3', cat: 'monitor', brand: 'Samsung', name: 'Samsung Odyssey G6 32" 240Hz',      price: 2499, emoji: '🖥️', badge: 'popular' },
  { id: 'm4', cat: 'monitor', brand: 'AOC',     name: 'AOC Q27G3XMN 27" 2K 180Hz IPS',    price: 1299, emoji: '🖥️', badge: 'popular' },
  { id: 'm5', cat: 'monitor', brand: 'ASUS',    name: 'ASUS ProArt PA279CRV 27" 4K',      price: 2199, emoji: '🖥️', badge: null },
  { id: 'm6', cat: 'monitor', brand: 'LG',      name: 'LG 34" UltraWide 34WP65C-B',       price: 2099, emoji: '🖥️', badge: null },

  // ─── PERIFÉRICOS ──────────────────────────
  { id: 'p1', cat: 'periferico', brand: 'Logitech',  name: 'Logitech MX Keys S',              price: 749,  emoji: '⌨️', badge: 'popular' },
  { id: 'p2', cat: 'periferico', brand: 'Logitech',  name: 'Logitech MX Master 3S',           price: 599,  emoji: '🖱️', badge: 'popular' },
  { id: 'p3', cat: 'periferico', brand: 'Apple',     name: 'Magic Keyboard Touch ID PT',      price: 999,  emoji: '⌨️', badge: null },
  { id: 'p4', cat: 'periferico', brand: 'Keychron',  name: 'Keychron K2 Pro Wireless',        price: 699,  emoji: '⌨️', badge: 'novo' },
  { id: 'p5', cat: 'periferico', brand: 'Razer',     name: 'Razer DeathAdder V3 Pro',         price: 649,  emoji: '🖱️', badge: null },
  { id: 'p6', cat: 'periferico', brand: 'Logitech',  name: 'Logitech G Pro X Superlight 2',   price: 799,  emoji: '🖱️', badge: 'novo' },
  { id: 'p7', cat: 'periferico', brand: 'Apple',     name: 'Magic Mouse Branco',              price: 699,  emoji: '🖱️', badge: null },
  { id: 'p8', cat: 'periferico', brand: 'Keychron',  name: 'Keychron Q1 Pro Knob Edition',    price: 1099, emoji: '⌨️', badge: null },

  // ─── ÁUDIO ────────────────────────────────
  { id: 'a1', cat: 'audio', brand: 'Sony',           name: 'Sony WH-1000XM5',                price: 1699, emoji: '🎧', badge: 'popular' },
  { id: 'a2', cat: 'audio', brand: 'Apple',          name: 'AirPods Pro 2ª geração',         price: 1899, emoji: '🎧', badge: 'popular' },
  { id: 'a3', cat: 'audio', brand: 'Edifier',        name: 'Edifier MR4 Monitores Studio',   price: 699,  emoji: '🔊', badge: null },
  { id: 'a4', cat: 'audio', brand: 'Audio-Technica', name: 'Audio-Technica ATH-M50xBT2',     price: 1399, emoji: '🎧', badge: null },
  { id: 'a5', cat: 'audio', brand: 'Shure',          name: 'Shure MV7 Microfone USB/XLR',    price: 1299, emoji: '🎙️', badge: 'novo' },
  { id: 'a6', cat: 'audio', brand: 'Rode',           name: 'Rode NT-USB Mini',               price: 799,  emoji: '🎙️', badge: null },

  // ─── MOBÍLIA ──────────────────────────────
  { id: 'v1', cat: 'movel', brand: 'DT3',          name: 'DT3 Office Modena Elite Cadeira',  price: 1699, emoji: '🪑', badge: 'popular' },
  { id: 'v2', cat: 'movel', brand: 'FlexForm',     name: 'Mesa Flexform Pro 1.60m',           price: 1199, emoji: '🪵', badge: null },
  { id: 'v3', cat: 'movel', brand: 'ELG',          name: 'ELG Suporte Duplo Monitor F160N',  price: 249,  emoji: '🦾', badge: null },
  { id: 'v4', cat: 'movel', brand: 'Acevida',      name: 'Standing Desk Acevida 1.40m',      price: 2299, emoji: '🪵', badge: 'novo' },
  { id: 'v5', cat: 'movel', brand: 'Herman Miller', name: 'Herman Miller Aeron Remaster',    price: 8999, emoji: '🪑', badge: null },

  // ─── HARDWARE ─────────────────────────────
  { id: 'h1', cat: 'pc', brand: 'CalDigit',  name: 'CalDigit TS4 Thunderbolt 4 Hub',       price: 2199, emoji: '🔌', badge: null },
  { id: 'h2', cat: 'pc', brand: 'Elgato',   name: 'Elgato Facecam Pro 4K',                 price: 1299, emoji: '📷', badge: 'novo' },
  { id: 'h3', cat: 'pc', brand: 'Elgato',   name: 'Elgato Key Light 2800 lm',              price: 899,  emoji: '💡', badge: null },
  { id: 'h4', cat: 'pc', brand: 'Apple',    name: 'Mac Mini M4 16GB',                      price: 7999, emoji: '💻', badge: 'novo' },
  { id: 'h5', cat: 'pc', brand: 'Samsung',  name: 'Samsung 990 Pro 2TB NVMe',              price: 749,  emoji: '💾', badge: null },
  { id: 'h6', cat: 'pc', brand: 'Anker',    name: 'Anker 727 GaNPrime 100W',               price: 349,  emoji: '⚡', badge: null },
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
