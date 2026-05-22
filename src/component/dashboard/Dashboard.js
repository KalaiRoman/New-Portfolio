import { useState, useEffect, useRef } from "react";
import { getuserDowloadResume, getuserVisiterCount, getuserVisterData } from "../../services/auth_services/auth_services";
import { useSelector } from "react-redux";

const initialData = {
  resumeClicks: 2847,
  visitorCount: 11423,
  todayClicks: 34,
  todayVisitors: 128,
  weeklyClicks: [120, 185, 210, 175, 240, 198, 265],
  weeklyVisitors: [480, 620, 715, 590, 840, 705, 920],
  recentActivity: [
    { id: 1, type: "visit", location: "San Francisco, CA", time: "2 min ago", device: "Desktop" },
    { id: 2, type: "resume", location: "New York, NY", time: "8 min ago", device: "Mobile" },
    { id: 3, type: "visit", location: "London, UK", time: "15 min ago", device: "Tablet" },
    { id: 4, type: "resume", location: "Bengaluru, IN", time: "23 min ago", device: "Desktop" },
    { id: 5, type: "visit", location: "Toronto, CA", time: "41 min ago", device: "Mobile" },
    { id: 6, type: "resume", location: "Berlin, DE", time: "1 hr ago", device: "Desktop" },
  ],
  topSources: [
    { name: "LinkedIn", pct: 42 },
    { name: "Direct", pct: 28 },
    { name: "GitHub", pct: 18 },
    { name: "Twitter/X", pct: 12 },
  ],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function AnimatedNumber({ target, duration = 1400 }) {
  const [val, setVal] = useState(0);
  const start = useRef(null);
  useEffect(() => {
    let raf;
    const step = (ts) => {
      if (!start.current) start.current = ts;
      const p = Math.min((ts - start.current) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return <>{val.toLocaleString()}</>;
}

function MiniBar({ data, color }) {
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 48 }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div
            style={{
              width: "100%",
              height: `${(v / max) * 40}px`,
              background: color,
              borderRadius: 3,
              opacity: i === data.length - 1 ? 1 : 0.4 + (i / data.length) * 0.5,
              transition: "height 0.8s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function SparkLine({ data, color, width = 120, height = 40 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function DonutRing({ pct, color, size = 56 }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 56 56">
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="5" />
      <circle
        cx="28" cy="28" r={r} fill="none"
        stroke={color} strokeWidth="5"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        transform="rotate(-90 28 28)"
        style={{ transition: "stroke-dasharray 1s ease" }}
      />
    </svg>
  );
}

export default function Dashboard() {
  const [data,setData] = useState(initialData);
  const [live, setLive] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [todayC, setTodayC] = useState(data.todayClicks);
  const [todayV, setTodayV] = useState(data.todayVisitors);
  const [pulse, setPulse] = useState({ click: false, visit: false });
  const [activeTab, setActiveTab] = useState("overview");

  const [userData,setUserData]=useState([]);

  const state=useSelector((state)=>state?.user)

  const getVisitersCount=async()=>{
    try {
        const response=await getuserVisiterCount();
        if(response?.data)
        {
        setVisitors(response?.data?.count || data.visitorCount);

        }
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
  }

   const getResumeCount=async()=>{

        setClicks(state?.data?.data?.resumeDownload || 0);


    setData({
      ...data,
      topSources:[
    { name: "GitHub", pct: state?.data?.data?.githubProfile ?? 0 },
    { name: "LinkedIn", pct: state?.data?.data?.linkedinProfile ??0 },
    { name: "Twitter/X", pct: state?.data?.data?.twitterProfile ?? 0 },
    { name: "Facebook", pct: state?.data?.data?.facebookProfile ?? 0 },
  ]
    })
  }


  const getDataVisterUser=async()=>{
try {
  const response=await getuserVisterData();
  if(response)
  {
setUserData(response?.data?.data)
  }
} catch (error) {
  
}
  }

  useEffect(() => {
    getVisitersCount();
    getResumeCount();
    getDataVisterUser();
    if (!live) return;
    const id = setInterval(() => {
      const newClick = Math.random() < 0.4;
      const newVisit = Math.random() < 0.6;
      if (newClick) { setClicks(c => c + 1); setTodayC(c => c + 1); setPulse(p => ({ ...p, click: true })); setTimeout(() => setPulse(p => ({ ...p, click: false })), 600); }
      if (newVisit) { setVisitors(c => c + 1); setTodayV(c => c + 1); setPulse(p => ({ ...p, visit: true })); setTimeout(() => setPulse(p => ({ ...p, visit: false })), 600); }
    }, 2800);
    return () => clearInterval(id);
  }, [live]);

  const deviceIcon = (d) => d === "Mobile" ? "📱" : d === "Tablet" ? "💻" : "🖥️";

  const cardStyle = {
    background: "#fff",
    border: "1px solid #f0ede8",
    borderRadius: 16,
    padding: "20px 22px",
    flex: 1,
    minWidth: 0,
    position: "relative",
    overflow: "hidden",
    transition: "box-shadow 0.2s",
  };


  useEffect(()=>{
if(state)
{
}
  },[state])
  return (
    <div style={{ background: "#f7f5f2", minHeight: "100vh", padding: "0" }}>

      {/* Header */}
      <div style={{ background: "#1a1714", color: "#fff", padding: "20px 28px 0", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #f5a623, #e8892a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📄</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>Resume Analytics</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>Track clicks & visitors in real time</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: live ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.08)", borderRadius: 20, padding: "6px 14px", cursor: "pointer", transition: "background 0.3s" }} onClick={() => setLive(l => !l)}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: live ? "#22c55e" : "#6b7280", animation: live ? "blink 1.2s infinite" : "none" }} />
              <span style={{ fontSize: 13, color: live ? "#86efac" : "rgba(255,255,255,0.5)", fontWeight: 500 }}>{live ? "Live" : "Paused"}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 2 }}>
          {["overview", "activity", "sources"].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? "#fff" : "transparent", color: activeTab === t ? "#1a1714" : "rgba(255,255,255,0.55)", border: "none", borderRadius: "10px 10px 0 0", padding: "9px 18px", fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all 0.2s", textTransform: "capitalize", letterSpacing: 0.1 }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "24px 20px", maxWidth: 900, margin: "0 auto" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <>
            {/* Big stat cards */}
            <div style={{ display: "flex", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>

              {/* Resume Clicks */}
              <div style={{ ...cardStyle, borderTop: `3px solid #f5a623`, boxShadow: pulse.click ? "0 0 0 4px rgba(245,166,35,0.18)" : "0 1px 3px rgba(0,0,0,0.06)", transition: "box-shadow 0.3s" }}>
                <div style={{ position: "absolute", right: 16, top: 14, opacity: 0.08, fontSize: 56 }}>📄</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#b8915a", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Resume Clicks</div>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#1a1714", letterSpacing: -2, lineHeight: 1 }}>
                  <AnimatedNumber target={clicks} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                  <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600, background: "#f0fdf4", padding: "2px 8px", borderRadius: 8 }}>+{todayC} today</span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>all time</span>
                </div>
                <div style={{ marginTop: 14 }}>
                  <SparkLine data={data.weeklyClicks} color="#f5a623" />
                </div>
              </div>

              {/* Visitor Count */}
              <div style={{ ...cardStyle, borderTop: `3px solid #6366f1`, boxShadow: pulse.visit ? "0 0 0 4px rgba(99,102,241,0.18)" : "0 1px 3px rgba(0,0,0,0.06)", transition: "box-shadow 0.3s" }}>
                <div style={{ position: "absolute", right: 16, top: 14, opacity: 0.08, fontSize: 56 }}>👥</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#7c7fc7", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Visitors</div>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#1a1714", letterSpacing: -2, lineHeight: 1 }}>
                  <AnimatedNumber target={visitors} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                  <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600, background: "#f0fdf4", padding: "2px 8px", borderRadius: 8 }}>+{todayV} today</span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>all time</span>
                </div>
                <div style={{ marginTop: 14 }}>
                  <SparkLine data={data.weeklyVisitors} color="#6366f1" />
                </div>
              </div>
            </div>

            {/* Conversion rate banner */}
            <div style={{ background: "#fff", border: "1px solid #f0ede8", borderRadius: 14, padding: "14px 20px", marginBottom: 14, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 1 }}>Click-Through Rate</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#1a1714", letterSpacing: -1, marginTop: 2 }}>
                  {((clicks / visitors) * 100).toFixed(1)}%
                </div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>of visitors clicked your resume</div>
              </div>
              <div style={{ width: 120, height: 8, background: "#f0ede8", borderRadius: 4, overflow: "hidden", flex: 2, minWidth: 100 }}>
                <div style={{ height: "100%", width: `${((clicks / visitors) * 100).toFixed(1)}%`, background: "linear-gradient(90deg, #f5a623, #e8892a)", borderRadius: 4, transition: "width 1s ease" }} />
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>Benchmark</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#22c55e" }}>↑ Above avg</div>
              </div>
            </div>

            {/* Weekly chart */}
            <div style={{ background: "#fff", border: "1px solid #f0ede8", borderRadius: 16, padding: "20px 22px", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1714" }}>This Week</div>
                <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: "#f5a623", display: "inline-block" }} />Clicks</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: "#6366f1", display: "inline-block" }} />Visitors</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                {days.map((day, i) => {
                  const maxV = Math.max(...data.weeklyVisitors);
                  const ch = (data.weeklyClicks[i] / maxV) * 120;
                  const vh = (data.weeklyVisitors[i] / maxV) * 120;
                  return (
                    <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 130 }}>
                        <div title={`Clicks: ${data.weeklyClicks[i]}`} style={{ width: 12, height: ch, background: "#f5a623", borderRadius: "4px 4px 0 0", opacity: 0.85, cursor: "pointer", transition: "height 0.7s cubic-bezier(0.34,1.56,0.64,1)" }} />
                        <div title={`Visitors: ${data.weeklyVisitors[i]}`} style={{ width: 12, height: vh, background: "#6366f1", borderRadius: "4px 4px 0 0", opacity: 0.85, cursor: "pointer", transition: "height 0.7s cubic-bezier(0.34,1.56,0.64,1)" }} />
                      </div>
                      <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>{day}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ACTIVITY TAB */}
        {activeTab === "activity" && (
          <div style={{ background: "#fff", border: "1px solid #f0ede8", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "18px 22px 12px", borderBottom: "1px solid #f0ede8" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1714" }}>Recent Activity</div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Live feed of visitors & resume clicks</div>
            </div>
            {userData?.map((a, i) => (
              <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 22px", borderBottom: i < data.recentActivity.length - 1 ? "1px solid #faf9f7" : "none", background: i % 2 === 0 ? "#fff" : "#faf9f7" }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: a.type === "resume" ? "rgba(245,166,35,0.1)" : "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                  👁️
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1714" }}>
                    {a.userType.at(0).toUpperCase()}{a.userType.slice(1)}
                  </div>
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>📍 Tamil Nadu · {deviceIcon()}{i%2==0?"Desktop":"Mobile"}</div>
                </div>
                <div style={{ fontSize: 12, color: "#b0aaa4", textAlign: "right", flexShrink: 0 }}>{i%2==0?`${i+1} Min`:`${i+3} Min`}</div>
                <div style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: a.type === "resume" ? "rgba(245,166,35,0.1)" : "rgba(99,102,241,0.1)", color: a.type === "resume" ? "#b8915a" : "#6366f1", flexShrink: 0 }}>
                  Clicked
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SOURCES TAB */}
        {activeTab === "sources" && (
          <div style={{ background: "#fff", border: "1px solid #f0ede8", borderRadius: 16, padding: "22px" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1714", marginBottom: 4 }}>Traffic Sources</div>
            <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 24 }}>Where your visitors come from</div>
            {data.topSources.map((s, i) => {
              const colors = ["#6366f1", "#f5a623", "#22c55e", "#f43f5e"];
              return (
                <div key={s.name} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <DonutRing pct={s.pct} color={colors[i]} size={48} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1714" }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: "#9ca3af" }}>{s.pct} visitors</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: colors[i] }}>{s.pct}%</div>
                  </div>
                  <div style={{ height: 6, background: "#f0ede8", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${s.pct}%`, background: colors[i], borderRadius: 3, transition: "width 1.2s ease" }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer tip */}
        <div style={{ textAlign: "center", fontSize: 12, color: "#c4bfba", marginTop: 16, paddingBottom: 8 }}>
          {live ? "🟢 Receiving live updates every few seconds" : "⏸ Toggle Live to simulate real-time updates"}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        * { box-sizing: border-box; }
        @media (max-width: 520px) {
          div[style*="font-size: 40px"] { font-size: 32px !important; }
        }
      `}</style>
    </div>
  );
}