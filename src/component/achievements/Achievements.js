import { useEffect, useRef, useState } from "react";

/* ══════════════════════════════════════
   DATA — 14 cards, consistent structure
   ══════════════════════════════════════ */
const stats = [
  {
    icon: "⏰",
    target: 5,
    suffix: "+",
    label: "Years of Experience",
    desc: "Delivering high-quality web solutions since 2021",
    tag: "Since 2021",
    tagIcon: "📅",
    dark: true,
  },
  {
    icon: "🚀",
    target: 20,
    suffix: "+",
    label: "Projects Delivered",
    desc: "Full-cycle projects from design to deployment",
    tag: "End-to-end",
    tagIcon: "→",
    dark: false,
  },
  {
    icon: "🧩",
    target: 100,
    suffix: "+",
    label: "Reusable Components Built",
    desc: "Modular UI libraries used across multiple products",
    tag: "React & Vue",
    tagIcon: "⚡",
    dark: true,
  },
  {
    icon: "💳",
    target: 5,
    suffix: "+",
    label: "Payment Gateway Integrations",
    desc: "Secure payment flows live in production apps",
    tag: "Stripe · Razorpay · PayPal",
    tagIcon: "✓",
    dark: false,
  },
  {
    icon: "⭐",
    target: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    desc: "Consistent positive feedback from every client",
    tag: "5-star Reviews",
    tagIcon: "★",
    dark: false,
  },
  {
    icon: "☕",
    target: 1200,
    suffix: "+",
    label: "Cups of Coffee",
    desc: "Every great project starts with a great brew",
    tag: "Fuel for code",
    tagIcon: "🔥",
    dark: true,
  },
  {
    icon: "🐛",
    target: 250,
    suffix: "+",
    label: "Bugs Squashed",
    desc: "Debugging is an art — mastered with patience",
    tag: "& counting",
    tagIcon: "+",
    dark: false,
  },
  {
    icon: "👥",
    target: 16,
    suffix: "+",
    label: "Happy Clients",
    desc: "Startups to enterprises across 8 countries",
    tag: "Global reach",
    tagIcon: "🌐",
    dark: true,
  },
  {
    icon: "🔌",
    target: 40,
    suffix: "+",
    label: "API Integrations",
    desc: "Third-party services wired into production systems",
    tag: "REST & GraphQL",
    tagIcon: "⚙️",
    dark: true,
  },
  {
    icon: "🏆",
    target: 2,
    suffix: "+",
    label: "Awards & Certifications",
    desc: "AWS, Meta React, and hackathon wins",
    tag: "Certified",
    tagIcon: "🎖️",
    dark: false,
  },
  {
    icon: "🌿",
    target: 500,
    suffix: "+",
    label: "GitHub Commits",
    desc: "Consistent open-source contributions all year",
    tag: "Open source",
    tagIcon: "⬡",
    dark: true,
  },
  {
    icon: "📱",
    target: 15,
    suffix: "+",
    label: "Mobile-first Apps",
    desc: "Responsive designs that work on every device",
    tag: "PWA ready",
    tagIcon: "📲",
    dark: false,
  },
  {
    icon: "🛡️",
    target: 12,
    suffix: "+",
    label: "Secure Auth Systems",
    desc: "JWT, OAuth2 and role-based access control systems",
    tag: "Zero breaches",
    tagIcon: "🔒",
    dark: false,
  },

];

/* ══════════════════════════════════════
   COUNT-UP HOOK — fixed: target is always number
   ══════════════════════════════════════ */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const numTarget = Number(target); // fix: was string in some cards
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.round(ease * numTarget));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

/* ══════════════════════════════════════
   STAT CARD
   ══════════════════════════════════════ */
function StatCard({ icon, target, suffix, label, desc, tag, tagIcon, dark, animate, index }) {
  const count = useCountUp(target, 1800, animate);
  const [hovered, setHovered] = useState(false);

  const GREEN      = "#0cb65e";
  const LIGHT_BG   = "#edfaf3";
  const DARK_TEXT  = "#067a3e";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        padding: "24px 22px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        boxSizing: "border-box",
        cursor: "default",
        background: dark ? GREEN : LIGHT_BG,
        border: dark ? "none" : `1.5px solid #b3efd3`,
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? dark
            ? "0 18px 44px rgba(12,182,94,0.38)"
            : "0 18px 44px rgba(12,182,94,0.16)"
          : "0 2px 10px rgba(0,0,0,0.05)",
        animationDelay: `${index * 0.06}s`,
        cursor:"pointer",
      }}
    >
      {/* Decorative circles */}
      <span style={{
        position: "absolute", bottom: "-28px", right: "-28px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: dark ? "rgba(255,255,255,0.1)" : "rgba(12,182,94,0.08)",
        pointerEvents: "none",
      }} />
      <span style={{
        position: "absolute", top: "-18px", left: "-18px",
        width: "60px", height: "60px", borderRadius: "50%",
        background: dark ? "rgba(255,255,255,0.06)" : "rgba(12,182,94,0.05)",
        pointerEvents: "none",
      }} />

      {/* Icon box */}
      <div style={{
        width: "48px", height: "48px", borderRadius: "14px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "22px", flexShrink: 0,
        background: dark ? "rgba(255,255,255,0.2)" : GREEN,
      }}>
        {icon}
      </div>

      {/* Count */}
      <div style={{
        fontSize: "clamp(34px, 4vw, 48px)",
        fontWeight: "800",
        color: dark ? "#fff" : DARK_TEXT,
        lineHeight: 1,
        letterSpacing: "-1px",
      }}>
        {count}{suffix}
      </div>

      {/* Label */}
      <p style={{
        fontSize: "14px", fontWeight: "700",
        color: dark ? "#fff" : "#0a5c35",
        margin: 0, lineHeight: 1.35,
      }}>
        {label}
      </p>

      {/* Description — flex-grow pushes tag to bottom */}
      <p style={{
        fontSize: "12.5px",
        color: dark ? "rgba(255,255,255,0.75)" : "#3d9e6e",
        margin: 0, lineHeight: 1.55,
        flexGrow: 1,
      }}>
        {desc}
      </p>

      {/* Tag pill */}
      <span style={{
        display: "inline-flex", alignItems: "center", gap: "5px",
        fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em",
        padding: "5px 12px", borderRadius: "999px",
        background: dark ? "rgba(255,255,255,0.2)" : GREEN,
        color: "#fff", alignSelf: "flex-start",
        marginTop: "4px",
      }}>
        {tagIcon && <span style={{ fontSize: "11px" }}>{tagIcon}</span>}
        {tag}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════ */
export default function Achievements() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCTA = () => {
    window.open(
      "mailto:kalaimca685@gmail.com?subject=Let's Work Together&body=Hi, I'd love to collaborate with you!",
      "_blank"
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.65); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ach-card-wrap {
          display: flex;
          flex-direction: column;
          animation: fadeUp 0.5s ease both;
        }

        .ach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        .ach-cta-btn {
          background: #0cb65e;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 13px 34px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 22px rgba(12,182,94,0.32);
        }
        .ach-cta-btn:hover {
          background: #089a4e;
          transform: scale(1.05);
          box-shadow: 0 10px 28px rgba(12,182,94,0.42);
        }

        @media (max-width: 1100px) {
          .ach-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 780px) {
          .ach-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 420px) {
          .ach-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
        }
        @media (max-width: 340px) {
          .ach-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="achievements"
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
          padding: "80px 24px",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>

          {/* ── Section Header ── */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#e6f9f0", color: "#067a3e",
              fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.13em",
              textTransform: "uppercase", padding: "6px 18px",
              borderRadius: "999px", marginBottom: "20px",
              border: "1px solid #b3efd3",
            }}>
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#0cb65e", display: "inline-block",
                animation: "pulse 1.6s infinite",
              }} />
              Achievements
            </div>

            <h2 style={{
              fontSize: "clamp(26px, 5vw, 44px)",
              fontWeight: "800", margin: "0 0 14px",
              color: "#111", lineHeight: 1.15,
            }}>
              My{" "}
              <span style={{
                color: "#0cb65e",
                background: "linear-gradient(135deg,#0cb65e,#067a3e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Professional
              </span>{" "}
              Journey
            </h2>

            <p style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#666", margin: "0 auto",
              maxWidth: "520px", lineHeight: 1.75,
            }}>
              Showcasing years of experience, successful projects, and impactful
              solutions delivered across various industries.
            </p>

            <div style={{
              width: "56px", height: "4px", borderRadius: "2px",
              background: "linear-gradient(90deg,#0cb65e,#067a3e)",
              margin: "20px auto 0",
            }} />
          </div>

          {/* ── Cards Grid ── */}
          <div className="ach-grid">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="ach-card-wrap"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <StatCard {...stat} animate={animate} index={i} />
              </div>
            ))}
          </div>

          {/* ── CTA Banner ── */}
          <div style={{
            textAlign: "center",
            marginTop: "52px",
            padding: "40px 24px",
            background: "linear-gradient(135deg, #e6f9f0 0%, #d0f5e5 100%)",
            borderRadius: "24px",
            border: "1.5px solid #b3efd3",
          }}>
            <p style={{
              fontSize: "clamp(15px, 2.5vw, 19px)",
              fontWeight: "700", color: "#0a5c35",
              margin: "0 0 6px",
            }}>
              Ready to add your project to these numbers?
            </p>
            <p style={{
              fontSize: "14px", color: "#3d9e6e",
              margin: "0 0 24px",
            }}>
              Let's build something great together.
            </p>
            <button className="ach-cta-btn" onClick={handleCTA}>
              🤝 Let's Work Together
            </button>
          </div>

        </div>
      </section>
    </>
  );
}