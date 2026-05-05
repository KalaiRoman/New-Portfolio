// import React, { useEffect, useState } from "react";
// import "./styles/Home.scss";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import person1 from "../../assests/images/person1.png";
// import person2 from "../../assests/images/person2.png";
// import person3 from "../../assests/images/person3.png";
// import person4 from "../../assests/images/3d male.png";
// import { Typewriter } from "react-simple-typewriter";
// import Modal from "react-bootstrap/Modal";
import pdf from "../../assests/Kalai- resume.pdf";

// import AOS from "aos";

// import CountUp from "react-countup";
import kalaiImage from "../../assests/images/kalai_image.jpeg";
// function Home({ colorName, theme }) {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const datas = [
//     {
//       id: 1,
//       image: kalaiImage,
//     },
//     // {
//     //   id: 1,
//     //   image: person2,
//     // },
//     // {
//     //   id: 1,
//     //   image: person3,
//     // },
//     // {
//     //   id: 1,
//     //   image: person4,
//     // },
//   ];

//   const LinkedInPath = () => {
//     window.open("https://www.linkedin.com/feed/");
//   };

//   const GithubPath = () => {
//     window.open("https://github.com/KalaiRoman?tab=repositories");
//   };
//   const handleType = (count) => {};
//   const faceBookLink = () => {
//     window.open("https://www.facebook.com/");
//   };

//   const handleDone = () => {};
//   return (
//     <>
//       <div className="main-home-section" id="Home">
//         <div className="empty-circle"></div>
//         <div className="emoji1">😎</div>
//         <div className="blue-box animate__animated animate__jello animate__infinite animate__delay-3s 3s infinite animate__slower 2s "></div>
//         <div className="green-box animate__animated animate__bounce animate__infinite animate__delay-3s 3s infinite animate__slower 2s"></div>
//         <div className="rose-box animate__animated animate__heartBeat animate__infinite animate__delay-3s 3s infinite animate__slower 2s"></div>
//         <div className="color-box"></div>

//         {theme && (
//           <div>
//             <i class="fa-solid fa-star stars"></i>
//           </div>
//         )}
//         {theme && (
//           <div>
//             <i class="fa-solid fa-star stars1"></i>
//           </div>
//         )}
//         {theme && (
//           <div>
//             <i class="fa-solid fa-star stars2"></i>
//           </div>
//         )}
//         <div className="inside-section">
//           <div className="home-left" style={{ color: colorName }}>
//             <div className="left-inside-home">
//               <div
//                 className="myname-text"
//                 data-aos="fade-right"
//                 data-aos-easing="linear"
//                 data-aos-duration="1500"
//               >
//                 Hello, I am 👋
//               </div>
//               <div
//                 className="myname-text"
//                 data-aos="flip-left"
//                 data-aos-easing="linear"
//                 data-aos-duration="1500"
//               >
//                   Kalaisurya{" "}
//                 <span
//                   style={{
//                     color: `${colorName || "#0db75f"}`,
//                     fontWeight: "bold",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   ( 
//                   <Typewriter
//                     words={["ReactJs", "Javascript" ,"NextJs", "NodeJs"]}
//                     loop={5}
//                     cursor
//                     cursorStyle="👨‍💻"
//                     typeSpeed={70}
//                     deleteSpeed={50}
//                     delaySpeed={1000}
//                     onLoopDone={handleDone}
//                     onType={handleType}
//                   />{" "}
//                    )
//                 </span> Developer
//               </div>
//               <div
//                 // className="web-text mb-2 mt-3"
//                 style={{ color: colorName }}
//                 data-aos-easing="linear"
//                 data-aos-duration="1500"
//                 data-aos="fade-down"
//               >
//                 {/* Full Stack Developer */}
//                 {/* (<span className='w-text animate__animated animate__bounce animate__repeat-3 	3 animate__slow 2s'> W</span>EB<span className='w-text animate__animated animate__bounce animate__repeat-2 	2 animate__slow 3s'>D</span>EVELOPER) */}
//               </div>
//               {/* <div className='build-text mt-3' data-aos="zoom-in-right"
//                                 data-aos-easing="linear"
//                                 data-aos-duration="1500"
//                             >
//                                 A Building Applications with Front End Developer Operations.
//                                 Building applications involves Front End Developer Operations for the user interface and backend handling for data processing and server-side functionalities.
//                             </div> */}
//     <p
//                 className="text-gray-600 max-w-lg mt-3"
//                 style={{ color: "grey", fontSize: "17px", lineHeight: "18px" }}
//               >
//              Full Stack Developer specializing in React & Node.js.
//               </p>
//               <p
//                 className="text-gray-600 max-w-lg  mt-1"
//                 style={{ color: "grey", fontSize: "16px", lineHeight: "28px" }}
//               >
//                I build scalable, high-performance web applications with clean UI/UX. Focused on delivering seamless user experiences and optimized performance.
//               </p>
//               <div className="home-social-icons mt-2 mb-2">
//                 <div
//                   data-aos="fade-right"
//                   data-aos-easing="linear"
//                   data-aos-duration="1500"
//                   onClick={faceBookLink}
//                 >
//                   <i class="fa-brands fa-facebook logo-icons"></i>
//                 </div>
//                 <div
//                   onClick={LinkedInPath}
//                   data-aos="fade-down"
//                   data-aos-easing="linear"
//                   data-aos-duration="1500"
//                 >
//                   <i class="fa-brands fa-linkedin-in logo-icons"></i>
//                 </div>
//                 <div
//                   onClick={GithubPath}
//                   data-aos="fade-up"
//                   data-aos-easing="linear"
//                   data-aos-duration="1500"
//                 >
//                   <i class="fa-brands fa-github logo-icons"></i>
//                 </div>
//               </div>
//               <div className="home-button">
//                 <div>
//                   <button
//                     className="hireme"
//                     onClick={() => window.location.assign("/contact")}
//                   >
//                     Hire Me
//                   </button>
//                 </div>
//                 <div>
//                   <button className="donwloadbutton">
//                      <i class="fa-solid fa-download"></i>
//                     <a href={pdf} download="Kalaisurya.pdf" className="pdf">
//                      Get CV
//                     </a>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="home-right">
//             <Swiper
//               spaceBetween={50}
//               slidesPerView={1}
//               centeredSlides={true}
//               autoplay={{
//                 delay: 4500,
//                 disableOnInteraction: false,
//               }}
//               pagination={{
//                 clickable: true,
//               }}
//               navigation={true}
//               modules={[Autoplay]}
//               className="main-swiper-box"
//             >
//               {datas?.map((item) => {
//                 return (
//                   <SwiperSlide>
//                     <div className="swipper-box-cards">
//                       <img
//                         src={item?.image}
//                         alt="no image"
//                         className="person-images"
//                       />
//                       {/* <div className="empty-boxes"></div> */}
//                       {/* <div className="fade-box"></div> */}
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>

//             <div
//               className="first-box"
//               data-aos="fade-right"
//               data-aos-easing="linear"
//               data-aos-duration="1500"
//             >
//               <div className="icon-happy-client-logoss">
//                 <i class="fa-solid fa-briefcase icon-happy-client-logo"></i>
//               </div>
//               <div className="happy-client-text">
//                 <div className="text-years">
//                   <CountUp end={5} duration={5} />+
//                 </div>
//                 <div className="year-text">
//                   Years <br />
                
//                 </div>
//               </div>
//             </div>
//             <div
//               className="second-box"
//               data-aos="fade-up"
//               data-aos-easing="linear"
//               data-aos-duration="1500"
//             >
//               <div className="icon-happy-client-logoss">
//                 <i class="fa-solid fa-folder-minus icon-happy-client-logo"></i>
//               </div>
//               <div className="happy-client-text">
//                 <div className="text-years">
//                   <CountUp end={10} duration={5} />+
//                 </div>
//                 <div className="year-text">
//                   Projects
//                 </div>
//               </div>
//             </div>
//             <div
//               className="third-box"
//               data-aos="fade-down"
//               data-aos-easing="linear"
//               data-aos-duration="1500"
//             >
//               <div className="icon-happy-client-logoss">
//                 <i class="fa-solid fa-users icon-happy-client-logo"></i>
//               </div>
//               <div className="happy-client-text">
//                 <div className="text-years">
//                   <CountUp end={5} duration={5} />+
//                 </div>
//                 <div className="year-text">
//                   Clients
//                 </div>
//               </div>
//             </div>

//             {/* <div className="profile-container">
//               <div className="floating-card card1">
//                 <div className="icon">💼</div>
//                 <div>
//                   <p className="number">4</p>
//                   <p className="label">Years of Experience</p>
//                 </div>
//               </div>

//               <div className="floating-card card2">
//                 <div className="icon">📁</div>
//                 <div>
//                   <p className="number">10+</p>
//                   <p className="label">Projects Completed</p>
//                 </div>
//               </div>

//               <div className="floating-card card3">
//                 <div className="icon">👥</div>
//                 <div>
//                   <p className="number">5+</p>
//                   <p className="label">Happy Clients</p>
//                 </div>
//               </div>

//               <div className="profile-photo">
//                 <img src={kalaiImage} alt="Profile" />
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       {/* <Aboutus /> */}
//     </>
//   );
// }

// export default Home;




// ── Hero.jsx ──
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

/* ── Replace this URL with your actual photo ── */
const PHOTO_URL = kalaiImage; // e.g. "/assets/kalaisurya.jpg"

/* ── Typed roles ── */
const ROLES = [
  "React Developer",
  "NextJs Developer",
  "Node.js Developer",
  "Full Stack Developer",
];

/* ── Icons ── */
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

/* ── Nav links ── */


  const handleUrl = (params) => {
    window.open(params);
  };

const SOCIALS = [
  { label: "GitHub",   icon:  <i class="fa-brands fa-github logo-icons"></i>,   url: "https://github.com/KalaiRoman?tab=repositories" },
  { label: "LinkedIn", icon:   <i class="fa-brands fa-linkedin-in logo-icons"></i>, url: "https://www.linkedin.com/in/kalaisurya-g-3253a81b1" },
  { label: "Twitter",  icon: <TwitterIcon />,  url: "https://twitter.com" },
  { label: "Dev.to",   icon: <i class="fa-brands fa-facebook logo-icons"></i>,      url: "https://www.facebook.com/" },
];

const STATS = [
  { icon: <BriefcaseIcon />, num: "5+", label: "Years Exp." },
  { icon: <PersonsIcon />,   num: "20+", label: "Happy Clients" },
  { icon: <FolderIcon />,    num: "10+", label: "Projects" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const typedRole = useTyped(ROLES);
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate("/contact");
  };

  const downloadCV = async () => {
    try {
      const response = await fetch(pdf);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Kalaisurya.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };


  return (
    <div className="hero-page">

  

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
          <p className="hero-bio">
         I turn ideas into fast, clean web apps using React & Node.js. <br />
  10+ projects delivered with clean UI and optimized performance.
          </p>

          {/* Socials */}
          <div className="hero-socials">
            {SOCIALS.map((s) => (
    
              <div
                className="social-btn"
                onClick={() => handleUrl(s.url)}
              >
             <div className="inside-social-btn">
   {s.icon}

             </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <button className="btn-primary" onClick={handleHireMe}>Hire Me</button>
            <button className="btn-outline" onClick={downloadCV}>
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
            <div key={i} className="stat-badge">
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