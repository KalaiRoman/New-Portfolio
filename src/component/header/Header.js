
import { useNavigate } from "react-router-dom";
import ThreeDotDropdown from "./ThreeDotDropdown";

  import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       short: "Home",     icon: "ti-home",        path: "/" },
  { label: "About",      short: "About",    icon: "ti-user",        path: "/aboutus" },
  { label: "Experience", short: "Work",     icon: "ti-briefcase",   path: "/experience" },
  { label: "Skills",     short: "Skills",   icon: "ti-code",        path: "/skills" },
  {
  label: "Testimonials",
  short: "Testimonials",
  icon: "ti-user",
  path: "/testimonials"
},
  { label: "Projects",   short: "Projects", icon: "ti-layout-grid", path: "/projects" },
{ 
  label: "Achievements",
  short: "Achievements",
  icon: "ti-trophy",
  path: "/achievements"
},

  { label: "Contact",    short: "Contact",  icon: "ti-message", path: "/contact" },
];


const navItemsSingle = [
  { label: "Home",       short: "Home",     icon: "ti-home",        href: "#home" },
  { label: "About",      short: "About",    icon: "ti-user",        href: "#aboutus" },
  { label: "Experience", short: "Work",     icon: "ti-briefcase",   href: "#experience" },
  { label: "Skills",     short: "Skills",   icon: "ti-code",        href: "#skills" },
  {
  label: "Testimonials",
  short: "Testimonials",
  icon: "ti-user",
  href: "#testimonials"
},
  { label: "Projects",   short: "Projects", icon: "ti-layout-grid", href: "#projects" },
{ 
  label: "Achievements",
  short: "Achievements",
  icon: "ti-trophy",
  href: "#achievements"
},

  { label: "Contact",    short: "Contact",  icon: "ti-message",     href: "#contact" },
];

export default function Header({setMode,mode,activeTab,setActiveTab}) {
  const [active, setActive]     = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState(mode);

  const navigate=useNavigate();
    const handleNavClickSingle = (label, path) => {
  setActiveTab(label);
    setMenuOpen(false);
  const section = document.querySelector(path);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  const handleNavClick = (label, path) => {
    setActive(label);
    setMenuOpen(false);
    navigate(path);
  
  };

  const userProfile=()=>{
    setMode("Single Page")
    setSelected("Single Page")
  navigate("/");
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const styles = {
    root: {
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
      position: "sticky",
      top: 0,
      zIndex: 999,
      boxShadow: scrolled ? "0 6px 28px rgba(0,0,0,0.10)" : "none",
      transition: "box-shadow 0.3s",
    },
    bar: {
      display: "flex",
      alignItems: "stretch",
      background: "#ffffff",
      borderBottom: "1.5px solid #d6f0e2",
      height: "50px",
    },
    brand: {
      background: "#0cb65e",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "0 24px",
      flexShrink: 0,
      textDecoration: "none",
      cursor: "pointer",
    },
    av: {
      width: "38px",
      height: "38px",
      borderRadius: "11px",
      background: "rgba(255,255,255,0.22)",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      border: "1.5px solid rgba(255,255,255,0.35)",
    },
    brandText: { display: "flex", flexDirection: "column", gap: "2px" },
    brandName: {
      fontSize: "17px",
      fontWeight: 800,
      color: "#ffffff",
      letterSpacing: "-0.4px",
      lineHeight: 1,
    },
    brandTag: {
      fontSize: "10px",
      fontWeight: 600,
      color: "rgba(255,255,255,0.8)",
    },
    nav: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      padding: "0 16px",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "0 20px",
      borderLeft: "1.5px solid #d6f0e2",
      flexShrink: 0,
    },
    badge: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "#e6f9f0",
      border: "1px solid #b3efd3",
      color: "#067a3e",
      fontSize: "12px",
      fontWeight: 700,
      padding: "6px 14px",
      borderRadius: "999px",
      whiteSpace: "nowrap",
    },
    badgeDot: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: "#0cb65e",
      flexShrink: 0,
    },
    hireBtn: {
      background: "#0cb65e",
      color: "#ffffff",
      border: "none",
      borderRadius: "10px",
      padding: "9px 20px",
      fontSize: "13px",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    hamburger: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: "6px",
      marginRight: "12px",
    },
    hamburgerLine: {
      display: "block",
      width: "22px",
      height: "2.5px",
      background: "#111111",
      borderRadius: "2px",
    },
    drawer: {
      background: "#ffffff",
      borderBottom: "1px solid #e1f5e9",
      overflow: "hidden",
      maxHeight: menuOpen ? "660px" : "0",
      transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
    },
    drawerInner: { padding: "12px 16px 20px" },
    mLink: (isActive) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "14px",
      fontWeight: isActive ? 700 : 500,
      color: isActive ? "#0cb65e" : "#222222",
      padding: "12px 14px",
      borderRadius: "12px",
      cursor: "pointer",
      textDecoration: "none",
      background: isActive ? "#e6f9f0" : "transparent",
      transition: "background 0.15s",
      marginBottom: "2px",
    }),
    mIcon: (isActive) => ({
      width: "36px",
      height: "36px",
      borderRadius: "10px",
      background: isActive ? "#d0f5e5" : "#f0fdf7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      fontSize: "18px",
      color: isActive ? "#0cb65e" : "#333333",
    }),
    divider: { height: "1px", background: "#e8f5ee", margin: "10px 0" },
    mBottom: { display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" },
    mBadge: {
      display: "flex", alignItems: "center", gap: "6px",
      background: "#e6f9f0", border: "1px solid #b3efd3",
      color: "#067a3e", fontSize: "12px", fontWeight: 700,
      padding: "8px 14px", borderRadius: "999px",
    },
    mDot: { width: "7px", height: "7px", borderRadius: "50%", background: "#0cb65e" },
    mHire: {
      flex: 1, background: "#0cb65e", color: "#ffffff",
      border: "none", borderRadius: "12px", padding: "12px",
      fontSize: "14px", fontWeight: 700, cursor: "pointer",
      fontFamily: "inherit", textAlign: "center", display: "flex",
      alignItems: "center", justifyContent: "center", gap: "6px",
      textDecoration: "none",
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes hblink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.65); }
        }
        .blink-dot { animation: hblink 1.5s infinite; }

        .hdr-navlink {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          gap: 3px !important;
          padding: 8px 14px !important;
          border-radius: 10px !important;
          cursor: pointer !important;
          text-decoration: none !important;
          min-width: 64px !important;
          transition: background 0.15s, color 0.15s !important;
          color:grey !important;
          background: transparent !important;
        }
        .hdr-navlink:hover {
          background: #f0fdf7 !important;
          color: #111111 !important;
        }
        .hdr-navlink.active {
          background: #e6f9f0 !important;
          color: #0cb65e !important;
        }
        .hdr-navlink .nav-icon {
          font-size: 20px !important;
          line-height: 1 !important;
          color: inherit !important;
          display: block !important;
        }
        .hdr-navlink .nav-label {
          font-size: 11px !important;
          font-weight: 600 !important;
          color: inherit !important;
          line-height: 1 !important;
          display: block !important;
          white-space: nowrap !important;
        }
        .hdr-navlink.active .nav-icon,
        .hdr-navlink.active .nav-label {
          color: #0cb65e !important;
        }
        .hdr-navlink:hover .nav-icon,
        .hdr-navlink:hover .nav-label {
          color: #111111 !important;
        }

        .hire-btn:hover { background: #089a4e !important; transform: scale(1.03) !important; }

        @media (max-width: 900px) {
          .hdr-nav-desktop { display: none !important; }
          .hdr-right-desktop { display: none !important; }
          .hdr-hamburger-wrap { display: flex !important; }
        }
        @media (min-width: 901px) {
          .hdr-hamburger-wrap { display: none !important; }
        }
        @media (max-width: 480px) {
          .brand-tag { display: none !important; }
          .nav-label
          {
          color:black !important}
        }
          @media (max-width: 768px) {
  span {
    color: #222 !important;
  }import ThreeDotDropdown from './ThreeDotDropdown';

}
      `}</style>

      <header style={styles.root}>

        {/* ── MAIN BAR ── */}
        <div style={styles.bar}>

          {/* GREEN BRAND PANEL */}
          <a href="#home" style={styles.brand} onClick={userProfile}>
            <div style={styles.av}>KS</div>
            <div style={styles.brandText}>
              <div style={styles.brandName}>
                Kalai.<span style={{ opacity: 0.7 }}>dev</span>
              </div>
              <div style={styles.brandTag} className="brand-tag">
                Full Stack Developer
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
        <nav
  className="hdr-nav-desktop"
  style={styles.nav}
  aria-label="Main navigation"
>
  {mode === "Single Page" ? (
    navItemsSingle.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className={`hdr-navlink ${
          activeTab === link.label ? "active" : ""
        }`}
        onClick={() =>
          handleNavClickSingle(link.label, link.path)
        }
      >
        <i
          className={`ti ${link.icon} nav-icon`}
          aria-hidden="true"
        />
        <span className="nav-label">{link.short}</span>
      </a>
    ))
  ) : <>
  
  {(mode=="Multi Page")?<>
  {
    navLinks.map((link) => (
      <a
        className={`hdr-navlink ${
          active === link.label ? "active" : ""
        }`}
             onClick={() => handleNavClick(link.label, link.path)}
      >
        <i
          className={`ti ${link.icon} nav-icon`}
          aria-hidden="true"
        />
        <span className="nav-label">{link.short}</span>
      </a>
    ))
}
  </>:null}
  </>}
</nav>

          {/* DESKTOP RIGHT */}
          <div className="hdr-right-desktop" style={styles.right}>
            <>
            <ThreeDotDropdown
setMode={setMode}
mode={mode}
selected={selected} setSelected={setSelected}
setActiveTab={setActiveTab}
setMenuOpen={setMenuOpen}
/>
            </>
            <div style={styles.badge}>
              <span className="blink-dot" style={styles.badgeDot} />
              Employed
            </div>
            <button
              className="hire-btn"
              style={styles.hireBtn}
              onClick={() =>
                window.open(
                  "mailto:kalaimca685@gmail.com?subject=Let's Work Together&body=Hi, I'd love to collaborate with you!"
                )
              }
            >
              <i className="ti ti-send" style={{ fontSize: "15px", color: "#fff" }} aria-hidden="true" />
              Hire me
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <div
            className="hdr-hamburger-wrap"
            style={{ flex: 1, display: "flex", gap:"10px",alignItems: "center", justifyContent: "flex-end", paddingRight: "16px" }}
          >

            <div>

                   <ThreeDotDropdown
setMode={setMode}
mode={mode}
selected={selected} setSelected={setSelected}
setActiveTab={setActiveTab}
setMenuOpen={setMenuOpen}
/>
            </div>
           {(mode=="Single Page" || mode=="Multi Page") && <>
            <button
              style={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span
                style={{
                  ...styles.hamburgerLine,
                  transform: menuOpen ? "translateY(7.5px) rotate(45deg)" : "none",
                  transition: "transform 0.25s",
                }}
              />
              <span
                style={{
                  ...styles.hamburgerLine,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.25s",
                }}
              />
              <span
                style={{
                  ...styles.hamburgerLine,
                  transform: menuOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
                  transition: "transform 0.25s",
                }}
              />
            </button>
           </>}
          </div>

        </div>

        {/* MOBILE DRAWER */}
        <div style={styles.drawer} aria-label="Mobile navigation">
          <div style={styles.drawerInner}>

            {mode=="Single Page"?<>
            
            {navItemsSingle.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={styles.mLink(isActive)}
                  onClick={() => { setActive(link.label); setMenuOpen(false); }}
                >
                  <span style={styles.mIcon(isActive)}>
                    <i
                      className={`ti ${link.icon}`}
                      style={{ fontSize: "18px", color: "inherit" }}
                      aria-hidden="true"
                    />
                  </span>
                  <span style={{ color: "inherit", fontWeight: "inherit" }}>{link.label}</span>
                </a>
              );
            })}
            
            
            </>:<>
            
            {navLinks.map((link) => {
              const isActive = active === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={styles.mLink(isActive)}
             onClick={() => {handleNavClick(link.label, link.path)
              setMenuOpen(false); 
             }}

                >
                  <span style={styles.mIcon(isActive)}>
                    <i
                      className={`ti ${link.icon}`}
                      style={{ fontSize: "18px", color: "inherit" }}
                      aria-hidden="true"
                    />
                  </span>
                  <span style={{ color: "inherit", fontWeight: "inherit" }}>{link.label}</span>
                </a>
              );
            })}
            
            </>}
            
            <div style={styles.divider} />
            <div style={styles.mBottom}>
              <div style={styles.mBadge}>
                <span className="blink-dot" style={styles.mDot} />
                Employed
              </div>
              <a
                href="mailto:kalaimca685@gmail.com?subject=Let's Work Together"
                style={styles.mHire}
              >
                ✉️ Hire me
              </a>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}