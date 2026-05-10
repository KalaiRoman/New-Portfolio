import { useState, useRef, useEffect } from "react";

import {
  FaGlobe,
  FaLayerGroup,
  FaCode,
  FaGithub,
} from "react-icons/fa";

import { SiPostman } from "react-icons/si";

import "./styles/Header.css";

export default function ThreeDotDropdown({ setMode, mode }) {

  const [selected, setSelected] = useState(mode || "Single Page");

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

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

  }, []);

  const options = [
    {
      name: "Single Page",
      icon: <FaGlobe />,
    },
    {
      name: "Multi Page",
      icon: <FaLayerGroup />,
    },
    {
      name: "VsCode",
      icon: <FaCode />,
    },
    {
      name: "Github",
      icon: <FaGithub />,
    },
      {
      name: "Postman",
       icon: <SiPostman />,
    },
  ];

  return (

    <div className="dropdownContainer" ref={dropdownRef}>

      {/* BUTTON */}
      <button
        className="dotButton"
        onClick={() => setOpen(!open)}
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