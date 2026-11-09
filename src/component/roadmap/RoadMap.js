
import { useEffect, useMemo, useRef, useState } from "react";
import profile from "../../assests/images/kalai_image_new.jpeg"; 

const TITLE = "Life of a Front-End Developer";
const HIGHLIGHT = "Front-End Developer";
const AUTHOR = "Kalaisurya · Senior UI Engineer";
const X_START = "Day 1 in the browser";
const X_END = "The Senior Era";

const PHASE1 = [
  ["🐣", "HTML & Semantics", "Tags, forms, SEO"],
  ["🐢", "CSS & Flexbox", "Box model, Grid"],
  ["🦎", "Responsive Design", "Media queries"],
  ["🐇", "JavaScript Basics", "Types, loops, functions"],
  ["🐿️", "DOM & Events", "Click, scroll, forms"],
  ["🐙", "Git & GitHub", "Branches, PRs"],
  ["🐆", "ES6+ & Async", "Promises, fetch"],
  ["🐝", "npm & Vite", "Tooling, bundlers"],
  ["🦜", "Sass & Tailwind", "Styling at scale"],
  ["🐬", "REST APIs", "fetch, Axios, JSON"],
  ["🦉", "Browser DevTools", "Debug, network, perf"],
  ["🦅", "Component Thinking", "Reusable UI"],
];
const PEAK_TEXT = "Tutorial hell 😅";
const VALLEY_TEXT = "A new framework drops";
const PHASE2 = [
  ["🦫", "React & Hooks", "useState, useEffect"],
  ["🐘", "State Management", "Context, Redux, Zustand"],
  ["🦒", "TypeScript", "Types that save you"],
  ["🐺", "Testing", "Jest, RTL, Playwright"],
  ["🦮", "Accessibility", "ARIA, keyboard, WCAG"],
  ["🐎", "Performance", "Core Web Vitals"],
  ["🦈", "Next.js & SSR", "Routing, rendering"],
  ["🐜", "CI/CD & Monitoring", "Pipelines, Sentry"],
  ["🦚", "Design Systems", "Storybook, tokens"],
  ["🦁", "Senior Frontend Engineer", "Architecture & mentoring"],
];
const HERO = "🦊";

const mk = (list, n, x0, y0, x1, y1, side) =>
  list.map(([icon, title, sub], i) => ({
    icon, title, sub, side,
    x: x0 + ((x1 - x0) * i) / (n - 1),
    y: y0 - ((y0 - y1) * i) / (n - 1),
  }));

const N1 = mk(PHASE1, PHASE1.length, 450, 900, 610, 190, "left");
const N2 = mk(PHASE2, PHASE2.length, 905, 880, 1060, 130, "right");
const START = { x: 444, y: 955 };
const PEAK = { x: 630, y: 150 };
const VALLEY = { x: 880, y: 955 };
const END = { x: 1075, y: 90 };


/* keyframes: where the fox is at time t */
function buildKeyframes() {
  let t = 0;
  const out = [];
  const add = (p, dt, extra = {}) => { t += dt; out.push({ x: p.x, y: p.y, t, ...extra }); };
  add(START, 0);
  N1.forEach((n) => add(n, 0.5, { node: n }));
  add(PEAK, 0.5, { peak: true });
  add(PEAK, 1.0, { hold: true });         
  add(VALLEY, 1.0, { valley: true });      
  N2.forEach((n) => add(n, 0.55, { node: n }));
  add(END, 0.5, { end: true });
  return out;
}
const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);

function Walker({ x, y, t, moving, ring }) {
  const swing = moving ? Math.sin(t * 12) * 35 : 0;      
  const lift = moving ? Math.abs(Math.sin(t * 12)) * 5 : 0; 
  const SHIRT = "#4f46e5", PANTS = "#1d1b16", SKIN = "#e0ac82", SHOE = "#f5b301";

  const Leg = ({ a, back }) => (
    <g transform={`rotate(${a} 0 -26)`} opacity={back ? 0.75 : 1}>
      <line x1="0" y1="-26" x2="0" y2="-3" stroke={PANTS} strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="5" cy="-1" rx="9" ry="4.5" fill={SHOE} />
    </g>
  );
  const Arm = ({ a, back }) => (
    <g transform={`rotate(${a} 0 -48)`} opacity={back ? 0.75 : 1}>
      <line x1="0" y1="-48" x2="0" y2="-26" stroke={SKIN} strokeWidth="7" strokeLinecap="round" />
      <circle cx="0" cy="-24" r="5" fill={SKIN} />
    </g>
  );

  return (
    <g transform={`translate(${x}, ${y - lift}) scale(1.6)`}>
      <defs>
        <clipPath id="headClip"><circle cx="0" cy="-88" r="38" /></clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="0" cy={lift} rx="24" ry="5" fill="rgba(0,0,0,.2)" />

      <Leg a={-swing} back />
      <Arm a={swing} back />

      {/* body */}
      <line x1="0" y1="-52" x2="0" y2="-28" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" />

      <Leg a={swing} />
      <Arm a={-swing} />




      <foreignObject x="-20" y="-92" width="40" height="40">
        <img
          src={profile}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%", display: "block" }}
        />
      </foreignObject>

    </g>
  );
}

export default function FrontendRoadmap() {
  const kf = useMemo(buildKeyframes, []);
  const total = kf[kf.length - 1].t;
  const reduce = typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [elapsed, setElapsed] = useState(reduce ? total + 3 : 0);
  const [run, setRun] = useState(0);
  const raf = useRef();

  useEffect(() => {
    if (reduce) return;
    const t0 = performance.now();
    const tick = (now) => {
      const e = (now - t0) / 1000;
      setElapsed(e);
      if (e < total + 3) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [run, total, reduce]);

  const e = Math.min(elapsed, total);
  let i = kf.findIndex((k, idx) => idx < kf.length - 1 && e >= k.t && e < kf[idx + 1].t);
  if (i < 0) i = kf.length - 2;
  const a = kf[i], b = kf[i + 1];
  const k = ease((e - a.t) / (b.t - a.t || 1));
  const pos = { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
  const moving = elapsed < total && !b.hold;

  const done = kf.slice(0, i + 1).concat({ ...pos });
  const vIdx = done.findIndex((p, idx) => kf[idx]?.valley);
  const pts = (arr) => arr.map((p) => `${p.x},${p.y}`).join(" ");
  const line1 = vIdx === -1 ? done : done.slice(0, vIdx + 1);
  const line2 = vIdx === -1 ? [] : done.slice(vIdx);
  const track = pts(kf.filter((p) => !p.hold));

  const reached = (n) => kf.find((p) => p.node === n).t <= elapsed;
  const peakK = kf.find((p) => p.peak);
  const showBubble = elapsed >= peakK.t && elapsed < peakK.t + 1.5;
  const showValley = elapsed >= kf.find((p) => p.valley).t;
  const finished = elapsed >= total;

  const renderNode = (n, key) => {
    const on = reached(n);
    const left = n.side === "left";
    const dx = left ? -26 : 26;
    return (
      <g key={key} className="node" style={{ opacity: on ? 1 : 0.4 }}>
        <circle cx={n.x} cy={n.y} r={on ? 8 : 6} fill={on ? "#1d1b16" : "#b9b4a6"} />
        <text x={n.x + dx} y={n.y - 2} textAnchor={left ? "end" : "start"}
          className="ttl" style={{ fontWeight: on ? 800 : 600 }}>
          {n.icon} {n.title}
        </text>
        <text x={n.x + dx} y={n.y + 15} textAnchor={left ? "end" : "start"} className="sub">
          {n.sub}
        </text>
      </g>
    );
  };

  return (
    <div className="wrap">
      <style>{css}</style>

      <h1 className="h1">
        {TITLE.split(HIGHLIGHT)[0]}
        <span className="hl">{HIGHLIGHT}</span>
      </h1>
      <div className="pill">{AUTHOR}</div>

      <div style={{ width: "62%", height: "80%", padding: "20px" }}>
        <svg viewBox="0 0 1500 1080" preserveAspectRatio="xMidYMid meet" role="img"
          aria-label={`Roadmap: ${[...PHASE1, ...PHASE2].map((p) => p[1]).join(", ")}`}>
          {/* axes */}
          <defs>
            <marker id="ah" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#1d1b16" />
            </marker>
          </defs>
          <line x1="100" y1="1010" x2="100" y2="45" stroke="#1d1b16" strokeWidth="5" markerEnd="url(#ah)" />
          <line x1="100" y1="1010" x2="1440" y2="1010" stroke="#1d1b16" strokeWidth="5" markerEnd="url(#ah)" />
          <text transform="translate(60,520) rotate(-90)" textAnchor="middle" className="axis">Learning Path</text>
          <text x="110" y="1060" className="axis small">{X_START}</text>
          <text x="1440" y="1060" textAnchor="end" className="axis small">{X_END}</text>

          {/* track + progress */}
          <polyline points={track} className="track" />
          <polyline points={pts(line1)} className="prog1" />
          {line2.length > 1 && <polyline points={pts(line2)} className="prog2" />}

          {/* nodes */}
          {N1.map((n, idx) => renderNode(n, "a" + idx))}
          {N2.map((n, idx) => renderNode(n, "b" + idx))}

          {/* peak + valley captions */}
          {showBubble && <text x={PEAK.x + 18} y={PEAK.y - 18} className="bubble">{PEAK_TEXT}</text>}
          {showValley && <text x={VALLEY.x - 12} y={VALLEY.y + 36} textAnchor="middle" className="sub valley">{VALLEY_TEXT}</text>}

          {/* the walker */}

          {finished ? <>
            <foreignObject x="-20" y="-92" width="40" height="40">
              <img
                src={profile}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%", display: "block" }}
              />
            </foreignObject>
          </> : <>
            <Walker x={pos.x} y={pos.y} t={elapsed} moving={moving} ring={showBubble ? "#f5b301" : "#1d1b16"} />
          </>}

          {finished && <text x={END.x + 6} y={END.y - 22} fontSize="48">
            <foreignObject x="-20" y="-92" width="40" height="40">
              <img
                src={profile}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%", display: "block" }}
              />
            </foreignObject>
            🎉</text>}
        </svg>
      </div>

      <button className="btn" onClick={() => { setElapsed(0); setRun((r) => r + 1); }}>
        Replay
      </button>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&display=swap');
.wrap{height:100%;max-width:none;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;background:#fffdf8;font-family:'Bricolage Grotesque',system-ui,sans-serif;color:#1d1b16;text-align:center}
.h1{font-size:clamp(20px,3vw,34px);font-weight:800;margin:0 0 4px}
.hl{background:linear-gradient(transparent 55%,#f5b301 55%);padding:0 4px}
.pill{display:inline-block;background:#f0ece1;border-radius:999px;padding:3px 14px;font-size:13px;font-weight:600;margin-bottom:4px}
svg{flex:1;min-height:0;width:100%;display:block}
.track{fill:none;stroke:#b9b3a0;stroke-width:4;stroke-dasharray:3 11;stroke-linecap:round;stroke-linejoin:round}
.prog1{fill:none;stroke:#f5b301;stroke-width:9;stroke-linecap:round;stroke-linejoin:round}
.prog2{fill:none;stroke:#0f9d8a;stroke-width:9;stroke-linecap:round;stroke-linejoin:round}
.ttl{font-size:25px;fill:#1d1b16;transition:opacity .3s}
.sub{font-size:18px;fill:#5f5a4c}
.sub.valley{font-size:24px;font-weight:700;fill:#1d1b16}
.axis{font-size:22px;font-weight:800;fill:#1d1b16}
.axis.small{font-size:24px;font-weight:600}
.bubble{font-size:30px;font-weight:800;fill:#1d1b16}
.node{transition:opacity .3s}
.btn{margin:4px auto 0;padding:6px 18px;border:0;border-radius:10px;background:#1d1b16;color:#fff;font:600 14px inherit;cursor:pointer}
.btn:focus-visible{outline:3px solid #f5b301;outline-offset:2px}
@media (max-width:600px){.ttl{font-size:28px}.sub{font-size:21px}}
`;