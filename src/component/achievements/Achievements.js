import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "⏰",
    target: 5,
    suffix: "+",
    label: "Years of Experience",
    tag: "Since 2021",
    dark: true,
    desc: "Delivering high-quality web solutions since 2021",
  },
  {
    icon: "🚀",
    target: 20,
    suffix: "+",
    label: "Projects Delivered",
    tag: "End-to-end",
    dark: false,
    desc: "Full-cycle projects from design to deployment",
  },
  {
    icon: "🧩",
    target: 100,
    suffix: "+",
    label: "Reusable Components Built",
    tag: "React & Vue",
    dark: true,
    desc: "Modular UI libraries used across multiple products",
  },
  {
    icon: "💳",
    target: 5,
    suffix: "+",
    label: "Payment Gateway Integrations",
    tag: "Stripe · Razorpay · PayPal .etc",
    dark: false,
    desc: "Secure payment flows live in production apps",
  },
  {
    icon: "⭐",
    target: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    tag: "5-star Reviews",
    dark: false,
    desc: "Consistent positive feedback from every client",
  },
  {
    icon: "☕",
    target: 1200,
    suffix: "+",
    label: "Cups of Coffee",
    tag: "Fuel for code",
    dark: true,
    desc: "Every great project starts with a great brew",
  },
  {
    icon: "🐛",
    target: 250,
    suffix: "+",
    label: "Bugs Squashed",
    tag: "& counting",
    dark: false,
    desc: "Debugging is an art — mastered with patience",
  },
  // {
  //   icon: "🌍",
  //   target: 10,
  //   suffix: "+",
  //   label: "Countries Served",
  //   tag: "Global clients",
  //   dark: true,
  //   desc: "Worked with clients across 4 continents",
  // },
];

function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ icon, target, suffix, label, tag, dark, desc, animate }) {
  const count = useCountUp(target, 1600, animate);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        padding: "1.8rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.25s, box-shadow 0.25s",
        background: dark ? "#0cb65e" : "#e6f9f0",
        border: dark ? "none" : "1.5px solid #b3efd3",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? dark
            ? "0 16px 40px rgba(12,182,94,0.35)"
            : "0 16px 40px rgba(12,182,94,0.15)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        cursor: "default",
        /* ✅ Fixed equal height — fill entire grid cell */
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* BG circles */}
      <div style={{
        position: "absolute", bottom: "-30px", right: "-30px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: dark ? "rgba(255,255,255,0.1)" : "rgba(12,182,94,0.08)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "-20px", left: "-20px",
        width: "60px", height: "60px", borderRadius: "50%",
        background: dark ? "rgba(255,255,255,0.06)" : "rgba(12,182,94,0.05)",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: "48px", height: "48px", borderRadius: "14px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "22px",
        background: dark ? "rgba(255,255,255,0.2)" : "#0cb65e",
        flexShrink: 0,
      }}>
        {icon}
      </div>

      {/* Number */}
      <div style={{
        fontSize: "clamp(36px, 4vw, 52px)",
        fontWeight: "800",
        color: dark ? "#fff" : "#067a3e",
        lineHeight: 1,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        {count}{suffix}
      </div>

      {/* Label */}
      <p style={{
        fontSize: "15px", fontWeight: "600",
        color: dark ? "#fff" : "#0a5c35",
        margin: 0, lineHeight: 1.3,
      }}>
        {label}
      </p>

      {/* Desc — grows to fill space so tag stays at bottom */}
      <p style={{
        fontSize: "13px",
        color: dark ? "rgba(255,255,255,0.75)" : "#3d9e6e",
        margin: 0, lineHeight: 1.5,
        flexGrow: 1,
      }}>
        {desc}
      </p>

      {/* Tag — pinned to bottom */}
      <span style={{
        display: "inline-block", fontSize: "11px", fontWeight: "700",
        letterSpacing: "0.07em", padding: "4px 12px", borderRadius: "999px",
        background: dark ? "rgba(255,255,255,0.2)" : "#0cb65e",
        color: "#fff", alignSelf: "flex-start",
      }}>
        {tag}
      </span>
    </div>
  );
}

export default function Achievements() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ach-card-anim {
          animation: fadeUp 0.5s ease both;
          /* ✅ Key fix: make wrapper a flex column so inner card fills height */
          display: flex;
          flex-direction: column;
        }

        /* ✅ Grid rows have equal height; each cell stretches to tallest card */
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .ach-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .ach-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
        }
        @media (max-width: 360px) {
          .ach-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
          padding: "5rem 1.5rem",
          background: "#fff",
        }}
        id="achievements"
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* ── Header ── */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              background: "#e6f9f0", color: "#067a3e",
              fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em",
              textTransform: "uppercase", padding: "6px 16px",
              borderRadius: "999px", marginBottom: "1.2rem",
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
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: "800", margin: "0 0 0.6rem",
              color: "#111", lineHeight: 1.15,
            }}>
              My{" "}
              <span style={{ color: "#0cb65e" }}>Professional</span>{" "}
              Journey
            </h2>

            <p style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#666", margin: "0 auto",
              maxWidth: "560px", lineHeight: 1.7,
            }}>
              Showcasing years of experience, successful projects, and impactful
              solutions delivered across various industries.
            </p>

            <div style={{
              width: "60px", height: "4px", borderRadius: "2px",
              background: "#0cb65e", margin: "1.5rem auto 0",
            }} />
          </div>

          {/* ── Cards Grid ── */}
          <div className="ach-grid">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="ach-card-anim"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <StatCard {...stat} animate={animate} />
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div style={{
            textAlign: "center", marginTop: "3rem",
            padding: "2rem 1.5rem",
            background: "linear-gradient(135deg, #e6f9f0 0%, #d0f5e5 100%)",
            borderRadius: "20px",
            border: "1.5px solid #b3efd3",
          }}>
            <p style={{
              fontSize: "clamp(15px, 2.5vw, 18px)",
              fontWeight: "600", color: "#0a5c35",
              margin: "0 0 1.2rem",
            }}>
              Ready to add your project to these numbers?
            </p>
            <button
  onClick={() => window.open("mailto:kalaimca685@gmail.com?subject=Let's Work Together&body=Hi, I'd love to collaborate with you!")}
  style={{
    background: "#0cb65e", color: "#fff",
    border: "none", borderRadius: "999px",
    padding: "12px 32px", fontSize: "15px",
    fontWeight: "700", cursor: "pointer",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: "background 0.2s, transform 0.2s",
    boxShadow: "0 6px 20px rgba(12,182,94,0.3)",
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background = "#089a4e";
    e.currentTarget.style.transform = "scale(1.04)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = "#0cb65e";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  🤝 Let's Work Together
</button>
          </div>

        </div>
      </section>
    </>
  );
}