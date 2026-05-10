
import { useState } from "react";
import {
  FaJs, FaMoon, FaSun, FaReact, FaFolder, FaFolderOpen,
  FaChevronRight, FaChevronDown, FaTimes, FaBars,
  FaSearch, FaCodeBranch, FaBug, FaPuzzlePiece, FaCog,
  FaUser,
} from "react-icons/fa";
import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscSettingsGear, VscDebugAlt, VscChevronRight, VscChevronDown } from "react-icons/vsc";
import "./VSCodePortfolio.css";

import Home from "../home/Home";
import Aboutus from "../aboutus/Aboutus";
import Projects from "../projects/Projects";
import WorkingTools from "../workingtools/WorkingTools";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";

const FILE_MAP = {
  "Home.js":       { component: <Home />,         icon: "js" },
  "About.js":      { component: <Aboutus />,       icon: "js" },
  "Experience.js": { component: <Experience />,    icon: "js" },
  "Projects.js":   { component: <Projects />,      icon: "js" },
  "Skills.js":     { component: <WorkingTools />,  icon: "js" },
  "Contact.js":    { component: <Contact />,       icon: "js" },
};

const SRC_FILES = Object.keys(FILE_MAP);

const FOLDER_TREE = [
  { name: "build",        type: "folder", color: "#dcb67a" },
  { name: "node_modules", type: "folder", color: "#dcb67a" },
  { name: "public",       type: "folder", color: "#dcb67a" },
  {
    name: "src", type: "folder", color: "#dcb67a", open: true,
    children: [
      { name: "assets",    type: "folder", color: "#dcb67a" },
      { name: "component", type: "folder", color: "#3dc9b0", dot: true },
      { name: "home",      type: "folder", color: "#dcb67a" },
      { name: "aboutus",   type: "folder", color: "#dcb67a" },
      { name: "projects",  type: "folder", color: "#dcb67a" },
      ...SRC_FILES.map(f => ({ name: f, type: "file", icon: "js" })),
    ],
  },
  { name: ".env",           type: "file", icon: "env" },
  { name: ".gitignore",     type: "file", icon: "git" },
  { name: "package.json",   type: "file", icon: "json" },
  { name: "README.md",      type: "file", icon: "md" },
];

function FileIcon({ icon }) {
  const map = {
    js:   <span className="vsc-icon vsc-icon--js">JS</span>,
    json: <span className="vsc-icon vsc-icon--json">{"{}"}</span>,
    md:   <span className="vsc-icon vsc-icon--md">M↓</span>,
    env:  <span className="vsc-icon vsc-icon--env">EN</span>,
    git:  <span className="vsc-icon vsc-icon--git">GI</span>,
    css:  <span className="vsc-icon vsc-icon--css">CS</span>,
  };
  return map[icon] || <span className="vsc-icon vsc-icon--js">JS</span>;
}

function TreeNode({ node, depth = 0, activeTab, onFileClick, openFolders, toggleFolder }) {
  const isOpen = openFolders.has(node.name);

  if (node.type === "folder") {
    return (
      <>
        <button
          className="vsc-tree-row"
          style={{ paddingLeft: `${12 + depth * 14}px` }}
          onClick={() => toggleFolder(node.name)}
        >
          {isOpen ? <FaChevronDown className="vsc-chevron" /> : <FaChevronRight className="vsc-chevron" />}
          {isOpen
            ? <FaFolderOpen style={{ color: node.color || "#dcb67a", fontSize: 14, flexShrink: 0 }} />
            : <FaFolder style={{ color: node.color || "#dcb67a", fontSize: 14, flexShrink: 0 }} />
          }
          <span className="vsc-tree-name">{node.name}</span>
          {node.dot && <span className="vsc-dot" />}
        </button>
        {isOpen && node.children?.map((child, i) => (
          <TreeNode key={i} node={child} depth={depth + 1}
            activeTab={activeTab} onFileClick={onFileClick}
            openFolders={openFolders} toggleFolder={toggleFolder} />
        ))}
      </>
    );
  }

  const isActive = activeTab === node.name;
  return (
    <button
      className={`vsc-tree-row vsc-tree-file ${isActive ? "vsc-tree-file--active" : ""}`}
      style={{ paddingLeft: `${26 + depth * 14}px` }}
      onClick={() => onFileClick(node.name)}
    >
      <FileIcon icon={node.icon} />
      <span className="vsc-tree-name">{node.name}</span>
    </button>
  );
}

export default function VSCodePortfolio() {
  const [activeTab, setActiveTab] = useState("Home.js");
  const [openTabs, setOpenTabs] = useState(["Home.js"]);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState("explorer");
  const [openFolders, setOpenFolders] = useState(new Set(["src", "component"]));

  const openFile = (name) => {
    if (!FILE_MAP[name]) return;
    if (!openTabs.includes(name)) setOpenTabs(prev => [...prev, name]);
    setActiveTab(name);
    setSidebarOpen(false);
  };

  const closeTab = (e, name) => {
    e.stopPropagation();
    const next = openTabs.filter(t => t !== name);
    setOpenTabs(next);
    if (activeTab === name) setActiveTab(next[next.length - 1] || "Home.js");
  };

  const toggleFolder = (name) => {
    setOpenFolders(prev => {
      const s = new Set(prev);
      s.has(name) ? s.delete(name) : s.add(name);
      return s;
    });
  };

  const content = FILE_MAP[activeTab]?.component ?? null;
  const lineCount = 60;

  return (
    <div className={`vsc-root ${darkMode ? "vsc-dark" : "vsc-light"}`}>

      {/* ── TITLE BAR ── */}
      <div className="vsc-titlebar">
        <div className="vsc-titlebar-dots">
          <span className="vsc-dot-r" /><span className="vsc-dot-y" /><span className="vsc-dot-g" />
        </div>
        <div className="vsc-titlebar-menus">
          {["File","Edit","Selection","View","Go","Run","Terminal","Help"].map(m => (
            <span key={m} className="vsc-menu-item">{m}</span>
          ))}
        </div>
        <div className="vsc-titlebar-center">
          <FaReact style={{ color: "#61dafb", fontSize: 13 }} />
          <span>New-Portfolio — VSCode</span>
        </div>
        <button
          className="vsc-theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* ── BODY ── */}
      <div className="vsc-body">

        {/* ── ACTIVITY BAR ── */}
        <div className="vsc-activity">
          {[
            { id: "explorer",   icon: <VscFiles />,         label: "Explorer" },
            { id: "search",     icon: <VscSearch />,        label: "Search" },
            { id: "git",        icon: <VscSourceControl />, label: "Source Control" },
            { id: "debug",      icon: <VscDebugAlt />,      label: "Run & Debug" },
            { id: "extensions", icon: <VscExtensions />,    label: "Extensions" },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              className={`vsc-activity-btn ${activeActivity === id ? "vsc-activity-btn--active" : ""}`}
              onClick={() => { setActiveActivity(id); setSidebarOpen(true); }}
              title={label}
            >
              {icon}
            </button>
          ))}
          <div className="vsc-activity-spacer" />
          <button className="vsc-activity-btn" title="Profile">
            <FaUser />
          </button>
          <button className="vsc-activity-btn" title="Settings">
            <VscSettingsGear />
          </button>
        </div>

        {/* ── OVERLAY (mobile) ── */}
        {sidebarOpen && (
          <div className="vsc-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── SIDEBAR ── */}
        <div className={`vsc-sidebar ${sidebarOpen ? "vsc-sidebar--open" : ""}`}>
          <div className="vsc-sidebar-header">
            <span>EXPLORER</span>
            <button className="vsc-sidebar-dots" title="More actions">···</button>
          </div>

          <div className="vsc-sidebar-section">
            <button className="vsc-section-title">
              <FaChevronDown className="vsc-chevron" />
              NEW-PORTFOLIO
            </button>
            <div className="vsc-tree">
              {FOLDER_TREE.map((node, i) => (
                <TreeNode key={i} node={node} depth={0}
                  activeTab={activeTab} onFileClick={openFile}
                  openFolders={openFolders} toggleFolder={toggleFolder} />
              ))}
            </div>
          </div>

          <div className="vsc-sidebar-section vsc-sidebar-section--collapsed">
            <button className="vsc-section-title">
              <FaChevronRight className="vsc-chevron" /> OUTLINE
            </button>
          </div>
          <div className="vsc-sidebar-section vsc-sidebar-section--collapsed">
            <button className="vsc-section-title">
              <FaChevronRight className="vsc-chevron" /> TIMELINE
            </button>
          </div>
        </div>

        {/* ── EDITOR AREA ── */}
        <div className="vsc-editor-area">

          {/* MOBILE HAMBURGER */}
          <button
            className="vsc-hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* TABS */}
          <div className="vsc-tabs">
            {openTabs.map(tab => (
              <button
                key={tab}
                className={`vsc-tab ${activeTab === tab ? "vsc-tab--active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="vsc-icon vsc-icon--js" style={{ fontSize: 10 }}>JS</span>
                <span className="vsc-tab-name">{tab}</span>
                <span
                  className="vsc-tab-close"
                  onClick={e => closeTab(e, tab)}
                  role="button"
                  tabIndex={0}
                >×</span>
              </button>
            ))}
          </div>

          {/* BREADCRUMB */}
          <div className="vsc-breadcrumb">
            <span>src</span>
            <FaChevronRight className="vsc-bc-sep" />
            <span>component</span>
            <FaChevronRight className="vsc-bc-sep" />
            <span className="vsc-bc-active">{activeTab}</span>
          </div>

          {/* EDITOR BODY */}
          <div className="vsc-editor">
            <div className="vsc-line-numbers">
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="vsc-code-area">
              {content}
            </div>
            <div className="vsc-minimap">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className="vsc-minimap-line"
                  style={{ width: `${30 + Math.random() * 60}%`, opacity: 0.3 + Math.random() * 0.4 }} />
              ))}
            </div>
          </div>

          {/* STATUS BAR */}
          <div className="vsc-statusbar">
            <div className="vsc-status-left">
              <span className="vsc-status-branch">
                <FaCodeBranch style={{ fontSize: 11 }} /> main
              </span>
              <span><FaBug style={{ fontSize: 11 }} /> 0 &nbsp; ⚠ 0</span>
            </div>
            <div className="vsc-status-right">
              <span>{activeTab}</span>
              <span>JavaScript JSX</span>
              <span>UTF-8</span>
              <span>Ln 1, Col 1</span>
              <span>Spaces: 2</span>
              <span>{darkMode ? "Dark+" : "Light+"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}