import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Header.css";
import Modal from 'react-bootstrap/Modal';
import kalaiImage from "../../assests/images/kalai_image.jpeg";
import ThreeDotDropdown from "./ThreeDotDropdown";
const navItems = [
  { label: "Home", icon: "🏠", path: "/" },
  { label: "About Us", icon: "👤", path: "/aboutus" },
  { label: "Experience", icon: "🎓", path: "/experience" },
  { label: "Skills", icon: "🔧", path: "/tools" },
  {label: "Testimonials", icon: "💬",path:"/testimonials"},
  { label: "Projects", icon: "📁", path: "/projects" },
  { label: "Contact Us", icon: "📞", path: "/contact" },
];

const navItemsSingle = [
  { label: "Home", icon: "🏠", path: "#home" },
  { label: "About Us", icon: "👤", path: "#aboutus" },
  { label: "Experience", icon: "🎓", path: "#experience" },
  { label: "Skills", icon: "🔧", path: "#tools" },
  {label: "Testimonials", icon: "💬",path:"#testimonials"},
  { label: "Projects", icon: "📁", path: "#projects" },
  { label: "Contact Us", icon: "📞", path: "#contact" },
];

export default function Header({setMode,mode,activeTab,setActiveTab}) {
  const [active, setActive] = useState("Home");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const location = useLocation();

  const navigate = useNavigate();


  const KLogo = (size) => {
    const scale = size / 80;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38" fill="#0bad5d" />

        <circle
          cx="40"
          cy="40"
          r="28"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />

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

        <circle cx="60" cy="20" r="9" fill="#fff" />

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

  return (
    <>
      {/* ── Header Bar ── */}
      <header className="header">
        <div className="logo" onClick={() => handleNavClick("Home", "/")} role="button" aria-label="Go to Home">
          Kalai.<span>dev</span>

        </div>


        {/* Desktop nav */}
     {mode=="VsCode" || mode=="Postman"?null:<>
     
        <nav className="desktop-nav">

          {mode=="Single Page"?<>
           {navItemsSingle.map((item) => (
            <button
              key={item.label}
        className={`nav-item ${activeTab === item.label ? "active" : ""}`}
          onClick={() =>
          handleNavClickSingle(item.label, item.path)
        }
            >
              <span className={`${activeTab ==item.label ? "label-active" : "label-inactive"}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
          
          </>:<>
           {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item${location.pathname === item.path ? " active" : ""}`}
              onClick={() => handleNavClick(item.label, item.path)}
            >
              <span className={`${location.pathname ==item.path ? "label-active" : "label-inactive"}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
          </>}
         
        </nav>
     </>}

        <div className="nav-right">

          <div>
<ThreeDotDropdown
setMode={setMode}
mode={mode}
/>

          </div>
          
          <div className="nav-availables">
            <span className="nav-dot" />
            Employed
          </div>
          <div className="nav-avatar" onClick={handleShow}>KS</div>

       {(mode === "Multi Page" || mode === "Single Page") && (
  <button
    className={`nav-hamburger${menuOpen ? " open" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    <span />
    <span />
    <span />
  </button>
)}
        </div>
      </header>

      {/* ── Mobile Backdrop Overlay ── */}
      <div 
        className={`mobile-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile Nav Drawer ── */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>

        {mode=="Single Page"?<>
        
           {navItemsSingle.map((item) => (
          <button
            key={item.label}
            className={`mobile-nav-item${activeTab === item.label ? " active" : ""}`}
            onClick={() => handleNavClickSingle(item.label, item.path)}
          >
            <span className="m-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
        </>:<>
        
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
        </>}
     

        <div className="mobile-divider" />
        
        <div className="mobile-profile">
          
        
          <div className="mobile-avatar" onClick={handleShow}>
            KS
          </div>
          <div className="mobile-profile-info">
            <p className="mobile-profile-name">
              Kalaisurya
            </p>
            <p className="mobile-profile-email">
              kalaimca685@gmail.com
            </p>
          </div>
        </div>
      </nav>

       <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
       <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
<div className="text-center">
<img src={kalaiImage} alt="Kalaisurya" style={{ width: '150px', height: '150px', border: "4px solid #16a34a", borderRadius: '50%', marginBottom: '20px' }} />
<div>

   <h1 className="hero-heading">
            I'm{" "}
            <span className="highlight">Kalaisurya</span>
            <br />
            Full Stack Dev
          </h1>
</div>
</div>
        </Modal.Body>
      
      </Modal>
    </div>
    </>
  );
}