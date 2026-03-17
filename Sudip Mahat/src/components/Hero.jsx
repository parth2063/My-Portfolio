import { useEffect, useState } from "react";

// ─── Particles ─────────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));

// ─── Roles to cycle through ────────────────────────────────────────────────────
const ROLES = ["Web Developer", "Cricketer"];

// ─── Monogram Logo ─────────────────────────────────────────────────────────────
const MonogramLogo = () => (
  <div className="flex items-center gap-3">
    <div style={{ position: "relative", width: "42px", height: "42px", flexShrink: 0 }}>
      <svg
        width="42" height="42" viewBox="0 0 42 42"
        style={{ position: "absolute", top: 0, left: 0, animation: "spinSlow 8s linear infinite" }}
      >
        <circle cx="21" cy="21" r="19" fill="none"
          stroke="rgba(34,211,238,0.35)" strokeWidth="1" strokeDasharray="4 3" />
      </svg>
      <svg width="42" height="42" viewBox="0 0 42 42"
        style={{ position: "absolute", top: 0, left: 0 }}>
        <defs>
          <filter id="hexGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon points="21,3 38,12 38,30 21,39 4,30 4,12"
          fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.2" />
        <polygon points="21,3 38,12 38,30 21,39 4,30 4,12"
          fill="none" stroke="rgba(34,211,238,0.5)" strokeWidth="1"
          filter="url(#hexGlow)" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{
          fontSize: "11px", fontWeight: "800", color: "#22d3ee",
          letterSpacing: "0.05em", fontFamily: "'Syne', sans-serif",
          textShadow: "0 0 8px rgba(34,211,238,0.6)", lineHeight: 1,
        }}>SM</span>
      </div>
    </div>
    <span style={{
      fontSize: "1.05rem", fontWeight: "700", color: "#22d3ee",
      fontFamily: "'Syne', sans-serif", letterSpacing: "0.03em",
      textShadow: "0 0 12px rgba(34,211,238,0.3)",
    }}>
      Sudip Mahat
    </span>
  </div>
);

// ─── Header ────────────────────────────────────────────────────────────────────
const Header = () => (
  <header className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
    <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
      <MonogramLogo />
      <nav className="hidden md:flex space-x-6 text-gray-300">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ transition: "color 0.2s ease", fontSize: "0.9rem", letterSpacing: "0.04em" }}
            className="hover:text-cyan-400"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

// ─── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter loop: type → pause → delete → next role
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === "") {
      // Fully deleted — move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      // Typing or deleting one character
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(blink);
  }, []);

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
    transitionDelay: delay,
  });

  return (
    <>
      <Header />

      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{
            position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.04) 45%, transparent 70%)",
            filter: "blur(40px)",
          }} />
          <div style={{
            position: "absolute", bottom: "10%", right: "10%",
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            filter: "blur(30px)",
          }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map((p) => (
            <span key={p.id} style={{
              position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
              width: `${p.size}px`, height: `${p.size}px`, borderRadius: "50%",
              background: "rgba(34,211,238,0.6)",
              animation: `floatDot ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
              boxShadow: "0 0 6px rgba(34,211,238,0.5)",
            }} />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Main content */}
        <div className="relative z-10">

          {/* Available badge */}
          <div style={fadeUp("0.1s")}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm tracking-widest uppercase"
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#22d3ee", display: "inline-block",
              animation: "pulse 1.5s ease-in-out infinite",
            }} />
            Available for work
          </div>

          {/* Name */}
          <div style={fadeUp("0.3s")}>
            <h2
              className="font-bold mb-2 leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontFamily: "'Syne', sans-serif" }}
            >
              Hi, I'm{" "}
              <span className="text-cyan-400" style={{
                textShadow: "0 0 30px rgba(34,211,238,0.4), 0 0 60px rgba(34,211,238,0.15)",
              }}>
                Sudip Mahat
              </span>
            </h2>
          </div>

          {/* Typewriter — loops between roles */}
          <div style={fadeUp("0.5s")}>
            <h3 className="text-gray-400 mb-4" style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontFamily: "'DM Mono', 'Courier New', monospace",
              letterSpacing: "0.05em", minHeight: "2.5rem",
            }}>
              <span className="text-gray-500">{"<"}</span>
              <span className="text-cyan-300">{text}</span>
              <span className="text-cyan-400" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
              <span className="text-gray-500">{" />"}</span>
            </h3>
          </div>

          {/* Role dots indicator */}
          <div style={{ ...fadeUp("0.55s"), display: "flex", justifyContent: "center", gap: "6px", marginBottom: "1.5rem" }}>
            {ROLES.map((_, i) => (
              <span key={i} style={{
                width: i === roleIndex ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === roleIndex ? "#22d3ee" : "rgba(34,211,238,0.25)",
                transition: "all 0.4s ease",
                boxShadow: i === roleIndex ? "0 0 8px rgba(34,211,238,0.5)" : "none",
              }} />
            ))}
          </div>

          {/* Description */}
          <div style={fadeUp("0.65s")}>
            <p className="text-gray-500 max-w-lg mx-auto mb-10"
              style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              TO WIN ANY GAME IN THE WORLD, FIRST YOU HAVE TO PLAY IT. <br />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4" style={fadeUp("0.8s")}>
            <a
              href="#projects"
              style={{
                padding: "0.75rem 2rem",
                background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                color: "#000", fontWeight: "700", borderRadius: "8px",
                letterSpacing: "0.04em", fontSize: "0.95rem",
                boxShadow: "0 0 20px rgba(34,211,238,0.3)",
                transition: "all 0.3s ease", textDecoration: "none", display: "inline-block",
              }}
              onMouseEnter={(e) => { e.target.style.boxShadow = "0 0 35px rgba(34,211,238,0.5)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.boxShadow = "0 0 20px rgba(34,211,238,0.3)"; e.target.style.transform = "translateY(0)"; }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                padding: "0.75rem 2rem", background: "transparent",
                color: "#22d3ee", fontWeight: "600", borderRadius: "8px",
                letterSpacing: "0.04em", fontSize: "0.95rem",
                border: "1px solid rgba(34,211,238,0.35)",
                transition: "all 0.3s ease", textDecoration: "none", display: "inline-block",
              }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(34,211,238,0.08)"; e.target.style.borderColor = "rgba(34,211,238,0.7)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(34,211,238,0.35)"; e.target.style.transform = "translateY(0)"; }}
            >
              Let's Talk
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2" style={{
            opacity: visible ? 0.5 : 0, transition: "opacity 1s ease", transitionDelay: "1.3s",
          }}>
            <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
            <div style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, rgba(34,211,238,0.6), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }} />
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes floatDot {
            0%   { transform: translateY(0px) scale(1); opacity: 0.4; }
            100% { transform: translateY(-18px) scale(1.3); opacity: 0.9; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.5; transform: scale(0.8); }
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.6; transform: scaleY(1); }
            50%       { opacity: 1; transform: scaleY(1.15); }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;