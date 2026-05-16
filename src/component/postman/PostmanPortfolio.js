
import { useState } from "react";
import {
  FaPlus, FaEllipsisH, FaChevronRight, FaChevronDown,
  FaFolder, FaFolderOpen, FaMoon, FaSun, FaBars, FaTimes,
  FaHistory, FaCloud, FaCog, FaUser, FaSearch
} from "react-icons/fa";
import "./PostmanPortfolio.css";

import Home from "../home/Home";
import Aboutus from "../aboutus/Aboutus";
import Projects from "../projects/Projects";
import WorkingTools from "../workingtools/WorkingTools";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Testimonials from "../testimonials/Testimonials";

const REQUESTS = {
  "GET_Home":       { method: "GET",    label: "Home",       component: <Home /> },
  "GET_About":      { method: "GET",    label: "About",      component: <Aboutus /> },
  "GET_Experience": { method: "GET",    label: "Experience", component: <Experience /> },
  "GET_Skills":     { method: "GET",    label: "Skills",     component: <WorkingTools /> },
  "GET_Testimonials": { method: "GET",  label: "Testimonials", component: <Testimonials /> },
  "POST_Projects":  { method: "POST",   label: "Projects",   component: <Projects /> },
  "POST_Contact":   { method: "POST",   label: "Contact",    component: <Contact /> },
};

const HISTORY = [
  { date: "Today", items: ["GET_Home", "GET_About"] },
  { date: "Yesterday", items: ["GET_Experience", "POST_Projects"] },
  { date: "Last Week", items: ["GET_Skills","GET_Testimonials", "POST_Contact"] },
];

const METHOD_COLORS = {
  GET:    "#61affe",
  POST:   "#49cc90",
  PUT:    "#fca130",
  DELETE: "#f93e3e",
  PATCH:  "#50e3c2",
};

function MethodBadge({ method }) {
  return (
    <span
      className="pm-method-badge"
      style={{ backgroundColor: METHOD_COLORS[method] || "#888" }}
    >
      {method}
    </span>
  );
}

export default function PostmanPortfolio() {
  const [activeTab, setActiveTab] = useState("GET_Home");
  const [openTabs, setOpenTabs] = useState(["GET_Home"]);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedDates, setExpandedDates] = useState(new Set(["Today", "Yesterday", "Last Week"]));

  const openRequest = (id) => {
    if (!REQUESTS[id]) return;
    if (!openTabs.includes(id)) setOpenTabs((prev) => [...prev, id]);
    setActiveTab(id);
    setSidebarOpen(false);
  };

  const closeTab = (e, id) => {
    e.stopPropagation();
    const next = openTabs.filter((t) => t !== id);
    setOpenTabs(next);
    if (activeTab === id) setActiveTab(next[next.length - 1] || "GET_Home");
  };

  const toggleDate = (date) => {
    setExpandedDates((prev) => {
      const s = new Set(prev);
      s.has(date) ? s.delete(date) : s.add(date);
      return s;
    });
  };

  const currentRequest = REQUESTS[activeTab];

  return (
    <div className={`pm-root ${darkMode ? "pm-dark" : "pm-light"}`}>

      {/* ── TOP NAV ── */}
      <nav className="pm-topnav">
        <div className="pm-topnav-left">
          <button
            className="pm-hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="pm-logo">
            <span className="pm-logo-icon">🚀</span>
            <span className="pm-logo-text">Postfolio</span>
          </div>
          <div className="pm-nav-links">
            <span>Home</span>
            <span>Workspaces</span>
            <span>Explore</span>
          </div>
        </div>
        <div className="pm-topnav-center">
          <div className="pm-search">
            <FaSearch className="pm-search-icon" />
            <input type="text" placeholder="Search Portfolio" />
          </div>
        </div>
        <div className="pm-topnav-right">
          <button className="pm-icon-btn" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="pm-icon-btn"><FaCog /></button>
          <button className="pm-btn-signin">Sign In</button>
          <button className="pm-btn-create">Create Account</button>
        </div>
      </nav>

      {/* ── BODY ── */}
      <div className="pm-body">

        {/* ── OVERLAY (mobile) ── */}
        {sidebarOpen && (
          <div className="pm-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── SIDEBAR ── */}
        <aside className={`pm-sidebar ${sidebarOpen ? "pm-sidebar--open" : ""}`}>
          <div className="pm-sidebar-header">
            <span className="pm-sidebar-title">
              <FaHistory style={{ marginRight: 8 }} /> History
            </span>
            <div className="pm-sidebar-actions">
              <button className="pm-btn-new">New</button>
              <button className="pm-btn-import">Import</button>
            </div>
          </div>

          <div className="pm-sidebar-search">
            <input type="text" placeholder="Filter" />
            <FaEllipsisH className="pm-filter-dots" />
          </div>

          <div className="pm-history-list">
            {HISTORY.map((group) => (
              <div key={group.date} className="pm-history-group">
                <button
                  className="pm-history-date"
                  onClick={() => toggleDate(group.date)}
                >
                  {expandedDates.has(group.date) ? (
                    <FaChevronDown className="pm-chevron" />
                  ) : (
                    <FaChevronRight className="pm-chevron" />
                  )}
                  {group.date}
                </button>
                {expandedDates.has(group.date) && (
                  <div className="pm-history-items">
                    {group.items.map((id) => {
                      const req = REQUESTS[id];
                      if (!req) return null;
                      return (
                        <button
                          key={id}
                          className={`pm-history-item ${activeTab === id ? "pm-history-item--active" : ""}`}
                          onClick={() => openRequest(id)}
                        >
                          <MethodBadge method={req.method} />
                          <span className="pm-history-label">{req.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pm-sidebar-footer">
            <div className="pm-collection-prompt">
              <div className="pm-collection-icon">📁</div>
              <strong>Create collections in Postfolio</strong>
              <p>Use collections to save your requests and share them with others.</p>
              <button className="pm-btn-collection">Create a Collection</button>
            </div>
          </div>

          <div className="pm-sidebar-status">
            <span>📟 Console</span>
            <span><FaCloud /> Not connected to account</span>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="pm-main">

          {/* TABS */}
          <div className="pm-tabs-bar">
            <div className="pm-tabs">
              {openTabs.map((id) => {
                const req = REQUESTS[id];
                if (!req) return null;
                return (
                  <button
                    key={id}
                    className={`pm-tab ${activeTab === id ? "pm-tab--active" : ""}`}
                    onClick={() => setActiveTab(id)}
                  >
                    <MethodBadge method={req.method} />
                    <span className="pm-tab-label">{req.label}</span>
                    <span
                      className="pm-tab-close"
                      onClick={(e) => closeTab(e, id)}
                      role="button"
                      tabIndex={0}
                    >×</span>
                  </button>
                );
              })}
              <button className="pm-tab-add" aria-label="New tab">
                <FaPlus />
              </button>
            </div>
            <FaEllipsisH className="pm-tabs-more" />
          </div>

          {/* REQUEST HEADER */}
          <div className="pm-request-header">
            <div className="pm-request-title">
              <span className="pm-request-icon">📄</span>
              <span>{currentRequest?.label || "Untitled"} Request</span>
            </div>
            <div className="pm-request-actions">
              <button className="pm-btn-save">💾 Save</button>
              <button className="pm-btn-code">{"</>"}</button>
            </div>
          </div>

          {/* URL BAR */}
          <div className="pm-url-bar">
            <div className="pm-method-select">
              <MethodBadge method={currentRequest?.method || "GET"} />
              <FaChevronDown className="pm-method-chevron" />
            </div>
          <input
  type="text"
  className="pm-url-input"
  value={`[portfolio.dev](https://portfolio.dev/api/${currentRequest?.label?.toLowerCase() || ""})`}
  readOnly
/>
            <button className="pm-btn-send">
              Send
              <FaChevronDown style={{ marginLeft: 6, fontSize: 10 }} />
            </button>
          </div>

          {/* REQUEST OPTIONS */}
          <div className="pm-request-options">
            <div className="pm-options-tabs">
              <button className="pm-option-tab pm-option-tab--active">Params</button>
              <button className="pm-option-tab">Authorization</button>
              <button className="pm-option-tab">Headers <span className="pm-badge">6</span></button>
              <button className="pm-option-tab">Body</button>
              <button className="pm-option-tab">Pre-request Script</button>
              <button className="pm-option-tab">Tests</button>
              <button className="pm-option-tab">Settings</button>
            </div>
            <button className="pm-cookies-btn">🍪 Cookies</button>
          </div>

          {/* PARAMS TABLE */}
          <div className="pm-params-section">
            <div className="pm-params-header">
              <span>Query Params</span>
              <button className="pm-bulk-edit">Bulk Edit</button>
            </div>
            <table className="pm-params-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><input type="text" placeholder="Key" /></td>
                  <td><input type="text" placeholder="Value" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RESPONSE SECTION */}
          <div className="pm-response-section">
            <div className="pm-response-header">
              <span>Response</span>
              <FaChevronDown />
            </div>
            <div className="pm-response-body">
              <div className="pm-response-content">
                {currentRequest?.component}
              </div>
              <div className="pm-response-placeholder">
                <div className="pm-astronaut">
                  <span className="pm-astronaut-icon">👨‍🚀</span>
                  <span className="pm-flag">🚩</span>
                </div>
                <p>Enter the URL and click Send to get a response</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
