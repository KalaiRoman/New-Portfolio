import { useState } from "react";
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


  const navigate=useNavigate();


  const KLogo=(size)=> {
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
}



  const handleNavClick = (label,path) => {
    setActive(label);
    setMenuOpen(false);
    navigate(path);

  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .header {
          background: #1a1a2e;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: 'Segoe UI', sans-serif;
        }

        .logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }
        .logo-icon {
          width: 36px; height: 36px;
          background:#0cb65e;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; color: #fff;
        }
        .logo-text { color: #fff; font-size: 20px; font-weight: 700; }

        .desktop-nav { display: flex; align-items: center; gap: 15px; }
        .nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 14px;
          border-radius:48% 52% 50% 50% / 48% 35% 65% 52%;
          cursor: pointer;
          color: #a0aec0; font-size: 14px; font-weight: 500;
          border: none; background: transparent; transition: all 0.2s;
          white-space: nowrap;
          background: white;
          color:black;
          outline:none;
          }
        .nav-item:hover { background: rgba(255,255,255,0.08); color: #fff; }
        .nav-item.active { background: #0cb65e; color: white; }
        .label-active { background: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0cb65e; font-size: 12px; font-weight: 700; }

        .actions { display: flex; align-items: center; gap: 10px; }

        .search-box {
          display: flex; align-items: center;
          background: rgba(255,255,255,0.08);
          border-radius: 20px; padding: 6px 14px; gap: 8px;
        }
        .search-box input {
          background: transparent; border: none; outline: none;
          color: #fff; font-size: 13px; width: 160px;
        }
        .search-box input::placeholder { color: #718096; }

        .icon-btn {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.08); border: none;
          cursor: pointer; display: flex; align-items: center;
          justify-content: center; color: #a0aec0;
          position: relative; font-size: 16px; transition: all 0.2s;
        }
        .icon-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

        .badge {
          position: absolute; top: 4px; right: 4px;
          width: 8px; height: 8px;
          background: #e94560; border-radius: 50%;
          border: 2px solid #1a1a2e;
          pointer-events: none;
        }

        .avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 700; font-size: 14px; cursor: pointer;
          border: 2px solid transparent; transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .avatar:hover { border-color: #e94560; }

        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; background: none; border: none; cursor: pointer;
          padding: 6px; border-radius: 6px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #a0aec0; border-radius: 2px; transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile search bar (below header) */
        .mobile-search-bar {
          background: #16213e;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 10px 16px;
          display: none;
          font-family: 'Segoe UI', sans-serif;
        }
        .mobile-search-bar.open { display: flex; align-items: center; gap: 8px; }
        .mobile-search-bar input {
          flex: 1; background: rgba(255,255,255,0.08);
          border: none; outline: none; color: #fff;
          font-size: 14px; padding: 8px 14px; border-radius: 20px;
        }
        .mobile-search-bar input::placeholder { color: #718096; }

        /* Mobile drawer nav */
        .mobile-nav {
          background: #16213e;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 8px 12px 16px;
          display: none;
          flex-direction: column;
          gap: 4px;
          font-family: 'Segoe UI', sans-serif;
        }
        .mobile-nav.open { display: flex; }

        .mobile-nav-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 8px; cursor: pointer;
          color: #a0aec0; font-size: 15px; font-weight: 500;
          border: none; background: transparent; width: 100%;
          text-align: left; transition: all 0.2s;
        }
        .mobile-nav-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .mobile-nav-item.active { background: rgba(233,69,96,0.18); color: #e94560; }
        .mobile-nav-item .m-icon { font-size: 18px; width: 24px; text-align: center; }

        /* Divider in mobile menu */
        .mobile-divider {
          height: 1px; background: rgba(255,255,255,0.07);
          margin: 8px 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .search-box { display: none; }
          .hamburger { display: flex; }
          .mobile-search-toggle { display: flex !important; }
        }
        @media (max-width: 480px) {
          .header { padding: 0 14px; }
          .logo-text { font-size: 17px; }
        }
        @media (max-width: 360px) {
          .logo-text { display: none; }
        }
      `}</style>

      {/* ── Header Bar ── */}
      <header className="header">
      {KLogo(32)}

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item${active === item.label ? " active" : ""}`}
              onClick={() => handleNavClick(item.label, item.path)}
            >
              <span className={`${active === item.label ? "label-active" : ""}`}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="actions">
          {/* Desktop search */}
         

       

          {/* Avatar */}
          <div className="avatar" role="button" aria-label="User menu">KS</div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ── Mobile Search Bar ── */}
     

      {/* ── Mobile Nav Drawer ── */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`mobile-nav-item${active === item.label ? " active" : ""}`}
            onClick={() => handleNavClick(item.label,item.path)}
          >
            <span className="m-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}

        <div className="mobile-divider" />
        <div style={{ padding: "8px 14px", display: "flex", alignItems: "center", gap: 12 }}>
          {/* <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0
          }}>KS</div> */}
          <div>
            <p style={{ color: "#fff", fontSize: 14, fontWeight: 600, margin: 0 }}>Kalaisurya</p>
            <p style={{ color: "#718096", fontSize: 12, margin: 0 }}>kalaimca685@gmail.com</p>
          </div>
        </div>
      </nav>
    </>
  );
}