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
            <Header />
            <div className="body-sections">
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
              </Routes>
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
          </div>
        </>
      )}
    </>
  );
}
export default App;
