import { useState, useEffect } from "react";

// ─── Design Tokens ───
const tokens = {
  bg: "#ffffff",
  bgPage: "#f8f8f6",
  bgCard: "#ffffff",
  bgMuted: "#f3f3f0",
  accent: "#c8e600",
  accentDark: "#a8c200",
  accentBg: "#f4fad0",
  green: "#22c55e",
  orange: "#f59e0b",
  red: "#ef4444",
  text: "#1a1a1a",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  borderLight: "#f0f0ec",
  border: "#e5e5e0",
  shadow: "0 1px 3px rgba(0,0,0,0.08)",
  radius: 10,
  radiusLg: 16,
};

// ─── Dados de comparação por ambiente ───
const compareData = {
  viagem: {
    icon: "✈️",
    title: "Viagem",
    subtitle: "Leve e eficiente",
    variations: [
      {
        id: "a",
        name: "Setup Compacto",
        desc: "Prioridade: portabilidade máxima",
        totalPrice: 8974,
        items: [
          { name: "MacBook Air M3", brand: "Apple", category: "Notebook", price: 6499, score: 88, pros: ["Ultra leve (1.24kg)", "Bateria 18h", "Tela Liquid Retina"], cons: ["Apenas 1 porta USB-C extra"] },
          { name: "AirPods Pro 2ª gen", brand: "Apple", category: "Áudio", price: 1804, score: 91, pros: ["ANC excelente", "Compacto", "Integração Apple"], cons: ["Preço elevado"] },
          { name: "Anker 727 GaNPrime", brand: "Anker", category: "Carregador", price: 349, score: 82, pros: ["100W", "Compacto GaN", "Múltiplas portas"], cons: ["Esquenta um pouco"] },
          { name: "Logitech Pebble 2", brand: "Logitech", category: "Mouse", price: 199, score: 75, pros: ["Silencioso", "Sem fio", "Compacto"], cons: ["Sensor básico"] },
        ],
        overallScore: 86,
        bestFor: "Quem viaja frequentemente e quer o mais leve possível",
      },
      {
        id: "b",
        name: "Setup Produtivo",
        desc: "Prioridade: performance em qualquer lugar",
        totalPrice: 12847,
        items: [
          { name: "MacBook Pro 14\" M3 Pro", brand: "Apple", category: "Notebook", price: 9999, score: 95, pros: ["Performance absurda", "Tela ProMotion 120Hz", "Bateria 17h"], cons: ["Mais pesado (1.6kg)"] },
          { name: "Sony WH-1000XM5", brand: "Sony", category: "Áudio", price: 1997, score: 93, pros: ["Melhor ANC do mercado", "30h bateria", "Conforto premium"], cons: ["Não dobra como XM4"] },
          { name: "Anker 727 GaNPrime", brand: "Anker", category: "Carregador", price: 349, score: 82, pros: ["100W", "Compacto GaN", "Múltiplas portas"], cons: ["Esquenta um pouco"] },
          { name: "Logitech MX Anywhere 3S", brand: "Logitech", category: "Mouse", price: 499, score: 87, pros: ["Sensor premium", "USB-C", "Funciona em vidro"], cons: ["Preço mais alto"] },
        ],
        overallScore: 92,
        bestFor: "Quem precisa de máxima performance fora de casa",
      },
    ],
    aiInsight: "Para viagens curtas e uso leve, o Setup Compacto economiza quase R$4.000 e pesa 400g menos. Já para quem trabalha viajando e precisa de performance pesada (edição, dev, etc), o Setup Produtivo compensa pelo ganho em tela, processamento e conforto do fone.",
  },
  escritorio: {
    icon: "🖥️",
    title: "Escritório",
    subtitle: "Produtividade máxima",
    variations: [
      {
        id: "a",
        name: "Setup Essencial",
        desc: "Prioridade: custo-benefício",
        totalPrice: 7245,
        items: [
          { name: "AOC Q27G3XMN 27\" 2K", brand: "AOC", category: "Monitor", price: 1247, score: 80, pros: ["2K 180Hz", "Painel IPS", "Preço acessível"], cons: ["HDR básico"] },
          { name: "Edifier MR4 Monitores", brand: "Edifier", category: "Áudio", price: 671, score: 78, pros: ["Som limpo", "Tamanho compacto", "Preço justo"], cons: ["Graves limitados"] },
          { name: "DT3 Office Modera Elite", brand: "DT3", category: "Cadeira", price: 1699, score: 76, pros: ["Ergonômica", "Apoio lombar", "Bom custo"], cons: ["Material simples"] },
          { name: "Standing Desk Acústica", brand: "Acústica", category: "Mesa", price: 2299, score: 82, pros: ["Regulável em altura", "140cm", "Motor elétrico"], cons: ["Montagem trabalhosa"] },
          { name: "ELG Suporte Duplo F160N", brand: "ELG", category: "Suporte", price: 249, score: 74, pros: ["Suporte duplo", "Ajuste VESA", "Libera espaço"], cons: ["Braço curto"] },
        ],
        overallScore: 78,
        bestFor: "Quem está montando o primeiro escritório com bom custo-benefício",
      },
      {
        id: "b",
        name: "Setup Premium",
        desc: "Prioridade: conforto e qualidade",
        totalPrice: 15445,
        items: [
          { name: "Samsung Odyssey G6 32\"", brand: "Samsung", category: "Monitor", price: 2399, score: 90, pros: ["QD-OLED", "240Hz", "HDR True Black"], cons: ["Risco de burn-in"] },
          { name: "Sony WH-1000XM5", brand: "Sony", category: "Áudio", price: 1997, score: 93, pros: ["ANC líder", "30h bateria", "Multi-point"], cons: ["Over-ear pode esquentar"] },
          { name: "Herman Miller Aeron", brand: "Herman Miller", category: "Cadeira", price: 6999, score: 96, pros: ["Ergonomia premium", "12 anos garantia", "Referência mundial"], cons: ["Preço altíssimo"] },
          { name: "Mesa Platform Pro 1.6m", brand: "Flexform", category: "Mesa", price: 1799, score: 85, pros: ["Motorizada", "160cm", "Painel de controle"], cons: ["Peso alto"] },
          { name: "ELG Suporte Duplo F160N", brand: "ELG", category: "Suporte", price: 249, score: 74, pros: ["Suporte duplo", "Ajuste VESA", "Libera espaço"], cons: ["Braço curto"] },
        ],
        overallScore: 90,
        bestFor: "Quem trabalha muitas horas e quer investir em saúde e conforto",
      },
    ],
    aiInsight: "A diferença de R$8.200 é grande, mas o Setup Premium é um investimento em saúde. A Herman Miller Aeron tem 12 anos de garantia e protege sua coluna. O monitor OLED reduz cansaço visual. Se você trabalha 8h+ por dia, o retorno em conforto e produtividade se paga.",
  },
  quarto: {
    icon: "🛏️",
    title: "Quarto",
    subtitle: "Conforto e relaxamento",
    variations: [
      {
        id: "a",
        name: "Setup Relax",
        desc: "Prioridade: entretenimento tranquilo",
        totalPrice: 5312,
        items: [
          { name: "Apple TV 4K 3ª Gen", brand: "Apple", category: "Streaming", price: 939, score: 85, pros: ["4K Dolby Vision", "Chip A15", "AirPlay"], cons: ["Controle escorregadio"] },
          { name: "Fire TV Stick 4K", brand: "Amazon", category: "Streaming", price: 335, score: 72, pros: ["Preço baixo", "Alexa integrada", "4K HDR"], cons: ["Interface com ads"] },
          { name: "AirPods Pro 2ª gen", brand: "Apple", category: "Áudio", price: 1804, score: 91, pros: ["ANC para dormir", "Modo transparente", "Adaptativo"], cons: ["Bateria 6h"] },
          { name: "Apple Watch SE 2ª Gen", brand: "Apple", category: "Wearable", price: 2549, score: 80, pros: ["Monitoramento sono", "Alarme silencioso", "Saúde 24h"], cons: ["Tela menor"] },
        ],
        overallScore: 82,
        bestFor: "Quem quer um quarto inteligente sem gastar muito",
      },
      {
        id: "b",
        name: "Setup Smart Home",
        desc: "Prioridade: automação e premium",
        totalPrice: 11387,
        items: [
          { name: "Apple TV 4K 3ª Gen", brand: "Apple", category: "Streaming", price: 939, score: 85, pros: ["Hub HomeKit", "4K Dolby Vision", "Thread"], cons: ["Preço vs concorrentes"] },
          { name: "Sony WH-1000XM5", brand: "Sony", category: "Áudio", price: 1997, score: 93, pros: ["ANC máximo", "Conforto noturno", "30h bateria"], cons: ["Grande para deitar"] },
          { name: "Apple Watch Ultra 2", brand: "Apple", category: "Wearable", price: 7499, score: 94, pros: ["Bateria 36h", "Monitoramento avançado", "Tela sempre ativa"], cons: ["Enorme no pulso"] },
          { name: "Fire TV Cube 3ª Gen", brand: "Amazon", category: "Streaming", price: 775, score: 78, pros: ["Hands-free com Alexa", "Hub Zigbee", "Octa-core"], cons: ["Tamanho grande"] },
        ],
        overallScore: 88,
        bestFor: "Quem quer o quarto totalmente automatizado e premium",
      },
    ],
    aiInsight: "O Setup Relax cobre 90% das necessidades por metade do preço. A grande diferença está no Apple Watch Ultra 2 (R$5.000 a mais) que só vale se você usa recursos avançados de saúde/esporte. Para o quarto em si, ambos entregam uma experiência muito boa de entretenimento e automação.",
  },
  gaming: {
    icon: "🎮",
    title: "Gaming",
    subtitle: "Performance e imersão",
    variations: [
      {
        id: "a",
        name: "Setup Gamer Casual",
        desc: "Prioridade: jogar bem sem quebrar o banco",
        totalPrice: 6847,
        items: [
          { name: "AOC Q27G3XMN 27\" 2K", brand: "AOC", category: "Monitor", price: 1247, score: 80, pros: ["2K 180Hz", "1ms resposta", "IPS"], cons: ["HDR básico"] },
          { name: "PlayStation 5 Slim Digital", brand: "Sony", category: "Console", price: 3899, score: 86, pros: ["Exclusivos Sony", "SSD ultra rápido", "DualSense"], cons: ["Jogos digitais apenas"] },
          { name: "Sony WH-1000XM5", brand: "Sony", category: "Áudio", price: 1997, score: 93, pros: ["ANC perfeito", "Tempest 3D Audio", "Conforto"], cons: ["Latência Bluetooth"] },
        ],
        overallScore: 84,
        bestFor: "Quem quer jogar console com qualidade sem gastar demais",
      },
      {
        id: "b",
        name: "Setup Gamer Pro",
        desc: "Prioridade: máxima performance e imersão",
        totalPrice: 11895,
        items: [
          { name: "Samsung Odyssey G6 32\"", brand: "Samsung", category: "Monitor", price: 2399, score: 90, pros: ["QD-OLED 240Hz", "0.03ms", "HDR True Black"], cons: ["Cuidado com burn-in"] },
          { name: "PlayStation 5 Slim Digital", brand: "Sony", category: "Console", price: 3899, score: 86, pros: ["Exclusivos Sony", "SSD ultra rápido", "DualSense"], cons: ["Jogos digitais apenas"] },
          { name: "Sony WH-1000XM5", brand: "Sony", category: "Áudio", price: 1997, score: 93, pros: ["ANC", "Tempest 3D", "30h bateria"], cons: ["Latência BT para competitivo"] },
          { name: "Herman Miller Aeron", brand: "Herman Miller", category: "Cadeira", price: 6999, score: 96, pros: ["Conforto 12h+", "Ergonomia perfeita", "12 anos garantia"], cons: ["Investimento alto"] },
        ],
        overallScore: 92,
        bestFor: "Quem leva gaming a sério e quer conforto para sessões longas",
      },
    ],
    aiInsight: "O Setup Casual já entrega uma experiência de jogo excelente. A grande diferença no Pro é o monitor OLED (pretos perfeitos, tempo de resposta absurdo) e a cadeira Herman Miller para quem joga 4h+. Se você joga casualmente nos fins de semana, o Casual é mais que suficiente. Se joga todo dia, o Pro protege sua saúde e melhora a imersão.",
  },
};

// ─── Configuração do Builder por categoria ───
const builderConfig = {
  viagem: {
    questions: [
      {
        id: "frequency",
        question: "Com que frequência você viaja?",
        icon: "✈️",
        options: [
          { label: "Raramente", desc: "1-2 viagens por ano", icon: "🌱", value: "rare" },
          { label: "Às vezes", desc: "A cada 2-3 meses", icon: "🗓️", value: "sometimes" },
          { label: "Todo mês", desc: "Viagens frequentes", icon: "✈️", value: "frequent" },
          { label: "Nômade digital", desc: "Trabalho de qualquer lugar", icon: "🌍", value: "nomad" },
        ],
      },
      {
        id: "budget",
        question: "Qual seu orçamento?",
        icon: "💰",
        options: [
          { label: "Até R$9.000", desc: "Funcional e leve", icon: "💚", value: "low" },
          { label: "R$9k - R$13k", desc: "Qualidade e leveza", icon: "💛", value: "mid" },
          { label: "R$13k+", desc: "Sem compromisso", icon: "🧡", value: "high" },
        ],
      },
      {
        id: "priority",
        question: "O que mais importa para você?",
        icon: "⚡",
        options: [
          { label: "Leveza", desc: "Quanto mais leve, melhor", icon: "🪶", value: "light" },
          { label: "Performance", desc: "Preciso de potência", icon: "💻", value: "performance" },
          { label: "Bateria", desc: "Autonomia máxima", icon: "🔋", value: "battery" },
          { label: "Equilíbrio", desc: "Tudo em conta", icon: "⚖️", value: "balance" },
        ],
      },
    ],
    recommend: (answers) =>
      answers.priority === "performance" || answers.budget === "high" || answers.frequency === "nomad" ? "b" : "a",
  },
  escritorio: {
    questions: [
      {
        id: "hours",
        question: "Quantas horas você trabalha por dia?",
        icon: "⏱️",
        options: [
          { label: "Até 4h", desc: "Uso leve e pontual", icon: "🌤️", value: "light" },
          { label: "4 a 6h", desc: "Uso moderado", icon: "☀️", value: "moderate" },
          { label: "6 a 8h", desc: "Jornada completa", icon: "🌆", value: "full" },
          { label: "8h+", desc: "Trabalho intenso", icon: "🔥", value: "intense" },
        ],
      },
      {
        id: "budget",
        question: "Qual seu orçamento?",
        icon: "💰",
        options: [
          { label: "Até R$8.000", desc: "Essencial e eficiente", icon: "💚", value: "low" },
          { label: "R$8k - R$15k", desc: "Conforto premium", icon: "💛", value: "mid" },
          { label: "R$15k+", desc: "Melhor de tudo", icon: "🧡", value: "high" },
        ],
      },
      {
        id: "priority",
        question: "O que mais importa no seu escritório?",
        icon: "🎯",
        options: [
          { label: "Ergonomia", desc: "Cuidar da saúde e postura", icon: "🪑", value: "ergonomics" },
          { label: "Qualidade visual", desc: "Monitor e iluminação top", icon: "🖥️", value: "visual" },
          { label: "Custo-benefício", desc: "Máximo pelo mínimo", icon: "💡", value: "value" },
          { label: "Tudo acima", desc: "Sem concessões", icon: "✨", value: "all" },
        ],
      },
    ],
    recommend: (answers) =>
      answers.hours === "intense" || answers.budget === "high" || answers.priority === "ergonomics" || answers.priority === "all" ? "b" : "a",
  },
  quarto: {
    questions: [
      {
        id: "usage",
        question: "Como você usa seu quarto?",
        icon: "🛏️",
        options: [
          { label: "Só dormir", desc: "Quarto minimalista", icon: "😴", value: "minimal" },
          { label: "Entretenimento", desc: "Séries, filmes e música", icon: "📺", value: "entertainment" },
          { label: "Smart Home", desc: "Quero automatizar tudo", icon: "🏠", value: "smarthome" },
          { label: "Tudo junto", desc: "Conforto máximo", icon: "✨", value: "all" },
        ],
      },
      {
        id: "budget",
        question: "Qual seu orçamento?",
        icon: "💰",
        options: [
          { label: "Até R$6.000", desc: "Essencial e funcional", icon: "💚", value: "low" },
          { label: "R$6k - R$11k", desc: "Conforto e qualidade", icon: "💛", value: "mid" },
          { label: "R$11k+", desc: "Premium sem limites", icon: "🧡", value: "high" },
        ],
      },
      {
        id: "ecosystem",
        question: "Qual ecossistema você usa?",
        icon: "📱",
        options: [
          { label: "Apple", desc: "iPhone, Mac, iPad…", icon: "🍎", value: "apple" },
          { label: "Android / Google", desc: "Samsung, Pixel…", icon: "🤖", value: "android" },
          { label: "Misturado", desc: "Uso de tudo um pouco", icon: "🔀", value: "mixed" },
        ],
      },
    ],
    recommend: (answers) =>
      answers.usage === "smarthome" || answers.usage === "all" || answers.budget === "high" ? "b" : "a",
  },
  gaming: {
    questions: [
      {
        id: "frequency",
        question: "Com que frequência você joga?",
        icon: "🎮",
        options: [
          { label: "Fins de semana", desc: "Casual gamer", icon: "🎯", value: "casual" },
          { label: "3-4x por semana", desc: "Gamer regular", icon: "🕹️", value: "regular" },
          { label: "Todo dia", desc: "Jogo diariamente", icon: "⚡", value: "daily" },
          { label: "Profissional", desc: "Streamer ou competitivo", icon: "🏆", value: "pro" },
        ],
      },
      {
        id: "budget",
        question: "Qual seu orçamento?",
        icon: "💰",
        options: [
          { label: "Até R$7.000", desc: "Setup funcional", icon: "💚", value: "low" },
          { label: "R$7k - R$12k", desc: "Performance sólida", icon: "💛", value: "mid" },
          { label: "R$12k+", desc: "Setup dos sonhos", icon: "🧡", value: "high" },
        ],
      },
      {
        id: "priority",
        question: "O que mais importa no gaming?",
        icon: "🎯",
        options: [
          { label: "FPS alto", desc: "Quero fluidez máxima", icon: "🚀", value: "fps" },
          { label: "Imersão", desc: "Visual e som incríveis", icon: "🌌", value: "immersion" },
          { label: "Conforto", desc: "Sessões longas sem dor", icon: "🪑", value: "comfort" },
          { label: "Custo-benefício", desc: "Melhor pelo preço", icon: "💡", value: "value" },
        ],
      },
    ],
    recommend: (answers) =>
      answers.frequency === "daily" || answers.frequency === "pro" || answers.budget === "high" || answers.priority === "comfort" || answers.priority === "immersion" ? "b" : "a",
  },
};

// ─── Score Ring ───
function ScoreRing({ score, size = 90, strokeWidth = 7 }) {
  const [animated, setAnimated] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animated / 100) * circumference;
  const color = score >= 85 ? tokens.green : score >= 70 ? tokens.orange : tokens.red;

  useEffect(() => {
    let frame;
    let current = 0;
    const step = () => {
      current += 2;
      if (current <= score) { setAnimated(current); frame = requestAnimationFrame(step); }
      else { setAnimated(score); }
    };
    const t = setTimeout(() => { frame = requestAnimationFrame(step); }, 200);
    return () => { clearTimeout(t); cancelAnimationFrame(frame); };
  }, [score]);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={tokens.borderLight} strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.05s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: size * 0.3, fontWeight: 800, color: tokens.text }}>{animated}</span>
        <span style={{ fontSize: size * 0.11, color: tokens.textMuted, marginTop: -2, fontWeight: 600 }}>SCORE</span>
      </div>
    </div>
  );
}

// ─── Score Bar ───
function ScoreBar({ score }) {
  const [width, setWidth] = useState(0);
  const color = score >= 85 ? tokens.green : score >= 70 ? tokens.orange : tokens.red;
  useEffect(() => { const t = setTimeout(() => setWidth(score), 150); return () => clearTimeout(t); }, [score]);
  return (
    <div style={{ height: 6, background: tokens.bgMuted, borderRadius: 3, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${width}%`, background: color, borderRadius: 3, transition: "width 0.8s ease" }} />
    </div>
  );
}

// ─── Tag ───
function Tag({ children, color = tokens.accentDark, bg = tokens.accentBg }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, background: bg, color, fontSize: 11, fontWeight: 700 }}>
      {children}
    </span>
  );
}

// ─── Item Row ───
function ItemRow({ item, isExpanded, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: "100%", textAlign: "left", cursor: "pointer",
      background: isExpanded ? tokens.bgMuted : tokens.bg,
      border: `1px solid ${isExpanded ? tokens.accentDark : tokens.borderLight}`,
      borderRadius: tokens.radius, padding: "12px 14px", transition: "all 0.15s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: tokens.text }}>{item.name}</div>
          <div style={{ fontSize: 11, color: tokens.textMuted }}>{item.brand} · {item.category}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: tokens.text }}>R$ {item.price.toLocaleString("pt-BR")}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: item.score >= 85 ? tokens.green : item.score >= 70 ? tokens.orange : tokens.red }}>
            {item.score}/100
          </div>
        </div>
      </div>
      {isExpanded && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${tokens.border}` }}>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: tokens.green, marginBottom: 4 }}>✅ Pontos fortes</div>
              {item.pros.map((p, i) => <div key={i} style={{ fontSize: 11, color: tokens.textSecondary, padding: "2px 0" }}>• {p}</div>)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: tokens.orange, marginBottom: 4 }}>⚠️ Atenção</div>
              {item.cons.map((c, i) => <div key={i} style={{ fontSize: 11, color: tokens.textSecondary, padding: "2px 0" }}>• {c}</div>)}
            </div>
          </div>
        </div>
      )}
    </button>
  );
}

// ─── Variation Card ───
function VariationCard({ variation, isWinner, expandedItem, onExpandItem }) {
  return (
    <div style={{
      background: tokens.bgCard,
      border: `2px solid ${isWinner ? tokens.accent : tokens.border}`,
      borderRadius: tokens.radiusLg, padding: 20,
      boxShadow: isWinner ? `0 0 0 3px ${tokens.accentBg}` : tokens.shadow,
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <div style={{ textAlign: "center" }}>
        {isWinner && <Tag>⭐ RECOMENDADO</Tag>}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: tokens.text, margin: "8px 0 2px" }}>{variation.name}</h3>
        <p style={{ fontSize: 12, color: tokens.textMuted, margin: 0 }}>{variation.desc}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ScoreRing score={variation.overallScore} size={85} strokeWidth={6} />
      </div>
      <div style={{ textAlign: "center", padding: "10px 0", borderTop: `1px solid ${tokens.borderLight}`, borderBottom: `1px solid ${tokens.borderLight}` }}>
        <div style={{ fontSize: 11, color: tokens.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>Investimento total</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: tokens.text }}>R$ {variation.totalPrice.toLocaleString("pt-BR")}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: tokens.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>
          {variation.items.length} produtos
        </div>
        {variation.items.map((item, i) => (
          <ItemRow key={i} item={item}
            isExpanded={expandedItem === `${variation.id}-${i}`}
            onClick={() => onExpandItem(expandedItem === `${variation.id}-${i}` ? null : `${variation.id}-${i}`)} />
        ))}
      </div>
      <div style={{ background: tokens.bgMuted, borderRadius: 10, padding: 12, fontSize: 12, color: tokens.textSecondary, lineHeight: 1.5 }}>
        <span style={{ fontWeight: 700, color: tokens.text }}>Ideal para: </span>{variation.bestFor}
      </div>
    </div>
  );
}

// ─── AI Builder ───
function AIBuilder({ category, onShowCompare }) {
  const config = builderConfig[category];
  const data = compareData[category];
  const [view, setView] = useState("intro"); // intro | questions | result
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [expandedItem, setExpandedItem] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);

  const transition = (cb) => {
    setFadeIn(false);
    setTimeout(() => { cb(); setFadeIn(true); }, 180);
  };

  const handleSelect = (value) => {
    const q = config.questions[step];
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (step < config.questions.length - 1) {
        transition(() => setStep(step + 1));
      } else {
        transition(() => setView("result"));
      }
    }, 350);
  };

  const restart = () => {
    transition(() => { setView("intro"); setStep(0); setAnswers({}); setExpandedItem(null); });
  };

  const recommendedId = config.recommend(answers);
  const recommended = data.variations.find(v => v.id === recommendedId) || data.variations[0];

  const containerStyle = {
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? "translateY(0)" : "translateY(8px)",
    transition: "opacity 0.18s ease, transform 0.18s ease",
  };

  // ── Intro ──
  if (view === "intro") {
    return (
      <div style={{ ...containerStyle, textAlign: "center", padding: "32px 16px" }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{data.icon}</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: tokens.text, margin: "0 0 8px" }}>
          Montar meu Setup de {data.title}
        </h2>
        <p style={{ fontSize: 14, color: tokens.textSecondary, lineHeight: 1.6, maxWidth: 380, margin: "0 auto 28px" }}>
          Responda {config.questions.length} perguntas rápidas e a IA indica qual variação de setup é ideal para o seu perfil.
        </p>
        <button
          onClick={() => transition(() => setView("questions"))}
          style={{
            padding: "14px 32px", borderRadius: 12, border: "none",
            background: tokens.accent, color: tokens.text,
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 4px 16px ${tokens.accentBg}`,
          }}
        >
          Começar →
        </button>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 32 }}>
          {config.questions.map((q, i) => (
            <div key={i} style={{ background: tokens.bgMuted, borderRadius: 10, padding: "12px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{q.icon}</div>
              <div style={{ fontSize: 11, color: tokens.textSecondary, fontWeight: 600 }}>Pergunta {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Questions ──
  if (view === "questions") {
    const q = config.questions[step];
    const selected = answers[q.id];
    return (
      <div style={{ ...containerStyle, padding: "24px 16px" }}>
        {/* Progress */}
        <div style={{ display: "flex", gap: 6, marginBottom: 24, justifyContent: "center" }}>
          {config.questions.map((_, i) => (
            <div key={i} style={{
              height: 5, borderRadius: 3,
              width: i <= step ? 40 : 24,
              background: i <= step ? tokens.accent : tokens.borderLight,
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>{q.icon}</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: tokens.text, margin: "0 0 4px" }}>{q.question}</h3>
          <p style={{ fontSize: 12, color: tokens.textMuted, margin: 0 }}>Pergunta {step + 1} de {config.questions.length}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: q.options.length <= 3 ? "1fr 1fr 1fr" : "1fr 1fr", gap: 10 }}>
          {q.options.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button key={opt.value} onClick={() => handleSelect(opt.value)} style={{
                padding: "16px 12px", borderRadius: 12, cursor: "pointer", textAlign: "center",
                border: `2px solid ${isSelected ? tokens.accent : tokens.borderLight}`,
                background: isSelected ? tokens.accentBg : tokens.bg,
                transition: "all 0.15s ease",
              }}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>{opt.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: tokens.text }}>{opt.label}</div>
                <div style={{ fontSize: 11, color: tokens.textMuted, marginTop: 2 }}>{opt.desc}</div>
              </button>
            );
          })}
        </div>

        {step > 0 && (
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <button onClick={() => transition(() => setStep(step - 1))} style={{
              background: "none", border: "none", cursor: "pointer",
              color: tokens.textMuted, fontSize: 13, fontWeight: 600,
            }}>
              ← Voltar
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── Result ──
  return (
    <div style={{ ...containerStyle, padding: "24px 16px 32px" }}>
      {/* Header resultado */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: tokens.accentBg, color: tokens.accentDark,
          padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 12,
        }}>
          ✨ Recomendação personalizada
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: tokens.text, margin: "0 0 4px" }}>{recommended.name}</h2>
        <p style={{ fontSize: 13, color: tokens.textMuted, margin: 0 }}>{recommended.desc}</p>
      </div>

      {/* Card da variação recomendada (sem expand por padrão) */}
      <VariationCard
        variation={recommended}
        isWinner={true}
        expandedItem={expandedItem}
        onExpandItem={setExpandedItem}
      />

      {/* AI Insight */}
      <div style={{
        background: tokens.accentBg, border: `1px solid ${tokens.accent}`,
        borderRadius: tokens.radiusLg, padding: 18, marginTop: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 18 }}>💡</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: tokens.text }}>Por que esse setup?</span>
        </div>
        <p style={{ fontSize: 13, color: tokens.textSecondary, lineHeight: 1.7, margin: 0 }}>{data.aiInsight}</p>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button onClick={onShowCompare} style={{
          flex: 1, padding: "13px 0", borderRadius: 12, border: `2px solid ${tokens.accent}`,
          background: tokens.accent, color: tokens.text, fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>
          Ver comparativo completo →
        </button>
        <button onClick={restart} style={{
          padding: "13px 18px", borderRadius: 12, border: `1px solid ${tokens.border}`,
          background: tokens.bg, color: tokens.textSecondary, fontSize: 13, fontWeight: 600, cursor: "pointer",
        }}>
          Refazer
        </button>
      </div>
    </div>
  );
}

// ─── Conteúdo do comparativo A/B ───
function CompareContent({ category }) {
  const data = compareData[category];
  const [expandedItem, setExpandedItem] = useState(null);
  const winnerIdx = data.variations[0].overallScore >= data.variations[1].overallScore ? 0 : 1;
  const priceDiff = Math.abs(data.variations[0].totalPrice - data.variations[1].totalPrice);
  const scoreDiff = Math.abs(data.variations[0].overallScore - data.variations[1].overallScore);

  return (
    <div style={{ padding: "0 16px 32px" }}>
      {/* Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
        {[
          { label: "Variações", value: `${data.variations.length}`, icon: "📊" },
          { label: "Diferença", value: `R$ ${priceDiff.toLocaleString("pt-BR")}`, icon: "💰" },
          { label: "Score gap", value: `${scoreDiff} pts`, icon: "⚡" },
        ].map((stat, i) => (
          <div key={i} style={{
            background: tokens.bgCard, border: `1px solid ${tokens.borderLight}`,
            borderRadius: tokens.radius, padding: "10px 12px", textAlign: "center",
          }}>
            <div style={{ fontSize: 16, marginBottom: 2 }}>{stat.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: tokens.text }}>{stat.value}</div>
            <div style={{ fontSize: 10, color: tokens.textMuted, textTransform: "uppercase", letterSpacing: 0.5 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* VS divider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1, height: 1, background: tokens.border }} />
        <div style={{
          width: 40, height: 40, borderRadius: "50%", background: tokens.accent,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 900, color: tokens.text,
          boxShadow: `0 0 0 4px ${tokens.accentBg}`,
        }}>VS</div>
        <div style={{ flex: 1, height: 1, background: tokens.border }} />
      </div>

      {/* Cards lado a lado */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        {data.variations.map((variation, idx) => (
          <VariationCard key={variation.id} variation={variation} isWinner={idx === winnerIdx}
            expandedItem={expandedItem} onExpandItem={setExpandedItem} />
        ))}
      </div>

      {/* Score comparison */}
      <div style={{ background: tokens.bgCard, border: `1px solid ${tokens.border}`, borderRadius: tokens.radiusLg, padding: 20, marginBottom: 16 }}>
        <h4 style={{ fontSize: 14, fontWeight: 700, color: tokens.text, margin: "0 0 14px" }}>📊 Comparativo de scores</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.variations[0].items.map((itemA, i) => {
            const itemB = data.variations[1].items[i];
            if (!itemB) return null;
            return (
              <div key={i}>
                <div style={{ fontSize: 12, fontWeight: 600, color: tokens.text, marginBottom: 6 }}>{itemA.category}</div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, color: tokens.textMuted, marginBottom: 2 }}>{itemA.name}</div>
                    <ScoreBar score={itemA.score} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: tokens.textMuted, minWidth: 20, textAlign: "center" }}>vs</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, color: tokens.textMuted, marginBottom: 2 }}>{itemB.name}</div>
                    <ScoreBar score={itemB.score} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Insight */}
      <div style={{ background: tokens.accentBg, border: `1px solid ${tokens.accent}`, borderRadius: tokens.radiusLg, padding: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 18 }}>💡</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: tokens.text }}>Análise Simplify IA</span>
        </div>
        <p style={{ fontSize: 13, color: tokens.textSecondary, lineHeight: 1.7, margin: 0 }}>{data.aiInsight}</p>
      </div>
    </div>
  );
}

// ─── Detalhe de uma categoria (com tabs) ───
function CompareDetail({ category, onBack }) {
  const data = compareData[category];
  const [activeTab, setActiveTab] = useState("builder"); // builder | compare

  const tabs = [
    { id: "builder", label: "✨ Montar meu Setup" },
    { id: "compare", label: "📊 Comparar A/B" },
  ];

  return (
    <div>
      {/* Back + Header */}
      <div style={{ padding: "0 16px", marginBottom: 16 }}>
        <button onClick={onBack} style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "none", border: "none", cursor: "pointer",
          color: tokens.textSecondary, fontSize: 13, fontWeight: 600,
          padding: "8px 0", marginBottom: 10,
        }}>
          ← Voltar
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>{data.icon}</span>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: tokens.text, margin: 0 }}>{data.title}</h2>
            <p style={{ fontSize: 12, color: tokens.textMuted, margin: 0 }}>{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", gap: 4, padding: "0 16px 16px",
        borderBottom: `1px solid ${tokens.borderLight}`,
        marginBottom: 20,
      }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            flex: 1, padding: "10px 8px", borderRadius: 10, border: "none",
            background: activeTab === tab.id ? tokens.accent : tokens.bgMuted,
            color: activeTab === tab.id ? tokens.text : tokens.textSecondary,
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            transition: "all 0.15s ease",
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "builder" && (
        <AIBuilder category={category} onShowCompare={() => setActiveTab("compare")} />
      )}
      {activeTab === "compare" && (
        <CompareContent category={category} />
      )}
    </div>
  );
}

// ─── Grid de categorias ───
function CategoryGrid({ onSelect }) {
  const categories = [
    { key: "viagem", icon: "✈️", title: "Viagem", subtitle: "Leve e eficiente" },
    { key: "escritorio", icon: "🖥️", title: "Escritório", subtitle: "Produtividade máxima" },
    { key: "quarto", icon: "🛏️", title: "Quarto", subtitle: "Conforto e relaxamento" },
    { key: "gaming", icon: "🎮", title: "Gaming", subtitle: "Performance e imersão" },
  ];

  return (
    <div style={{ padding: "0 16px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: tokens.text, margin: "0 0 4px" }}>Comparador de Setups</h2>
      <p style={{ fontSize: 13, color: tokens.textMuted, margin: "0 0 20px" }}>
        Escolha um ambiente — a IA monta o setup ideal para você
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {categories.map((cat) => (
          <button key={cat.key} onClick={() => onSelect(cat.key)} style={{
            background: tokens.bgCard, border: `1px solid ${tokens.border}`,
            borderRadius: tokens.radiusLg, padding: 18, cursor: "pointer", textAlign: "left",
            transition: "all 0.15s ease",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = tokens.accent; e.currentTarget.style.boxShadow = `0 0 0 3px ${tokens.accentBg}`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = tokens.border; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>{cat.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: tokens.text }}>{cat.title}</div>
            <div style={{ fontSize: 12, color: tokens.textMuted, marginBottom: 10 }}>{cat.subtitle}</div>
            <Tag>✨ IA + A/B</Tag>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: tokens.bgMuted, borderRadius: tokens.radius, padding: 14 }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <p style={{ fontSize: 12, color: tokens.textSecondary, lineHeight: 1.6, margin: 0 }}>
          Em cada ambiente você pode montar seu setup com IA ou comparar as variações A/B lado a lado.
        </p>
      </div>
    </div>
  );
}

// ─── Componente Principal ───
export default function SmartCompare() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fadeIn, setFadeIn] = useState(true);

  const transition = (cb) => {
    setFadeIn(false);
    setTimeout(() => { cb(); setFadeIn(true); }, 150);
  };

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      paddingTop: 20,
      paddingBottom: 24,
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? "translateY(0)" : "translateY(6px)",
      transition: "opacity 0.15s ease, transform 0.15s ease",
    }}>
      {selectedCategory ? (
        <CompareDetail
          category={selectedCategory}
          onBack={() => transition(() => setSelectedCategory(null))}
        />
      ) : (
        <CategoryGrid onSelect={(key) => transition(() => setSelectedCategory(key))} />
      )}
    </div>
  );
}
