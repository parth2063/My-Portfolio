import { useState } from "react";

const mySocials = [
  {
    name: "Github",
    href: "https://github.com/parth2063",
    color: "#fff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sudipmahat/",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/suu.diiip/",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const navLinks = ["About", "Skills", "Projects", "Education", "Contact"];

const SocialIcon = ({ social }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={social.name}
      style={{
        width: "44px", height: "44px", borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hovered ? `${social.color}18` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? `${social.color}60` : "rgba(255,255,255,0.08)"}`,
        color: hovered ? social.color : "rgba(150,165,180,0.6)",
        transition: "all 0.3s ease",
        boxShadow: hovered ? `0 0 18px ${social.color}30` : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        textDecoration: "none",
      }}
    >
      {social.icon}
    </a>
  );
};

const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(to bottom, #000, #020810)",
      borderTop: "1px solid rgba(34,211,238,0.1)",
      position: "relative", overflow: "hidden",
    }}>

      {/* Top glow line */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "500px", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
      }} />
      <div style={{
        position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
        width: "300px", height: "120px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        filter: "blur(20px)", pointerEvents: "none",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(34,211,238,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Main content */}
        <div style={{
          padding: "3rem 0 2rem",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "flex-start",
          gap: "2.5rem",
        }}>

          {/* Brand column */}
          <div style={{ maxWidth: "260px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ position: "relative", width: "38px", height: "38px", flexShrink: 0 }}>
                <svg width="38" height="38" viewBox="0 0 42 42"
                  style={{ position: "absolute", top: 0, left: 0, animation: "spinSlow 10s linear infinite" }}>
                  <circle cx="21" cy="21" r="19" fill="none"
                    stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                </svg>
                <svg width="38" height="38" viewBox="0 0 42 42"
                  style={{ position: "absolute", top: 0, left: 0 }}>
                  <defs>
                    <filter id="fGlow">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <polygon points="21,3 38,12 38,30 21,39 4,30 4,12"
                    fill="rgba(34,211,238,0.07)" stroke="#22d3ee" strokeWidth="1.2" />
                  <polygon points="21,3 38,12 38,30 21,39 4,30 4,12"
                    fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="1" filter="url(#fGlow)" />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: "800", color: "#22d3ee",
                    letterSpacing: "0.05em", fontFamily: "'Syne', sans-serif",
                    textShadow: "0 0 8px rgba(34,211,238,0.6)",
                  }}>SM</span>
                </div>
              </div>
              <span style={{
                fontSize: "1rem", fontWeight: "700", color: "#22d3ee",
                fontFamily: "'Syne', sans-serif", letterSpacing: "0.03em",
                textShadow: "0 0 12px rgba(34,211,238,0.3)",
              }}>
                Sudip Mahat
              </span>
            </div>

            <p style={{
              fontSize: "0.82rem", color: "rgba(150,165,180,0.7)",
              lineHeight: "1.75", fontFamily: "'DM Mono', monospace",
            }}>
              Full Stack Developer & Cricketer.<br />
              Building the web, one commit at a time.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.65rem", marginTop: "1.4rem" }}>
              {mySocials.map((s) => (
                <SocialIcon key={s.name} social={s} />
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{
              fontSize: "0.65rem", fontWeight: "600", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(34,211,238,0.5)",
              fontFamily: "'DM Mono', monospace", marginBottom: "1rem",
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontSize: "0.85rem", color: "rgba(180,195,210,0.6)",
                      fontFamily: "'DM Mono', monospace", textDecoration: "none",
                      transition: "color 0.2s ease",
                      display: "inline-flex", alignItems: "center", gap: "0.45rem",
                    }}
                    onMouseEnter={(e) => { e.target.style.color = "#22d3ee"; }}
                    onMouseLeave={(e) => { e.target.style.color = "rgba(180,195,210,0.6)"; }}
                  >
                    <span style={{ color: "rgba(34,211,238,0.35)", fontSize: "0.55rem" }}>▸</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <p style={{
              fontSize: "0.65rem", fontWeight: "600", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(34,211,238,0.5)",
              fontFamily: "'DM Mono', monospace", marginBottom: "1rem",
            }}>
              Get In Touch
            </p>
            <p style={{
              fontSize: "0.82rem", color: "rgba(150,165,180,0.65)",
              fontFamily: "'DM Mono', monospace", marginBottom: "1.25rem",
              lineHeight: 1.75, maxWidth: "200px",
            }}>
              Open to new opportunities and collaborations.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block", padding: "0.55rem 1.4rem",
                background: "transparent", color: "#22d3ee",
                fontWeight: "600", fontSize: "0.8rem", borderRadius: "8px",
                border: "1px solid rgba(34,211,238,0.35)",
                fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em",
                textDecoration: "none", transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(34,211,238,0.08)";
                e.target.style.borderColor = "rgba(34,211,238,0.7)";
                e.target.style.boxShadow = "0 0 16px rgba(34,211,238,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "rgba(34,211,238,0.35)";
                e.target.style.boxShadow = "none";
              }}
            >
              Say Hello →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)",
          marginBottom: "1.5rem",
        }} />

        {/* Bottom bar */}
        <div style={{
          paddingBottom: "1.75rem",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "center",
          gap: "0.75rem",
        }}>
          <p style={{
            fontSize: "0.72rem", color: "rgba(120,135,150,0.6)",
            fontFamily: "'DM Mono', monospace",
          }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "rgba(34,211,238,0.5)" }}>Sudip Mahat</span>.
            {" "}All rights reserved.
          </p>
          <p style={{
            fontSize: "0.7rem", color: "rgba(100,115,130,0.5)",
            fontFamily: "'DM Mono', monospace",
            display: "flex", alignItems: "center", gap: "0.35rem",
          }}>
            Built with
            <span style={{ color: "#22d3ee" }}>React</span>
            &
            <span style={{ color: "#38bdf8" }}>Tailwind</span>
            <span style={{ color: "rgba(34,211,238,0.4)" }}>⚡</span>
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;