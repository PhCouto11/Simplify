import { useState, useEffect, useRef } from "react";
import { Monitor, Cpu, HardDrive, Gamepad2, Zap, ChevronRight, ChevronLeft, Star, TrendingUp, DollarSign, Award, Search, SlidersHorizontal, ArrowRight, Check, Sparkles, Target, Users, BarChart3, Heart, ShieldCheck, X } from "lucide-react";

// ─── Color Palette & Theme ───
const theme = {
  bg: "#0a0a0f",
  bgCard: "#12121a",
  bgCardHover: "#1a1a28",
  accent: "#7c3aed",
  accentLight: "#a78bfa",
  accentGlow: "rgba(124, 58, 237, 0.3)",
  green: "#10b981",
  greenGlow: "rgba(16, 185, 129, 0.2)",
  orange: "#f59e0b",
  red: "#ef4444",
  text: "#e2e8f0",
  textMuted: "#94a3b8",
  textDim: "#475569",
  border: "#1e1e2e",
};

// ─── Data ───
const profileQuestions = [
  {
    id: "usage",
    icon: <Gamepad2 size={28} />,
    question: "Pra que você mais vai usar seu setup?",
    options: [
      { label: "Jogos casuais", desc: "Fortnite, Valorant, LoL", icon: "🎮", value: "casual" },
      { label: "Jogos competitivos", desc: "FPS, MOBA ranked", icon: "🏆", value: "competitive" },
      { label: "Jogos + Stream", desc: "Quero jogar e transmitir", icon: "📺", value: "stream" },
      { label: "Jogos + Estudo/Trabalho", desc: "Multitarefa", icon: "💻", value: "hybrid" },
    ],
  },
  {
    id: "budget",
    icon: <DollarSign size={28} />,
    question: "Qual o seu orçamento?",
    options: [
      { label: "Até R$3.000", desc: "Setup básico funcional", icon: "💚", value: "low" },
      { label: "R$3.000 - R$5.000", desc: "Bom custo-benefício", icon: "💛", value: "mid" },
      { label: "R$5.000 - R$8.000", desc: "Performance sólida", icon: "🧡", value: "high" },
      { label: "R$8.000+", desc: "Máxima performance", icon: "❤️‍🔥", value: "ultra" },
    ],
  },
  {
    id: "experience",
    icon: <Target size={28} />,
    question: "Qual seu nível de experiência com PCs?",
    options: [
      { label: "Zero experiência", desc: "Nunca montei um PC", icon: "🌱", value: "beginner" },
      { label: "Sei o básico", desc: "Entendo alguns componentes", icon: "📗", value: "basic" },
      { label: "Intermediário", desc: "Já montei ou atualizei PCs", icon: "📘", value: "intermediate" },
      { label: "Avançado", desc: "Manja de specs e benchmarks", icon: "📕", value: "advanced" },
    ],
  },
];

const setupRecommendations = {
  casual: {
    low: {
      name: "Setup Starter",
      tagline: "Perfeito para começar no mundo gamer",
      score: 72,
      fps: "60-80 FPS",
      items: [
        { name: "Ryzen 5 5600", category: "Processador", price: 699, score: 75, icon: <Cpu size={18} /> },
        { name: "RX 6600 8GB", category: "Placa de Vídeo", price: 1099, score: 70, icon: <Monitor size={18} /> },
        { name: "16GB DDR4 3200MHz", category: "Memória RAM", price: 289, score: 72, icon: <HardDrive size={18} /> },
        { name: "SSD 480GB SATA", category: "Armazenamento", price: 219, score: 65, icon: <HardDrive size={18} /> },
        { name: "Fonte 500W 80 Plus", category: "Fonte", price: 249, score: 70, icon: <Zap size={18} /> },
      ],
      total: 2555,
    },
    mid: {
      name: "Setup Smart",
      tagline: "Ótimo equilíbrio entre preço e performance",
      score: 81,
      fps: "80-120 FPS",
      items: [
        { name: "Ryzen 5 5600X", category: "Processador", price: 849, score: 82, icon: <Cpu size={18} /> },
        { name: "RTX 3060 12GB", category: "Placa de Vídeo", price: 1599, score: 80, icon: <Monitor size={18} /> },
        { name: "16GB DDR4 3600MHz", category: "Memória RAM", price: 349, score: 78, icon: <HardDrive size={18} /> },
        { name: "SSD NVMe 500GB", category: "Armazenamento", price: 289, score: 82, icon: <HardDrive size={18} /> },
        { name: "Fonte 600W 80 Plus Bronze", category: "Fonte", price: 329, score: 80, icon: <Zap size={18} /> },
      ],
      total: 3416,
    },
  },
  competitive: {
    mid: {
      name: "Setup Competitivo",
      tagline: "FPS alto e resposta rápida para ranked",
      score: 85,
      fps: "120-165 FPS",
      items: [
        { name: "Ryzen 5 7600", category: "Processador", price: 1149, score: 88, icon: <Cpu size={18} /> },
        { name: "RTX 4060 8GB", category: "Placa de Vídeo", price: 1899, score: 84, icon: <Monitor size={18} /> },
        { name: "16GB DDR5 5200MHz", category: "Memória RAM", price: 449, score: 85, icon: <HardDrive size={18} /> },
        { name: "SSD NVMe 1TB", category: "Armazenamento", price: 429, score: 88, icon: <HardDrive size={18} /> },
        { name: "Fonte 650W 80 Plus Gold", category: "Fonte", price: 429, score: 86, icon: <Zap size={18} /> },
      ],
      total: 4355,
    },
    high: {
      name: "Setup Pro Gamer",
      tagline: "Domina qualquer ranked sem engasgos",
      score: 91,
      fps: "165-240 FPS",
      items: [
        { name: "Ryzen 7 7700X", category: "Processador", price: 1699, score: 92, icon: <Cpu size={18} /> },
        { name: "RTX 4070 12GB", category: "Placa de Vídeo", price: 2899, score: 90, icon: <Monitor size={18} /> },
        { name: "32GB DDR5 5600MHz", category: "Memória RAM", price: 699, score: 91, icon: <HardDrive size={18} /> },
        { name: "SSD NVMe 1TB Gen4", category: "Armazenamento", price: 499, score: 90, icon: <HardDrive size={18} /> },
        { name: "Fonte 750W 80 Plus Gold", category: "Fonte", price: 529, score: 92, icon: <Zap size={18} /> },
      ],
      total: 6325,
    },
  },
};

// Fallback recommendation
const defaultSetup = {
  name: "Setup Recomendado",
  tagline: "Montado especialmente para o seu perfil",
  score: 78,
  fps: "60-100 FPS",
  items: [
    { name: "Ryzen 5 5600", category: "Processador", price: 699, score: 75, icon: <Cpu size={18} /> },
    { name: "RTX 3060 12GB", category: "Placa de Vídeo", price: 1599, score: 80, icon: <Monitor size={18} /> },
    { name: "16GB DDR4 3200MHz", category: "Memória RAM", price: 289, score: 72, icon: <HardDrive size={18} /> },
    { name: "SSD NVMe 500GB", category: "Armazenamento", price: 289, score: 82, icon: <HardDrive size={18} /> },
    { name: "Fonte 550W 80 Plus", category: "Fonte", price: 279, score: 74, icon: <Zap size={18} /> },
  ],
  total: 3155,
};

// ─── Animated Score Ring ───
function ScoreRing({ score, size = 100, strokeWidth = 8 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;
  const color = score >= 85 ? theme.green : score >= 70 ? theme.orange : theme.red;

  useEffect(() => {
    let frame;
    let current = 0;
    const step = () => {
      current += 1;
      if (current <= score) {
        setAnimatedScore(current);
        frame = requestAnimationFrame(step);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={theme.border} strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.05s ease", filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: size * 0.32, fontWeight: 800, color }}>{animatedScore}</span>
        <span style={{ fontSize: size * 0.12, color: theme.textMuted, marginTop: -2 }}>SCORE</span>
      </div>
    </div>
  );
}

// ─── Mini Score Bar ───
function MiniScoreBar({ score, label }) {
  const [width, setWidth] = useState(0);
  const color = score >= 85 ? theme.green : score >= 70 ? theme.orange : theme.red;

  useEffect(() => {
    const timer = setTimeout(() => setWidth(score), 100);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div style={{ flex: 1 }}>
      {label && <span style={{ fontSize: 11, color: theme.textMuted }}>{label}</span>}
      <div style={{ height: 6, background: theme.border, borderRadius: 3, overflow: "hidden", marginTop: 2 }}>
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: color,
            borderRadius: 3,
            transition: "width 0.8s ease",
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

// ─── Glow Button ───
function GlowButton({ children, onClick, variant = "primary", style: customStyle = {}, disabled = false }) {
  const [hover, setHover] = useState(false);
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "12px 28px",
        borderRadius: 12,
        border: isPrimary ? "none" : `1px solid ${theme.border}`,
        background: isPrimary
          ? hover
            ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
            : "linear-gradient(135deg, #7c3aed, #5b21b6)"
          : hover
          ? theme.bgCardHover
          : "transparent",
        color: isPrimary ? "#fff" : theme.text,
        fontSize: 15,
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        transition: "all 0.2s ease",
        boxShadow: isPrimary && hover ? `0 0 24px ${theme.accentGlow}` : "none",
        opacity: disabled ? 0.5 : 1,
        ...customStyle,
      }}
    >
      {children}
    </button>
  );
}

// ─── Onboarding Step ───
function OnboardingStep({ step, onSelect, selected }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ color: theme.accent, marginBottom: 8 }}>{step.icon}</div>
      <h2 style={{ color: theme.text, fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{step.question}</h2>
      <p style={{ color: theme.textMuted, fontSize: 14, marginBottom: 24 }}>Escolha a opção que mais combina com você</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 500, margin: "0 auto" }}>
        {step.options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              style={{
                padding: "16px 12px",
                borderRadius: 14,
                border: `2px solid ${isSelected ? theme.accent : theme.border}`,
                background: isSelected ? `${theme.accent}15` : theme.bgCard,
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
                boxShadow: isSelected ? `0 0 20px ${theme.accentGlow}` : "none",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 6 }}>{opt.icon}</div>
              <div style={{ color: theme.text, fontWeight: 600, fontSize: 14 }}>{opt.label}</div>
              <div style={{ color: theme.textMuted, fontSize: 11, marginTop: 2 }}>{opt.desc}</div>
              {isSelected && (
                <div
                  style={{
                    marginTop: 8,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: theme.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Check size={14} color="#fff" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Setup Card (Result) ───
function SetupResult({ setup, profile }) {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: `${theme.green}20`,
            color: theme.green,
            padding: "6px 14px",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          <Sparkles size={14} /> Recomendação personalizada com IA
        </div>
        <h2 style={{ color: theme.text, fontSize: 26, fontWeight: 800, margin: "8px 0 4px" }}>{setup.name}</h2>
        <p style={{ color: theme.textMuted, fontSize: 14 }}>{setup.tagline}</p>
      </div>

      {/* Score + Stats */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          background: theme.bgCard,
          borderRadius: 16,
          padding: 24,
          marginBottom: 20,
          border: `1px solid ${theme.border}`,
        }}
      >
        <ScoreRing score={setup.score} size={110} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: theme.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>
                Performance
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: theme.green }}>{setup.fps}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: theme.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>
                Investimento
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: theme.text }}>
                R$ {setup.total.toLocaleString("pt-BR")}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <MiniScoreBar score={setup.score - 5} label="Custo-benefício" />
            <MiniScoreBar score={setup.score + 3 > 100 ? 100 : setup.score + 3} label="Durabilidade" />
          </div>
        </div>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {setup.items.map((item, i) => {
          const isExpanded = expandedItem === i;
          return (
            <button
              key={i}
              onClick={() => setExpandedItem(isExpanded ? null : i)}
              style={{
                background: theme.bgCard,
                border: `1px solid ${isExpanded ? theme.accent : theme.border}`,
                borderRadius: 12,
                padding: "14px 16px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${theme.accent}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.accentLight,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: theme.text, fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                  <div style={{ color: theme.textMuted, fontSize: 12 }}>{item.category}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: theme.text, fontWeight: 700, fontSize: 14 }}>
                    R$ {item.price.toLocaleString("pt-BR")}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end" }}>
                    <Star size={11} color={theme.orange} fill={theme.orange} />
                    <span style={{ color: theme.orange, fontSize: 12, fontWeight: 600 }}>{item.score}/100</span>
                  </div>
                </div>
              </div>
              {isExpanded && (
                <div
                  style={{
                    marginTop: 12,
                    paddingTop: 12,
                    borderTop: `1px solid ${theme.border}`,
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: `${theme.green}15`,
                      color: theme.green,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    ✅ Compatível com seu setup
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: `${theme.accent}15`,
                      color: theme.accentLight,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    💡 Melhor custo-benefício da categoria
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: `${theme.orange}15`,
                      color: theme.orange,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    📊 Top 5 mais vendidos
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", gap: 12, marginTop: 24, justifyContent: "center" }}>
        <GlowButton>
          <ShieldCheck size={16} /> Verificar compatibilidade
        </GlowButton>
        <GlowButton variant="secondary">
          <SlidersHorizontal size={16} /> Personalizar peças
        </GlowButton>
      </div>
    </div>
  );
}

// ─── Compare Mode ───
function CompareView() {
  const items = [
    { name: "RTX 3060 12GB", price: 1599, fps: "80 FPS", power: "170W", score: 80, vram: "12GB" },
    { name: "RTX 4060 8GB", price: 1899, fps: "110 FPS", power: "115W", score: 87, vram: "8GB" },
  ];

  const better = (a, b, lower = false) => (lower ? a < b : a > b) ? theme.green : a === b ? theme.text : theme.red;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ color: theme.text, fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Comparativo Inteligente</h2>
      <p style={{ color: theme.textMuted, fontSize: 14, marginBottom: 24 }}>
        Veja lado a lado qual peça é melhor para você
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: 0, alignItems: "start" }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              gridColumn: idx === 0 ? 1 : 3,
              gridRow: 1,
              background: theme.bgCard,
              borderRadius: 16,
              padding: 20,
              border: `1px solid ${idx === 1 ? theme.green : theme.border}`,
              boxShadow: idx === 1 ? `0 0 20px ${theme.greenGlow}` : "none",
            }}
          >
            {idx === 1 && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: `${theme.green}20`,
                  color: theme.green,
                  padding: "3px 10px",
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                <Award size={12} /> RECOMENDADO
              </div>
            )}
            <ScoreRing score={item.score} size={80} strokeWidth={6} />
            <h3 style={{ color: theme.text, fontSize: 16, fontWeight: 700, marginTop: 10 }}>{item.name}</h3>
            <div style={{ color: theme.accentLight, fontSize: 18, fontWeight: 800, marginTop: 4 }}>
              R$ {item.price.toLocaleString("pt-BR")}
            </div>

            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "FPS Médio", value: item.fps },
                { label: "Consumo", value: item.power },
                { label: "VRAM", value: item.vram },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 10px",
                    borderRadius: 8,
                    background: `${theme.bg}80`,
                  }}
                >
                  <span style={{ color: theme.textMuted, fontSize: 12 }}>{stat.label}</span>
                  <span style={{ color: theme.text, fontSize: 12, fontWeight: 600 }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          style={{
            gridColumn: 2,
            gridRow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            paddingTop: 60,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: theme.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 16px ${theme.accentGlow}`,
              fontSize: 14,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            VS
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          background: `${theme.green}10`,
          border: `1px solid ${theme.green}30`,
          borderRadius: 12,
          padding: 16,
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <Sparkles size={16} color={theme.green} />
          <span style={{ color: theme.green, fontWeight: 700, fontSize: 14 }}>Análise IA</span>
        </div>
        <p style={{ color: theme.textMuted, fontSize: 13, lineHeight: 1.6, margin: 0 }}>
          Para o seu perfil de <strong style={{ color: theme.text }}>gamer casual</strong>, a RTX 4060 oferece{" "}
          <strong style={{ color: theme.green }}>37% mais FPS</strong> com{" "}
          <strong style={{ color: theme.green }}>32% menos consumo de energia</strong>. Apesar de ter menos VRAM, 8GB é
          suficiente para jogos em 1080p. O investimento extra de R$300 se paga em eficiência energética em ~18 meses.
        </p>
      </div>
    </div>
  );
}

// ─── Main App ───
export default function SimplifyRedesign() {
  const [view, setView] = useState("home"); // home, onboarding, result, compare
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [profile, setProfile] = useState({});
  const [fadeIn, setFadeIn] = useState(true);

  const transition = (callback) => {
    setFadeIn(false);
    setTimeout(() => {
      callback();
      setFadeIn(true);
    }, 200);
  };

  const handleOnboardingSelect = (value) => {
    const currentQ = profileQuestions[onboardingStep];
    const newProfile = { ...profile, [currentQ.id]: value };
    setProfile(newProfile);

    setTimeout(() => {
      if (onboardingStep < profileQuestions.length - 1) {
        transition(() => setOnboardingStep(onboardingStep + 1));
      } else {
        transition(() => setView("result"));
      }
    }, 400);
  };

  const getRecommendation = () => {
    const usage = profile.usage || "casual";
    const budget = profile.budget || "mid";
    return setupRecommendations[usage]?.[budget] || setupRecommendations.casual?.mid || defaultSetup;
  };

  const navItems = [
    { label: "Início", view: "home", icon: <Gamepad2 size={16} /> },
    { label: "Montar Setup", view: "onboarding", icon: <Sparkles size={16} /> },
    { label: "Comparar", view: "compare", icon: <BarChart3 size={16} /> },
  ];

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${theme.bg} 0%, #0d0d15 100%)`,
        color: theme.text,
        fontFamily: "'Inter', -apple-system, sans-serif",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      {/* ─── Sub-navegação ─── */}
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "12px 16px",
          borderBottom: `1px solid ${theme.border}`,
          overflowX: "auto",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() =>
              transition(() => {
                setView(item.view);
                if (item.view === "onboarding") {
                  setOnboardingStep(0);
                  setProfile({});
                }
              })
            }
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              background: view === item.view ? `${theme.accent}20` : "transparent",
              color: view === item.view ? theme.accentLight : theme.textMuted,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* ─── Content ─── */}
      <main
        style={{
          padding: "32px 16px 80px",
          maxWidth: 700,
          margin: "0 auto",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {/* HOME */}
        {view === "home" && (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: `linear-gradient(135deg, ${theme.accent}, #5b21b6)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                boxShadow: `0 0 40px ${theme.accentGlow}`,
              }}
            >
              <Zap size={40} color="#fff" />
            </div>

            <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, margin: "0 0 8px" }}>
              Seu setup ideal,
              <br />
              <span style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                simplificado.
              </span>
            </h1>
            <p style={{ color: theme.textMuted, fontSize: 16, lineHeight: 1.6, maxWidth: 440, margin: "0 auto 32px" }}>
              Responda 3 perguntas rápidas e a IA monta o setup perfeito para você — com preços, scores e explicações que qualquer iniciante entende.
            </p>

            <GlowButton
              onClick={() => transition(() => { setView("onboarding"); setOnboardingStep(0); setProfile({}); })}
              style={{ margin: "0 auto", fontSize: 17, padding: "16px 36px" }}
            >
              <Sparkles size={18} /> Montar meu setup <ArrowRight size={16} />
            </GlowButton>

            {/* Features Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 48 }}>
              {[
                { icon: <Target size={22} />, title: "Personalizado", desc: "IA analisa seu perfil e orçamento" },
                { icon: <BarChart3 size={22} />, title: "Comparativos", desc: "Veja peças lado a lado com scores" },
                { icon: <ShieldCheck size={22} />, title: "Compatível", desc: "Todas as peças funcionam juntas" },
              ].map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: theme.bgCard,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 14,
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: theme.accentLight, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ color: theme.text, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ color: theme.textMuted, fontSize: 12 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ONBOARDING */}
        {view === "onboarding" && (
          <div>
            {/* Progress */}
            <div style={{ display: "flex", gap: 6, marginBottom: 32, justifyContent: "center" }}>
              {profileQuestions.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i <= onboardingStep ? 40 : 24,
                    height: 6,
                    borderRadius: 3,
                    background: i <= onboardingStep ? theme.accent : theme.border,
                    transition: "all 0.3s ease",
                    boxShadow: i === onboardingStep ? `0 0 8px ${theme.accentGlow}` : "none",
                  }}
                />
              ))}
            </div>

            <OnboardingStep
              step={profileQuestions[onboardingStep]}
              onSelect={handleOnboardingSelect}
              selected={profile[profileQuestions[onboardingStep].id]}
            />

            {onboardingStep > 0 && (
              <div style={{ textAlign: "center", marginTop: 20 }}>
                <button
                  onClick={() => transition(() => setOnboardingStep(onboardingStep - 1))}
                  style={{
                    background: "none",
                    border: "none",
                    color: theme.textMuted,
                    cursor: "pointer",
                    fontSize: 13,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <ChevronLeft size={14} /> Voltar
                </button>
              </div>
            )}
          </div>
        )}

        {/* RESULT */}
        {view === "result" && <SetupResult setup={getRecommendation()} profile={profile} />}

        {/* COMPARE */}
        {view === "compare" && <CompareView />}
      </main>
    </div>
  );
}