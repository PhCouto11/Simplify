// ============================================
// CATÁLOGO DE PRODUTOS - SETUP IA
// ============================================

export const PRODUCTS = [
  // ─── MONITORES ────────────────────────────
  {
    id: 'm1', cat: 'monitor', brand: 'LG', name: 'LG 27" UltraGear 27GS95QE OLED',
    price: 3299, emoji: '🖥️', badge: 'novo',
    desc: 'OLED 240Hz com 0.03ms e cobertura 98.5% DCI-P3',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm2', cat: 'monitor', brand: 'Dell', name: 'Dell U2724D 27" 4K USB-C 120Hz',
    price: 2799, emoji: '🖥️', badge: null,
    desc: '4K IPS com hub USB-C e 120Hz de refresh rate',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm3', cat: 'monitor', brand: 'Samsung', name: 'Samsung Odyssey G6 32" 240Hz',
    price: 2499, emoji: '🖥️', badge: 'popular',
    desc: 'QD-OLED curvo 32" com 240Hz para gaming',
    img: 'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm4', cat: 'monitor', brand: 'AOC', name: 'AOC Q27G3XMN 27" 2K 180Hz IPS',
    price: 1299, emoji: '🖥️', badge: 'popular',
    desc: 'IPS 2K 180Hz com HDMI 2.1 e custo-benefício ótimo',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm5', cat: 'monitor', brand: 'ASUS', name: 'ASUS ProArt PA279CRV 27" 4K',
    price: 2199, emoji: '🖥️', badge: null,
    desc: '4K profissional com calibração de fábrica Delta-E<2',
    img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm6', cat: 'monitor', brand: 'LG', name: 'LG 34" UltraWide 34WP65C-B',
    price: 2099, emoji: '🖥️', badge: null,
    desc: 'UltraWide 21:9 VA curvo com FreeSync Premium',
    img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80',
  },

  // ─── PERIFÉRICOS ──────────────────────────
  {
    id: 'p1', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Keys S',
    price: 749, emoji: '⌨️', badge: 'popular',
    desc: 'Teclado low-profile com retroiluminação inteligente',
    img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p2', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Master 3S',
    price: 599, emoji: '🖱️', badge: 'popular',
    desc: 'Mouse ergonômico com scroll eletromagnético quieto',
    img: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p3', cat: 'periferico', brand: 'Apple', name: 'Magic Keyboard Touch ID PT',
    price: 999, emoji: '⌨️', badge: null,
    desc: 'Teclado compacto Apple com autenticação Touch ID',
    img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p4', cat: 'periferico', brand: 'Keychron', name: 'Keychron K2 Pro Wireless',
    price: 699, emoji: '⌨️', badge: 'novo',
    desc: 'Mecânico 75% wireless com RGB e hotswap',
    img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p5', cat: 'periferico', brand: 'Razer', name: 'Razer DeathAdder V3 Pro',
    price: 649, emoji: '🖱️', badge: null,
    desc: 'Mouse sem fio ultra-leve 63g com sensor Focus Pro',
    img: 'https://images.unsplash.com/photo-1629429407759-01cd3c1f0ac1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p6', cat: 'periferico', brand: 'Logitech', name: 'Logitech G Pro X Superlight 2',
    price: 799, emoji: '🖱️', badge: 'novo',
    desc: 'O mouse mais leve da Logitech — apenas 60g',
    img: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p7', cat: 'periferico', brand: 'Apple', name: 'Magic Mouse Branco',
    price: 699, emoji: '🖱️', badge: null,
    desc: 'Design minimalista Apple com Multi-Touch Surface',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p8', cat: 'periferico', brand: 'Keychron', name: 'Keychron Q1 Pro Knob Edition',
    price: 1099, emoji: '⌨️', badge: null,
    desc: 'Full aluminum QMK/VIA com knob de volume programável',
    img: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=400&q=80',
  },

  // ─── ÁUDIO ────────────────────────────────
  {
    id: 'a1', cat: 'audio', brand: 'Sony', name: 'Sony WH-1000XM5',
    price: 1699, emoji: '🎧', badge: 'popular',
    desc: 'Cancelamento de ruído líder de mercado com 30h de bateria',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a2', cat: 'audio', brand: 'Apple', name: 'AirPods Pro 2ª geração',
    price: 1899, emoji: '🎧', badge: 'popular',
    desc: 'ANC adaptativo com chip H2 e cancelamento 2x mais forte',
    img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a3', cat: 'audio', brand: 'Edifier', name: 'Edifier MR4 Monitores Studio',
    price: 699, emoji: '🔊', badge: null,
    desc: 'Par de monitores de estúdio com saída de 42W RMS',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a4', cat: 'audio', brand: 'Audio-Technica', name: 'Audio-Technica ATH-M50xBT2',
    price: 1399, emoji: '🎧', badge: null,
    desc: 'Referência profissional em fone over-ear sem fio',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a5', cat: 'audio', brand: 'Shure', name: 'Shure MV7 Microfone USB/XLR',
    price: 1299, emoji: '🎙️', badge: 'novo',
    desc: 'Microfone híbrido USB/XLR profissional para podcast',
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a6', cat: 'audio', brand: 'Rode', name: 'Rode NT-USB Mini',
    price: 799, emoji: '🎙️', badge: null,
    desc: 'Microfone plug-and-play compacto com qualidade de estúdio',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
  },

  // ─── MOBÍLIA ──────────────────────────────
  {
    id: 'v1', cat: 'movel', brand: 'DT3', name: 'DT3 Office Modena Elite Cadeira',
    price: 1699, emoji: '🪑', badge: 'popular',
    desc: 'Cadeira ergonômica com apoio lombar 4D ajustável',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v2', cat: 'movel', brand: 'FlexForm', name: 'Mesa Flexform Pro 1.60m',
    price: 1199, emoji: '🪵', badge: null,
    desc: 'Mesa de escritório 1.60m com acabamento premium MDF',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v3', cat: 'movel', brand: 'ELG', name: 'ELG Suporte Duplo Monitor F160N',
    price: 249, emoji: '🦾', badge: null,
    desc: 'Suporte articulado para 2 monitores de até 32"',
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v4', cat: 'movel', brand: 'Acevida', name: 'Standing Desk Acevida 1.40m',
    price: 2299, emoji: '🪵', badge: 'novo',
    desc: 'Mesa motorizada elétrica com memória de 4 alturas',
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v5', cat: 'movel', brand: 'Herman Miller', name: 'Herman Miller Aeron Remaster',
    price: 8999, emoji: '🪑', badge: null,
    desc: 'A cadeira mais reconhecida do mundo para longas sessões',
    img: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=400&q=80',
  },

  // ─── HARDWARE ─────────────────────────────
  {
    id: 'h1', cat: 'pc', brand: 'CalDigit', name: 'CalDigit TS4 Thunderbolt 4 Hub',
    price: 2199, emoji: '🔌', badge: null,
    desc: 'Hub Thunderbolt 4 com 18 portas e 98W Power Delivery',
    img: 'https://images.unsplash.com/photo-1551808525-99b27fcef1f0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h2', cat: 'pc', brand: 'Elgato', name: 'Elgato Facecam Pro 4K',
    price: 1299, emoji: '📷', badge: 'novo',
    desc: 'Webcam 4K HDR com sensor Sony e 60fps de gravação',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h3', cat: 'pc', brand: 'Elgato', name: 'Elgato Key Light 2800 lm',
    price: 899, emoji: '💡', badge: null,
    desc: 'Painel LED 2800lm com controle de temperatura via app',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h4', cat: 'pc', brand: 'Apple', name: 'Mac Mini M4 16GB',
    price: 7999, emoji: '💻', badge: 'novo',
    desc: 'Desktop compacto Apple com chip M4 e 16GB unified memory',
    img: 'https://images.unsplash.com/photo-1611186871525-be40caa70ea5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h5', cat: 'pc', brand: 'Samsung', name: 'Samsung 990 Pro 2TB NVMe',
    price: 749, emoji: '💾', badge: null,
    desc: 'SSD NVMe PCIe 4.0 com 7450MB/s de leitura sequencial',
    img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h6', cat: 'pc', brand: 'Anker', name: 'Anker 727 GaNPrime 100W',
    price: 349, emoji: '⚡', badge: null,
    desc: 'Carregador GaN 100W compacto para 3 dispositivos simultâneos',
    img: 'https://images.unsplash.com/photo-1583863788734-7f8e616d2c24?auto=format&fit=crop&w=400&q=80',
  },
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
