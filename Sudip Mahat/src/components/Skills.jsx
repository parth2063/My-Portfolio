import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "React",        level: 90, icon: "⚛",  category: "Frontend" },
  { name: "JavaScript",  level: 88, icon: "JS", category: "Frontend" },
  { name: "Tailwind CSS",level: 85, icon: "🎨", category: "Frontend" },
  { name: "Node.js",     level: 80, icon: "⬡",  category: "Backend"  },
  { name: "Django",      level: 75, icon: "🐍", category: "Backend"  },
  { name: "MySQL",       level: 78, icon: "🗄",  category: "Database" },
  { name: "Git",         level: 85, icon: "⎇",  category: "Tools"    },
  { name: "REST APIs",   level: 82, icon: "⚡", category: "Backend"  },
];

const categoryColors = {
  Frontend: { bar: "#22d3ee",   glow: "rgba(34,211,238,0.35)",  badge: "rgba(34,211,238,0.12)"  },
  Backend:  { bar: "#a78bfa",   glow: "rgba(167,139,250,0.35)", badge: "rgba(167,139,250,0.12)" },
  Database: { bar: "#34d399",   glow: "rgba(52,211,153,0.35)",  badge: "rgba(52,211,153,0.12)"  },
  Tools:    { bar: "#fb923c",   glow: "rgba(251,146,60,0.35)",  badge: "rgba(251,146,60,0.12)"  },
};

const SkillCard = ({ skill, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const colors = categoryColors[skill.category];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${index * 0.08}s`,
        background: hovered
          ? `linear-gradient(135deg, rgba(17,17,27,0.95), rgba(17,17,27,0.85))`
          : "rgba(17,17,27,0.6)",
        border: `1px solid ${hovered ? colors.bar : "rgba(255,255,255,0.06)"}`,
        borderRadius: "16px",
        padding: "1.4rem 1.5rem",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 0 28px ${colors.glow}, inset 0 0 20px rgba(0,0,0,0.2)` : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.35s ease",
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "60px", height: "60px",
        background: `radial-gradient(circle at top right, ${colors.badge}, transparent 70%)`,
        borderRadius: "0 16px 0 0",
      }} />

      {/* Icon + Category row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.9rem" }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "10px",
          background: colors.badge,
          border: `1px solid ${hovered ? colors.bar : "rgba(255,255,255,0.08)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px", fontWeight: "800",
          color: colors.bar,
          fontFamily: "'DM Mono', monospace",
          transition: "all 0.3s ease",
          boxShadow: hovered ? `0 0 12px ${colors.glow}` : "none",
        }}>
          {skill.icon}
        </div>
        <span style={{
          fontSize: "0.6rem", fontWeight: "600",
          color: colors.bar, letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "'DM Mono', monospace",
          background: colors.badge,
          padding: "3px 8px", borderRadius: "20px",
          border: `1px solid ${colors.bar}33`,
        }}>
          {skill.category}
        </span>
      </div>

      {/* Skill name */}
      <p style={{
        fontSize: "1rem", fontWeight: "700",
        color: hovered ? "#fff" : "#e2e8f0",
        fontFamily: "'Syne', sans-serif",
        marginBottom: "0.75rem",
        transition: "color 0.3s ease",
      }}>
        {skill.name}
      </p>

      {/* Progress bar */}
      <div style={{ position: "relative" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginBottom: "6px",
        }}>
          <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace" }}>
            proficiency
          </span>
          <span style={{
            fontSize: "0.7rem", fontWeight: "700",
            color: colors.bar, fontFamily: "'DM Mono', monospace",
          }}>
            {skill.level}%
          </span>
        </div>

        {/* Track */}
        <div style={{
          width: "100%", height: "4px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "2px", overflow: "hidden",
        }}>
          {/* Fill */}
          <div style={{
            height: "100%",
            width: inView ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${colors.bar}, ${colors.bar}aa)`,
            borderRadius: "2px",
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.08}s`,
            boxShadow: `0 0 8px ${colors.glow}`,
            position: "relative",
          }}>
            {/* Shimmer */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "20px", height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              animation: inView ? "shimmer 2s ease-in-out infinite" : "none",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">

      {/* Background decoration */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section header */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          marginBottom: "3.5rem",
        }}>
          <p style={{
            fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(34,211,238,0.6)", fontFamily: "'DM Mono', monospace",
            marginBottom: "0.6rem",
          }}>
            what i work with
          </p>
          <h3 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800", color: "#fff",
            fontFamily: "'Syne', sans-serif",
            lineHeight: 1.1,
          }}>
            Tech{" "}
            <span style={{
              color: "#22d3ee",
              textShadow: "0 0 30px rgba(34,211,238,0.4)",
            }}>
              Stack
            </span>
          </h3>

          {/* Divider line */}
          <div style={{
            marginTop: "1rem",
            width: inView ? "80px" : "0px",
            height: "2px",
            background: "linear-gradient(90deg, #22d3ee, transparent)",
            transition: "width 1s ease 0.3s",
            borderRadius: "1px",
          }} />
        </div>

        {/* Skills grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.25rem",
        }}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { opacity: 0; transform: translateX(-100%); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;