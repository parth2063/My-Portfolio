import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Tribhuvan University",
    period: "2080–2084 BS  ·  2023–2027 AD",
    status: "Ongoing",
    icon: "🎓",
    color: "#22d3ee",
    highlights: [
      "Dean's List (Fall 2022, Spring 2023)",
      "Data Structures, Algorithms, Machine Learning, Web Development",
    ],
  },
  {
    id: 2,
    degree: "High School (+2) in Science",
    institution: "Prasadi Academy Lalitpur, Nepal",
    period: "2078–2080 BS  ·  2020–2023 AD",
    status: "Completed",
    icon: "📐",
    color: "#a78bfa",
    highlights: [
      "Science Stream — Mathematics & Physics focus",
      "Achieved distinction in final examinations",
    ],
  },
  {
    id: 3,
    degree: "Secondary Education (SEE)",
    institution: "Budhanilkhanta Aawasiya Vidyalaya",
    period: "2072–2077 BS  ·  2019–2021 AD",
    status: "Completed",
    icon: "🏫",
    color: "#34d399",
    highlights: [
      "Completed SEE with excellent grades",
      "Captain of the school's Cricket team 🏏",
      "Active member of the school's club",
    ],
  },
];

const EducationCard = ({ item, index }) => {
  const isLast = index === educationData.length - 1;

  return (
    <div style={{ display: "flex", gap: "1.75rem", position: "relative" }}>

      {/* Timeline node column */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>

        {/* Icon node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          style={{
            width: "54px", height: "54px", borderRadius: "50%",
            background: `radial-gradient(circle, ${item.color}22, ${item.color}08)`,
            border: `1.5px solid ${item.color}55`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "22px", zIndex: 2, position: "relative",
            boxShadow: `0 0 18px ${item.color}25`,
          }}
        >
          {item.icon}

          {/* Pulse ring */}
          {item.status === "Ongoing" && (
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: `1px solid ${item.color}55`,
              }}
            />
          )}
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
            style={{
              flex: 1, width: "1px", marginTop: "6px",
              background: `linear-gradient(to bottom, ${item.color}40, ${educationData[index + 1].color}20)`,
              transformOrigin: "top", minHeight: "40px",
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: index * 0.15 + 0.1 }}
        whileHover={{ y: -4 }}
        style={{
          flex: 1,
          marginBottom: isLast ? 0 : "2rem",
          background: "rgba(8,13,22,0.75)",
          border: `1px solid ${item.color}18`,
          borderRadius: "20px",
          padding: "1.75rem 2rem",
          backdropFilter: "blur(16px)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = `1px solid ${item.color}45`;
          e.currentTarget.style.boxShadow = `0 12px 50px ${item.color}12, 0 0 0 1px ${item.color}10`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = `1px solid ${item.color}18`;
          e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.35)";
        }}
      >
        {/* Top-right ambient glow */}
        <div style={{
          position: "absolute", top: "-50px", right: "-50px",
          width: "180px", height: "180px", borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Corner brackets */}
        <div style={{
          position: "absolute", top: "14px", right: "14px",
          width: "18px", height: "18px",
          borderTop: `1.5px solid ${item.color}30`,
          borderRight: `1.5px solid ${item.color}30`,
          borderRadius: "0 4px 0 0",
        }} />
        <div style={{
          position: "absolute", bottom: "14px", left: "14px",
          width: "18px", height: "18px",
          borderBottom: `1.5px solid ${item.color}18`,
          borderLeft: `1.5px solid ${item.color}18`,
          borderRadius: "0 0 0 4px",
        }} />

        {/* Top row — period + status */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "0.9rem" }}>
          <span style={{
            fontSize: "0.62rem", fontWeight: "600", letterSpacing: "0.12em",
            textTransform: "uppercase", color: item.color,
            background: `${item.color}12`, padding: "4px 10px",
            borderRadius: "20px", border: `1px solid ${item.color}25`,
            fontFamily: "'DM Mono', monospace",
          }}>
            {item.period}
          </span>

          <span style={{
            fontSize: "0.6rem", fontWeight: "600", letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: item.status === "Ongoing" ? "#34d399" : "rgba(255,255,255,0.35)",
            background: item.status === "Ongoing" ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
            padding: "4px 10px", borderRadius: "20px",
            border: `1px solid ${item.status === "Ongoing" ? "rgba(52,211,153,0.25)" : "rgba(255,255,255,0.08)"}`,
            fontFamily: "'DM Mono', monospace",
            display: "inline-flex", alignItems: "center", gap: "5px",
          }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%", display: "inline-block",
              background: item.status === "Ongoing" ? "#34d399" : "rgba(255,255,255,0.25)",
              animation: item.status === "Ongoing" ? "dotPulse 1.5s ease-in-out infinite" : "none",
            }} />
            {item.status}
          </span>
        </div>

        {/* Degree */}
        <h4 style={{
          fontSize: "1.2rem", fontWeight: "800",
          color: "#fff", fontFamily: "'Syne', sans-serif",
          lineHeight: 1.3, marginBottom: "0.3rem",
        }}>
          {item.degree}
        </h4>

        {/* Institution */}
        <p style={{
          fontSize: "0.82rem", color: `${item.color}99`,
          fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em",
          marginBottom: "1rem",
        }}>
          📍 {item.institution}
        </p>

        {/* Divider */}
        <div style={{
          height: "1px", marginBottom: "1rem",
          background: `linear-gradient(90deg, ${item.color}30, transparent)`,
        }} />

        {/* Highlights */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {item.highlights.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.08 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "0.6rem",
                fontSize: "0.85rem", color: "rgba(200,215,225,0.75)", lineHeight: "1.6",
              }}
            >
              <span style={{
                marginTop: "7px", width: "5px", height: "5px",
                borderRadius: "50%", background: item.color,
                flexShrink: 0, boxShadow: `0 0 6px ${item.color}80`,
              }} />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000, #050a0f, #000)" }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: "15%", left: "0%",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "0%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      {/* Dot grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(34,211,238,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p style={{
            fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(34,211,238,0.6)", fontFamily: "'DM Mono', monospace",
            marginBottom: "0.6rem",
          }}>
            my academic journey
          </p>
          <h3 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800",
            color: "#fff", fontFamily: "'Syne', sans-serif", lineHeight: 1.1,
          }}>
            Edu
            <span style={{ color: "#22d3ee", textShadow: "0 0 30px rgba(34,211,238,0.4)" }}>
              cation
            </span>
          </h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              height: "2px", margin: "1rem auto 0",
              background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
              borderRadius: "1px",
            }}
          />
        </motion.div>

        {/* Timeline entries */}
        <div>
          {educationData.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.6); }
        }
      `}</style>
    </section>
  );
};

export default Education;