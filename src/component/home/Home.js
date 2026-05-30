
import pdf from "../../assests/Kalai-resume.pdf";
import kalaiImage from "../../assests/images/kalai_image.jpeg";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";
import { userDowloadResume } from "../../services/auth_services/auth_services";
import { useDispatch, useSelector } from "react-redux";
import { createUserClickAction } from "../../redux/actions/Userclick_Action";

const PHOTO_URL = kalaiImage; 

const ROLES = [
  "React Developer",
  "NextJs Developer",
  "Node.js Developer",
  "Full Stack Developer",
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const DevIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.6-2.43.5-.05c.45-.05.5-.04.5.1 0 .14-.1.46-.3 1.05-.08.25-.44 1.6-.80 3-.37 1.44-.72 2.67-.77 2.84z"/></svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v6h5.66V9h3.84L12 2z"/></svg>
);

const DownArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 3.16 16.84 2 15.34 2H8.66C7.16 2 6 3.16 6 4.66 6 5.12 6.11 5.56 6.18 6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8.66 4h6.68c.36 0 .66.3.66.66 0 .37-.3.67-.66.67H8.66c-.36 0-.66-.3-.66-.67 0-.36.3-.66.66-.66zM20 19H4V8h16v11z"/></svg>
);

const PersonsIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
);

/* ── Typing hook ── */
function useTyped(words, typeSpeed = 80, deleteSpeed = 40, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing");
  const timeout = useRef(null);

  useEffect(() => {
    const word = words[wordIdx];

    if (phase === "typing") {
      if (display.length < word.length) {
        timeout.current = setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          typeSpeed
        );
      } else {
        timeout.current = setTimeout(() => setPhase("deleting"), pause);
      }
    } else {
      if (display.length > 0) {
        timeout.current = setTimeout(
          () => setDisplay(display.slice(0, -1)),
          deleteSpeed
        );
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout.current);
  }, [display, phase, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return display;
}



  const handleUrl = (params) => {
    window.open(params);
  };

const SOCIALS = [
  { label: "GitHub", name:"githubProfile",  icon:  <i class="fa-brands fa-github logo-icons"></i>,   url: "https://github.com/KalaiRoman" },
  { label: "LinkedIn", name:"linkedinProfile",icon:   <i class="fa-brands fa-linkedin-in logo-icons"></i>, url: "https://www.linkedin.com/in/kalaisurya-g-3253a81b1" },
  { label: "Twitter",name:"twitterProfile",  icon: <TwitterIcon />,  url: "https://twitter.com" },
  { label: "Dev.to", name:"facebookProfile",  icon: <i class="fa-brands fa-facebook logo-icons"></i>,      url: "https://www.facebook.com/" },
];

const STATS = [
  { icon: <BriefcaseIcon />, num: "5+", label: "Years Exp.", },
  { icon: <PersonsIcon />,   num: "15+", label: "Happy Clients", },
  { icon: <FolderIcon />,    num: "20+", label: "Projects",url:"/projects" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const typedRole = useTyped(ROLES);
  const navigate = useNavigate();

  const dispatch=useDispatch();

  const state=useSelector((state)=>state?.user?.data);

 useEffect(() => {
  if (state) {
  }
}, [state]);

  const handleHireMe = (params) => {
    handleDownloadResume(params)
    navigate("/contact");

  };

  const handleDownloadResume=async(params)=>{
 dispatch(createUserClickAction(params));
  }

  const downloadCV = async (params) => {
    try {
      const response = await fetch(pdf);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Kalaisurya.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      handleDownloadResume(params);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };


  const handlePage=(path)=>{
    navigate(path);
  }

  return (
    <div className="hero-page" id="home">

  

      {/* ══ HERO ══ */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">

          {/* Greeting badge */}
          <span className="hero-greeting-badge">
            👋 Hello, welcome to my portfolio
          </span>

          {/* Heading */}
          <h1 className="hero-heading">
            I'm{" "}
            <span className="highlight">Kalaisurya</span>
            <br />
            Full Stack Dev
          </h1>

          {/* Typed role */}
          <div className="hero-role-wrap">
            <span className="role-label">Currently working as →</span>
            <span className="typed-text">
              {typedRole}
              <span className="typed-cursor" />
            </span>
          </div>

          {/* Bio */}
          <div className="hero-bio">
       Experienced Full Stack Developer with 5 years of expertise in React.js, Next.js, JavaScript, and Node.js, building responsive, scalable, and high-performance web applications. Skilled in frontend development, API integration, performance optimization, and delivering user-centric solutions with clean and maintainable code.
          </div>

          {/* Socials */}
          <div className="hero-socials">
            {SOCIALS.map((s) => (
    
              <div
                className="social-btn"
                onClick={() => {handleUrl(s.url)

                  handleDownloadResume(s.name)
                }}
              >
             <div className="inside-social-btn">
   {s.icon}

             </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <button className="btn-primary" onClick={()=>handleHireMe("hireMeClick")}>Hire Me</button>
            <button className="btn-outline" onClick={()=>downloadCV("resumeDownload")}>
              <DownloadIcon />
              Get CV
            </button>
          </div>

         
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          {/* Spinning ring */}
          <div className="photo-bg" />

          {/* Floating stats */}
          {STATS.map((s, i) => (
            <div key={i} className="stat-badge" onClick={() => handlePage(s.url)}>
              <div className="stat-icon">{s.icon}</div>
              <div>
                <div className="stat-num">
                  <em>{s.num}</em>
                </div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            </div>
          ))}

          {/* Profile photo */}
          <div className="photo-wrap">
            {PHOTO_URL ? (
              <img src={PHOTO_URL} alt="Kalaisurya" />
            ) : (
              <div className="photo-initials">K</div>
            )}
          </div>
        </div>

      </section>
    </div>
  );
}