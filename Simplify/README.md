# Setup IA — Projeto React

## 📁 Estrutura do Projeto

```
setup-ia/
├── index.html              ← HTML raiz (Vite usa esse)
├── package.json            ← dependências do projeto
├── vite.config.js          ← configuração do Vite
├── src/
│   ├── main.jsx            ← ponto de entrada (monta o React)
│   ├── App.jsx             ← componente principal (estado + navegação)
│   ├── styles.css          ← TODOS os estilos do app
│   ├── data/
│   │   └── products.js     ← catálogo de produtos (edite aqui pra adicionar)
│   ├── components/
│   │   ├── Header.jsx      ← barra de status + cabeçalho
│   │   ├── BottomNav.jsx   ← navegação inferior
│   │   ├── ScoreCard.jsx   ← card do score com animação
│   │   ├── WishlistItem.jsx ← item na lista da Home
│   │   └── ProductCard.jsx  ← card de produto na Loja
│   └── pages/
│       ├── Home.jsx         ← página Home (score + wishlist)
│       └── Loja.jsx         ← página Loja (catálogo + busca)
```

---

## 🚀 Como Rodar (passo a passo)

### 1. Instalar o Node.js (se ainda não tem)

Acesse https://nodejs.org e baixe a versão LTS.
Depois de instalar, abra o terminal e confirme:

```bash
node --version
npm --version
```

Se aparecer números de versão, está ok.

### 2. Abrir o projeto no Cursor

1. Abra o Cursor
2. Clique em **File → Open Folder**
3. Selecione a pasta `setup-ia`
4. Pronto, o projeto vai aparecer na sidebar esquerda

### 3. Abrir o terminal no Cursor

- Atalho: **Ctrl + `** (a crase, do lado do 1)
- Ou vá em **Terminal → New Terminal** no menu

### 4. Instalar dependências

No terminal do Cursor, digite:

```bash
npm install
```

Espere terminar (vai criar a pasta `node_modules`).

### 5. Rodar o app

```bash
npm run dev
```

Vai aparecer algo como:

```
  VITE v6.x.x  ready in 300ms
  ➜  Local:   http://localhost:5173/
```

**Clique no link** ou abra o navegador em `http://localhost:5173`

O app vai abrir! 🎉

---

## ✏️ Como Editar no Cursor

### Usando o Cursor AI (Ctrl + K)

O Cursor tem IA embutida. Pra pedir mudanças:

1. Selecione o trecho de código que quer mudar
2. Aperte **Ctrl + K**
3. Descreva o que quer em português mesmo

Exemplos:
- "Mude a cor do score pra verde"
- "Adicione um botão de compartilhar nesse card"
- "Crie um novo componente de loading"

### Usando o Chat do Cursor (Ctrl + L)

Pra perguntas mais complexas:

1. Aperte **Ctrl + L**
2. Pergunte o que quiser sobre o código

Exemplos:
- "Como faço pra salvar a wishlist no localStorage?"
- "Adicione a aba Perfil com dados do usuário"
- "Integre isso com o Supabase"

### Editando manualmente

Os arquivos mais importantes pra editar:

- **`src/data/products.js`** → Adicionar/remover produtos do catálogo
- **`src/styles.css`** → Mudar cores, fontes, espaçamentos
- **`src/App.jsx`** → Mudar lógica geral e navegação
- **`src/pages/Home.jsx`** → Mudar a página Home
- **`src/pages/Loja.jsx`** → Mudar a página Loja

---

## 📦 Como Adicionar Novos Produtos

Abra `src/data/products.js` e adicione um novo objeto:

```js
{ id: 'm7', cat: 'monitor', brand: 'LG', name: 'LG 32" UltraFine 4K', price: 3299, emoji: '🖥', badge: 'novo' },
```

Campos:
- **id** → único, formato: letra da categoria + número (m7, p9, a7, etc.)
- **cat** → `monitor` | `periferico` | `audio` | `movel` | `pc`
- **brand** → marca
- **name** → nome completo
- **price** → preço em reais (sem centavos)
- **emoji** → emoji visual
- **badge** → `'novo'` | `'popular'` | `null`

Salve o arquivo e o app atualiza sozinho (hot reload).

---

## 🎯 Próximos Passos Sugeridos

1. [ ] Adicionar mais produtos ao catálogo
2. [ ] Implementar localStorage pra salvar wishlist
3. [ ] Criar a aba Perfil
4. [ ] Conectar com Supabase (banco de dados real)
5. [ ] Deploy na Vercel (npm run build → upload)
