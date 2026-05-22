import { useState, useRef, useEffect } from "react";

import {
  FaGlobe,
  FaLayerGroup,
  FaCode,
  FaGithub,
  FaUserCircle
} from "react-icons/fa";

import { SiPostman } from "react-icons/si";

import "./styles/Header.css";
import { useDispatch } from "react-redux";
import { createUserClickAction } from "../../redux/actions/Userclick_Action";

export default function ThreeDotDropdown({ setMode, mode,selected, setSelected }) {

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const dispatch=useDispatch();

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [mode]);

  const options = [
     {
      name: "Single Page",
      label:"singlePageView",
      icon: <FaGlobe />,
    },
    {
      name: "Multi Page",
      label:"multiPageView",

      icon: <FaLayerGroup />,
    },
    {
      name: "VsCode",
      label:"vsCodeView",

      icon: <FaCode />,
    },
    {
      name: "Github",
      label:"githubTabView",

      icon: <FaGithub />,
    },
      {
      name: "Postman",
      label:"postmanTabView",

       icon: <SiPostman />,
    },
  ];




  const handleClickDotts=(params)=>{
    dispatch(createUserClickAction(params));
  }
  return (

    <div className="dropdownContainer" ref={dropdownRef}>


      {/* BUTTON */}
      <button
        className="dotButton"
        onClick={() => {setOpen(!open)
        }}
      >
        ⋮
      </button>

      {/* DROPDOWN */}
      {open && (

        <div className="dropdownMenu">

       
           {options.map((item) => (

            <div
              key={item.name}
              className={`dropdownItem ${
                selected === item.name ? "activeItem" : ""
              }`}
              onClick={() => {
                setSelected(item.name);
                setMode(item.name);
                setOpen(false);
                handleClickDotts(item?.label);
              }}
            >

              <span className="dropdownIcon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </div>

          ))}
          

         

        </div>

      )}

    </div>
  );
}