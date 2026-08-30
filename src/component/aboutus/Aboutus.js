const personalInfo = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={16}
        height={16}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.35 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.91 5.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 8778377119"
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={16}
        height={16}
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "kalaimca685@gmail.com"
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={16}
        height={16}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Date of Birth",
    value: "12 June, 1998"
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={16}
        height={16}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Bangalore, Karnataka"
  }
];

const qualifications = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Karpagam Academy Of Higher Education, Coimbatore",
    year: "2018 – 2020"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Sri Vidya Mandir Arts and Science College",
    year: "2015 – 2018"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Government Boys Higher Secondary School, Krishnagiri",
    year: "2013 – 2015"
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Government Higher Secondary School, Krishnagiri",
    year: "2013"
  }
];

const skillGroups = [
  {
    title: "Frontend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={18}
        height={18}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      "React.js",
      "NextJs",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "Context Api",
      "Redux",
      "Redux Toolkit",
      "RESTful APIs",
      "TypeScript",
      "Sass",
      "UI/UX",
      "React Bootstrap",
      "Unit Testing",
      "Responsive UI Designs",
      "JSON"
    ]
  },
  {
    title: "Backend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={18}
        height={18}
      >
        <rect x="2" y="3" width="20" height="6" rx="1" />
        <rect x="2" y="15" width="20" height="6" rx="1" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ["Node.js", "REST APIs", "MongoDB"]
  },
  {
    title: "Tools & DevOps",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        width={18}
        height={18}
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "AWS",
      "S3",
      "Cloudinary",
      "Netlify",
      "Vercel",
      "EC2"
    ]
  }
];

const languages = ["English", "Tamil", "Telugu"];

export default function Aboutus() {
  return (
    <div style={styles.page} id="aboutus">
      <style>{`
        @media (max-width: 768px) {
          .aboutus-layout {
            grid-template-columns: 1fr !important;
          }
          .aboutus-sidebar {
            position: static !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            About <span style={styles.titleAccent}>Me</span>
          </h2>
          <p style={styles.subtitle}>
            Get to know me — my background, education, and skills
          </p>
        </div>

        {/* Layout: sidebar + content */}
        <div style={styles.layout} className="aboutus-layout">
          {/* Sidebar: profile card */}
          <aside style={styles.sidebar} className="aboutus-sidebar">
            <div style={styles.avatar}>KS</div>
            <h3 style={styles.name}>Kalaisurya</h3>
            <p style={styles.role}>Full Stack Developer</p>

            <div style={styles.contactList}>
              {personalInfo.map(item =>
                <div key={item.label} style={styles.contactRow}>
                  <span style={styles.contactIcon}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={styles.contactLabel}>
                      {item.label}
                    </div>
                    <div style={styles.contactValue}>
                      {item.value}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={styles.divider} />

            <p style={styles.langTitle}>Languages</p>
            <div style={styles.langPills}>
              {languages.map(lang =>
                <span key={lang} style={styles.langPill}>
                  {lang}
                </span>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div style={styles.main}>
            {/* Bio */}
            <section style={styles.section}>
              <div style={styles.bio}>
                I’m a passionate Full Stack Developer with 5+ years of
                experience building scalable and high-performance web
                applications across multiple domains. I specialize in React.js,
                Next.js, Node.js, and modern JavaScript technologies to create
                responsive, user-friendly, and production-ready applications. I
                have strong expertise in developing reusable UI components,
                integrating REST APIs, and optimizing application performance
                for seamless user experiences. My experience includes working on
                enterprise-level products, secure authentication systems,
                payment integrations, and real-time application features. I
                focus on writing clean, maintainable, and efficient code while
                following modern development best practices and responsive
                design principles.
              </div>
            </section>

            {/* Qualifications */}
            <section style={styles.section}>
              <h3 style={styles.sectionTitle}>
                <span style={styles.sectionDot} />
                Qualifications
              </h3>
              <div style={styles.timeline}>
                <div style={styles.timelineLine} />
                {qualifications.map((q, i) =>
                  <div key={i} style={styles.timelineItem}>
                    <div style={styles.timelineMarkerWrap}>
                      <div style={styles.timelineMarker}>
                        <div style={styles.timelineMarkerDot} />
                      </div>
                    </div>
                    <div style={styles.timelineContent}>
                      <span style={styles.timelineYear}>
                        {q.year}
                      </span>
                      <div style={styles.timelineDegree}>
                        {q.degree}
                      </div>
                      <div style={styles.timelineSchool}>
                        {q.school}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Skills */}
            <section style={styles.section}>
              <h3 style={styles.sectionTitle}>
                <span style={styles.sectionDot} />
                Skills
              </h3>
              <div style={styles.skillGrid}>
                {skillGroups.map(group =>
                  <div key={group.title} style={styles.skillCard}>
                    <div style={styles.skillCardHeader}>
                      <div style={styles.skillCardIcon}>
                        {group.icon}
                      </div>
                      <div>
                        <p style={styles.skillCardTitle}>
                          {group.title}
                        </p>
                        <p style={styles.skillCardCount}>
                          {group.skills.length} skills
                        </p>
                      </div>
                    </div>
                    <div style={styles.skillTags}>
                      {group.skills.map(skill =>
                        <span key={skill} style={styles.skillTag}>
                          {skill}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "2rem 1rem",
    width: "100%"
  },
  container: {
    width: "100%",
    maxWidth: "1150px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "2rem 1.5rem",
    boxShadow: "0 2px 24px rgba(0,0,0,0.07)"
  },
  header: {
    textAlign: "center",
    marginBottom: "1.75rem"
  },
  title: {
    fontSize: "clamp(22px, 5vw, 30px)",
    fontWeight: 600,
    color: "#111827",
    margin: "0 0 6px"
  },
  titleAccent: {
    color: "#16a34a"
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0
  },

  /* --- Layout --- */
  layout: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "24px",
    alignItems: "start"
  },

  /* --- Sidebar --- */
  sidebar: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "22px 18px",
    textAlign: "center",
    position: "sticky",
    top: "20px"
  },
  avatar: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: "#16a34a",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px"
  },
  name: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#111827",
    margin: "0 0 2px"
  },
  role: {
    fontSize: "12px",
    color: "#16a34a",
    fontWeight: 500,
    margin: "0 0 18px"
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    textAlign: "left"
  },
  contactRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px"
  },
  contactIcon: {
    color: "#16a34a",
    marginTop: "2px",
    flexShrink: 0
  },
  contactLabel: {
    fontSize: "10px",
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "1px"
  },
  contactValue: {
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#111827",
    wordBreak: "break-word"
  },
  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "18px 0 14px"
  },
  langTitle: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "10px",
    textAlign: "left"
  },
  langPills: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  langPill: {
    padding: "5px 14px",
    backgroundColor: "#f0fdf4",
    border: "1px solid #86efac",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 500,
    color: "#166534"
  },

  /* --- Main content --- */
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    minWidth: 0
  },
  section: {},
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    margin: "0 0 14px"
  },
  sectionDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#16a34a",
    flexShrink: 0
  },
  bio: {
    fontSize: "14px",
    color: "#374151",
    lineHeight: 1.75,
    padding: "14px 16px",
    backgroundColor: "#f0fdf4",
    borderLeft: "3px solid #16a34a",
    borderRadius: "0 10px 10px 0"
  },

  /* --- Qualifications timeline --- */
  timeline: {
    position: "relative",
    paddingLeft: "6px"
  },
  timelineLine: {
    position: "absolute",
    left: "23px",
    top: "6px",
    bottom: "6px",
    width: "2px",
    backgroundColor: "#dcfce7"
  },
  timelineItem: {
    position: "relative",
    display: "flex",
    gap: "18px",
    paddingBottom: "22px"
  },
  timelineMarkerWrap: {
    position: "relative",
    zIndex: 1,
    flexShrink: 0,
    width: "36px",
    display: "flex",
    justifyContent: "center"
  },
  timelineMarker: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    border: "2px solid #16a34a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  timelineMarkerDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#16a34a"
  },
  timelineContent: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "14px 16px",
    marginTop: "-2px"
  },
  timelineYear: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    color: "#16a34a",
    backgroundColor: "#dcfce7",
    padding: "3px 12px",
    borderRadius: "20px",
    marginBottom: "8px"
  },
  timelineDegree: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827"
  },
  timelineSchool: {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "2px"
  },

  /* --- Skills --- */
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "14px"
  },
  skillCard: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "16px"
  },
  skillCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "14px",
    paddingBottom: "14px",
    borderBottom: "1px solid #e5e7eb"
  },
  skillCardIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    backgroundColor: "#dcfce7",
    color: "#16a34a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  skillCardTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    margin: 0
  },
  skillCardCount: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "2px 0 0"
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  },
  skillTag: {
    padding: "5px 12px",
    backgroundColor: "#ffffff",
    border: "1px solid #86efac",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#166534",
    fontWeight: 500
  }
};
