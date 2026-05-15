import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { useEffect, useState } from "react";
import { ColorChangection } from "./redux/actions/Color_Action";
import Header from "./component/header/Header";
import Form from "react-bootstrap/Form";
import AnimatedCursor from "react-animated-cursor";
import cycle from "./assests/images/cycle-img.png";
import rocket from "./assests/images/rocket-img.png";
import Home from "./component/home/Home";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Aboutus from "./component/aboutus/Aboutus";
import { Route, Routes, useNavigate } from "react-router-dom";
import Projects from "./component/projects/Projects";
import WorkingTools from "./component/workingtools/WorkingTools";
import Contact from "./component/contact/Contact";
import whatsimage from "./assests/images/whatsapp.png";
import Chat from "./component/chat/Chat";
import { getUserData } from "./services/auth_services/auth_services";
import Experience from "./component/experience/Experience";
import VSCodePortfolio from "./component/vscode/VSCodePortfolio";
import GithubPortfolio from "./component/github/GithubPortfolio";
import PostmanPortfolio from "./component/postman/PostmanPortfolio";
import Footer from "./component/footer/Footer";
import Testimonials from "./component/testimonials/Testimonials";
function App() {
  const [ResponseSection, setResponseSection] = useState("Desktop-section");
  const [settingcolor, setSettingColor] = useState(false);
  const Username = window.location.pathname;
  const [loader, setLoader] = useState(true);

  const ThemeColor = () => {
    return JSON.parse(localStorage.getItem("theme"));
  };
  const [theme, setTheme] = useState(ThemeColor());
  const colors = [
    "#F59213",
    "#23BDEE",
    "#D8587E",
    "#ba68c8",
    "#33EFA0",
    "#5B72EE",
  ];
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.colors);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [state, theme, Username]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [loader, settingcolor]);

//   useEffect(() => {

//   // Disable Right Click
//   const disableRightClick = (e) => {
//     e.preventDefault();
//   };

//   // Disable DevTools Keys
//   const disableKeys = (e) => {

//     // F12
//     if (e.key === "F12") {
//       e.preventDefault();
//     }

//     // Ctrl+Shift+I
//     if (e.ctrlKey && e.shiftKey && e.key === "I") {
//       e.preventDefault();
//     }

//     // Ctrl+Shift+J
//     if (e.ctrlKey && e.shiftKey && e.key === "J") {
//       e.preventDefault();
//     }

//     if (e.ctrlKey && e.key === "u") {
//       e.preventDefault();
//     }

//     if (e.ctrlKey && e.key === "c") {
//       e.preventDefault();
//     }
//   };

//   document.addEventListener("contextmenu", disableRightClick);
//   document.addEventListener("keydown", disableKeys);

//   return () => {
//     document.removeEventListener("contextmenu", disableRightClick);
//     document.removeEventListener("keydown", disableKeys);
//   };

// }, []);
  const handleChnageColor = () => {
    setTheme(!theme);
  };

  const changeSettingColor = () => {
    setSettingColor(!settingcolor);
  };
  const handleChange = (name) => {
    dispatch(ColorChangection(name));
  };

  const [scrollTop, setScrollTop] = useState(0);

  const [mode,setMode]=useState("Single Page");
  const [activeTab, setActiveTab] = useState("Home");

  const iconsData = [
    {
      id: 1,
      name: "Home",
      icon: <i class="fa-solid fa-house "></i>,
      path: "/",
      heightScroll: 0,
      ToolName: "Home",
    },
    {
      id: 2,
      name: "About Us",
      icon: <i class="fa-solid fa-user"></i>,
      path: "/aboutus",
      heightScroll: 703,
      ToolName: "About Us",
    },
    {
      id: 6,
      name: "Services",
      icon: <i class="fa-solid fa-hammer"></i>,
      path: "/tools",
      heightScroll: 0,
      ToolName: "Services",
    },
    {
      id: 5,
      name: "Projects",
      icon: <i class="fa-solid fa-user-graduate"></i>,
      path: "/projects",
      heightScroll: 0,
      ToolName: "Projects",
    },
        {
      id: 5,
      name: "Testimonials",
      icon: <i class="fa-solid fa-user-graduate"></i>,
      path: "/testimonials",
      heightScroll: 0,
      ToolName: "Testimonials",
    },
    {
      id: 7,
      name: "Contact Us",
      icon: <i class="fa-solid fa-phone-volume"></i>,
      path: "/contact",
      heightScroll: 0,
      ToolName: "Contact Us",
    },
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(Math.round(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop, ResponseSection]);

  useEffect(() => {
  if (mode === "Single Page") {

    const sections = [
      { id: "home", name: "Home" },
      { id: "aboutus", name: "About Us" },
      { id: "projects", name: "Projects" },
      { id: "experience", name: "Experience" },
      { id: "skills", name: "Skills" },
      { id: "testimonials", name: "Testimonials" },
      { id: "contact", name: "Contact Us" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
}, [mode]);

  const navigate = useNavigate();

  const [userStatus, setUserStatus] = useState(0);

  const UpdateMessageList = async () => {
    try {
      var count = 0;
      const response = await getUserData();

      if (response) {
        response?.data?.user?.chat?.map((item, index) => {
          if (item?.type == "receiver") {
            if (item?.userstatusSaw === false) {
              count++;
            }
          }
        });
      }

      setUserStatus(count);
    } catch (error) {}
  };



  return (
    <>
      {loader ? (
        <div className="main-loader">
          <div className="loading-cont">
            <div className="cont">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
           <Header
  setMode={setMode}
  mode={mode}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>
            <div className="body-sections">

              {mode=="Single Page" ?<>
            <Home id="home" />
<Aboutus id="aboutus" />
<Experience  id="experience"/>
<WorkingTools id="skills" />
<Projects id="projects" />
<Testimonials id="testimonials" />
<Contact id="contact" />

              </>:<>


              {mode=="VsCode"?<>
              <VSCodePortfolio/>
              
              </>:<>
              {mode=="Github"?<>
              <GithubPortfolio/>
              </>:<>
              
            {mode=="Postman"?<>
            
            <PostmanPortfolio/>
            </>:<>
            
               <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Home
                      colorName={state?.ColorName}
                      ResponseSection={ResponseSection}
                      theme={theme}
                    />
                  }
                />
                <Route
                  path="/aboutus"
                  element={<Aboutus colorName={state?.ColorName} />}
                />
                <Route
                  path="/projects"
                  element={<Projects colorName={state?.ColorName} />}
                />
                <Route
                  path="/tools"
                  element={<WorkingTools colorName={state?.ColorName} />}
                />
                <Route
                  path="/contact"
                  element={<Contact colorName={state?.ColorName} />}
                />
                <Route
                  path="/chat"
                  element={<Chat colorName={state?.ColorName} />}
                />
                    <Route
                  path="/experience"
                  element={<Experience colorName={state?.ColorName} />}
                />
                   <Route
                  path="/testimonials"
                  element={<Testimonials colorName={state?.ColorName} />}
                />
              </Routes>
            
            </>}
              
              
              </>}
               
              </>}
              
               
              </>}
           
            </div>

          

            <div>
              <div>
                <a
                  class="btn-whats pulse"
                  href="https://api.whatsapp.com/send?phone=8778377119&text="
                  target="_blank"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div>
              <Footer/>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default App;
