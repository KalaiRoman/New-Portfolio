import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Baby, Pencil, FlaskConical, BookOpen, Compass, ClipboardList, Building2,
  Users, PartyPopper, Briefcase, FileText, GraduationCap, MessageSquare,
  BadgeCheck, Lightbulb, MapPin, Scale, TrendingUp, PiggyBank, Home,
  HeartHandshake, Trophy, ChevronLeft, ChevronRight, RotateCcw,
} from "lucide-react";

import images from "../../assests/images/kalai_image_new.jpeg";

/* ---------------- CONTENT ---------------- */
const TITLE = "My Journey: From School to Career";
const SUBTITLE_END = "steps from my first day of school to my dream job";
const AUTHOR = "By Kalaisurya";
const SCHOOL_COUNT = 12;
const STAGES = [
  { icon: Baby, title: "Nursery & ABCs", sub: "First day, first friends" },
  { icon: Pencil, title: "Primary School", sub: "Tables, drawing, games" },
  { icon: FlaskConical, title: "Middle School", sub: "Science fairs, new subjects" },
  { icon: BookOpen, title: "High School", sub: "Board exams begin" },
  { icon: Compass, title: "Choosing a Stream", sub: "Goals, dreams, advice" },
  { icon: ClipboardList, title: "Entrance Exams", sub: "Coaching, mock tests" },
  { icon: Building2, title: "College Admission", sub: "Counselling, hostel" },
  { icon: Users, title: "First Year", sub: "New city, new friends" },
  { icon: PartyPopper, title: "Clubs & Fests", sub: "Teams, trips, skills" },
  { icon: Briefcase, title: "Internships", sub: "First real-world taste" },
  { icon: FileText, title: "Final Year", sub: "Project, viva, results" },
  { icon: GraduationCap, title: "Graduation Day", sub: "Degree in hand" },
  { icon: MessageSquare, title: "Resume & Interviews", sub: "Rejections teach too" },
  { icon: BadgeCheck, title: "First Job Offer", sub: "Offer letter day" },
  { icon: Lightbulb, title: "Learning the Ropes", sub: "Mentors, mistakes" },
  { icon: MapPin, title: "Moving Cities", sub: "Rent, travel, new home" },
  { icon: Scale, title: "Work-Life Balance", sub: "Trips, hobbies, health" },
  { icon: TrendingUp, title: "First Promotion", sub: "Skills pay off" },
  { icon: PiggyBank, title: "Saving & Investing", sub: "Side projects, goals" },
  { icon: Home, title: "Own Home & Family", sub: "Roots, celebrations" },
  { icon: HeartHandshake, title: "Mentoring Others", sub: "Giving back" },
  { icon: Trophy, title: "Dream Career", sub: "Leading with confidence" },
];
const N = STAGES.length;

/* ---------------- COLUMNS FROM REAL BOARD WIDTH ---------------- */
function useCols(ref) {
  const [cols, setCols] = useState(4);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const calc = () => {
      const w = el.clientWidth;
      const gap = w < 600 ? 8 : 12;
      const minTile = w < 420 ? 76 : 96;
      setCols(Math.max(3, Math.min(8, Math.floor((w + gap) / (minTile + gap)))));
    };
    calc();
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(calc);
      ro.observe(el);
    }
    window.addEventListener("resize", calc);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, [ref]);
  return cols;
}

/* ---------------- COMPONENT ---------------- */
export default function LifeJourneyPro() {
  const [cur, setCur] = useState(0);
  const [pts, setPts] = useState([]);
  const colRef = useRef(null);
  const boardRef = useRef(null);
  const tileRefs = useRef([]);
  const cols = useCols(colRef);

  // measure tile centres (path line + pin)
  useLayoutEffect(() => {
    const measure = () => {
      setPts(
        STAGES.map((_, i) => {
          const t = tileRefs.current[i];
          return t
            ? { x: t.offsetLeft + t.offsetWidth / 2, y: t.offsetTop + t.offsetHeight / 2, w: t.offsetWidth, top: t.offsetTop, left: t.offsetLeft }
            : { x: 0, y: 0, w: 0, top: 0, left: 0 };
        })
      );
    };
    measure();
    let ro;
    if (typeof ResizeObserver !== "undefined" && boardRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(boardRef.current);
    }
    return () => ro?.disconnect();
  }, [cols]);

  const go = (i) => setCur(Math.max(0, Math.min(N - 1, i)));

  // arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setCur((c) => Math.min(N - 1, c + 1));
      if (e.key === "ArrowLeft") setCur((c) => Math.max(0, c - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const { icon: Icon, title, sub } = STAGES[cur];
  const inSchool = cur < SCHOOL_COUNT;
  const pct = Math.round(((cur + 1) / N) * 100);
  let note = "";
  if (cur === SCHOOL_COUNT - 1) note = "Graduation marks the end of school and college. Your career starts next.";
  if (cur === N - 1) note = "Journey complete. You have reached your dream career.";

  const line = (a, b) => pts.slice(a, b + 1).map((p) => `${p.x},${p.y}`).join(" ");
  const pin = pts[cur];

  return (
    <div className="lj">
      <style>{css}</style>
      <div className="lj-wrap">
        <header className="lj-head">
          <h1>{TITLE}</h1>
          <p className="lj-sub">{N} {SUBTITLE_END}</p>
          <p className="lj-by">{AUTHOR}</p>
        </header>

        <div className="lj-main">
          <div className="lj-boardcol" ref={colRef}>
            <div className="lj-legend">
              <span><i className="dot school" /> School and college</span>
              <span><i className="dot career" /> Career</span>
              <span className="lj-tap">Tap a step to see details</span>
            </div>

            <div
              ref={boardRef}
              className="lj-board"
              style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
            >
              {pts.length === N && (
                <svg className="lj-path" aria-hidden="true">
                  <polyline points={line(0, N - 1)} className="trk" />
                  <polyline points={line(0, Math.min(cur, SCHOOL_COUNT - 1))} className="p1" />
                  {cur >= SCHOOL_COUNT && <polyline points={line(SCHOOL_COUNT - 1, cur)} className="p2" />}
                </svg>
              )}

              {STAGES.map((s, i) => {
                const TileIcon = s.icon;
                const row = Math.floor(i / cols);
                const col = i % cols;
                const gridColumn = row % 2 ? cols - col : col + 1;
                const cls = [
                  "tile",
                  i < SCHOOL_COUNT ? "school" : "career",
                  i <= cur ? "seen" : "",
                  i === cur ? "cur" : "",
                ].join(" ");
                return (
                  <button
                    key={s.title}
                    ref={(el) => (tileRefs.current[i] = el)}
                    className={cls}
                    style={{ gridRow: row + 1, gridColumn }}
                    onClick={() => go(i)}
                    aria-label={`Stage ${i + 1}: ${s.title}`}
                    aria-current={i === cur ? "step" : undefined}
                  >
                    <span className="num">{i + 1}</span>
                    <TileIcon className="ti" strokeWidth={1.75} />
                  </button>
                );
              })}

              {pin && pin.w > 0 && (
                <div
                  className={"pin " + (inSchool ? "school" : "career")}
                  style={{ transform: `translate(${pin.left + pin.w - 16}px, ${pin.top - 10}px)` }}
                  aria-hidden="true"
                >
                  <img
                    src={images}
                    alt=""
                    style={{ width: "25px", height: "25px", objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ---------- DETAILS PANEL ---------- */}
          <section className="lj-panel" aria-live="polite">
            <div className="lj-meta">
              <span>Stage {cur + 1} of {N}</span>
              <span className={"chip " + (inSchool ? "school" : "career")}>
                {inSchool ? "School and college" : "Career"}
              </span>
            </div>
            <div className="lj-bar"><div className={inSchool ? "school" : "career"} style={{ width: pct + "%" }} /></div>

            <div className="lj-big">
              <span className={"badge " + (inSchool ? "school" : "career")}>
                <Icon size={32} strokeWidth={1.75} />
              </span>
              <div className="lj-bigtx">
                <h2>{title}</h2>
                <p>{sub}</p>
              </div>
            </div>
            {note && <p className="lj-note">{note}</p>}

            <div className="lj-ctl">
              <button className="ghost" onClick={() => go(cur - 1)} disabled={cur === 0}>
                <ChevronLeft size={18} /> Back
              </button>
              {cur === N - 1 ? (
                <button onClick={() => go(0)}><RotateCcw size={18} /> Start again</button>
              ) : (
                <button onClick={() => go(cur + 1)}>Next stage <ChevronRight size={18} /></button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STYLES ----------------
   FIX: the dark-mode @media (prefers-color-scheme:dark) block is removed,
   and color-scheme is forced to light. Desktop and mobile now always use
   the same colors: white background, black text. */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

html,body{background:#ffffff;color:#000000;color-scheme:light}

.lj{--bg:#ffffff;--panel:#ffffff;--ink:#000000;--mute:#5b6679;--line:#dde3ee;--tile:#ffffff;
  --school:#3157d5;--school-bg:#e8edfd;--career:#0b8f6a;--career-bg:#dcf5ec;--btn:#0f172a;--btnt:#ffffff;
  color-scheme:light;
  min-height:100vh;min-height:100dvh;background:var(--bg);color:var(--ink);
  font-family:'Plus Jakarta Sans',system-ui,sans-serif;-webkit-text-size-adjust:100%}
.lj *{box-sizing:border-box}

/* ===== mobile first ===== */
.lj-wrap{width:100%;max-width:600px;margin:0 auto;
  padding:20px max(14px,env(safe-area-inset-right)) max(40px,env(safe-area-inset-bottom)) max(14px,env(safe-area-inset-left))}
.lj-main{display:flex;flex-direction:column;gap:16px}
.lj-panel{order:-1}
.lj-boardcol{min-width:0}

.lj h1{font-size:clamp(22px,6vw,36px);font-weight:800;margin:0;letter-spacing:-.02em;line-height:1.15;color:var(--ink)}
.lj-sub{margin:4px 0 0;color:var(--mute);font-size:clamp(14px,3.6vw,17px)}
.lj-by{margin:2px 0 0;color:var(--mute);font-size:13px;font-weight:600}
.lj-head{margin-bottom:14px}

.lj-legend{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;margin:0 0 12px;font-size:13px;color:var(--mute);font-weight:500}
.lj-legend span{display:flex;align-items:center;gap:6px}
.lj-tap{margin-left:auto;font-size:12px;opacity:.85}
.dot{width:10px;height:10px;border-radius:50%;display:inline-block}
.dot.school{background:var(--school)}.dot.career{background:var(--career)}

/* ===== board ===== */
.lj-board{position:relative;display:grid;gap:8px}
.lj-path{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible}
.lj-path polyline{fill:none;stroke-linecap:round;stroke-linejoin:round}
.lj-path .trk{stroke:var(--line);stroke-width:3;stroke-dasharray:2 7}
.lj-path .p1{stroke:var(--school);stroke-width:4}
.lj-path .p2{stroke:var(--career);stroke-width:4}

.tile{position:relative;z-index:1;aspect-ratio:1/1;min-width:0;border:1.5px solid var(--line);border-radius:14px;background:var(--tile);color:var(--mute);
  cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:14px 4px 6px;
  font-family:inherit;transition:background .2s,color .2s,border-color .2s,box-shadow .2s,transform .2s;-webkit-tap-highlight-color:transparent}
.tile .ti{width:24px;height:24px;flex:none}
.tile .lab{font-size:10.5px;font-weight:600;line-height:1.15;text-align:center;max-width:100%;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}
.tile .num{position:absolute;top:5px;left:7px;font-size:10px;font-weight:700;opacity:.75;line-height:1}
.tile.school.seen{background:var(--school-bg);border-color:var(--school);color:var(--school)}
.tile.career.seen{background:var(--career-bg);border-color:var(--career);color:var(--career)}
.tile.cur{box-shadow:0 0 0 3px var(--bg),0 0 0 5px currentColor;transform:translateY(-2px)}
.tile:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
@media (hover:hover){ .tile:hover{border-color:currentColor;transform:translateY(-2px)} }

.pin{position:absolute;left:0;top:0;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;color:#fff;
  pointer-events:none;z-index:3;transition:transform .4s cubic-bezier(.3,1.3,.5,1),background .3s;box-shadow:0 2px 6px rgba(15,23,42,.3)}
.pin.school{background:var(--school)}.pin.career{background:var(--career)}

/* ===== details panel ===== */
.lj-panel{background:var(--panel);color:var(--ink);border:1.5px solid var(--line);border-radius:18px;padding:16px;box-shadow:0 8px 24px rgba(15,23,42,.06)}
.lj-meta{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--mute)}
.chip{padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700;white-space:nowrap}
.chip.school{background:var(--school-bg);color:var(--school)}
.chip.career{background:var(--career-bg);color:var(--career)}
.lj-bar{height:6px;border-radius:99px;background:var(--line);margin:10px 0 14px;overflow:hidden}
.lj-bar div{height:100%;border-radius:99px;transition:width .4s}
.lj-bar .school{background:var(--school)}.lj-bar .career{background:var(--career)}
.lj-big{display:flex;gap:14px;align-items:center}
.lj-bigtx{min-width:0}
.badge{width:56px;height:56px;border-radius:16px;display:grid;place-items:center;flex:none}
.badge.school{background:var(--school-bg);color:var(--school)}
.badge.career{background:var(--career-bg);color:var(--career)}
.lj-big h2{margin:0;font-size:clamp(18px,4.6vw,22px);font-weight:800;letter-spacing:-.01em;line-height:1.15;overflow-wrap:anywhere;color:var(--ink)}
.lj-big p{margin:3px 0 0;color:var(--mute);font-size:clamp(14px,3.6vw,16px)}
.lj-note{margin:12px 0 0;padding:10px 12px;border-radius:12px;background:#f5f7fb;color:var(--ink);font-size:13.5px;font-weight:500}
.lj-ctl{display:flex;gap:10px;margin-top:16px}
.lj-ctl button{flex:1;min-height:46px;display:flex;align-items:center;justify-content:center;gap:6px;
  font:700 15px 'Plus Jakarta Sans',system-ui,sans-serif;padding:10px;border:0;border-radius:12px;background:var(--btn);color:var(--btnt);cursor:pointer}
.lj-ctl button.ghost{background:transparent;color:var(--ink);border:1.5px solid var(--line);flex:.55}
.lj-ctl button:disabled{opacity:.4;cursor:default}
.lj-ctl button:focus-visible{outline:3px solid var(--school);outline-offset:2px}

/* ===== small phones ===== */
@media (max-width:360px){
  .lj-wrap{padding-left:10px;padding-right:10px}
  .tile .lab{font-size:9.5px}
  .badge{width:48px;height:48px}
  .lj-tap{display:none}
}

/* ===== tablet 600px+ ===== */
@media (min-width:600px){
  .lj-wrap{max-width:860px;padding-top:32px}
  .lj-board{gap:12px}
  .tile{border-radius:16px;gap:6px;padding:18px 6px 8px}
  .tile .ti{width:28px;height:28px}
  .tile .lab{font-size:12px}
  .tile .num{top:7px;left:10px;font-size:11px}
  .lj-panel{padding:20px}
  .badge{width:64px;height:64px}
}

/* ===== desktop 1000px+ : board left, details right ===== */
@media (min-width:1000px){
  .lj-wrap{max-width:1280px;padding:40px 32px 64px}
  .lj-head{margin-bottom:24px}
  .lj-main{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:32px;align-items:start}
  .lj-panel{order:0;position:sticky;top:24px}
  .tile .ti{width:30px;height:30px}
  .tile .lab{font-size:12.5px}
}

@media (prefers-reduced-motion:reduce){.pin,.tile,.lj-bar div{transition:none}}
`;