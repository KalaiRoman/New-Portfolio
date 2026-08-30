// import { useEffect, useRef, useState } from "react";


// const stats = [
//   { icon: "⏰", target: 5,    suffix: "+", label: "Years of Experience",          desc: "Delivering high-quality web solutions since 2021",          tag: "Since 2021",              tagIcon: "📅", dark: true  },
//   { icon: "🚀", target: 20,   suffix: "+", label: "Projects Delivered",            desc: "Full-cycle projects from design to deployment",             tag: "End-to-end",              tagIcon: "→",  dark: false },
//   { icon: "🧩", target: 100,  suffix: "+", label: "Reusable Components Built",     desc: "Modular UI libraries used across multiple products",        tag: "React & Vue",             tagIcon: "⚡", dark: true  },
//   { icon: "💳", target: 5,    suffix: "+", label: "Payment Gateway Integrations",  desc: "Secure payment flows live in production apps",              tag: "Stripe · Razorpay · PayPal", tagIcon: "✓", dark: false },
//   { icon: "⭐", target: 98,   suffix: "%", label: "Client Satisfaction Rate",      desc: "Consistent positive feedback from every client",            tag: "5-star Reviews",          tagIcon: "★",  dark: false },
//   { icon: "☕", target: 1200, suffix: "+", label: "Cups of Coffee",                desc: "Every great project starts with a great brew",              tag: "Fuel for code",           tagIcon: "🔥", dark: true  },
//   { icon: "🐛", target: 250,  suffix: "+", label: "Bugs Squashed",                 desc: "Debugging is an art — mastered with patience",             tag: "& counting",              tagIcon: "+",  dark: false },
//   { icon: "👥", target: 16,   suffix: "+", label: "Happy Clients",                 desc: "Startups to enterprises across 8 countries",               tag: "Global reach",            tagIcon: "🌐", dark: true  },
//   { icon: "🔌", target: 40,   suffix: "+", label: "API Integrations",              desc: "Third-party services wired into production systems",        tag: "REST & GraphQL",          tagIcon: "⚙️", dark: true  },
//   { icon: "🏆", target: 2,    suffix: "+", label: "Awards & Certifications",       desc: "AWS, Meta React, and hackathon wins",                      tag: "Certified",               tagIcon: "🎖️", dark: false },
//   { icon: "🌿", target: 3500,  suffix: "+", label: "GitHub Commits",                desc: "Consistent open-source contributions all year",            tag: "Open source",             tagIcon: "⬡",  dark: true  },
//   { icon: "🛡️", target: 12,  suffix: "+", label: "Secure Auth Systems",           desc: "JWT, OAuth2 and role-based access control systems",        tag: "Zero breaches",           tagIcon: "🔒", dark: false },
// ];

// function useCountUp(target, duration = 1800, start = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     const numTarget = Number(target);
//     let startTime = null;
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const ease = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.round(ease * numTarget));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [start, target, duration]);
//   return count;
// }


// function StatCard({ icon, target, suffix, label, desc, tag, tagIcon, dark, animate }) {
//   const count   = useCountUp(target, 1800, animate);
//   const [hov, setHov] = useState(false);

//   const GREEN    = "#0cb65e";
//   const LIGHT_BG = "#edfaf3";

//   return (
//     <div
//       className="ach-card"
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         background:  dark ? GREEN : LIGHT_BG,
//         border:      dark ? "none" : "1.5px solid #b3efd3",
//         transform:   hov ? "translateY(-5px)" : "translateY(0)",
//         boxShadow:   hov
//           ? dark ? "0 18px 44px rgba(12,182,94,0.38)" : "0 18px 44px rgba(12,182,94,0.16)"
//           : "0 2px 10px rgba(0,0,0,0.05)",
//       }}
//     >
//       <span className="ach-deco ach-deco--br" style={{ background: dark ? "rgba(255,255,255,0.1)"  : "rgba(12,182,94,0.08)" }} />
//       <span className="ach-deco ach-deco--tl" style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(12,182,94,0.05)" }} />

//       <div className="ach-icon-box" style={{ background: dark ? "rgba(255,255,255,0.2)" : GREEN }}>
//         {icon}
//       </div>

//       <div className="ach-count" style={{ color: dark ? "#fff" : "#067a3e" }}>
//         {count}{suffix}
//       </div>

//       <p className="ach-label" style={{ color: dark ? "#fff" : "#0a5c35" }}>
//         {label}
//       </p>

//     </div>
//   );
// }


// export default function Achievements() {
//   const [animate, setAnimate] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleCTA = () =>
//     window.open("mailto:kalaimca685@gmail.com?subject=Let's Work Together&body=Hi, I'd love to collaborate with you!", "_blank");

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         @keyframes pulse {
//           0%,100% { opacity:1; transform:scale(1); }
//           50%      { opacity:.45; transform:scale(.65); }
//         }
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(28px); }
//           to   { opacity:1; transform:translateY(0); }
//         }

//         /* ── Section ── */
//         .ach-section {
//           font-family: 'Plus Jakarta Sans','Segoe UI',sans-serif;
//           padding: 80px 24px;
//           background: #fff;
//           width: 100%;
//           box-sizing: border-box;
//         }
//         .ach-inner {
//           max-width: 1160px;
//           margin: 0 auto;
//           width: 100%;
//         }

//         /* ── Header ── */
//         .ach-header        { text-align:center; margin-bottom:52px; }
//         .ach-badge         { display:inline-flex; align-items:center; gap:8px; background:#e6f9f0; color:#067a3e; font-size:11.5px; font-weight:700; letter-spacing:.13em; text-transform:uppercase; padding:6px 18px; border-radius:999px; margin-bottom:20px; border:1px solid #b3efd3; }
//         .ach-badge-dot     { width:7px; height:7px; border-radius:50%; background:#0cb65e; display:inline-block; animation:pulse 1.6s infinite; }
//         .ach-heading       { font-size:clamp(14px,5vw,44px); font-weight:800; margin:0 0 14px; color:#111; line-height:1.15; }
//         .ach-heading-green { background:linear-gradient(135deg,#0cb65e,#067a3e); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
//         .ach-subtext       { font-size:clamp(14px,2vw,16px); color:#666; margin:0 auto; max-width:520px; line-height:1.75; }
//         .ach-divider       { width:56px; height:4px; border-radius:2px; background:linear-gradient(90deg,#0cb65e,#067a3e); margin:20px auto 0; }

//         /* ══════════════════════════════
//            GRID
//            4 col → 3 col → 2 col → 1 col
//            ══════════════════════════════ */
//         .ach-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 16px;
//           align-items: stretch;
//           width: 100%;
//         }

//         /* ── Card Wrapper ── */
//         .ach-card-wrap {
//           display: flex;
//           flex-direction: column;
//           width: 100%;
//           animation: fadeUp 0.5s ease both;
//         }

//         /* ── Card ── */
//         .ach-card {
//           border-radius: 20px;
//           padding: 24px 22px 20px;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           position: relative;
//           overflow: hidden;
//           height: 100%;
//           width: 100%;
//           box-sizing: border-box;
//           cursor: pointer;
//           transition: transform 0.22s ease, box-shadow 0.22s ease;
//         }

//         .ach-deco           { position:absolute; border-radius:50%; pointer-events:none; }
//         .ach-deco--br       { bottom:-28px; right:-28px; width:100px; height:100px; }
//         .ach-deco--tl       { top:-18px; left:-18px; width:60px; height:60px; }

//         .ach-icon-box       { width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0; }
//         .ach-count          { font-size:clamp(12px,3vw,38px); font-weight:800; line-height:1; letter-spacing:-1px; }
//         .ach-label          { font-size:14px; font-weight:700; margin:0; line-height:1.35; }
//         .ach-desc           { font-size:12.5px; margin:0; line-height:1.55; flex-grow:1; }
//         .ach-pill           { display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:700; letter-spacing:.06em; padding:5px 12px; border-radius:999px; color:#fff; align-self:flex-start; margin-top:4px; }
//         .ach-pill-icon      { font-size:11px; }

//         /* ── CTA ── */
//         .ach-cta            { text-align:center; margin-top:52px; padding:40px 24px; background:linear-gradient(135deg,#e6f9f0,#d0f5e5); border-radius:24px; border:1.5px solid #b3efd3; width:100%; box-sizing:border-box; }
//         .ach-cta-title      { font-size:clamp(15px,2.5vw,19px); font-weight:700; color:#0a5c35; margin:0 0 6px; }
//         .ach-cta-sub        { font-size:14px; color:#3d9e6e; margin:0 0 24px; }
//         .ach-cta-btn        { background:#0cb65e; color:#fff; border:none; border-radius:999px; padding:13px 34px; font-size:15px; font-weight:700; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; transition:background .2s,transform .2s,box-shadow .2s; box-shadow:0 6px 22px rgba(12,182,94,.32); }
//         .ach-cta-btn:hover  { background:#089a4e; transform:scale(1.05); box-shadow:0 10px 28px rgba(12,182,94,.42); }

//         /* ══════════════════════════════
//            RESPONSIVE BREAKPOINTS
//            ══════════════════════════════ */

//         /* Tablet — 3 columns */
//         @media (max-width: 1100px) {
//           .ach-grid { grid-template-columns: repeat(3, 1fr); }
//         }

//         /* Small tablet — 2 columns */
//         @media (max-width: 768px) {
//           .ach-section { padding: 60px 16px; }
//           .ach-grid    { grid-template-columns: repeat(2, 1fr); gap: 14px; }
//           .ach-header  { margin-bottom: 36px; }
//         }

//         /* Mobile — 1 column, cards are 100% width */
//         @media (max-width: 480px) {
//           .ach-section {
//             padding: 48px 12px;
//           }
//           .ach-grid {
//             grid-template-columns: 1fr;   /* single column */
//             gap: 12px;
//           }
//           .ach-card-wrap,
//           .ach-card {
//             width: 100%;                  /* full width */
//           }
//           .ach-card {
//             border-radius: 16px;
//             padding: 20px 18px 18px;
//           }
//           .ach-count {
//             font-size: 40px;
//           }
//           .ach-label {
//             font-size: 15px;
//           }
//           .ach-desc {
//             font-size: 13px;
//           }
//           .ach-cta {
//             border-radius: 16px;
//             padding: 28px 16px;
//             margin-top: 36px;
//           }
//           .ach-cta-btn {
//             width: 100%;
//             padding: 14px 24px;
//           }
//         }

//         /* Very small phones */
//         @media (max-width: 360px) {
//           .ach-section { padding: 36px 10px; }
//           .ach-grid    { gap: 10px; }
//           .ach-count   { font-size: 36px; }
//         }
//       `}</style>

//       <section ref={sectionRef} id="achievements" className="ach-section">
//         <div className="ach-inner">

//           <div className="ach-header">
//             <div className="ach-badge">
//               <span className="ach-badge-dot" />
//               Achievements
//             </div>
//             <h2 className="ach-heading">
//               My <span className="ach-heading-green">Professional</span> Journey
//             </h2>
//             <p className="ach-subtext">
//               Showcasing years of experience, successful projects, and impactful
//               solutions delivered across various industries.
//             </p>
//             <div className="ach-divider" />
//           </div>

//           <div className="ach-grid">
//             {stats.map((stat, i) => (
//               <div
//                 key={i}
//                 className="ach-card-wrap"
//                 style={{ animationDelay: `${i * 0.06}s` }}
//               >
//                 <StatCard {...stat} animate={animate} />
//               </div>
//             ))}
//           </div>

//           {/* ── CTA ── */}
//           <div className="ach-cta">
//             <p className="ach-cta-title">Ready to add your project to these numbers?</p>
//             <p className="ach-cta-sub">Let's build something great together.</p>
//             <button className="ach-cta-btn" onClick={handleCTA}>
//               🤝 Let's Work Together
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


import { useEffect, useRef, useState } from "react";

/**
 * Cards are ordered to build trust in a natural reading sequence:
 *  1. Credibility & track record  (experience, clients, projects, satisfaction)
 *  2. Technical depth              (integrations, auth, components, APIs)
 *  3. Momentum & personality       (commits, bugs, awards, coffee — a light close)
 *
 * `dark` is no longer set by hand per item — it alternates automatically
 * (even index = dark), which gives a consistent checkerboard rhythm no
 * matter how many columns the grid collapses to.
 */
const stats = [
  // — credibility —
  { icon: "⏰", target: 5,    suffix: "+", label: "Years of Experience",          desc: "Delivering high-quality web solutions since 2021",   tag: "Since 2021",                 tagIcon: "📅",dark:true },
  { icon: "👥", target: 16,   suffix: "+", label: "Happy Clients",                desc: "Startups to enterprises across 8 countries",          tag: "Global reach",               tagIcon: "🌐",dark:false },
  { icon: "🚀", target: 20,   suffix: "+", label: "Projects Delivered",           desc: "Full-cycle projects from design to deployment",       tag: "End-to-end",                 tagIcon: "→",dark:true  },
  { icon: "⭐", target: 98,   suffix: "%", label: "Client Satisfaction Rate",     desc: "Consistent positive feedback from every client",      tag: "5-star Reviews",             tagIcon: "★" ,dark:false },

  // — technical depth —
  { icon: "💳", target: 5,    suffix: "+", label: "Payment Gateway Integrations", desc: "Secure payment flows live in production apps",        tag: "Stripe · Razorpay · PayPal", tagIcon: "✓" ,dark:false },
  { icon: "🛡️", target: 12,  suffix: "+", label: "Secure Auth Systems",          desc: "JWT, OAuth2 and role-based access control systems",   tag: "Zero breaches",              tagIcon: "🔒",dark:true },
  { icon: "🔌", target: 40,   suffix: "+", label: "API Integrations",             desc: "Third-party services wired into production systems", tag: "REST & GraphQL",             tagIcon: "⚙️",dark:false },
  { icon: "🧩", target: 100,  suffix: "+", label: "Reusable Components Built",    desc: "Modular UI libraries used across multiple products",  tag: "React & Vue",                tagIcon: "⚡" ,dark:true},

  // — momentum & personality —
  { icon: "🌿", target: 3500, suffix: "+", label: "GitHub Commits",               desc: "Consistent open-source contributions all year",       tag: "Open source",                tagIcon: "⬡",dark:true  },
  { icon: "🐛", target: 250,  suffix: "+", label: "Bugs Squashed",                desc: "Debugging is an art — mastered with patience",        tag: "& counting",                 tagIcon: "+" ,dark:false },
  { icon: "🏆", target: 2,    suffix: "+", label: "Awards & Certifications",      desc: "AWS, Meta React, and hackathon wins",                 tag: "Certified",                  tagIcon: "🎖️",dark:true },
  { icon: "☕", target: 1200, suffix: "+", label: "Cups of Coffee",               desc: "Every great project starts with a great brew",        tag: "Fuel for code",              tagIcon: "🔥",dark:false },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numTarget = Number(target);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * numTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ icon, target, suffix, label, desc, tag, tagIcon, dark, animate }) {
  const count = useCountUp(target, 1800, animate);
  const [hov, setHov] = useState(false);

  const GREEN = "#0cb65e";
  const LIGHT_BG = "#edfaf3";

  return (
    <div
      className="ach-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: dark ? GREEN : LIGHT_BG,
        border: dark ? "none" : "1.5px solid #b3efd3",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov
          ? dark
            ? "0 18px 44px rgba(12,182,94,0.38)"
            : "0 18px 44px rgba(12,182,94,0.16)"
          : "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <span
        className="ach-deco ach-deco--br"
        style={{ background: dark ? "rgba(255,255,255,0.1)" : "rgba(12,182,94,0.08)" }}
      />
      <span
        className="ach-deco ach-deco--tl"
        style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(12,182,94,0.05)" }}
      />

      <div className="ach-icon-box" style={{ background: dark ? "rgba(255,255,255,0.2)" : GREEN }}>
        {icon}
      </div>

      <div className="ach-count" style={{ color: dark ? "#fff" : "#067a3e" }}>
        {count}
        {suffix}
      </div>

      <p className="ach-label" style={{ color: dark ? "#fff" : "#0a5c35" }}>
        {label}
      </p>

      {/* <p className="ach-desc" style={{ color: dark ? "rgba(255,255,255,0.75)" : "#3d9e6e" }}>
        {desc}
      </p>

      <span className="ach-pill" style={{ background: dark ? "rgba(255,255,255,0.2)" : GREEN }}>
        {tagIcon && <span className="ach-pill-icon">{tagIcon}</span>}
        {tag}
      </span> */}
    </div>
  );
}

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

  const handleCTA = () =>
    window.open(
      "mailto:kalaimca685@gmail.com?subject=Let's Work Together&body=Hi, I'd love to collaborate with you!",
      "_blank"
    );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.45; transform:scale(.65); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Section ── */
        .ach-section {
          font-family: 'Plus Jakarta Sans','Segoe UI',sans-serif;
          padding: 80px 24px;
          background: #fff;
          width: 100%;
          box-sizing: border-box;
        }
        .ach-inner {
          max-width: 1160px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Header ── */
        .ach-header        { text-align:center; margin-bottom:52px; }
        .ach-badge         { display:inline-flex; align-items:center; gap:8px; background:#e6f9f0; color:#067a3e; font-size:11.5px; font-weight:700; letter-spacing:.13em; text-transform:uppercase; padding:6px 18px; border-radius:999px; margin-bottom:20px; border:1px solid #b3efd3; }
        .ach-badge-dot     { width:7px; height:7px; border-radius:50%; background:#0cb65e; display:inline-block; animation:pulse 1.6s infinite; }
        .ach-heading       { font-size:clamp(24px,5vw,44px); font-weight:800; margin:0 0 14px; color:#111; line-height:1.15; }
        .ach-heading-green { background:linear-gradient(135deg,#0cb65e,#067a3e); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .ach-subtext       { font-size:clamp(14px,2vw,16px); color:#666; margin:0 auto; max-width:520px; line-height:1.75; }
        .ach-divider       { width:56px; height:4px; border-radius:2px; background:linear-gradient(90deg,#0cb65e,#067a3e); margin:20px auto 0; }

        /* ══════════════════════════════
           GRID
           4 col → 3 col → 2 col → 1 col
           ══════════════════════════════ */
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
          width: 100%;
        }

        /* ── Card Wrapper ── */
        .ach-card-wrap {
          display: flex;
          flex-direction: column;
          width: 100%;
          animation: fadeUp 0.5s ease both;
        }

        /* ── Card ── */
        .ach-card {
          border-radius: 20px;
          padding: 24px 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .ach-deco           { position:absolute; border-radius:50%; pointer-events:none; }
        .ach-deco--br       { bottom:-28px; right:-28px; width:100px; height:100px; }
        .ach-deco--tl       { top:-18px; left:-18px; width:60px; height:60px; }

        .ach-icon-box       { width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0; }
        .ach-count          { font-size:clamp(32px,3vw,48px); font-weight:800; line-height:1; letter-spacing:-1px; }
        .ach-label          { font-size:14px; font-weight:700; margin:0; line-height:1.35; }
        .ach-desc           { font-size:12.5px; margin:0; line-height:1.55; flex-grow:1; }
        .ach-pill           { display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:700; letter-spacing:.06em; padding:5px 12px; border-radius:999px; color:#fff; align-self:flex-start; margin-top:4px; }
        .ach-pill-icon      { font-size:11px; }

        /* ── CTA ── */
        .ach-cta            { text-align:center; margin-top:52px; padding:40px 24px; background:linear-gradient(135deg,#e6f9f0,#d0f5e5); border-radius:24px; border:1.5px solid #b3efd3; width:100%; box-sizing:border-box; }
        .ach-cta-title      { font-size:clamp(15px,2.5vw,19px); font-weight:700; color:#0a5c35; margin:0 0 6px; }
        .ach-cta-sub        { font-size:14px; color:#3d9e6e; margin:0 0 24px; }
        .ach-cta-btn        { background:#0cb65e; color:#fff; border:none; border-radius:999px; padding:13px 34px; font-size:15px; font-weight:700; cursor:pointer; font-family:'Plus Jakarta Sans',sans-serif; transition:background .2s,transform .2s,box-shadow .2s; box-shadow:0 6px 22px rgba(12,182,94,.32); }
        .ach-cta-btn:hover  { background:#089a4e; transform:scale(1.05); box-shadow:0 10px 28px rgba(12,182,94,.42); }

        /* ══════════════════════════════
           RESPONSIVE BREAKPOINTS
           ══════════════════════════════ */

        /* Tablet — 3 columns */
        @media (max-width: 1100px) {
          .ach-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Small tablet — 2 columns */
        @media (max-width: 768px) {
          .ach-section { padding: 60px 16px; }
          .ach-grid    { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .ach-header  { margin-bottom: 36px; }
        }

        /* Mobile — 1 column, cards are 100% width */
        @media (max-width: 480px) {
          .ach-section {
            padding: 48px 12px;
          }
          .ach-grid {
            grid-template-columns: 1fr;   /* single column */
            gap: 12px;
          }
          .ach-card-wrap,
          .ach-card {
            width: 100%;                  /* full width */
          }
          .ach-card {
            border-radius: 16px;
            padding: 20px 18px 18px;
          }
          .ach-count {
            font-size: 40px;
          }
          .ach-label {
            font-size: 15px;
          }
          .ach-desc {
            font-size: 13px;
          }
          .ach-cta {
            border-radius: 16px;
            padding: 28px 16px;
            margin-top: 36px;
          }
          .ach-cta-btn {
            width: 100%;
            padding: 14px 24px;
          }
        }

        /* Very small phones */
        @media (max-width: 360px) {
          .ach-section { padding: 36px 10px; }
          .ach-grid    { gap: 10px; }
          .ach-count   { font-size: 36px; }
        }
      `}</style>

      <section ref={sectionRef} id="achievements" className="ach-section">
        <div className="ach-inner">
          <div className="ach-header">
            <div className="ach-badge">
              <span className="ach-badge-dot" />
              Achievements
            </div>
            <h2 className="ach-heading">
              My <span className="ach-heading-green">Professional</span> Journey
            </h2>
            <p className="ach-subtext">
              Showcasing years of experience, successful projects, and impactful
              solutions delivered across various industries.
            </p>
            <div className="ach-divider" />
          </div>

          <div className="ach-grid">
            {stats.map((stat, i) => (
              <div key={i} className="ach-card-wrap" style={{ animationDelay: `${i * 0.06}s` }}>
                <StatCard {...stat} dark={stat.dark} animate={animate} />
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="ach-cta">
            <p className="ach-cta-title">Ready to add your project to these numbers?</p>
            <p className="ach-cta-sub">Let's build something great together.</p>
            <button className="ach-cta-btn" onClick={handleCTA}>
              🤝 Let's Work Together
            </button>
          </div>
        </div>
      </section>
    </>
  );
}