import { useState, useRef, useEffect } from "react";
import "./styles/Header.css";

export default function ThreeDotDropdown({setMode,mode}) {
  
  const [selected, setSelected] = useState("Single Page");

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

  const options = ["Single Page", "Multiple Page", "VsCode"];

  console.log(mode,"mode")

  return (
    <div className="dropdownContainer" ref={dropdownRef}>

      <button
        className="dotButton"
        onClick={() => setOpen(!open)}
      >
        ⋮
      </button>

      {open && (
        <div className="dropdownMenu">
          {options.map((item) => (
            <div
              key={item}
              className={`dropdownItem ${
                selected === item ? "activeItem" : ""
              }`}
              onClick={() => {
                setSelected(item);
                setMode(item)
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}