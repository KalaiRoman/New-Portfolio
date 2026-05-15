import "./Experience.css";

const stats = [
  { num: "5+", label: "Years Experience" },
  { num: "3", label: "Companies" },
  { num: "20+", label: "Projects Delivered" },
  { num: "10+", label: "Tech Stack" },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Wipro Technologies",
    duration: "June 2025 – Present",
    location: "Bangalore, Karnataka",
    period: "Present",
    current: true,

    points: [
      "Developing enterprise-grade web applications using React.js and Next.js with scalable and reusable architecture",
      "Collaborating with cross-functional teams including backend developers, QA engineers, and UI/UX designers for successful project delivery",
      "Building reusable UI components and design systems to improve development efficiency and consistency across applications",
      "Integrating REST APIs and managing asynchronous data flow with optimized state management techniques",
      "Enhancing application performance through lazy loading, code splitting, memoization, and optimized rendering",
      "Implementing responsive and mobile-first interfaces ensuring compatibility across all modern devices and browsers",
      "Handling bug fixing, debugging, and production issue resolution to maintain application stability",
      "Participating in peer code reviews and following clean coding standards for maintainable development",
      "Working with Git workflows, version control, and agile sprint-based development processes",
      "Contributing to feature enhancements, UI improvements, and overall user experience optimization",
    ],

    tags: [
      "React.js",
      "Next.js",
      "Lite",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "REST APIs",
      "Responsive Design",
      "Git",
      "GitHub",
      "Agile",
      "Performance Optimization",
      "Reusable Components",
      "API Integration",
      "UI/UX",
      "Cross Browser Compatibility",
    ],
  },

  {
    title: "Senior Front End Developer",
    company: "CDP360 Technologies",
    duration: "2022 – 2025",
    location: "Chennai, Tamil Nadu",
    period: "2.4 yrs",
    current: false,

    points: [
      "Developed scalable and high-performance frontend applications using React.js and Next.js",
      "Built responsive and pixel-perfect UI interfaces ensuring seamless user experience across devices",
      "Integrated RESTful APIs and managed frontend-backend communication efficiently",
      "Implemented authentication systems including Google OAuth and third-party integrations",
      "Worked on payment gateway integrations such as Stripe, Razorpay, and PayPal",
      "Optimized application performance through efficient component rendering and state management",
      "Created reusable components and modular architecture to improve maintainability and scalability",
      "Collaborated closely with design and backend teams to deliver production-ready applications",
      "Handled production bug fixing, troubleshooting, and deployment support for multiple live projects",
      "Maintained coding standards, documentation, and version control using Git and GitHub",
    ],

    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Redux",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "SASS",
      "REST APIs",
      "Stripe",
      "PayPal",
      "Razorpay",
      "OAuth",
      "MongoDB",
      "Git",
      "GitHub",
      "Responsive Design",
      "API Integration",
      "Performance Optimization",
      "Cross Browser Compatibility",
    ],
  },

  {
    title: "Front End Developer",
    company: "Eternosoft Technology",
    duration: "2021 – 2022",
    location: "Chennai, Tamil Nadu",
    period: "1.6 yrs",
    current: false,

    points: [
      "Designed and developed responsive user interfaces using React.js and JavaScript",
      "Integrated RESTful APIs for dynamic data handling and seamless user interaction",
      "Built reusable frontend components to improve code reusability and development speed",
      "Implemented responsive layouts using Bootstrap and custom CSS techniques",
      "Worked on debugging and resolving frontend issues for improved application stability",
      "Collaborated with backend developers to ensure smooth API integration and functionality",
      "Maintained clean and structured code following frontend development best practices",
      "Enhanced application UI performance and optimized page loading speed",
      "Participated in testing, feature enhancements, and deployment activities",
      "Supported ongoing maintenance and updates for existing web applications",
    ],

    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "SASS",
      "Redux",
      "REST APIs",
      "Responsive Design",
      "Reusable Components",
      "Git",
      "GitHub",
      "UI Development",
      "Cross Browser Compatibility",
      "API Integration",
    ],
  },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={13} height={13}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={13} height={13}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={13} height={13}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 3H8L2 7h20z" />
  </svg>
);

export default function Experience() {
  return (
    <div className="we-page" id="experience">
      <div className="we-container">
        {/* Header */}
        <div className="we-header">
          <h2 className="we-title">
            Work <span className="we-accent">Experience</span>
          </h2>
          <p className="we-subtitle">My professional journey and contributions</p>
        </div>

        {/* Stats */}
        <div class="sc-grid">

  <div class="sc-card">
    <div class="sc-bar" style={{ background: "#16a34a" }}></div>

    <div class="sc-icon-wrap green">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    </div>

    <div class="sc-bottom">
      <p class="sc-num">5+</p>
      <p class="sc-label">Years experience</p>

      <span class="sc-trend up">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        Growing
      </span>
    </div>
  </div>

  <div class="sc-card">
    <div class="sc-bar" style={{ background: "#16a34a" }}></div>

    <div class="sc-icon-wrap green">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 3H8L2 7h20z"/>
      </svg>
    </div>

    <div class="sc-bottom">
      <p class="sc-num">3</p>
      <p class="sc-label">Companies</p>

      <span class="sc-trend neu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11">
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Full-time
      </span>
    </div>
  </div>

  <div class="sc-card">
    <div class="sc-bar" style={{ background: "#16a34a" }}></div>

    <div class="sc-icon-wrap green">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    </div>

    <div class="sc-bottom">
      <p class="sc-num">20+</p>
      <p class="sc-label">Projects delivered</p>

      <span class="sc-trend up">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        On time
      </span>
    </div>
  </div>

  <div class="sc-card">
    <div class="sc-bar" style={{ background: "#16a34a" }}></div>

    <div class="sc-icon-wrap green">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    </div>

    <div class="sc-bottom">
      <p class="sc-num">10+</p>
      <p class="sc-label">Tech stack</p>

      <span class="sc-trend up">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        Learning
      </span>
    </div>
  </div>

</div>

        {/* Timeline */}
        <div className="we-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="we-card">
              <div className="we-card-head">
                <div>
                  <p className="we-job-title">{exp.title}</p>
                  <div className="we-company">
                    <BriefcaseIcon />
                    {exp.company}
                  </div>
                </div>
                <span className={`we-badge ${exp.current ? "current" : "prev"}`}>
                  {exp.current ? "Current" : "Previous"}
                </span>
              </div>

              <div className="we-meta">
                <span className="we-meta-item">
                  <CalendarIcon /> {exp.duration}
                </span>
                <span className="we-meta-item">
                  <LocationIcon /> {exp.location}
                </span>
                <span className="we-meta-item">
                  <ClockIcon /> {exp.period}
                </span>
              </div>

              <ul className="we-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

              <div className="we-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="we-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}