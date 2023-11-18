import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { useEffect, useState } from 'react';
import { ColorChangection } from './redux/actions/Color_Action';
import Header from './component/header/Header';
import Form from 'react-bootstrap/Form'
import AnimatedCursor from 'react-animated-cursor';
import cycle from './assests/images/cycle-img.png'
import rocket from './assests/images/rocket-img.png'
import Home from './component/home/Home';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Aboutus from './component/aboutus/Aboutus';

import { Route, Routes, useNavigate } from "react-router-dom";
import Projects from './component/projects/Projects';

function App() {


  const [Username, setUserName] = useState("Home")

  const ThemeLoader = () => {
    return localStorage.getItem("loader") ? JSON.parse(localStorage.getItem("loader")) : true
  }
  const [loader, setLoader] = useState(ThemeLoader());

  const ThemeColor = () => {
    return JSON.parse(localStorage.getItem("theme"))
  }
  const [theme, setTheme] = useState(ThemeColor());
  const colors = ["#F59213", "#23BDEE", "#D8587E", "#33EFA0", "#5B72EE"];
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.colors);
  useEffect(() => {
    localStorage.setItem("theme", theme)

  }, [state, theme, Username])

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [loader])

  const handleChnageColor = () => {
    setTheme(!theme);
  }
  const handleChange = (e) => {
    dispatch(ColorChangection(e.target.value))
  }

  const [scrollTop, setScrollTop] = useState(0);




  const iconsData = [
    {
      id: 1,
      name: "Home",
      icon: <i class="fa-solid fa-house"></i>,
      path: "/",
      heightScroll: 0,
      ToolName: "Home"

    },
    {
      id: 2,
      name: "About Us",
      icon: <i class="fa-solid fa-user"></i>,
      path: "/aboutus",
      heightScroll: 703,
      ToolName: "About Us"



    },
    {
      id: 5,
      name: "Projects",
      icon: <i class="fa-solid fa-user-graduate"></i>,
      path: "/",
      heightScroll: 0,

      ToolName: "Projects"



    },
    {
      id: 6,
      name: "Contact Us",
      icon: <i class="fa-solid fa-phone-volume"></i>,
      path: "/",
      heightScroll: 0,
      ToolName: "Contact Us"


    }
  ]

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);


  const navigate = useNavigate();






  return (

    <div className={theme ? "theme--dark" : "theme--light"}>
      {/* <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color='255, 46, 99'
        outerAlpha={0.4}
        innerScale={0.6}
        outerScale={0}
      /> */}
      <div className="port-main-sections">
        <div className="main-section">
          <div className='middle-header'>
            <div className='list-names'>

              {iconsData?.map((item, index) => {
                return (
                  <div key={index} className={Username == item?.name ? "activename" : "inactivename"}
                    onClick={() => {
                      setUserName(item?.name)
                      navigate(item?.path)
                    }}
                  >
                    {Username === item?.name ? <div
                    >
                      <div className={'activeclass'}>
                        <div >
                          {item?.icon}
                        </div>
                        <div className='active-texts'>
                          {item?.name}
                        </div>
                      </div>
                    </div> : <>

                      <div className='inactiveclass' data-tooltip-id={item?.ToolName}>
                        {item?.icon}
                      </div>
                      <ReactTooltip
                        id={item?.ToolName}
                        place="left"
                        content={item?.ToolName}
                      /></>
                    }
                  </div>
                )
              })}

              <div className='theme-button' onClick={handleChnageColor}>
                {theme ? <div className='light-theme'><i class="fa-solid fa-cloud-moon"></i></div> : <div className='dark-theme'>
                  <i class="fa-solid fa-sun suns"></i>
                </div>}
              </div>

            </div>
          </div>
          <div className='body-sections'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/projects" element={<Projects />} />

            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}
export default App;
