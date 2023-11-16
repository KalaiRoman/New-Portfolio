import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { useEffect, useState } from 'react';
import { ColorChangection } from './redux/actions/Color_Action';
import Header from './component/header/Header';
import Form from 'react-bootstrap/Form'
import AnimatedCursor from 'react-animated-cursor';
import cycle from './assests/images/cycle-img.png'
import rocket from './assests/images/rocket-img.png'

function App() {



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

  }, [state, theme])

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


  return (
    <div className={theme ? "theme--dark" : "theme--light"}>

      {loader ? <div className='loader-section'>
        <div>
          Hi Friend's
        </div>
        <div>
          Welcome to Visit My Web Page
        </div>
      <div className='mt-5'>
        <img src={cycle} alt="no image" className='cycle-image'/>
      </div>
      <div>
        <img src={rocket} alt="no image" className='rockt-image'/>
      </div>
      </div> : <>

        <AnimatedCursor
          innerSize={10}
          outerSize={30}
          color='255, 46, 99'
          outerAlpha={0.4}
          innerScale={0.6}
          outerScale={0}
        />
        <div className="port-main-sections">
          {/* <button onClick={handleChnageColor}>
            color
          </button> */}
          {/* <Form.Select aria-label="Default select example" onChange={handleChange}>
          <option>---Open this select menu---</option>
          {colors?.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
          })}
        </Form.Select> */}
          <Header loader={loader} />
        </div>
      </>}


    </div>
  );
}
export default App;
