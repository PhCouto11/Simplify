# Design: Catálogo Simplify v2 — 150 Produtos Reais

**Data:** 2026-04-24  
**Escopo:** Substituição completa do `src/data/products.js` com produtos reais, preços BRL atuais e nova categoria Tablets & iPads.  
**Arquivo alterado:** `src/data/products.js` apenas — nenhum componente, página ou lógica será tocada.

---

## 1. Objetivo

Tornar o catálogo da loja Simplify representativo do mercado real de eletrônicos no Brasil, com:
- Produtos que realmente existem e são vendidos no Brasil
- Preços BRL reais (não simulados)
- Foco nas marcas líderes de cada categoria (máximo 2 por categoria)
- Nova categoria Tablets & iPads
- Casa Inteligente com foco em Amazon Echo/Alexa

---

## 2. Regra geral do catálogo

- **Máximo 2 marcas por categoria** — os dois principais concorrentes do mercado brasileiro
- **150 produtos no total**, distribuídos entre 12 categorias
- **Cobertura de faixas:** entrada, mid e topo onde aplicável dentro de cada marca

---

## 3. Distribuição por categoria

| # | Categoria | Foco (top 2 marcas) | Qtd |
|---|-----------|---------------------|-----|
| 1 | 📱 Smartphones | Apple + Samsung | 16 |
| 2 | 💻 Notebooks | Apple + Dell | 14 |
| 3 | 🪟 Tablets & iPads | Apple + Samsung | 10 |
| 4 | ⌚ Wearables | Apple Watch + Samsung Galaxy Watch | 12 |
| 5 | 🎧 Áudio | Sony + Apple (AirPods) | 12 |
| 6 | 🖥 Monitores | LG + Samsung | 12 |
| 7 | 🎮 Componentes PC | NVIDIA + AMD (GPUs) · Intel + AMD (CPUs) | 14 |
| 8 | ⌨️ Periféricos | Logitech + Apple | 12 |
| 9 | 🏠 Casa Inteligente | Amazon Echo (foco principal) + Google Nest | 14 |
| 10 | 📺 Streaming & Gaming | Amazon Fire TV + Apple TV | 8 |
| 11 | 🪑 Mobília | DT3 + FlexForm/Acevida | 8 |
| 12 | 🔌 Acessórios | Anker + Apple/CalDigit | 8 |
| | **Total** | | **150** |

---

## 4. Estrutura de dados por produto

Mantém o formato atual do `PRODUCTS` array sem alteração de schema:

```js
{
  id: 's1',              // prefixo por categoria + número
  cat: 'smartphone',     // chave da categoria (sem espaços)
  brand: 'Apple',
  name: 'iPhone 16 Pro 128GB',
  price: 9299,           // preço real BRL (inteiro, sem centavos)
  emoji: '📱',
  badge: 'popular',      // null | 'popular' | 'novo' | 'oferta'
  desc: 'Chip A18 Pro, câmera 48MP com zoom 5x, titânio',
  img: 'https://images.unsplash.com/...',
}
```

### Prefixos de ID por categoria

| Categoria | Prefixo |
|-----------|---------|
| smartphone | `s` |
| notebook | `nb` |
| tablet | `tb` *(novo)* |
| wearable | `w` |
| audio | `a` |
| monitor | `m` |
| componente | `cp` |
| periferico | `p` |
| casa-inteligente | `ci` *(novo)* |
| streaming | `st` |
| movel | `v` |
| pc (acessórios) | `h` |

---

## 5. Fonte de preços

- **Apple** → preço oficial Apple Store Brasil (apple.com/br)
- **Demais marcas** → menor preço real encontrado entre Amazon.com.br, Mercado Livre e KaBuM! em Abril/2026

---

## 6. Badges

| Badge | Critério |
|-------|----------|
| `popular` | Produto mais vendido da linha no Brasil |
| `novo` | Lançado nos últimos 6 meses |
| `oferta` | Versão anterior com desconto relevante vs. linha atual |
| `null` | Produto normal do catálogo |

---

## 7. Produtos removidos

Produtos fictícios/não lançados que serão removidos:
- iPhone 17, iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17 Air
- Galaxy S26, Galaxy S26+, Galaxy S26 Ultra
- Google Pixel 10, Pixel 10 Pro, Pixel 10 Pro XL
- Motorola Razr 60 Ultra, Edge 60 Ultra, Edge 60 Pro (ainda não lançados no Brasil)

---

## 8. Nova categoria: Tablets & iPads

Adicionada ao array `CATEGORIES` em `products.js`:
```js
{ key: 'tablet', label: '🪟 Tablets & iPads' },
```

Posicionada após Notebooks na listagem.

### Produtos planejados (10)

**Apple iPad (6):**
- iPad Pro 13" M4 — R$ 12.499
- iPad Pro 11" M4 — R$ 9.499
- iPad Air 13" M3 — R$ 7.499
- iPad Air 11" M3 — R$ 5.499
- iPad mini 7 — R$ 4.499
- iPad 10ª geração — R$ 3.499

**Samsung Galaxy Tab (4):**
- Galaxy Tab S9 Ultra — R$ 8.999
- Galaxy Tab S9+ — R$ 6.499
- Galaxy Tab S9 — R$ 4.999
- Galaxy Tab S9 FE — R$ 2.999

---

## 9. Nova categoria: Casa Inteligente (foco Alexa)

### Produtos planejados (14)

**Amazon Echo — foco principal (10):**
- Echo Dot 5ª geração
- Echo Dot 5ª geração com relógio
- Echo 4ª geração
- Echo Show 5 3ª geração
- Echo Show 8 3ª geração
- Echo Show 10 3ª geração
- Echo Show 15 2ª geração
- Echo Hub
- Amazon Smart Plug
- Fire TV Cube (controle por voz Alexa)

**Google Nest (4):**
- Nest Hub 2ª geração
- Nest Hub Max
- Nest Mini 2ª geração
- Nest Audio

---

## 10. Ordem de implementação

Implementar categoria por categoria nesta ordem:
1. Smartphones (16 produtos)
2. Notebooks (14 produtos)
3. Tablets & iPads — nova categoria (10 produtos)
4. Wearables (12 produtos)
5. Áudio (12 produtos)
6. Casa Inteligente — nova categoria (14 produtos)
7. Monitores (12 produtos)
8. Componentes PC (14 produtos)
9. Periféricos (12 produtos)
10. Streaming & Gaming (8 produtos)
11. Mobília (8 produtos)
12. Acessórios (8 produtos)

---

## 11. O que NÃO muda

- Nenhum componente React
- Nenhuma página
- Nenhuma lógica de filtragem, busca ou ordenação
- Estrutura do Supabase (afiliados, wishlists)
- `storePrices.js` — continua funcionando com os novos dados
- `CATEGORIES` array — apenas adiciona `tablet` e mantém `casa-inteligente` existente
