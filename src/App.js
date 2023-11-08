import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { useEffect, useState } from 'react';
import { ColorChangection } from './redux/actions/Color_Action';
import Header from './component/header/Header';
function App() {


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

  const handleChnageColor = () => {
    setTheme(!theme);
  }
  const handleChange = (e) => {
    dispatch(ColorChangection(e.target.value))
  }

  // <Form.Select aria-label="Default select example" onChange={handleChange}>
  //       <option>---Open this select menu---</option>
  //       {colors?.map((item, index) => {
  //         return <option value={item} key={index}>{item}</option>
  //       })}
  //     </Form.Select>
  return (
    <div className="App">
      <button onClick={handleChnageColor}>
        color
      </button>
      <Header />
    </div>
  );
}
export default App;
