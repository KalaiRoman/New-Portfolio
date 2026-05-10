
import { useState } from "react";
import {
  FaGithub,
  FaBars,
  FaTimes,
  FaFolder,
  FaJs,
  FaMoon,
  FaSun,
  FaReact,
  FaMarkdown,
  FaCode,
  FaStar,
  FaCodeBranch,
  FaEye,
} from "react-icons/fa";
import "./GithubPortfolio.css";

import Home from "../home/Home";
import Aboutus from "../aboutus/Aboutus";
import Projects from "../projects/Projects";
import WorkingTools from "../workingtools/WorkingTools";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";

const FILE_ICONS = {
  "README.md": <FaMarkdown className="fi-md" />,
  "About.js": <FaJs className="fi-js" />,
  "Experience.js": <FaJs className="fi-js" />,
  "Projects.js": <FaJs className="fi-js" />,
  "Skills.js": <FaJs className="fi-js" />,
  "Contact.js": <FaJs className="fi-js" />,
};

const files = [
  "README.md",
  "About.js",
  "Experience.js",
  "Projects.js",
  "Skills.js",
  "Contact.js",
];

export default function GithubPortfolio() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("README.md");

  const renderContent = () => {
    switch (activeTab) {
      case "README.md":    return <Home />;
      case "About.js":     return <Aboutus />;
      case "Experience.js":return <Experience />;
      case "Projects.js":  return <Projects />;
      case "Skills.js":    return <WorkingTools />;
      case "Contact.js":   return <Contact />;
      default:             return null;
    }
  };

  const handleTabClick = (file) => {
    setActiveTab(file);
    setSidebarOpen(false);
  };

  return (
    <div className={`gh-root ${darkMode ? "gh-dark" : "gh-light"}`}>

      {/* ── TOP NAVBAR ── */}
      <header className="gh-navbar">
        <div className="gh-nav-left">
          <button
            className="gh-hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <FaGithub className="gh-octocat" />
          <span className="gh-repo-path">
            <span className="gh-owner">KalaiRoman</span>
            <span className="gh-sep">/</span>
            <span className="gh-reponame">Portfolio</span>
            <span className="gh-badge">Public</span>
          </span>
        </div>

        <div className="gh-nav-right">
          <button className="gh-nav-btn">
            <FaEye /> <span>Watch</span> <span className="gh-count">1</span>
          </button>
          <button className="gh-nav-btn">
            <FaCodeBranch /> <span>Fork</span> <span className="gh-count">0</span>
          </button>
          <button className="gh-nav-btn gh-star-btn">
            <FaStar /> <span>Star</span> <span className="gh-count">0</span>
          </button>
          <button
            className="gh-theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      {/* ── REPO SUB-NAV ── */}
      <nav className="gh-subnav">
        {["Code", "Issues", "Pull requests", "Actions", "Projects", "Settings"].map((item) => (
          <button key={item} className={`gh-subnav-item ${item === "Code" ? "active" : ""}`}>
            {item === "Code" && <FaCode />}
            {item}
          </button>
        ))}
      </nav>

      {/* ── BODY ── */}
      <div className="gh-body">

        {/* OVERLAY */}
        {sidebarOpen && (
          <div className="gh-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── SIDEBAR ── */}
        <aside className={`gh-sidebar ${sidebarOpen ? "gh-sidebar--open" : ""}`}>

          <div className="gh-sidebar-header">
            <div className="gh-profile-card">
              <div className="gh-avatar">KR</div>
              <div className="gh-profile-info">
                <p className="gh-profile-name">Kalai Roman</p>
                <p className="gh-profile-role">Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="gh-repo-box">
            <div className="gh-repo-label">Repository</div>
            <div className="gh-repo-title">
              <FaFolder className="gh-folder-icon" />
              <span>my-portfolio</span>
            </div>

            <div className="gh-branch-row">
              <FaCodeBranch />
              <span>main</span>
              <span className="gh-commits-badge">63 commits</span>
            </div>
          </div>

          <div className="gh-file-list">
            <div className="gh-file-list-header">Files</div>
            {files.map((file) => (
              <button
                key={file}
                className={`gh-file-item ${activeTab === file ? "gh-file-item--active" : ""}`}
                onClick={() => handleTabClick(file)}
              >
                <span className="gh-file-icon">{FILE_ICONS[file]}</span>
                <span className="gh-file-name">{file}</span>
              </button>
            ))}
          </div>

        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="gh-main">

          {/* TABS */}
          <div className="gh-tabs-bar">
            <div className="gh-tabs">
              {files.map((file) => (
                <button
                  key={file}
                  className={`gh-tab ${activeTab === file ? "gh-tab--active" : ""}`}
                  onClick={() => setActiveTab(file)}
                >
                  <span className="gh-tab-icon">{FILE_ICONS[file]}</span>
                  <span className="gh-tab-label">{file}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FILE HEADER */}
          <div className="gh-file-header">
            <div className="gh-file-meta">
              <div className="gh-file-avatar">K</div>
              <span className="gh-file-author">kalai</span>
              <span className="gh-file-msg">latest changes · 30 minutes ago</span>
            </div>
            <div className="gh-file-actions">
              <button className="gh-action-btn">Raw</button>
              <button className="gh-action-btn">Blame</button>
              <button className="gh-action-btn">
                <FaReact style={{ color: "#61dafb" }} /> React
              </button>
            </div>
          </div>

          {/* CONTENT BODY */}
          <div className="gh-content-body">
            {renderContent()}
          </div>

        </main>
      </div>
    </div>
  );
}