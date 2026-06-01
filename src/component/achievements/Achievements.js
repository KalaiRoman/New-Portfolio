import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "⏰",
    target: 5,
    suffix: "+",
    label: "Years of Experience",
    tag: "Since 2021",
    dark: true,
  },
  {
    icon: "🚀",
    target: 20,
    suffix: "+",
    label: "Projects Delivered",
    tag: "End-to-end",
    dark: false,
  },
  {
    icon: "🧩",
    target: 100,
    suffix: "+",
    label: "Reusable Components Built",
    tag: "React & Vue",
    dark: true,
  },
  {
    icon: "💳",
    target: 5,
    suffix: "+",
    label: "Payment Gateway Integrations",
    tag: "Stripe · Razorpay · PayPal · etc",
    dark: false,
  },
];

function useCountUp(target, duration = 1400, start = false) {
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

function StatCard({ icon, target, suffix, label, tag, dark, animate }) {
  const count = useCountUp(target, 1400, animate);

  return (
    <div style={{
      borderRadius: "18px",
      padding: "1.8rem 1.4rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      position: "relative",
      overflow: "hidden",
      transition: "transform 0.2s",
      background: dark ? "#0cb65e" : "#e6f9f0",
      border: dark ? "none" : "1px solid #b3efd3",
      cursor: "default",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      {/* Background circle accent */}
      <div style={{
        position: "absolute",
        bottom: "-28px", right: "-28px",
        width: "90px", height: "90px",
        borderRadius: "50%",
        background: dark ? "rgba(255,255,255,0.12)" : "rgba(12,182,94,0.1)",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: "44px", height: "44px",
        borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "20px",
        background: dark ? "rgba(255,255,255,0.2)" : "#0cb65e",
      }}>
        {icon}
      </div>

      {/* Number */}
      <div style={{
        fontSize: "50px",
        fontWeight: "800",
        color: dark ? "#fff" : "#067a3e",
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>

      {/* Label */}
      <p style={{
        fontSize: "14px",
        fontWeight: "500",
        color: dark ? "rgba(255,255,255,0.88)" : "#067a3e",
        lineHeight: 1.4,
        margin: 0,
      }}>
        {label}
      </p>

      {/* Tag */}
      <span style={{
        display: "inline-block",
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "0.08em",
        padding: "3px 10px",
        borderRadius: "999px",
        background: dark ? "rgba(255,255,255,0.18)" : "#0cb65e",
        color: "#fff",
        alignSelf: "flex-start",
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
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
      padding: "4rem 1.5rem",
      maxWidth: "900px",
      margin: "0 auto",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        {/* Pill */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "#e6f9f0",
          color: "#067a3e",
          fontSize: "12px",
          fontWeight: "700",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "5px 14px",
          borderRadius: "999px",
          marginBottom: "1rem",
        }}>
          <span style={{
            width: "7px", height: "7px",
            borderRadius: "50%",
            background: "#0cb65e",
            display: "inline-block",
            animation: "pulse 1.6s infinite",
          }} />
          Achievements
        </div>

        <h2 style={{
          fontSize: "clamp(22px, 5vw, 32px)",
          fontWeight: "800",
          color: "#111",
          margin: "0 0 0.5rem",
          lineHeight: 1.15,
        }}>
           My 
          <em style={{ fontStyle: "normal", color: "#0cb65e" }}> Professional </em>{" "}
          Journey
        </h2>

        <p style={{
          fontSize: "15px",
          color: "#666",
          margin: 0,
        }}>
          Showcasing years of experience, successful projects, and impactful solutions delivered across various industries.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: "14px",
      }}>
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} animate={animate} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}