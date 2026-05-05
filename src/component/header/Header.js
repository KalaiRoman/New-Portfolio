import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", icon: "🏠", path: "/" },
  { label: "Aboutus", icon: "👤", path: "/aboutus" },
  { label: "Tools", icon: "🔧", path: "/tools" },
  { label: "Projects", icon: "🎓", path: "/projects" },
  { label: "Contact", icon: "📞", path: "/contact" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();


  useEffect(()=>{
const path=window.location.pathname;
if(path=="/")
{
  setActive("Home");
}
else
{
  setActive(path.substring(1).charAt(0).toUpperCase() + path.substring(2));
}

  },[])
  const KLogo = (size) => {
    const scale = size / 80;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main circle background */}
        <circle cx="40" cy="40" r="38" fill="#0bad5d" />

        {/* Inner subtle ring */}
        <circle
          cx="40"
          cy="40"
          r="28"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />

        {/* K letter */}
        <text
          x="40"
          y="55"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="40"
          fontWeight="800"
          fill="#fff"
        >
          K
        </text>

        {/* Star badge circle */}
        <circle cx="60" cy="20" r="9" fill="#fff" />

        {/* Star icon inside badge */}
        <text
          x="60"
          y="24"
          textAnchor="middle"
          fontFamily="'Segoe UI', sans-serif"
          fontSize="10"
          fontWeight="900"
          fill="#0bad5d"
        >
          ★
        </text>
      </svg>
    );
  };

  const handleNavClick = (label, path) => {
    setActive(label);
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body.menu-open { overflow: hidden; }
        
        .header {
          background: white;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'Segoe UI', sans-serif;
          width: 100%;
        }

        .logo {
          display: flex; align-items: center; gap: 6px;
          text-decoration: none; flex-shrink: 0;
          color: #000;
          font-weight: bold;
          font-size: 18px;
        }
        
        .logo span { color: #0cb45d; }

        .logo-icon {
          width: 36px; height: 36px;
          background: #0cb65e;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; color: #fff;
        }
        
        .logo-text { color: #fff; font-size: 20px; font-weight: 700; }

        .desktop-nav { display: flex; align-items: center; gap: 15px; }
        
        .nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 14px;
          border-radius: 10px;
          cursor: pointer;
          color: #000; font-size: 14px; font-weight: 500;
          border: 1px solid #f4f4f4; 
          background: #f4f4f4; 
          transition: all 0.2s;
          white-space: nowrap;
          outline: none;
        }
        
        .nav-item:hover { background: #e8e8e8; }
        .nav-item.active { background: #0cb65e; color: white; border: none; }
        .label-active { background: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0cb65e; font-size: 12px; font-weight: 700; }
.label-inactive{
  background: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px; font-weight: 700;}
        .actions { display: flex; align-items: center; gap: 10px; }

        .search-box {
          display: flex; align-items: center;
          background: #f4f4f4;
          border-radius: 20px; padding: 6px 14px; gap: 8px;
        }
        
        .search-box input {
          background: transparent; border: none; outline: none;
          color: #000; font-size: 13px; width: 160px;
        }
        
        .search-box input::placeholder { color: #999; }

        .icon-btn {
          width: 36px; height: 36px; border-radius: 50%;
          background: #f4f4f4; border: none;
          cursor: pointer; display: flex; align-items: center;
          justify-content: center; color: #000;
          position: relative; font-size: 16px; transition: all 0.2s;
        }
        
        .icon-btn:hover { background: #e8e8e8; }

        .badge {
          position: absolute; top: 4px; right: 4px;
          width: 8px; height: 8px;
          background: #e94560; border-radius: 50%;
          border: 2px solid white;
          pointer-events: none;
        }

        .avatar {
          height: 36px; border-radius: 10px;
          background: #f0fdf4;
          display: flex; align-items: center; justify-content: center;
          color: #4da06c; font-weight: 700; font-size: 14px; cursor: pointer;
          border: 2px solid transparent; transition: border-color 0.2s;
          flex-shrink: 0;
          padding: 0 12px;
        }
        
        .avatar:hover { border-color: #0cb65e; }

        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; background: none; border: none; cursor: pointer;
          padding: 6px; border-radius: 6px;
        }
        
        .hamburger span {
          display: block; width: 22px; height: 2.5px;
          background: #000; border-radius: 2px; transition: all 0.3s;
        }
        
        .hamburger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); background: #0cb65e; }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); background: #0cb65e; }

        /* Mobile backdrop overlay */
        .mobile-backdrop {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: none;
          z-index: 998;
        }
        
        .mobile-backdrop.open { display: block; }

        /* Mobile drawer nav */
        .mobile-nav {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 8px 0;
          display: none;
          flex-direction: column;
          gap: 0;
          max-height: calc(100vh - 64px);
          overflow-y: auto;
          z-index: 1001;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .mobile-nav.open { display: flex; }

        .mobile-nav-item {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 20px; border-radius: 0; cursor: pointer;
          color: #1a1a1a; font-size: 15px; font-weight: 500;
          border: none; background: transparent; width: 100%;
          text-align: left; transition: all 0.2s;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .mobile-nav-item:hover { background: #f9f9f9; color: #0cb65e; }
        .mobile-nav-item.active { background: #f0fdf4; color: #0cb65e; border-left: 4px solid #0cb65e; padding-left: 16px; }
        .mobile-nav-item .m-icon { font-size: 18px; width: 24px; text-align: center; }

        /* Divider in mobile menu */
        .mobile-divider {
          height: 1px; background: #f0f0f0;
          margin: 8px 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .search-box { display: none !important; }
          .hamburger { display: flex !important; }
        }
        
        @media (max-width: 480px) {
          .header { padding: 0 16px; }
          .logo { font-size: 16px; }
          .avatar { padding: 0 8px; font-size: 13px; }
        }
        
        @media (max-width: 360px) {
          .logo { font-size: 14px; }
          .avatar { display: none; }
        }
      `}</style>

      {/* ── Header Bar ── */}
      <header className="header">
        <div className="logo" onClick={() => handleNavClick("Home", "/")} role="button" aria-label="Go to Home">
          Kalai.<span>dev</span>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item${active === item.label ? " active" : ""}`}
              onClick={() => handleNavClick(item.label, item.path)}
            >
              <span className={`${active === item.label ? "label-active" : "label-inactive"}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <div className="nav-available">
            <span className="nav-dot" />
            Employed
          </div>
          <div className="nav-avatar">KS</div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── Mobile Backdrop Overlay ── */}
      <div 
        className={`mobile-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile Nav Drawer ── */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`mobile-nav-item${active === item.label ? " active" : ""}`}
            onClick={() => handleNavClick(item.label, item.path)}
          >
            <span className="m-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="mobile-divider" />
        
        <div style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0cb65e, #0a9c4a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            KS
          </div>
          <div>
            <p style={{ color: "#000", fontSize: 14, fontWeight: 600, margin: 0 }}>
              Kalaisurya
            </p>
            <p style={{ color: "#999", fontSize: 12, margin: 0 }}>
              kalaimca685@gmail.com
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}