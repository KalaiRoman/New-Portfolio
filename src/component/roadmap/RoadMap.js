import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import profile from "../../assests/images/kalai_image_new.jpeg";

/* ---------------- CONTENT ---------------- */
const TITLE = "Life of a Front-End Developer";
const HIGHLIGHT = "Front-End Developer";
const AUTHOR = "Kalaisurya · Senior UI Engineer";
const X_START = "Day 1 in the browser";
const X_END = "The Senior Era";

// [emoji, title, subtitle, optional short title for phones]
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
  ["🦁", "Senior Frontend Engineer", "Architecture & mentoring", "Senior Engineer"],
];

/* ---------------- TWO LAYOUTS ----------------
   landscape (tablet / laptop / desktop): wide 1500 x 1080 drawing
   portrait  (phones):                    tall   760 x 1200 drawing
   Both are scaled to FIT the available space, so the whole design is
   always visible on ONE screen: no scrolling, nothing cut off. */
const PORTRAIT_BELOW = 700; // stage width (px) under which the phone layout is used

const mk = (list, n, x0, y0, x1, y1, side) =>
  list.map(([icon, title, sub, short], i) => ({
    icon, title, sub, short, side,
    x: x0 + ((x1 - x0) * i) / (n - 1),
    y: y0 - ((y0 - y1) * i) / (n - 1),
  }));

function makeLayout(portrait) {
  if (!portrait) {
    return {
      portrait: false, W: 1500, H: 1080, walker: 1.6, dx: 26,
      N1: mk(PHASE1, PHASE1.length, 450, 900, 610, 190, "left"),
      N2: mk(PHASE2, PHASE2.length, 905, 880, 1060, 130, "right"),
      START: { x: 444, y: 955 }, PEAK: { x: 630, y: 150 },
      VALLEY: { x: 880, y: 955 }, END: { x: 1075, y: 90 },
      axis: { x0: 100, y0: 1010, y1: 45, x1: 1440, sw: 5, lblX: 60, lblY: 520, lx: 110, ly: 1060, rx: 1440 },
    };
  }
  return {
    portrait: true, W: 760, H: 1200, walker: 1.05, dx: 16,
    N1: mk(PHASE1, PHASE1.length, 330, 1020, 400, 230, "left"),
    N2: mk(PHASE2, PHASE2.length, 485, 1000, 560, 190, "right"),
    START: { x: 326, y: 1070 }, PEAK: { x: 412, y: 175 },
    VALLEY: { x: 470, y: 1085 }, END: { x: 575, y: 125 },
    axis: { x0: 40, y0: 1130, y1: 30, x1: 735, sw: 3, lblX: 18, lblY: 600, lx: 50, ly: 1172, rx: 735 },
  };
}

function buildKeyframes(L) {
  let t = 0;
  const out = [];
  const add = (p, dt, extra = {}) => { t += dt; out.push({ x: p.x, y: p.y, t, ...extra }); };
  add(L.START, 0);
  L.N1.forEach((n) => add(n, 0.5, { node: n }));
  add(L.PEAK, 0.5, { peak: true });
  add(L.PEAK, 1.0, { hold: true });
  add(L.VALLEY, 1.0, { valley: true });
  L.N2.forEach((n) => add(n, 0.55, { node: n }));
  add(L.END, 0.5, { end: true });
  return out;
}
const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);

/* ---------------- WALKER: photo head + arms + legs ----------------
   SVG <image> + clipPath (not foreignObject) so it also works on iPhone/Safari. */
function Walker({ x, y, t, moving, ring, size }) {
  const clipId = "headClip-" + useId().replace(/[^a-zA-Z0-9_-]/g, ""); // unique per instance
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
    <g transform={`translate(${x}, ${y - lift * size}) scale(${size})`}>
      <defs>
        <clipPath id={clipId}><circle cx="0" cy="-72" r="20" /></clipPath>
      </defs>
      <ellipse cx="0" cy={lift} rx="24" ry="5" fill="rgba(0,0,0,.2)" />
      <Leg a={-swing} back />
      <Arm a={swing} back />
      <line x1="0" y1="-52" x2="0" y2="-28" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" />
      <Leg a={swing} />
      <Arm a={-swing} />
      <circle cx="0" cy="-72" r="21" fill="#fff" />
      <image
        href={profile}
        x="-20" y="-92" width="40" height="40"
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMin slice"
      />
      <circle cx="0" cy="-72" r="20" fill="none" stroke={ring} strokeWidth="2" />
    </g>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function FrontendRoadmap() {
  const markerId = "ah-" + useId().replace(/[^a-zA-Z0-9_-]/g, "");
  /* which layout? measured from the real available width */
  const stageRef = useRef(null);
  const [portrait, setPortrait] = useState(false);
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setPortrait(el.clientWidth < PORTRAIT_BELOW);
    measure();
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    }
    window.addEventListener("resize", measure);
    return () => { ro?.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  const L = useMemo(() => makeLayout(portrait), [portrait]);
  const kf = useMemo(() => buildKeyframes(L), [L]);
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
    const dx = left ? -L.dx : L.dx;
    const label = L.portrait ? n.short || n.title : n.title;
    return (
      <g key={key} className="node" style={{ opacity: on ? 1 : 0.4 }}>
        <circle cx={n.x} cy={n.y} r={on ? (L.portrait ? 6 : 8) : (L.portrait ? 4.5 : 6)} fill={on ? "#1d1b16" : "#b9b4a6"} />
        <text x={n.x + dx} y={n.y + (L.portrait ? 7 : -2)} textAnchor={left ? "end" : "start"}
          className="ttl" style={{ fontWeight: on ? 800 : 600 }}>
          {n.icon} {label}
        </text>
        {!L.portrait && (
          <text x={n.x + dx} y={n.y + 15} textAnchor={left ? "end" : "start"} className="sub">
            {n.sub}
          </text>
        )}
      </g>
    );
  };

  const A = L.axis;
  return (
    <div className="wrap">
      <style>{css}</style>

      <h1 className="h1">
        {TITLE.split(HIGHLIGHT)[0]}
        <span className="hl">{HIGHLIGHT}</span>
      </h1>
      <div className="pill">{AUTHOR}</div>

      <div ref={stageRef} className={"stage" + (L.portrait ? " p" : "")}>
        <svg
          viewBox={`0 0 ${L.W} ${L.H}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`Roadmap: ${[...PHASE1, ...PHASE2].map((p) => p[1]).join(", ")}`}
        >
          <defs>
            <marker id={markerId} markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#1d1b16" />
            </marker>
          </defs>

          <line x1={A.x0} y1={A.y0} x2={A.x0} y2={A.y1} stroke="#1d1b16" strokeWidth={A.sw} markerEnd={`url(#${markerId})`} />
          <line x1={A.x0} y1={A.y0} x2={A.x1} y2={A.y0} stroke="#1d1b16" strokeWidth={A.sw} markerEnd={`url(#${markerId})`} />
          <text transform={`translate(${A.lblX},${A.lblY}) rotate(-90)`} textAnchor="middle" className="axis">Learning Path</text>
          <text x={A.lx} y={A.ly} className="axis small">{X_START}</text>
          <text x={A.rx} y={A.ly} textAnchor="end" className="axis small">{X_END}</text>

          <polyline points={track} className="track" />
          <polyline points={pts(line1)} className="prog1" />
          {line2.length > 1 && <polyline points={pts(line2)} className="prog2" />}

          {L.N1.map((n, idx) => renderNode(n, "a" + idx))}
          {L.N2.map((n, idx) => renderNode(n, "b" + idx))}

          {showBubble && <text x={L.PEAK.x + 16} y={L.PEAK.y - 16} className="bubble">{PEAK_TEXT}</text>}
          {showValley && (
            <text x={L.VALLEY.x - 10} y={L.VALLEY.y + (L.portrait ? 38 : 36)} textAnchor="middle" className="sub valley">
              {VALLEY_TEXT}
            </text>
          )}

          <Walker x={pos.x} y={pos.y} t={elapsed} moving={moving} size={L.walker}
            ring={showBubble ? "#f5b301" : "#1d1b16"} />

          {finished && <text x={L.END.x + 30} y={L.END.y - 30} fontSize={L.portrait ? 40 : 56}>🎉</text>}
        </svg>
      </div>

      <button className="btn" onClick={() => { setElapsed(0); setRun((r) => r + 1); }}>
        Replay
      </button>
    </div>
  );
}

/* ---------------- STYLES ---------------- */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&display=swap');
/* wrap fills its parent (the popup) and the drawing is scaled to fit inside it */
.wrap{height:100%;min-height:360px;width:100%;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;background:#fffdf8;font-family:'Bricolage Grotesque',system-ui,sans-serif;color:#1d1b16;text-align:center;overflow:hidden}
.h1{font-size:clamp(18px,3.2vw,34px);font-weight:800;margin:0 0 4px;padding:0 40px;line-height:1.15;flex:none}
.hl{background:linear-gradient(transparent 55%,#f5b301 55%);padding:0 4px}
.pill{display:inline-block;flex:none;background:#f0ece1;border-radius:999px;padding:2px 14px;font-size:clamp(11px,2.6vw,13px);font-weight:600;margin-bottom:4px}

.stage{flex:1;min-height:0;width:100%;display:flex;justify-content:center;align-items:center;padding:0 4px}
.stage svg{display:block;width:100%;height:100%;max-width:100%;max-height:100%}

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

/* phone (portrait) drawing: bigger relative text, no sub-labels */
.stage.p .track{stroke-width:3;stroke-dasharray:2 8}
.stage.p .prog1,.stage.p .prog2{stroke-width:6}
.stage.p .ttl{font-size:22px}
.stage.p .sub.valley{font-size:22px}
.stage.p .axis{font-size:18px}
.stage.p .axis.small{font-size:20px}
.stage.p .bubble{font-size:26px}

.btn{flex:none;margin:6px auto 4px;padding:8px 20px;min-height:40px;border:0;border-radius:10px;background:#1d1b16;color:#fff;font:600 14px inherit;cursor:pointer}
.btn:focus-visible{outline:3px solid #f5b301;outline-offset:2px}
@media (max-height:520px){.h1{font-size:16px;margin-bottom:2px}.pill{display:none}.btn{min-height:32px;padding:4px 14px}}
@media (prefers-reduced-motion:reduce){.node{transition:none}}
`;