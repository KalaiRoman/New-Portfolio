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
function App() {
  const [ResponseSection, setResponseSection] = useState("Desktop-section");

  const [settingcolor, setSettingColor] = useState(false);

  const Username = window.location.pathname;
  // const ThemeLoader = () => {
  //   return localStorage.getItem("loader") ? JSON.parse(localStorage.getItem("loader")) : true
  // }
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

  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        timeoutId = setTimeout(fetchData, 60000); // 60 seconds
      }
    };

    fetchData();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [userStatus]);

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
          <div className={theme ? "theme--dark" : "theme--light"}>
            {/* <AnimatedCursor
            innerSize={10}
            outerSize={30}
            color='255, 46, 99'
            outerAlpha={0.4}
            innerScale={0.6}
            outerScale={0}
            className="mouse-section"
          /> */}
            <div className={"Dektop-section "}>
              <div className="main-section">
                <div className="middle-header">
                  <div className="list-names ">
                    {iconsData?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            Username == item?.path
                              ? "activename"
                              : "inactivename"
                          }
                          onClick={() => {
                            navigate(item?.path);
                          }}
                        >
                          {Username === item?.path ? (
                            <div>
                              <div className={"activeclass"}>
                                <div>{item?.icon}</div>
                                <div className="active-texts">{item?.name}</div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div
                                className="inactiveclass"
                                data-tooltip-id={item?.ToolName}
                              >
                                {item?.icon}
                              </div>
                              <ReactTooltip
                                id={item?.ToolName}
                                place="left"
                                content={item?.ToolName}
                                className="kalai"
                              />
                            </>
                          )}
                        </div>
                      );
                    })}

                    <div className="theme-button" onClick={handleChnageColor}>
                      {theme ? (
                        <div className="light-theme">
                          <i class="fa-solid fa-cloud-moon"></i>
                        </div>
                      ) : (
                        <div className="dark-theme">
                          <i class="fa-solid fa-sun suns"></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="setting-color" onClick={changeSettingColor}>
                  <div className="setcolor">
                    <i class="fa-solid fa-gear "></i>
                  </div>

                  {settingcolor ? (
                    <div className="box-setting-colors">
                      {colors?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="mt-1 box-color"
                            onClick={() => {
                              handleChange(item);
                              setSettingColor(false);
                            }}
                          >
                            <div
                              className="color-box-shadow"
                              style={{
                                backgroundColor: item,
                              }}
                            ></div>
                          </div>
                        );
                      })}

                      {/* <div className='borders'>
  
</div> */}
                      <div className="middle-headers">
                        {iconsData?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={
                                Username == item?.path
                                  ? "activenames"
                                  : "inactiveclasss"
                              }
                              onClick={() => {
                                navigate(item?.path);
                              }}
                            >
                              {Username === item?.path ? (
                                <div>
                                  <div className={"activeclass"}>
                                    <div>{item?.icon}</div>
                                    <div className="active-texts">
                                      {item?.name}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div
                                    className="inactiveclass"
                                    data-tooltip-id={item?.ToolName}
                                  >
                                    {item?.icon}
                                  </div>
                                  <ReactTooltip
                                    id={item?.ToolName}
                                    place="left"
                                    content={item?.ToolName}
                                    className="kalai"
                                  />
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>

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
                  </Routes>
                </div>
              </div>
            </div>

            {/* <div onClick={() => navigate("/chat")} className="whatsapp-box">
              <div className="whats-app-image">
                {userStatus === 0 ? null : (
                  <div className="whatsapp-message-status">{userStatus}</div>
                )}

                <img
                  src={whatsimage}
                  alt="no image"
                  onClick={() => navigate("/chat")}
                  className="whats-app"
                />
              </div>
            </div> */}

            <div>
              <div>
                <a
                  class="btn-whats pulse"
                  href="https://api.whatsapp.com/send?phone=8778377119&text="
                  target="_blank"
                >
                  {/* <i class="fa fa-whatsapp"></i> */}
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
