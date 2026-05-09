// VSCodePortfolio.jsx

import { useState } from "react";

import {
  FaReact,
  FaBars,
  FaTimes,
  FaFolder,
  FaJs,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import "./VSCodePortfolio.css";

import Home from "../home/Home";
import Aboutus from "../aboutus/Aboutus";
import Projects from "../projects/Projects";
import WorkingTools from "../workingtools/WorkingTools";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";

export default function VSCodePortfolio() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Home.js");

  const [darkMode, setDarkMode] = useState(true);

  const files = [
    "Home.js",
    "About.js",
    "Experience.js",
    "Projects.js",
    "Skills.js",
    "Contact.js",
  ];

  // CHANGE PAGE
  const renderContent = () => {

    switch (activeTab) {

      case "Home.js":
        return <Home />;

      case "About.js":
        return <Aboutus />;

      case "Experience.js":
        return <Experience />;

      case "Projects.js":
        return <Projects />;

      case "Skills.js":
        return <WorkingTools />;

      case "Contact.js":
        return <Contact />;

      default:
        return null;
    }
  };

  return (
    <div className={`vscode ${darkMode ? "dark-theme" : "light-theme"}`}>

      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>

        {/* LOGO */}
        <div className="logo-section">

          <div className="logo-left">
            <FaReact className="logo-icon" />
            <h3>Kalai.dev</h3>
          </div>

          {/* THEME */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>

        {/* EXPLORER */}
        <div className="explorer">

          <p className="explorer-title">
            EXPLORER
          </p>

          <div className="folder">

            <p className="folder-name">
              <FaFolder />
              MY-PORTFOLIO
            </p>

            <div className="file-list">

              {files.map((file) => (
                <div
                  key={file}
                  className={`file-item ${
                    activeTab === file ? "active-file" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(file);
                    setSidebarOpen(false);
                  }}
                >
                  <FaJs className="file-icon" />
                  {file}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">

          <div className="tabs">

            {files.map((file) => (
              <div
                key={file}
                className={`tab ${
                  activeTab === file ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(file)}
              >
                <FaJs className="tab-icon" />
                <span>{file}</span>
              </div>
            ))}

          </div>
        </div>

        {/* EDITOR */}
        <div className="editor">

          {/* LINE NUMBERS */}
          <div className="line-numbers">

            {[...Array(40)].map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}

          </div>

          {/* CONTENT */}
          <div className="editor-content">
            {renderContent()}
          </div>

        </div>

        {/* STATUSBAR */}
        <div className="statusbar">

          <div className="status-left">
            <span>⚛ Kalai.Dev</span>
            <span>{activeTab}</span>
          </div>

          <div className="status-right">
            <span>UTF-8</span>

            <span>
              {darkMode ? "Dark Theme" : "Light Theme"}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}