import { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    title: "Donate Food",
    desc: "Share your surplus food with those in need. Every donation makes a difference in someone's life.",
    icon: "🍱",
    href: "/donate.html",
    btn: "Donate Food →",
    color: "#fde8e3",
    textColor: "#c0432a",
    iconBg: "rgba(224,122,95,.25)",
    img: "/donate.jpg",
  },
  {
    title: "Find Programs",
    desc: "Discover food assistance programs and community resources available in your area.",
    icon: "📍",
    href: "/programs.html",
    btn: "Find Programs →",
    color: "#e3eef9",
    textColor: "#2a5f8c",
    iconBg: "rgba(42,95,140,.25)",
    img: "/programs.jpg",
  },
  {
    title: "Find Tips",
    desc: "Learn practical tips for meal planning, food storage, and reducing waste at home.",
    icon: "💡",
    href: "/tips.html",
    btn: "Find Tips →",
    color: "#fdf0e3",
    textColor: "#b35a1a",
    iconBg: "rgba(179,90,26,.25)",
    img: "/tips.jpg",
  },
  {
    title: "Volunteer",
    desc: "Join our community of volunteers and help make a positive impact in your neighborhood.",
    icon: "🤝",
    href: "/volunteer.html",
    btn: "Volunteer →",
    color: "#e3f5eb",
    textColor: "#1e6b42",
    iconBg: "rgba(30,107,66,.25)",
    img: "/volunteer.jpg",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const S = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#d8f3dc",
    color: "#1a2e1f",
    overflowX: "hidden",
    margin: 0,
    padding: 0,
  },

  navbar: (scrolled) => ({
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    padding: "16px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: scrolled ? "rgba(253,248,240,.95)" : "rgba(253,248,240,.0)",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(183,228,199,.4)" : "none",
    transition: "all .4s ease",
  }),
  logoWrap: {
    display: "flex", alignItems: "center", gap: 10,
    fontFamily: "'Playfair Display', serif",
    fontSize: 22, fontWeight: 700,
    color: "#1a4731",
    textDecoration: "none",
  },
  logoImg: { width: 44, height: 44, objectFit: "contain" },
  navTag: (scrolled) => ({
    fontSize: 13, fontWeight: 400,
    color: scrolled ? "#6b8f74" : "rgba(255,255,255,.7)",
    letterSpacing: ".04em",
    transition: "color .4s",
  }),

  heroSection: {
    position: "relative",
    height: "700px", 
    minHeight: "350px",
    display: "flex", alignItems: "flex-end",
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute", inset: 0,
    width: "100%", height: "100%",
    objectFit: "cover", objectPosition: "center bottom",
  },
  heroOverlay: {
    position: "absolute", inset: 0,
    background:
      "linear-gradient(to bottom,rgba(26,71,49,.05) 0%,rgba(26,71,49,.15) 40%,rgba(26,71,49,.75) 80%,rgba(26,71,49,.92) 100%)",
  },
  heroContent: {
    position: "relative", zIndex: 2,
    padding: "0 64px 72px",
    maxWidth: 760,
    animation: "fadeUp .9s .3s ease both",
  },
  heroBadge: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(233,168,58,.2)",
    border: "1px solid rgba(233,168,58,.5)",
    color: "#e9a83a",
    fontSize: 12, fontWeight: 500,
    letterSpacing: ".1em", textTransform: "uppercase",
    padding: "6px 16px", borderRadius: 100,
    marginBottom: 20,
  },
  heroDot: {
    width: 6, height: 6, borderRadius: "50%",
    background: "#e9a83a",
    animation: "pulse 2s infinite",
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.4rem,5vw,4rem)",
    fontWeight: 900,
    color: "#fffef9",
    lineHeight: 1.1,
    marginBottom: 16,
    letterSpacing: "-.02em",
  },
  heroSub: {
    fontSize: 17, fontWeight: 300,
    color: "rgba(255,255,255,.78)",
    lineHeight: 1.6, maxWidth: 480,
  },
  scrollHint: {
    position: "absolute", bottom: 28, right: 64, zIndex: 2,
    display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
    color: "rgba(255,255,255,.5)",
    fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
    animation: "fadeUp 1s .8s ease both",
  },
  scrollLine: {
    width: 1, height: 48,
    background: "linear-gradient(to bottom, rgba(255,255,255,.5), transparent)",
    animation: "scrollDrop 1.8s ease-in-out infinite",
  },

  sectionIntro: {
    textAlign: "center", padding: "20px 24px 48px",
  },
  sectionLabel: {
    display: "inline-block",
    fontSize: 11, fontWeight: 500,
    letterSpacing: ".16em", textTransform: "uppercase",
    color: "#52b788",
    background: "rgba(82,183,136,.12)",
    padding: "5px 16px", borderRadius: 100,
    marginBottom: 18,
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2rem,4vw,3rem)",
    fontWeight: 900, color: "#1a4731",
    lineHeight: 1.15, marginBottom: 14,
  },
  sectionSub: {
    fontSize: 16, fontWeight: 300, color: "#6b8f74",
    maxWidth: 480, margin: "0 auto",
  },

  cardsSection: { padding: "0 40px 20px" },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    maxWidth: 1100,
    margin: "0 auto",
  },
  card: (hovered, visible, delay) => ({
    background: "#ffffff",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: hovered
      ? "0 20px 60px rgba(26,71,49,.18)"
      : "0 2px 12px rgba(26,71,49,.08)",
    border: "1px solid rgba(183,228,199,.4)",
    display: "flex", flexDirection: "column",
    transition: "transform .35s ease, box-shadow .35s ease, opacity .7s ease, translate .7s ease",
    transform: hovered ? "translateY(-8px)" : "translateY(0)",
    opacity: visible ? 1 : 0,
    translate: visible ? "0 0" : "0 40px",
    transitionDelay: `${delay}s`,
    cursor: "default",
  }),
  cardImgWrap: {
    position: "relative", overflow: "hidden", height: 180,
  },
  cardImg: (hovered) => ({
    width: "100%", height: "100%",
    objectFit: "cover",
    transition: "transform .5s ease",
    transform: hovered ? "scale(1.07)" : "scale(1)",
  }),
  cardIconBadge: (bg) => ({
    position: "absolute", bottom: 12, left: 12,
    width: 36, height: 36, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 18,
    background: bg,
    backdropFilter: "blur(8px)",
  }),
  cardBody: {
    padding: "20px 20px 24px",
    display: "flex", flexDirection: "column", flex: 1, gap: 8,
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 17, fontWeight: 700, color: "#1a4731",
  },
  cardDesc: {
    fontSize: 13, fontWeight: 300, color: "#3d5a45",
    lineHeight: 1.65, flex: 1,
  },
  cardBtn: (color, textColor, hovered) => ({
    display: "block",
    marginTop: 14,
    padding: "11px 0",
    borderRadius: 10,
    border: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13, fontWeight: 500,
    cursor: "pointer",
    letterSpacing: ".04em",
    textDecoration: "none",
    textAlign: "center",
    background: color,
    color: textColor,
    filter: hovered ? "brightness(.88)" : "brightness(1)",
    transform: hovered ? "translateY(-1px)" : "translateY(0)",
    transition: "filter .25s, transform .2s",
  }),

  mission: {
    background: "#c1f4c8",
    padding: "40px 40px", textAlign: "center",
  },
  missionInner: { maxWidth: 640, margin: "0 auto", position: "relative" },
  quote: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.4rem,3vw,2rem)",
    fontWeight: 700, color: "#1a4731",
    lineHeight: 1.45, fontStyle: "italic",
    padding: "0 32px",
    position: "relative",
  },
  quoteDecor: (which) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: "5rem", color: "#b7e4c7",
    position: "absolute", lineHeight: 1,
    ...(which === "open"  ? { top: -16, left: 0 }   : {}),
    ...(which === "close" ? { bottom: -40, right: 0 } : {}),
  }),
  missionAuthor: {
    marginTop: 40,
    fontSize: 13, fontWeight: 500,
    letterSpacing: ".1em", textTransform: "uppercase",
    color: "#52b788",
  },

  footer: {
    background: "#1a2e1f",
    color: "rgba(255,255,255,.5)",
    textAlign: "center",
    padding: "16px", fontSize: 13,
  },
};

const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; }
  @keyframes fadeUp {
    from { transform: translateY(40px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: .5; transform: scale(1.4); }
  }
  @keyframes scrollDrop {
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
  @media (max-width: 900px) {
    .cards-grid { grid-template-columns: repeat(2,1fr) !important; }
  }
  @media (max-width: 560px) {
    .cards-grid { grid-template-columns: 1fr !important; }
    .stats-strip { flex-wrap: wrap; gap: 28px; }
  }
`;

function Card({ card, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      style={S.card(hovered, visible, index * 0.1)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={S.cardImgWrap}>
        <img src={card.img} alt={card.title} style={S.cardImg(hovered)} />
        <div style={S.cardIconBadge(card.iconBg)}>{card.icon}</div>
      </div>
      <div style={S.cardBody}>
        <div style={S.cardTitle}>{card.title}</div>
        <p style={S.cardDesc}>{card.desc}</p>
        <a
          href={card.href}
          style={S.cardBtn(card.color, card.textColor, btnHovered)}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          {card.btn}
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [cardsRef, cardsVisible] = useInView();

  return (
    <div style={S.root}>
      <style>{KEYFRAMES}</style>

      <header style={S.navbar(scrolled)}>
        <a href="/" style={S.logoWrap}>
          <img src="/logo.png" alt="FoodWise logo" style={S.logoImg} />
          <span>FoodWise</span>
        </a>
        <span style={S.navTag(scrolled)}>Fighting Hunger Together</span>
      </header>

      <section style={S.heroSection}>
        <img
          src="/hero.jpg"
          alt="Children holding a food relief sign"
          style={S.heroBg}
        />
        <div style={S.heroOverlay} />

        <div style={S.heroContent}>
          <div style={S.heroBadge}>
            <span style={S.heroDot} />
            Community Action Network
          </div>
          <h1 style={S.heroTitle}>
            Every meal shared<br />is a life{" "}
            <em style={{ fontStyle: "normal", color: "#52b788" }}>transformed.</em>
          </h1>
          <p style={S.heroSub}>
            FoodWise connects donors, volunteers, and communities to fight
            hunger — one act of kindness at a time.
          </p>
        </div>

        <div style={S.scrollHint}>
          <div style={S.scrollLine} />
          Scroll
        </div>
      </section>

      <div style={S.sectionIntro}>
        <div style={S.sectionLabel}>Get Involved</div>
        <h2 style={S.sectionTitle}>How Can We Help?</h2>
        <p style={S.sectionSub}>
          Choose an action below and start making a difference in your community today.
        </p>
      </div>

      <section style={S.cardsSection}>
        <div
          ref={cardsRef}
          className="cards-grid"
          style={S.cardsGrid}
        >
          {CARDS.map((card, i) => (
            <Card key={card.title} card={card} index={i} visible={cardsVisible} />
          ))}
        </div>
      </section>

      <section style={S.mission}>
        <div style={S.missionInner}>
          <p style={S.quote}>
            <span style={S.quoteDecor("open")}>"</span>
            No one should go to bed hungry while others have food to spare.
            <span style={S.quoteDecor("close")}>"</span>
          </p>
          <p style={S.missionAuthor}>— The FoodWise Mission</p>
        </div>
      </section>

      <footer style={S.footer}>
        <p>
          © 2026 <span style={{ color: "#52b788" }}>FoodWise</span> · IPT Group 6 · Made with ♥ for our community
        </p>
      </footer>
    </div>
  );
}