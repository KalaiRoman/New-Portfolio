import { useLayoutEffect, useRef, useState } from "react";
import {
  Baby, Pencil, FlaskConical, BookOpen, Compass, ClipboardList, Building2,
  Users, PartyPopper, Briefcase, FileText, GraduationCap, MessageSquare,
  BadgeCheck, Lightbulb, MapPin, Scale, TrendingUp, PiggyBank, Home,
  HeartHandshake, Trophy, Flag, ChevronLeft, ChevronRight, RotateCcw,
} from "lucide-react";


const TITLE = "My Journey: From School to Career";
const SUBTITLE_END = "steps from my first day of school to my dream job";
const AUTHOR = "By Kalaisurya";
const HINT = "Tap Next to follow along, or tap any tile to jump ahead.";
const COLS = 4;
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

export default function LifeJourneyPro() {
  const [cur, setCur] = useState(0);
  const [pin, setPin] = useState({ x: 0, y: 0 });
  const tileRefs = useRef([]);

  useLayoutEffect(() => {
    const place = () => {
      const t = tileRefs.current[cur];
      if (t) setPin({ x: t.offsetLeft + t.offsetWidth - 22, y: t.offsetTop - 12 });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [cur]);

  const go = (i) => setCur(Math.max(0, Math.min(N - 1, i)));
  const { icon: Icon, title, sub } = STAGES[cur];
  const inSchool = cur < SCHOOL_COUNT;
  const pct = Math.round(((cur + 1) / N) * 100);

  let note = "";
  if (cur === SCHOOL_COUNT - 1) note = "Graduation marks the end of school and college. Your career starts next.";
  if (cur === N - 1) note = "Journey complete. You have reached your dream career.";

  return (
    <div className="lj">
      <style>{css}</style>
      <div className="lj-wrap">
        <header>
          <h1>{TITLE}</h1>
          <p className="lj-sub">{N} {SUBTITLE_END}</p>
          <p className="lj-by">{AUTHOR}</p>
          <p className="lj-hint">{HINT}</p>
        </header>

        <div className="lj-legend">
          <span><i className="dot school" /> School and college</span>
          <span><i className="dot career" /> Career</span>
        </div>

        <div className="lj-board">
          {STAGES.map((s, i) => {
            const TileIcon = s.icon;
            const row = Math.floor(i / COLS);
            const col = i % COLS;
            const gridColumn = row % 2 ? COLS - col : col + 1;
            const cls = [
              "tile",
              i < SCHOOL_COUNT ? "school" : "career",
              i <= cur ? "seen" : "",
              i === cur ? "cur" : "",
              gridColumn === 1 ? "edge-l" : gridColumn === COLS ? "edge-r" : "",
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
                <TileIcon size={30} strokeWidth={1.75} />
                <span className="tip" role="tooltip">
                  <span className="tip-ic"><TileIcon size={18} strokeWidth={2} /></span>
                  <span className="tip-tx">
                    <b>{s.title}</b>
                    <em>{s.sub}</em>
                  </span>
                </span>
              </button>
            );
          })}
          <div className={"pin " + (inSchool ? "school" : "career")} style={{ transform: `translate(${pin.x}px, ${pin.y}px)` }} aria-hidden="true">
            <Flag size={15} strokeWidth={2.25} />
          </div>
        </div>

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
              <Icon size={34} strokeWidth={1.75} />
            </span>
            <div>
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
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.lj{--brand:#1fa84f;--bg:#f5f7fb;--panel:#fff;--ink:#0f172a;--mute:#5b6679;--line:#dde3ee;--tile:#fff;
  --school:#3157d5;--school-bg:#e8edfd;--career:#0b8f6a;--career-bg:#dcf5ec;--btn:#0f172a;--btnt:#fff;
  min-height:100vh;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',system-ui,sans-serif}
@media (prefers-color-scheme:dark){
  .lj{--bg:#0b1220;--panel:#121a2c;--ink:#eef2fa;--mute:#9aa6bd;--line:#26314a;--tile:#121a2c;
    --school:#7b9bff;--school-bg:#1b2750;--career:#3ddba7;--career-bg:#0f3a2f;--btn:#eef2fa;--btnt:#0b1220}
}
.lj *{box-sizing:border-box}
.lj-wrap{max-width:560px;margin:0 auto;padding:28px 16px 64px}
.lj h1{font-size:clamp(26px,6vw,34px);font-weight:800;margin:0;letter-spacing:-.02em}
.lj-sub{margin:4px 0 0;color:var(--mute);font-size:16px}
.lj-by{margin:2px 0 0;color:var(--mute);font-size:14px;font-weight:600}
.lj-hint{margin:14px 0 0;padding:10px 12px;border-radius:12px;background:var(--panel);border:1.5px solid var(--line);color:var(--ink);font-size:14px;font-weight:500}
.lj-legend{display:flex;gap:16px;margin:18px 0 12px;font-size:14px;color:var(--mute);font-weight:500}
.lj-legend span{display:flex;align-items:center;gap:6px}
.dot{width:10px;height:10px;border-radius:50%;display:inline-block}
.dot.school{background:var(--school)}.dot.career{background:var(--career)}
.lj-board{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.tile{aspect-ratio:1;border:1.5px solid var(--line);border-radius:16px;background:var(--tile);color:var(--mute);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;padding:0;transition:background .2s,color .2s,border-color .2s,box-shadow .2s;font-family:inherit}
.tile .num{position:absolute;top:7px;left:10px;font-size:11px;font-weight:700;opacity:.8}
.tile.school.seen{background:var(--school-bg);border-color:var(--school);color:var(--school)}
.tile.career.seen{background:var(--career-bg);border-color:var(--career);color:var(--career)}
.tile.cur{box-shadow:0 0 0 3px var(--bg),0 0 0 5px currentColor}
.tile:focus-visible{outline:3px solid var(--ink);outline-offset:3px}
.tip{position:absolute;bottom:calc(100% + 10px);left:50%;transform:translate(-50%,4px);width:max-content;max-width:190px;display:flex;align-items:center;gap:9px;padding:9px 12px;border-radius:10px;background:var(--brand);color:#fff;text-align:left;font-size:13px;line-height:1.3;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .15s,transform .15s;z-index:10;box-shadow:0 6px 18px rgba(15,23,42,.25)}
.tip b{display:block;font-weight:700}
.tip em{display:block;font-style:normal;font-weight:500;opacity:.8;margin-top:1px}
.tip::after{content:"";position:absolute;top:100%;left:50%;margin-left:-6px;border:6px solid transparent;border-top-color:var(--brand)}
.tip-ic{width:32px;height:32px;border-radius:9px;background:rgba(255,255,255,.22);display:grid;place-items:center;flex:none;color:#fff}
.tip-tx{display:block}
.lj .lj-board .tile:hover,.lj .lj-board .tile:focus-visible{background:var(--brand);border-color:var(--brand);color:#fff}
.lj .lj-board .tile:hover .num,.lj .lj-board .tile:focus-visible .num{color:#fff}
.tile.edge-l .tip{left:0;transform:translate(0,4px)}
.tile.edge-l .tip::after{left:22px;margin-left:0}
.tile.edge-r .tip{left:auto;right:0;transform:translate(0,4px)}
.tile.edge-r .tip::after{left:auto;right:22px;margin-left:0}
.tile:hover,.tile:focus-visible{z-index:6}
.tile:hover .tip,.tile:focus-visible .tip{opacity:1;visibility:visible}
.tile:not(.edge-l):not(.edge-r):hover .tip,.tile:not(.edge-l):not(.edge-r):focus-visible .tip{transform:translate(-50%,0)}
.tile.edge-l:hover .tip,.tile.edge-l:focus-visible .tip,.tile.edge-r:hover .tip,.tile.edge-r:focus-visible .tip{transform:translate(0,0)}
.pin{position:absolute;left:0;top:0;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;color:#fff;pointer-events:none;z-index:3;transition:transform .4s cubic-bezier(.3,1.3,.5,1),background .3s;box-shadow:0 2px 6px rgba(15,23,42,.3)}
.pin.school{background:var(--school)}.pin.career{background:var(--career)}
.lj-panel{margin-top:20px;background:var(--panel);border:1.5px solid var(--line);border-radius:20px;padding:20px;box-shadow:0 8px 24px rgba(15,23,42,.06)}
.lj-meta{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:600;color:var(--mute)}
.chip{padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700}
.chip.school{background:var(--school-bg);color:var(--school)}
.chip.career{background:var(--career-bg);color:var(--career)}
.lj-bar{height:6px;border-radius:99px;background:var(--line);margin:10px 0 18px;overflow:hidden}
.lj-bar div{height:100%;border-radius:99px;transition:width .4s}
.lj-bar .school{background:var(--school)}.lj-bar .career{background:var(--career)}
.lj-big{display:flex;gap:16px;align-items:center}
.badge{width:64px;height:64px;border-radius:18px;display:grid;place-items:center;flex:none}
.badge.school{background:var(--school-bg);color:var(--school)}
.badge.career{background:var(--career-bg);color:var(--career)}
.lj-big h2{margin:0;font-size:22px;font-weight:800;letter-spacing:-.01em;line-height:1.15}
.lj-big p{margin:3px 0 0;color:var(--mute);font-size:16px}
.lj-note{margin:14px 0 0;padding:10px 12px;border-radius:12px;background:var(--bg);color:var(--ink);font-size:14px;font-weight:500}
.lj-ctl{display:flex;gap:10px;margin-top:18px}
.lj-ctl button{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;font:700 15px 'Plus Jakarta Sans',system-ui,sans-serif;padding:13px;border:0;border-radius:12px;background:var(--btn);color:var(--btnt);cursor:pointer}
.lj-ctl button.ghost{background:transparent;color:var(--ink);border:1.5px solid var(--line);flex:.55}
.lj-ctl button:disabled{opacity:.4;cursor:default}
.lj-ctl button:focus-visible{outline:3px solid var(--school);outline-offset:2px}
@media (prefers-reduced-motion:reduce){.pin,.tile,.lj-bar div{transition:none}}
`;