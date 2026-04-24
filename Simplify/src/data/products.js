// ============================================
// CATÁLOGO DE PRODUTOS - SIMPLIFY
// Última atualização: Abril 2026 — preços em BRL
// Fonte: Apple Store BR (Apple) | menor preço de mercado (demais)
// ============================================

export const PRODUCTS = [

  // ─── SMARTPHONES ─────────────────────────────
  // Apple (8) + Samsung (8)

  // Apple — iPhone 16
  {
    id: 's1', cat: 'smartphone', brand: 'Apple', name: 'iPhone 16 Pro Max 256GB',
    price: 11299, emoji: '📱', badge: 'popular',
    desc: 'Chip A18 Pro, tela Super Retina XDR 6.9" ProMotion, câmera 48MP zoom 5x, titânio',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16promax-naturaltitanium-select?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '256gb', label: '256 GB', price: 11299 },
      { key: '512gb', label: '512 GB', price: 12799 },
      { key: '1tb',   label: '1 TB',   price: 14299 },
    ],
  },
  {
    id: 's2', cat: 'smartphone', brand: 'Apple', name: 'iPhone 16 Pro 128GB',
    price: 9299, emoji: '📱', badge: 'popular',
    desc: 'Chip A18 Pro, tela 6.3" ProMotion, câmera 48MP, Action Button e USB-C 3.2',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16pro-naturaltitanium-select?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb', label: '128 GB', price: 9299 },
      { key: '256gb', label: '256 GB', price: 10299 },
      { key: '512gb', label: '512 GB', price: 11799 },
    ],
  },
  {
    id: 's3', cat: 'smartphone', brand: 'Apple', name: 'iPhone 16 Plus 128GB',
    price: 7799, emoji: '📱', badge: null,
    desc: 'Tela Super Retina XDR 6.7", chip A18, câmera dupla 48MP e bateria de 2 dias',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16-finish-select-202409-pink?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb', label: '128 GB', price: 7799 },
      { key: '256gb', label: '256 GB', price: 8799 },
      { key: '512gb', label: '512 GB', price: 10299 },
    ],
  },
  {
    id: 's4', cat: 'smartphone', brand: 'Apple', name: 'iPhone 16 128GB',
    price: 6799, emoji: '📱', badge: 'popular',
    desc: 'Chip A18, câmera 48MP com modo Câmera de Vídeo, Dynamic Island e USB-C',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16-finish-select-202409-ultramarine?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb', label: '128 GB', price: 6799 },
      { key: '256gb', label: '256 GB', price: 7799 },
      { key: '512gb', label: '512 GB', price: 9299 },
    ],
  },
  {
    id: 's5', cat: 'smartphone', brand: 'Apple', name: 'iPhone 15 Pro Max 256GB',
    price: 8499, emoji: '📱', badge: 'oferta',
    desc: 'Chip A17 Pro, titânio, câmera 48MP com zoom 5x — excelente custo-benefício',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15promax-naturaltitanium-select?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '256gb', label: '256 GB', price: 8499 },
      { key: '512gb', label: '512 GB', price: 9999 },
    ],
  },
  {
    id: 's6', cat: 'smartphone', brand: 'Apple', name: 'iPhone 15 128GB',
    price: 5299, emoji: '📱', badge: 'oferta',
    desc: 'Chip A16 Bionic, Dynamic Island, câmera 48MP e USB-C',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-pink-select-202309?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb', label: '128 GB', price: 5299 },
      { key: '256gb', label: '256 GB', price: 6299 },
    ],
  },
  {
    id: 's7', cat: 'smartphone', brand: 'Apple', name: 'iPhone 14 128GB',
    price: 4299, emoji: '📱', badge: 'oferta',
    desc: 'Chip A15 Bionic, tela 6.1" OLED, câmera dupla 12MP, detecção de acidente',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-select-202209?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb', label: '128 GB', price: 4299 },
      { key: '256gb', label: '256 GB', price: 5299 },
    ],
  },
  {
    id: 's8', cat: 'smartphone', brand: 'Apple', name: 'iPhone SE 3ª geração 64GB',
    price: 3299, emoji: '📱', badge: 'oferta',
    desc: 'Chip A15 Bionic no menor corpo da linha Apple, 5G e Touch ID',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202203?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '64gb',  label: '64 GB',  price: 3299 },
      { key: '128gb', label: '128 GB', price: 3799 },
    ],
  },

  // Samsung — Galaxy S25 + A-series
  {
    id: 's9', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy S25 Ultra 256GB',
    price: 9799, emoji: '📱', badge: 'popular',
    desc: 'Snapdragon 8 Elite, tela 6.9" QHD+ 120Hz, câmera 200MP e S Pen integrada',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=400&q=80',
    variants: [
      { key: '256gb', label: '256 GB', price: 9799 },
      { key: '512gb', label: '512 GB', price: 11299 },
    ],
  },
  {
    id: 's10', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy S25+ 256GB',
    price: 7999, emoji: '📱', badge: null,
    desc: 'Snapdragon 8 Elite, tela 6.7" FHD+ 120Hz e sistema de câmera tripla 50MP',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=400&q=80',
    variants: [
      { key: '256gb', label: '256 GB', price: 7999 },
      { key: '512gb', label: '512 GB', price: 9499 },
    ],
  },
  {
    id: 's11', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy S25 256GB',
    price: 5999, emoji: '📱', badge: 'popular',
    desc: 'Snapdragon 8 Elite, tela 6.2" FHD+ 120Hz, câmera tripla 50MP e Galaxy AI',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=400&q=80',
    variants: [
      { key: '128gb', label: '128 GB', price: 5499 },
      { key: '256gb', label: '256 GB', price: 5999 },
    ],
  },
  {
    id: 's12', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy S25 Edge 256GB',
    price: 6999, emoji: '📱', badge: 'novo',
    desc: 'O Samsung mais fino já criado — 5.8mm, titânio, tela 6.7" FHD+ 120Hz',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 's13', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy A56 5G 128GB',
    price: 2799, emoji: '📱', badge: 'popular',
    desc: 'Exynos 1580, tela 6.7" FHD+ 120Hz, câmera 50MP, 5G e bateria 5000mAh',
    img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 's14', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy A36 5G 128GB',
    price: 2199, emoji: '📱', badge: null,
    desc: 'Snapdragon 6 Gen 3, tela 6.7" Super AMOLED 120Hz e câmera 50MP com OIS',
    img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 's15', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy A16 5G 128GB',
    price: 1199, emoji: '📱', badge: null,
    desc: 'Dimensity 6300, tela 6.7" FHD+ 90Hz, câmera tripla 50MP e 6 anos de atualizações',
    img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 's16', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy Z Fold 6 256GB',
    price: 12999, emoji: '📱', badge: 'novo',
    desc: 'Smartphone dobrável Snapdragon 8 Gen 3, tela interna 7.6" AMOLED 120Hz',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    variants: [
      { key: '256gb', label: '256 GB', price: 12999 },
      { key: '512gb', label: '512 GB', price: 14999 },
    ],
  },
  {
    id: 's17', cat: 'smartphone', brand: 'Samsung', name: 'Galaxy Z Flip 6 256GB',
    price: 6999, emoji: '📱', badge: 'novo',
    desc: 'Dobrável compacto com Snapdragon 8 Gen 3, tela externa FlexWindow 3.4" e câmera 50MP',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 's18', cat: 'smartphone', brand: 'Apple', name: 'iPhone 16 Pro Max 512GB',
    price: 12799, emoji: '📱', badge: null,
    desc: 'Chip A18 Pro, 512GB de armazenamento, câmera 48MP zoom 5x e titânio grau 5',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone16promax-naturaltitanium-select?wid=400&hei=400&fmt=jpeg&qlt=90',
  },

  // ─── NOTEBOOKS ───────────────────────────────
  // Apple (5) + Dell (9)

  // Apple — MacBook
  {
    id: 'nb1', cat: 'notebook', brand: 'Apple', name: 'MacBook Pro 16" M4 Pro 24GB',
    price: 24999, emoji: '💻', badge: null,
    desc: 'Chip M4 Pro 14 núcleos CPU, 20 núcleos GPU, tela Liquid Retina XDR 16.2"',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '24gb-512gb', label: '24 GB / 512 GB SSD', price: 24999 },
      { key: '24gb-1tb',   label: '24 GB / 1 TB SSD',   price: 27999 },
      { key: '48gb-1tb',   label: '48 GB / 1 TB SSD',   price: 32999 },
    ],
  },
  {
    id: 'nb2', cat: 'notebook', brand: 'Apple', name: 'MacBook Pro 14" M4 Pro 24GB',
    price: 20999, emoji: '💻', badge: null,
    desc: 'Chip M4 Pro, tela Liquid Retina XDR 14.2" ProMotion, até 24h de bateria',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '24gb-512gb', label: '24 GB / 512 GB SSD', price: 20999 },
      { key: '24gb-1tb',   label: '24 GB / 1 TB SSD',   price: 23999 },
    ],
  },
  {
    id: 'nb3', cat: 'notebook', brand: 'Apple', name: 'MacBook Pro 14" M4 16GB',
    price: 16999, emoji: '💻', badge: 'popular',
    desc: 'Chip M4 base, tela Liquid Retina XDR 14.2", 512GB SSD e câmera 12MP Center Stage',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202410?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '16gb-512gb', label: '16 GB / 512 GB SSD', price: 16999 },
      { key: '24gb-1tb',   label: '24 GB / 1 TB SSD',   price: 20999 },
    ],
  },
  {
    id: 'nb4', cat: 'notebook', brand: 'Apple', name: 'MacBook Air 15" M3 16GB',
    price: 12999, emoji: '💻', badge: 'popular',
    desc: 'Tela Liquid Retina 15.3", chip M3, design ultrafino sem ventilador e 18h de bateria',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202402?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '16gb-256gb', label: '16 GB / 256 GB SSD', price: 12999 },
      { key: '16gb-512gb', label: '16 GB / 512 GB SSD', price: 14999 },
      { key: '24gb-1tb',   label: '24 GB / 1 TB SSD',   price: 17999 },
    ],
  },
  {
    id: 'nb5', cat: 'notebook', brand: 'Apple', name: 'MacBook Air 13" M3 16GB',
    price: 10999, emoji: '💻', badge: 'popular',
    desc: 'Tela Liquid Retina 13.6", chip M3, 1.24kg e desempenho excepcional sem ventilador',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '16gb-256gb', label: '16 GB / 256 GB SSD', price: 10999 },
      { key: '16gb-512gb', label: '16 GB / 512 GB SSD', price: 12999 },
      { key: '24gb-1tb',   label: '24 GB / 1 TB SSD',   price: 15999 },
    ],
  },

  // Dell
  {
    id: 'nb6', cat: 'notebook', brand: 'Dell', name: 'Dell XPS 16 i7 RTX 4060',
    price: 16999, emoji: '💻', badge: null,
    desc: 'Intel Core i7-14700H, RTX 4060 8GB, tela OLED 16" 3.2K 120Hz, 32GB RAM',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb7', cat: 'notebook', brand: 'Dell', name: 'Dell XPS 13 Plus i7',
    price: 10999, emoji: '💻', badge: null,
    desc: 'Intel Core i7-1360P, tela 13.4" FHD+ OLED, 16GB LPDDR5, 512GB SSD',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb8', cat: 'notebook', brand: 'Dell', name: 'Dell XPS 13 i5',
    price: 7999, emoji: '💻', badge: null,
    desc: 'Intel Core i5-1340P, tela 13.4" FHD+ antirreflexo, 16GB RAM, 512GB SSD',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb9', cat: 'notebook', brand: 'Dell', name: 'Dell Inspiron 16 Plus i7',
    price: 7499, emoji: '💻', badge: 'popular',
    desc: 'Intel Core i7-13700H, tela 16" QHD+ IPS, 16GB RAM DDR5, 512GB SSD NVMe',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb10', cat: 'notebook', brand: 'Dell', name: 'Dell Inspiron 15 i5',
    price: 3999, emoji: '💻', badge: 'popular',
    desc: 'Intel Core i5-1335U, tela 15.6" FHD, 8GB RAM, 256GB SSD — custo-benefício',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb11', cat: 'notebook', brand: 'Dell', name: 'Dell G16 Gaming i9 RTX 4070',
    price: 13999, emoji: '💻', badge: null,
    desc: 'Intel Core i9-14900HX, RTX 4070 8GB, tela 16" QHD+ 240Hz, 32GB DDR5',
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb12', cat: 'notebook', brand: 'Dell', name: 'Dell G15 Gaming i7 RTX 4060',
    price: 8999, emoji: '💻', badge: 'popular',
    desc: 'Intel Core i7-13650HX, RTX 4060 8GB, tela 15.6" FHD 165Hz, 16GB DDR5',
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb13', cat: 'notebook', brand: 'Dell', name: 'Dell Alienware m18 R2 i9',
    price: 22999, emoji: '💻', badge: null,
    desc: 'Intel Core i9-14900HX, RTX 4090 16GB, tela 18" QHD+ 165Hz — máximo desktop replacement',
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb14', cat: 'notebook', brand: 'Dell', name: 'Dell Vostro 15 i5',
    price: 3499, emoji: '💻', badge: null,
    desc: 'Intel Core i5-1335U, tela 15.6" FHD, 8GB RAM, SSD 256GB — ideal para negócios',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'nb15', cat: 'notebook', brand: 'Apple', name: 'MacBook Pro 16" M4 Max 48GB',
    price: 34999, emoji: '💻', badge: null,
    desc: 'Chip M4 Max 16 núcleos CPU, 40 núcleos GPU, 48GB unified memory — para criadores profissionais',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '48gb-1tb', label: '48 GB / 1 TB SSD', price: 34999 },
      { key: '64gb-2tb', label: '64 GB / 2 TB SSD', price: 41999 },
    ],
  },
  {
    id: 'nb16', cat: 'notebook', brand: 'Dell', name: 'Dell XPS 15 i9 RTX 4070',
    price: 20999, emoji: '💻', badge: null,
    desc: 'Intel Core i9-13900H, RTX 4070 8GB, tela OLED 15.6" 3.5K 60Hz, 32GB DDR5',
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=400&q=80',
  },

  // ─── TABLETS & IPADS ─────────────────────────
  // Apple (6) + Samsung (4)

  // Apple — iPad
  {
    id: 'tb1', cat: 'tablet', brand: 'Apple', name: 'iPad Pro 13" M4',
    price: 12499, emoji: '📱', badge: 'novo',
    desc: 'Chip M4, tela Ultra Retina XDR OLED 13" ProMotion 120Hz e Nano-texture opcional',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '256gb-wifi',   label: '256 GB Wi-Fi',             price: 12499 },
      { key: '512gb-wifi',   label: '512 GB Wi-Fi',             price: 14999 },
      { key: '256gb-cell',   label: '256 GB Wi-Fi + Cellular',  price: 14499 },
    ],
  },
  {
    id: 'tb2', cat: 'tablet', brand: 'Apple', name: 'iPad Pro 11" M4',
    price: 9499, emoji: '📱', badge: 'novo',
    desc: 'Chip M4, tela Ultra Retina XDR OLED 11" ProMotion, o iPad mais fino da história (5.1mm)',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-11inch?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '256gb-wifi', label: '256 GB Wi-Fi', price: 9499 },
      { key: '512gb-wifi', label: '512 GB Wi-Fi', price: 11499 },
    ],
  },
  {
    id: 'tb3', cat: 'tablet', brand: 'Apple', name: 'iPad Air 13" M3',
    price: 7499, emoji: '📱', badge: null,
    desc: 'Chip M3, tela Liquid Retina 13" 2732×2048, compatível com Apple Pencil Pro',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-202405-13inch?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb-wifi', label: '128 GB Wi-Fi', price: 7499 },
      { key: '256gb-wifi', label: '256 GB Wi-Fi', price: 8999 },
    ],
  },
  {
    id: 'tb4', cat: 'tablet', brand: 'Apple', name: 'iPad Air 11" M3',
    price: 5499, emoji: '📱', badge: 'popular',
    desc: 'Chip M3, tela Liquid Retina 11" 2360×1640, ultra-leve 462g com 10h de bateria',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-202405-11inch?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb-wifi', label: '128 GB Wi-Fi', price: 5499 },
      { key: '256gb-wifi', label: '256 GB Wi-Fi', price: 6999 },
    ],
  },
  {
    id: 'tb5', cat: 'tablet', brand: 'Apple', name: 'iPad mini 7ª geração',
    price: 4499, emoji: '📱', badge: null,
    desc: 'Chip A17 Pro, tela Liquid Retina 8.3" 2266×1488, Apple Intelligence e Apple Pencil Pro',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '128gb-wifi', label: '128 GB Wi-Fi',          price: 4499 },
      { key: '128gb-cell', label: '128 GB Wi-Fi + Cellular', price: 5499 },
    ],
  },
  {
    id: 'tb6', cat: 'tablet', brand: 'Apple', name: 'iPad 10ª geração',
    price: 3499, emoji: '📱', badge: 'popular',
    desc: 'Chip A14 Bionic, tela Liquid Retina 10.9" com True Tone, Wi-Fi 6 e câmera 12MP',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-wifi-select-202210?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '64gb-wifi',  label: '64 GB Wi-Fi',  price: 3499 },
      { key: '256gb-wifi', label: '256 GB Wi-Fi', price: 4999 },
    ],
  },

  // Samsung — Galaxy Tab S9
  {
    id: 'tb7', cat: 'tablet', brand: 'Samsung', name: 'Galaxy Tab S9 Ultra',
    price: 8999, emoji: '📱', badge: null,
    desc: 'Snapdragon 8 Gen 2, tela Dynamic AMOLED 14.6" 120Hz, S Pen incluída, 12GB RAM',
    img: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'tb8', cat: 'tablet', brand: 'Samsung', name: 'Galaxy Tab S9+',
    price: 6499, emoji: '📱', badge: null,
    desc: 'Snapdragon 8 Gen 2, tela Dynamic AMOLED 12.4" 120Hz, S Pen incluída, 12GB RAM',
    img: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'tb9', cat: 'tablet', brand: 'Samsung', name: 'Galaxy Tab S9',
    price: 4999, emoji: '📱', badge: 'popular',
    desc: 'Snapdragon 8 Gen 2, tela Dynamic AMOLED 11" 120Hz, S Pen incluída, certificação IP68',
    img: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'tb10', cat: 'tablet', brand: 'Samsung', name: 'Galaxy Tab S9 FE',
    price: 2999, emoji: '📱', badge: 'popular',
    desc: 'Exynos 1380, tela LCD 10.9" 90Hz, bateria 8000mAh e S Pen incluída',
    img: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=400&q=80',
  },

  // ─── WEARABLES ────────────────────────────────
  // Apple Watch (6) + Samsung Galaxy Watch (6)

  // Apple Watch
  {
    id: 'w1', cat: 'wearable', brand: 'Apple', name: 'Apple Watch Ultra 2 49mm',
    price: 7299, emoji: '⌚', badge: null,
    desc: 'Caixa de titânio 49mm, tela 2000 nits, GPS dupla frequência e até 60h de bateria',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-ultra-2-case-49-titanium-natural-select-202309?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: 'natural', label: 'Titânio Natural', price: 7299 },
      { key: 'preto',   label: 'Titânio Preto',   price: 7299 },
    ],
  },
  {
    id: 'w2', cat: 'wearable', brand: 'Apple', name: 'Apple Watch Series 10 46mm',
    price: 4299, emoji: '⌚', badge: 'popular',
    desc: 'O Apple Watch mais fino, tela 30% maior, sensor ECG e detecção de apneia do sono',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series-10-case-select-202409-46?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '46mm-al',  label: '46mm Alumínio', price: 4299 },
      { key: '46mm-tit', label: '46mm Titânio',  price: 5299 },
    ],
  },
  {
    id: 'w3', cat: 'wearable', brand: 'Apple', name: 'Apple Watch Series 10 42mm',
    price: 3899, emoji: '⌚', badge: 'popular',
    desc: 'Tela Always-On Retina, rastreamento avançado de saúde e sono, novo sensor de apneia',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series-10-case-select-202409-42?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '42mm-al',  label: '42mm Alumínio', price: 3899 },
      { key: '42mm-tit', label: '42mm Titânio',  price: 4899 },
    ],
  },
  {
    id: 'w4', cat: 'wearable', brand: 'Apple', name: 'Apple Watch SE 2ª geração 44mm',
    price: 2899, emoji: '⌚', badge: null,
    desc: 'Chip S8, detecção de acidente, rastreamento de sono e ECG, alumínio reciclado',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-se-2022-case-select-44?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'w5', cat: 'wearable', brand: 'Apple', name: 'Apple Watch SE 2ª geração 40mm',
    price: 2499, emoji: '⌚', badge: 'popular',
    desc: 'O Apple Watch mais acessível com os recursos essenciais de saúde e fitness',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-se-2022-case-select-40?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'w6', cat: 'wearable', brand: 'Apple', name: 'AirTag Pack 4 unidades',
    price: 799, emoji: '🔵', badge: 'popular',
    desc: 'Rastreador preciso com chip U1 para Precision Finding e rede Find My com 1 bilhão de dispositivos',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-4pack-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90',
  },

  // Samsung Galaxy Watch
  {
    id: 'w7', cat: 'wearable', brand: 'Samsung', name: 'Galaxy Watch Ultra 47mm',
    price: 3999, emoji: '⌚', badge: 'novo',
    desc: 'Titanium 47mm, tela Super AMOLED 1.5" 3000 nits, 60h bateria e temperatura corporal',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'w8', cat: 'wearable', brand: 'Samsung', name: 'Galaxy Watch 7 44mm',
    price: 2499, emoji: '⌚', badge: 'popular',
    desc: 'Exynos W1000, tela Super AMOLED 1.5", BioActive sensor 3-em-1 e índice de energia',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'w9', cat: 'wearable', brand: 'Samsung', name: 'Galaxy Watch 7 40mm',
    price: 2199, emoji: '⌚', badge: null,
    desc: 'Exynos W1000, tela Super AMOLED 1.3", monitoramento avançado de saúde e Wear OS 5',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'w10', cat: 'wearable', brand: 'Samsung', name: 'Galaxy Watch 6 Classic 47mm',
    price: 1999, emoji: '⌚', badge: 'oferta',
    desc: 'Anel giratório físico, tela Super AMOLED 1.5", ECG e detecção de FA — geração anterior',
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'w11', cat: 'wearable', brand: 'Samsung', name: 'Galaxy Watch FE 40mm',
    price: 1499, emoji: '⌚', badge: 'popular',
    desc: 'O Galaxy Watch mais acessível com monitoramento de saúde essencial e Wear OS',
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'w12', cat: 'wearable', brand: 'Samsung', name: 'Galaxy Ring Tamanho 9',
    price: 1699, emoji: '💍', badge: 'novo',
    desc: 'Anel inteligente de titânio com monitoramento contínuo de saúde, sono e energia',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80',
  },

  // ─── ÁUDIO ────────────────────────────────────
  // Sony (6) + Apple (6)

  // Sony
  {
    id: 'a1', cat: 'audio', brand: 'Sony', name: 'Sony WH-1000XM5',
    price: 1699, emoji: '🎧', badge: 'popular',
    desc: 'Cancelamento de ruído líder da indústria com 8 microfones, 30h de bateria e codec LDAC',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a2', cat: 'audio', brand: 'Sony', name: 'Sony WF-1000XM5',
    price: 1499, emoji: '🎧', badge: 'popular',
    desc: 'TWS com melhor ANC do mercado, chip V2 + QN2e, 8h de bateria e codec LDAC',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a3', cat: 'audio', brand: 'Sony', name: 'Sony WH-CH720N',
    price: 699, emoji: '🎧', badge: 'popular',
    desc: 'Over-ear ultraleve 192g com ANC, 35h de bateria e suporte a Multipoint',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a4', cat: 'audio', brand: 'Sony', name: 'Sony LinkBuds S',
    price: 599, emoji: '🎧', badge: null,
    desc: 'TWS ultracompacto com ANC e Ambient Sound Mode, 6h de bateria e IPX4',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a5', cat: 'audio', brand: 'Sony', name: 'Sony SRS-XB100 Bluetooth',
    price: 349, emoji: '🔊', badge: 'popular',
    desc: 'Caixa Bluetooth compacta com IP67, 16h de bateria e som 360° nítido',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'a6', cat: 'audio', brand: 'Sony', name: 'Sony HT-A3000 Soundbar 3.1ch',
    price: 3299, emoji: '🔊', badge: null,
    desc: 'Soundbar 3.1ch com Dolby Atmos, DTS:X, 360 Spatial Sound e compatível com Alexa',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80',
  },

  // Apple
  {
    id: 'a7', cat: 'audio', brand: 'Apple', name: 'AirPods Pro 2ª geração USB-C',
    price: 2099, emoji: '🎧', badge: 'popular',
    desc: 'Chip H2, ANC adaptativo 2x melhor, Transparência Adaptativa e chip U1 para Precision Finding',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'a8', cat: 'audio', brand: 'Apple', name: 'AirPods 4 com ANC',
    price: 1599, emoji: '🎧', badge: 'novo',
    desc: 'Novo design com ANC, chip H2, Transparência Adaptativa e case com USB-C',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-select-anc-202409?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'a9', cat: 'audio', brand: 'Apple', name: 'AirPods 4',
    price: 1199, emoji: '🎧', badge: 'popular',
    desc: 'Novo design refeito de base, chip H2, som personalizado e até 30h com o case',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'a10', cat: 'audio', brand: 'Apple', name: 'AirPods 3ª geração',
    price: 899, emoji: '🎧', badge: 'oferta',
    desc: 'Audio espacial, resistência à água IPX4 e carregamento MagSafe — ótimo custo-benefício',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-3rd-gen-select?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'a11', cat: 'audio', brand: 'Apple', name: 'AirPods Max USB-C Midnight',
    price: 4799, emoji: '🎧', badge: null,
    desc: 'Over-ear premium com ANC adaptativo, Audio Espacial Personalizado e chip H2',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'a12', cat: 'audio', brand: 'Apple', name: 'HomePod 2ª geração',
    price: 2699, emoji: '🔊', badge: null,
    desc: 'Chip S9, som 360° com Beamforming, Spatial Audio, Matter Hub e sensor de temperatura',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-202301-white?wid=400&hei=400&fmt=jpeg&qlt=90',
  },

  // ─── MONITORES ────────────────────────────────
  // LG (6) + Samsung (6)

  // LG
  {
    id: 'm1', cat: 'monitor', brand: 'LG', name: 'LG 27" UltraGear 27GS95QE OLED 240Hz',
    price: 3299, emoji: '🖥️', badge: null,
    desc: 'OLED 240Hz com 0.03ms GtG, 98.5% DCI-P3, HDMI 2.1 e DisplayPort 1.4',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm2', cat: 'monitor', brand: 'LG', name: 'LG 32" UltraGear 32GS95UE OLED 240Hz',
    price: 5499, emoji: '🖥️', badge: 'novo',
    desc: 'OLED 32" com Dual-Hz (4K 144Hz / FHD 240Hz), 0.03ms e HDR10',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm3', cat: 'monitor', brand: 'LG', name: 'LG 34" UltraWide 34WP65C-B',
    price: 2099, emoji: '🖥️', badge: null,
    desc: 'UltraWide 21:9 VA curvo 1500R com FreeSync Premium, 160Hz e HDR10',
    img: 'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm4', cat: 'monitor', brand: 'LG', name: 'LG 27" 27UP850N-W 4K IPS USB-C',
    price: 1999, emoji: '🖥️', badge: null,
    desc: '4K IPS com USB-C 96W, hub USB 3.0, sRGB 99% e compatível com Mac e PC',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm5', cat: 'monitor', brand: 'LG', name: 'LG 27" 27MQ400B QHD 75Hz',
    price: 1299, emoji: '🖥️', badge: 'popular',
    desc: 'QHD 2560×1440 IPS com sRGB 99%, painel fino e FreeSync — ótimo para home office',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm6', cat: 'monitor', brand: 'LG', name: 'LG 24" 24MQ400B FHD 100Hz',
    price: 799, emoji: '🖥️', badge: 'popular',
    desc: 'FHD IPS 100Hz com AMD FreeSync, sRGB 99%, bordas ultra-finas e ajuste de inclinação',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },

  // Samsung
  {
    id: 'm7', cat: 'monitor', brand: 'Samsung', name: 'Samsung Odyssey G9 49" DQHD 240Hz',
    price: 7499, emoji: '🖥️', badge: null,
    desc: 'Curvo 1000R DQHD 5120×1440, VA 240Hz, HDR1000, HDMI 2.1 e DisplayPort 1.4',
    img: 'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm8', cat: 'monitor', brand: 'Samsung', name: 'Samsung Odyssey OLED G8 32" 175Hz',
    price: 4499, emoji: '🖥️', badge: 'popular',
    desc: 'OLED 32" 4K 175Hz com 0.1ms GtG, 1000000:1 contraste, HDR True Black 400 e Smart TV',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm9', cat: 'monitor', brand: 'Samsung', name: 'Samsung Odyssey G6 32" QHD 240Hz',
    price: 2499, emoji: '🖥️', badge: 'popular',
    desc: 'Curvo 1000R VA 32" QHD 240Hz com HDR600, FreeSync Premium Pro',
    img: 'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm10', cat: 'monitor', brand: 'Samsung', name: 'Samsung Smart Monitor M8 32" 4K',
    price: 2999, emoji: '🖥️', badge: null,
    desc: '4K VA 32" com Smart TV integrada, AirPlay 2, DeX wireless e hub USB-C 65W',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm11', cat: 'monitor', brand: 'Samsung', name: 'Samsung 27" S27C432GAU QHD 100Hz',
    price: 1499, emoji: '🖥️', badge: 'popular',
    desc: 'QHD IPS 100Hz com AMD FreeSync, USB-C e design slim Eye-Saver Mode',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'm12', cat: 'monitor', brand: 'Samsung', name: 'Samsung 24" S24C360GAU FHD 100Hz',
    price: 799, emoji: '🖥️', badge: 'popular',
    desc: 'FHD IPS 100Hz com AMD FreeSync, ajuste de altura, inclinação e Eye-Saver Mode',
    img: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80',
  },

  // ─── COMPONENTES PC ───────────────────────────
  // NVIDIA GPUs (5) + AMD GPUs (4) + Intel CPUs (3) + AMD CPUs (2)

  // NVIDIA — GeForce RTX 5000 + 4000
  {
    id: 'cp1', cat: 'componente', brand: 'NVIDIA', name: 'GeForce RTX 5090 32GB GDDR7',
    price: 15999, emoji: '🎮', badge: 'novo',
    desc: 'GPU mais poderosa da geração Blackwell, 32GB GDDR7, 600W TDP, DLSS 4 Multi Frame Gen',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp2', cat: 'componente', brand: 'NVIDIA', name: 'GeForce RTX 5080 16GB GDDR7',
    price: 8999, emoji: '🎮', badge: 'novo',
    desc: 'RTX 5080 com 16GB GDDR7, 360W TDP, ray tracing 4ª geração e DLSS 4 Multi Frame Gen',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp3', cat: 'componente', brand: 'NVIDIA', name: 'GeForce RTX 5070 Ti 16GB',
    price: 5999, emoji: '🎮', badge: 'novo',
    desc: 'RTX 5070 Ti com 16GB GDDR7, desempenho 4K de ponta com DLSS 4 e 300W TDP',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp4', cat: 'componente', brand: 'NVIDIA', name: 'GeForce RTX 5070 12GB',
    price: 4499, emoji: '🎮', badge: 'novo',
    desc: 'Desempenho RTX 4090 em 1080p/1440p com DLSS 4, 12GB GDDR7 e 250W TDP',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp5', cat: 'componente', brand: 'NVIDIA', name: 'GeForce RTX 4060 8GB',
    price: 2199, emoji: '🎮', badge: 'oferta',
    desc: 'Excelente para 1080p com DLSS 3, ray tracing e consumo de 115W — melhor custo-benefício',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },

  // AMD — Radeon RX 9000 + 7000
  {
    id: 'cp6', cat: 'componente', brand: 'AMD', name: 'Radeon RX 9070 XT 16GB',
    price: 4999, emoji: '🎮', badge: 'novo',
    desc: 'GPU RDNA 4 com 16GB GDDR6, FSR 4, ray tracing melhorado e 304W TDP',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp7', cat: 'componente', brand: 'AMD', name: 'Radeon RX 9070 16GB',
    price: 3999, emoji: '🎮', badge: 'novo',
    desc: 'GPU RDNA 4 com 16GB GDDR6, excelente custo-benefício para 1440p e FSR 4',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp8', cat: 'componente', brand: 'AMD', name: 'Radeon RX 7900 XTX 24GB',
    price: 6999, emoji: '🎮', badge: null,
    desc: 'GPU topo da geração RDNA 3 com 24GB GDDR6, excelente para 4K e workloads criativos',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp9', cat: 'componente', brand: 'AMD', name: 'Radeon RX 7600 8GB',
    price: 1799, emoji: '🎮', badge: 'popular',
    desc: 'GPU RDNA 3 com 8GB GDDR6 para 1080p eficiente, FSR 3 e consumo de 165W',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80',
  },

  // Intel — Core Ultra 200K
  {
    id: 'cp10', cat: 'componente', brand: 'Intel', name: 'Intel Core Ultra 9 285K 24 Núcleos',
    price: 2999, emoji: '⚙️', badge: null,
    desc: 'Arrow Lake 24C/24T (8P+16E), 5.7GHz turbo, PCIe 5.0 sem hyperthreading e TDP 125W',
    img: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp11', cat: 'componente', brand: 'Intel', name: 'Intel Core Ultra 7 265K 20 Núcleos',
    price: 1999, emoji: '⚙️', badge: 'popular',
    desc: 'Arrow Lake 20C/20T (8P+12E), 5.5GHz turbo, PCIe 5.0 e melhor eficiência energética',
    img: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp12', cat: 'componente', brand: 'Intel', name: 'Intel Core Ultra 5 245K 14 Núcleos',
    price: 1499, emoji: '⚙️', badge: 'popular',
    desc: 'Arrow Lake 14C/14T, 5.2GHz turbo, PCIe 5.0 — melhor custo-benefício Intel atual',
    img: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=400&q=80',
  },

  // AMD — Ryzen 9000
  {
    id: 'cp13', cat: 'componente', brand: 'AMD', name: 'AMD Ryzen 9 9950X 16 Núcleos',
    price: 3999, emoji: '⚙️', badge: null,
    desc: 'Zen 5 16C/32T, 5.7GHz turbo, PCIe 5.0, AM5, líder em desempenho multithread',
    img: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'cp14', cat: 'componente', brand: 'AMD', name: 'AMD Ryzen 7 9700X 8 Núcleos',
    price: 1799, emoji: '⚙️', badge: 'popular',
    desc: 'Zen 5 8C/16T, 5.5GHz turbo, 65W TDP, AM5, excelente para gaming e produtividade',
    img: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=400&q=80',
  },

  // ─── PERIFÉRICOS ──────────────────────────────
  // Logitech (7) + Apple (5)

  // Logitech
  {
    id: 'p1', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Keys S',
    price: 749, emoji: '⌨️', badge: 'popular',
    desc: 'Teclado low-profile com retroiluminação inteligente, gestos Smart Actions e Logi Bolt',
    img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p2', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Master 3S',
    price: 599, emoji: '🖱️', badge: 'popular',
    desc: 'Mouse ergonômico com scroll eletromagnético silencioso, sensor 8000 DPI e Logi Bolt',
    img: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p3', cat: 'periferico', brand: 'Logitech', name: 'Logitech G Pro X Superlight 2',
    price: 799, emoji: '🖱️', badge: 'popular',
    desc: 'Mouse gaming mais leve da Logitech — 60g, sensor HERO 2 25600 DPI, sem fio 70h',
    img: 'https://images.unsplash.com/photo-1629429407759-01cd3c1f0ac1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p4', cat: 'periferico', brand: 'Logitech', name: 'Logitech G502 X Plus Wireless',
    price: 649, emoji: '🖱️', badge: null,
    desc: 'Mouse gaming 89g, sensor LIGHTFORCE híbrido, LIGHTSPEED wireless e RGB LIGHTSYNC',
    img: 'https://images.unsplash.com/photo-1629429407759-01cd3c1f0ac1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p5', cat: 'periferico', brand: 'Logitech', name: 'Logitech MX Anywhere 3S',
    price: 449, emoji: '🖱️', badge: null,
    desc: 'Mouse compacto para qualquer superfície, scroll eletromagnético e 70 dias de bateria',
    img: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p6', cat: 'periferico', brand: 'Logitech', name: 'Logitech G435 Headset Wireless',
    price: 299, emoji: '🎮', badge: 'popular',
    desc: 'Headset gaming ultraleve 165g, LIGHTSPEED wireless, Bluetooth e até 18h de bateria',
    img: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'p7', cat: 'periferico', brand: 'Logitech', name: 'Logitech C920e Webcam 1080p',
    price: 499, emoji: '📷', badge: null,
    desc: 'Webcam 1080p 30fps com foco automático, campo visual 78° e microfone duplo estéreo',
    img: 'https://images.unsplash.com/photo-1587202372634-3a851b08f2ff?auto=format&fit=crop&w=400&q=80',
  },

  // Apple
  {
    id: 'p8', cat: 'periferico', brand: 'Apple', name: 'Magic Keyboard Touch ID PT',
    price: 999, emoji: '⌨️', badge: 'popular',
    desc: 'Layout português, Touch ID, teclas de baixo perfil, recarregável e Bluetooth 5.0',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magic-keyboard-touch-id-select-202309?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'p9', cat: 'periferico', brand: 'Apple', name: 'Magic Keyboard Touch ID Numérico PT',
    price: 1199, emoji: '⌨️', badge: null,
    desc: 'Magic Keyboard com teclado numérico completo, Touch ID e layout português Brasil',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magic-keyboard-touch-id-select-202309-numeric?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'p10', cat: 'periferico', brand: 'Apple', name: 'Magic Mouse',
    price: 699, emoji: '🖱️', badge: 'popular',
    desc: 'Surface Multi-Touch completa, gestos nativos do macOS, Bluetooth 5.0 e Lightning',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magic-mouse-select?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'p11', cat: 'periferico', brand: 'Apple', name: 'Magic Trackpad',
    price: 999, emoji: '🖱️', badge: null,
    desc: 'Trackpad Force Touch com Surface Multi-Touch, gestos avançados e 3D Touch',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magic-trackpad-select?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'p12', cat: 'periferico', brand: 'Apple', name: 'Apple Studio Display 27" 5K',
    price: 12499, emoji: '🖥️', badge: null,
    desc: 'Tela Retina 5K 27" com True Tone, câmera 12MP Center Stage, 3 USB-C e Thunderbolt 3',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/studio-display-27-retina-5k-display?wid=400&hei=400&fmt=jpeg&qlt=90',
  },

  // ─── CASA INTELIGENTE ─────────────────────────
  // Amazon Echo/Alexa (foco principal, 10) + Google Nest (4)

  // Amazon Echo — Alexa
  {
    id: 'ci1', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Pop',
    price: 279, emoji: '🏠', badge: 'popular',
    desc: 'Alto-falante inteligente compacto com Alexa, som direcional e design semi-esférico',
    img: 'https://m.media-amazon.com/images/I/71c7XjnDxlL._AC_SL400_.jpg',
  },
  {
    id: 'ci2', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Dot 5ª geração',
    price: 349, emoji: '🏠', badge: 'popular',
    desc: 'Echo mais popular com som 2x mais alto que a geração anterior e sensor de temperatura',
    img: 'https://m.media-amazon.com/images/I/71xoR7anEEL._AC_SL400_.jpg',
  },
  {
    id: 'ci3', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Dot 5ª geração com Relógio',
    price: 449, emoji: '🏠', badge: null,
    desc: 'Echo Dot com display LED para hora, alarmes, temperatura e todo ecossistema Alexa',
    img: 'https://m.media-amazon.com/images/I/71ABRMHWwGL._AC_SL400_.jpg',
  },
  {
    id: 'ci4', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo 4ª geração',
    price: 699, emoji: '🏠', badge: 'popular',
    desc: 'Som premium com subwoofer integrado, Zigbee Hub e Matter — controla toda sua casa',
    img: 'https://m.media-amazon.com/images/I/716a4O4qPLL._AC_SL400_.jpg',
  },
  {
    id: 'ci5', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Show 5 3ª geração',
    price: 699, emoji: '🏠', badge: 'popular',
    desc: 'Tela 5.5" HD com Alexa, câmera 2MP para chamadas de vídeo e modo Relógio Ambiental',
    img: 'https://m.media-amazon.com/images/I/71e7Lc0hbbL._AC_SL400_.jpg',
  },
  {
    id: 'ci6', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Show 8 3ª geração',
    price: 999, emoji: '🏠', badge: 'popular',
    desc: 'Tela 8" HD com câmera 13MP auto-enquadramento, som espacial e central da casa inteligente',
    img: 'https://m.media-amazon.com/images/I/7152JzRqZdL._AC_SL400_.jpg',
  },
  {
    id: 'ci7', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Show 10 3ª geração',
    price: 1499, emoji: '🏠', badge: null,
    desc: 'Tela 10.1" HD que gira para te seguir, câmera 13MP e hub Zigbee integrado',
    img: 'https://m.media-amazon.com/images/I/71cHbVOVBRL._AC_SL400_.jpg',
  },
  {
    id: 'ci8', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Show 15 2ª geração',
    price: 1999, emoji: '🏠', badge: null,
    desc: 'Tela 15.6" Full HD para a parede, chip Fire TV integrado e visual inteligente da casa',
    img: 'https://m.media-amazon.com/images/I/71kc9HQIJGL._AC_SL400_.jpg',
  },
  {
    id: 'ci9', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Echo Hub',
    price: 1299, emoji: '🏠', badge: 'novo',
    desc: 'Painel tátil 8" para controlar todos os dispositivos da casa — Matter, Zigbee, Alexa',
    img: 'https://m.media-amazon.com/images/I/61O5hH7YXUL._AC_SL400_.jpg',
  },
  {
    id: 'ci10', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Smart Plug',
    price: 149, emoji: '🔌', badge: 'popular',
    desc: 'Tomada inteligente com controle por voz via Alexa — agende e automatize qualquer aparelho',
    img: 'https://m.media-amazon.com/images/I/61VEn8C3hhL._AC_SL400_.jpg',
  },

  {
    id: 'ci10b', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Ring Video Doorbell 4',
    price: 699, emoji: '🔔', badge: 'popular',
    desc: 'Câmera de campainha com visão em cores, detecção de movimento e integração Alexa',
    img: 'https://m.media-amazon.com/images/I/51yxJAqjPML._AC_SL400_.jpg',
  },
  {
    id: 'ci10c', cat: 'casa-inteligente', brand: 'Amazon', name: 'Amazon Smart Bulb Branca',
    price: 89, emoji: '💡', badge: 'popular',
    desc: 'Lâmpada inteligente Wi-Fi com controle por voz via Alexa, sem hub necessário',
    img: 'https://m.media-amazon.com/images/I/61TkwsD88PL._AC_SL400_.jpg',
  },

  // Google Nest
  {
    id: 'ci11', cat: 'casa-inteligente', brand: 'Google', name: 'Google Nest Mini 2ª geração',
    price: 299, emoji: '🏠', badge: 'popular',
    desc: 'Alto-falante inteligente compacto com Google Assistente, som nítido e design de parede',
    img: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'ci12', cat: 'casa-inteligente', brand: 'Google', name: 'Google Nest Audio',
    price: 599, emoji: '🏠', badge: null,
    desc: 'Alto-falante inteligente com som 75% mais alto que o Mini e Google Assistente',
    img: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'ci13', cat: 'casa-inteligente', brand: 'Google', name: 'Google Nest Hub 2ª geração',
    price: 799, emoji: '🏠', badge: null,
    desc: 'Tela 7" com Google Assistente, monitoramento de sono por radar e controle de casa inteligente',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'ci14', cat: 'casa-inteligente', brand: 'Google', name: 'Google Nest Hub Max',
    price: 1299, emoji: '🏠', badge: null,
    desc: 'Tela 10" HD com câmera 6.5MP, reconhecimento facial, Google Fotos e casa inteligente',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
  },

  // ─── STREAMING & GAMING ───────────────────────
  // Amazon Fire TV (6) + Apple TV (2)

  // Amazon Fire TV + Kindle
  {
    id: 'st1', cat: 'streaming', brand: 'Amazon', name: 'Fire TV Stick Lite',
    price: 249, emoji: '📺', badge: 'popular',
    desc: 'Streaming Full HD com Alexa Voice Remote Lite, sem botões de TV — o mais acessível',
    img: 'https://m.media-amazon.com/images/I/61DBGmovtgL._AC_SL400_.jpg',
  },
  {
    id: 'st2', cat: 'streaming', brand: 'Amazon', name: 'Fire TV Stick 4K 3ª geração',
    price: 399, emoji: '📺', badge: 'popular',
    desc: 'Streaming 4K HDR com Dolby Vision/Atmos, Wi-Fi 6, Alexa e botões de TV incluídos',
    img: 'https://m.media-amazon.com/images/I/71NYRcYVFGL._AC_SL400_.jpg',
  },
  {
    id: 'st3', cat: 'streaming', brand: 'Amazon', name: 'Fire TV Stick 4K Max 3ª geração',
    price: 499, emoji: '📺', badge: 'popular',
    desc: 'Streaming 4K Max com Wi-Fi 6E, processador 2x mais rápido e Ambient Experience',
    img: 'https://m.media-amazon.com/images/I/61lkd0wYvZL._AC_SL400_.jpg',
  },
  {
    id: 'st4', cat: 'streaming', brand: 'Amazon', name: 'Fire TV Cube 3ª geração',
    price: 799, emoji: '📺', badge: null,
    desc: 'Streaming 4K sem fio com Alexa hands-free embutida, Wi-Fi 6E e processador octa-core',
    img: 'https://m.media-amazon.com/images/I/71GIBr7FHIL._AC_SL400_.jpg',
  },
  {
    id: 'st5', cat: 'streaming', brand: 'Amazon', name: 'Kindle Paperwhite 16GB',
    price: 699, emoji: '📖', badge: 'popular',
    desc: 'E-reader com tela 6.8" sem reflexo, IPX8, luz ajustável e meses de bateria',
    img: 'https://m.media-amazon.com/images/I/71g4M9fIeJL._AC_SL400_.jpg',
  },
  {
    id: 'st6', cat: 'streaming', brand: 'Amazon', name: 'Kindle Scribe 16GB',
    price: 1699, emoji: '📖', badge: 'novo',
    desc: 'E-reader e bloco de notas digital com tela 10.2" sem reflexo e caneta Basic incluída',
    img: 'https://m.media-amazon.com/images/I/61tRqnYpREL._AC_SL400_.jpg',
  },

  {
    id: 'st5b', cat: 'streaming', brand: 'Amazon', name: 'Kindle Paperwhite Signature Edition 32GB',
    price: 999, emoji: '📖', badge: null,
    desc: 'E-reader premium com tela 6.8" auto-ajuste de brilho, 32GB e carregamento wireless',
    img: 'https://m.media-amazon.com/images/I/81PQpNqNECL._AC_SL400_.jpg',
  },
  {
    id: 'st5c', cat: 'streaming', brand: 'Amazon', name: 'Kindle 11ª geração 16GB',
    price: 449, emoji: '📖', badge: 'popular',
    desc: 'O Kindle mais leve com tela 6" antirreflexo, luz frontal ajustável e semanas de bateria',
    img: 'https://m.media-amazon.com/images/I/61L1sYJXJjL._AC_SL400_.jpg',
  },

  // Apple TV
  {
    id: 'st7', cat: 'streaming', brand: 'Apple', name: 'Apple TV 4K 128GB Wi-Fi+Ethernet',
    price: 1299, emoji: '📺', badge: 'popular',
    desc: 'Chip A15 Bionic, streaming 4K HDR com Dolby Vision, Siri Remote e Thread HomeKit',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-202210?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'st8', cat: 'streaming', brand: 'Apple', name: 'Apple TV 4K 64GB Wi-Fi',
    price: 1099, emoji: '📺', badge: null,
    desc: 'Chip A15 Bionic, streaming 4K HDR Dolby Vision, Siri Remote e integração total Apple',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-202210?wid=400&hei=400&fmt=jpeg&qlt=90',
  },

  // ─── MOBÍLIA ──────────────────────────────────
  // DT3 (4) + FlexForm/Acevida/ELG/Ergotron (4)

  // DT3
  {
    id: 'v1', cat: 'movel', brand: 'DT3', name: 'DT3 Office Modena Elite',
    price: 2499, emoji: '🪑', badge: 'popular',
    desc: 'Cadeira executiva com apoio lombar 4D, braço 4D, pistão classe 4 e espuma D45',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v2', cat: 'movel', brand: 'DT3', name: 'DT3 Sports AT5 Gaming',
    price: 2199, emoji: '🪑', badge: null,
    desc: 'Cadeira gamer com reclinação 180°, apoio cervical e lombar, pistão classe 4 e couro PU',
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v3', cat: 'movel', brand: 'DT3', name: 'DT3 Sports Gamma',
    price: 1299, emoji: '🪑', badge: null,
    desc: 'Cadeira gamer com estrutura de aço, reclinação 90-155°, apoio 4D e almofadas removíveis',
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v4', cat: 'movel', brand: 'DT3', name: 'DT3 Sports GT Gamer',
    price: 999, emoji: '🪑', badge: 'popular',
    desc: 'Cadeira gamer entrada com reclinação 90-135°, suporte lombar e apoios de braço ajustáveis',
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
  },

  // Mesas e suportes
  {
    id: 'v5', cat: 'movel', brand: 'FlexForm', name: 'Mesa Flexform Pro 1.60m',
    price: 1599, emoji: '🪵', badge: 'popular',
    desc: 'Mesa de escritório 1.60m com tampo MDF 25mm, bordas arredondadas e pés de aço',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v6', cat: 'movel', brand: 'Acevida', name: 'Standing Desk Acevida 1.40m',
    price: 2299, emoji: '🪵', badge: null,
    desc: 'Mesa motorizada elétrica com 4 memórias de altura, tampo MDF 25mm e estrutura dupla',
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v7', cat: 'movel', brand: 'ELG', name: 'ELG Suporte Duplo Monitor F160N',
    price: 299, emoji: '🦾', badge: 'popular',
    desc: 'Suporte articulado para 2 monitores de até 32", braço com giro 360° e gestão de cabos',
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'v8', cat: 'movel', brand: 'Ergotron', name: 'Ergotron LX Braço Monitor',
    price: 699, emoji: '🦾', badge: null,
    desc: 'Braço articulado premium para monitores de até 34"/11kg, VESA 75/100mm e gestão de cabos',
    img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80',
  },

  // ─── ACESSÓRIOS ───────────────────────────────
  // Anker (4) + Apple/CalDigit/Elgato/Belkin (4)

  // Anker
  {
    id: 'h1', cat: 'pc', brand: 'Anker', name: 'Anker 727 GaNPrime 100W',
    price: 399, emoji: '⚡', badge: 'popular',
    desc: 'Carregador GaN 100W com 4 portas (2×USB-C + 2×USB-A), compacto para 3 dispositivos simultâneos',
    img: 'https://images.unsplash.com/photo-1583863788734-7f8e616d2c24?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h2', cat: 'pc', brand: 'Anker', name: 'Anker 7-in-1 USB-C Hub A8346',
    price: 299, emoji: '🔌', badge: 'popular',
    desc: '7 portas: HDMI 4K, 2×USB-A 3.0, USB-C 85W PD, SD/microSD — compacto para viagem',
    img: 'https://images.unsplash.com/photo-1551808525-99b27fcef1f0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h3', cat: 'pc', brand: 'Anker', name: 'Anker PowerExpand 13-in-1 Dock A8396',
    price: 699, emoji: '🔌', badge: null,
    desc: 'Dock 13 portas: 2×HDMI 4K, DP, USB-C 85W PD, 4×USB-A, SD, Ethernet e passagem 85W',
    img: 'https://images.unsplash.com/photo-1551808525-99b27fcef1f0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h4', cat: 'pc', brand: 'Anker', name: 'Anker MagSafe Power Bank 10000mAh',
    price: 449, emoji: '🔋', badge: 'novo',
    desc: 'Bateria portátil MagSafe 10000mAh com carregamento 15W wireless e USB-C 20W',
    img: 'https://images.unsplash.com/photo-1583394293214-be02f789ce72?auto=format&fit=crop&w=400&q=80',
  },

  // Apple / CalDigit / Elgato / Belkin
  {
    id: 'h5', cat: 'pc', brand: 'CalDigit', name: 'CalDigit TS4 Thunderbolt 4 Hub',
    price: 2799, emoji: '🔌', badge: null,
    desc: 'Hub Thunderbolt 4 com 18 portas, 98W Power Delivery, 3×USB-C 10Gbps e Ethernet 2.5G',
    img: 'https://images.unsplash.com/photo-1551808525-99b27fcef1f0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h6', cat: 'pc', brand: 'Apple', name: 'Apple MagSafe Charger 15W USB-C',
    price: 199, emoji: '⚡', badge: 'popular',
    desc: 'Carregador MagSafe oficial com cabo USB-C 1m, até 15W no iPhone 12 ou posterior',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3LL_A?wid=400&hei=400&fmt=jpeg&qlt=90',
  },
  {
    id: 'h7', cat: 'pc', brand: 'Elgato', name: 'Elgato Thunderbolt 4 Dock',
    price: 1999, emoji: '🔌', badge: null,
    desc: 'Dock Thunderbolt 4 com 12 portas, 96W charging, 2×Thunderbolt 4, 3×USB-A e Ethernet 2.5G',
    img: 'https://images.unsplash.com/photo-1551808525-99b27fcef1f0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h8', cat: 'pc', brand: 'Belkin', name: 'Belkin MagSafe Boost Charge Pro 3-em-1',
    price: 699, emoji: '⚡', badge: 'popular',
    desc: 'Carregador 3-em-1 para iPhone (MagSafe 15W), Apple Watch e AirPods simultâneos',
    img: 'https://images.unsplash.com/photo-1583863788734-7f8e616d2c24?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'h9', cat: 'pc', brand: 'Apple', name: 'Apple Mac Mini M4',
    price: 7999, emoji: '🖥️', badge: 'novo',
    desc: 'Desktop compacto com chip M4, até 32GB unified memory, Thunderbolt 4 e Wi-Fi 6E',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-select-202411?wid=400&hei=400&fmt=jpeg&qlt=90',
    variants: [
      { key: '16gb-256gb', label: '16 GB / 256 GB SSD', price: 7999 },
      { key: '24gb-512gb', label: '24 GB / 512 GB SSD', price: 9999 },
      { key: '32gb-1tb',   label: '32 GB / 1 TB SSD',   price: 13999 },
    ],
  },
  {
    id: 'h10', cat: 'pc', brand: 'Samsung', name: 'Samsung 990 Pro 2TB NVMe',
    price: 749, emoji: '💾', badge: null,
    desc: 'SSD NVMe PCIe 4.0 com 7450MB/s de leitura sequencial e gerenciamento térmico inteligente',
    img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80',
  },

]

// Mapa de cores por categoria
export const CAT_COLORS = {
  smartphone:         'var(--cyan-dim)',
  notebook:           'var(--purple-dim)',
  tablet:             'var(--cyan-dim)',
  wearable:           'var(--yellow-dim)',
  audio:              'var(--yellow-dim)',
  monitor:            'var(--cyan-dim)',
  componente:         'var(--red-dim)',
  periferico:         'var(--purple-dim)',
  'casa-inteligente': 'var(--green-dim)',
  streaming:          'var(--cyan-dim)',
  movel:              'var(--green-dim)',
  pc:                 'var(--red-dim)',
}

// Categorias disponíveis
export const CATEGORIES = [
  { key: 'all',               label: 'Todos' },
  { key: 'smartphone',       label: '📱 Smartphones' },
  { key: 'notebook',         label: '💻 Notebooks' },
  { key: 'tablet',           label: '🪟 Tablets & iPads' },
  { key: 'wearable',         label: '⌚ Wearables' },
  { key: 'audio',            label: '🎧 Áudio' },
  { key: 'monitor',          label: '🖥 Monitores' },
  { key: 'componente',       label: '🎮 Componentes PC' },
  { key: 'periferico',       label: '⌨️ Periféricos' },
  { key: 'casa-inteligente', label: '🏠 Casa Inteligente' },
  { key: 'streaming',        label: '📺 Streaming & Gaming' },
  { key: 'movel',            label: '🪑 Mobília' },
  { key: 'pc',               label: '🔌 Acessórios' },
]
