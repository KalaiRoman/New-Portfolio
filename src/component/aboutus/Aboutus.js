import { useState } from "react";

const personalInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Name",
    value: "Kalaisurya",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.35 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.91 5.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 8778377119",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "kalaimca685@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Date of Birth",
    value: "12 June, 1998",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: "Education",
    value: "MCA — Computer Science",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Chennai, Tamil Nadu",
  },
];

const qualifications = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Karpagam Academy Of Higher Education, Coimbatore",
    year: "2018 – 2020",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Sri Vidya Mandir Arts and Science College",
    year: "2015 – 2018",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Government Boys Higher Secondary School, Krishnagiri",
    year: "2013 – 2015",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    school: "Government Higher Secondary School, Krishnagiri",
    year: "2013",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js","NextJs","HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap","Context Api","Redux","Redux Toolkit","RESTful APIs","TypeScript","Sass","UI/UX","React Bootstrap","Unit Testing","Responsive UI Designs","JSON"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "VS Code", "Postman","AWS","S3","Cloudinary","Netlify","Vercel","EC2"],
  },
];

const languages = ["English", "Tamil", "Telugu"];
const tabs = ["Personal Info", "Qualifications", "Skills"];

export default function Aboutus() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={styles.page} id="aboutus">
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

        {/* Tabs */}
        <div style={styles.tabRow}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                ...styles.tab,
                ...(activeTab === i ? styles.tabActive : styles.tabInactive),
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel: Personal Info */}
        {activeTab === 0 && (
          <div style={styles.panel}>
            <div style={styles.bio}>
             I’m a passionate Full Stack Developer with 5+ years of experience building scalable and high-performance web applications across multiple domains. I specialize in React.js, Next.js, Node.js, and modern JavaScript technologies to create responsive, user-friendly, and production-ready applications. I have strong expertise in developing reusable UI components, integrating REST APIs, and optimizing application performance for seamless user experiences. My experience includes working on enterprise-level products, secure authentication systems, payment integrations, and real-time application features. I focus on writing clean, maintainable, and efficient code while following modern development best practices and responsive design principles. I enjoy solving complex technical challenges, collaborating with teams, and transforming business requirements into impactful digital solutions. With a strong passion for continuous learning and innovation, I consistently deliver reliable, scalable, and visually polished applications that drive business growth and user satisfaction.
            </div>

            <div style={styles.infoGrid}>
              {personalInfo.map((item) => (
                <div key={item.label} style={styles.infoCard}>
                  <div style={styles.infoIcon}>{item.icon}</div>
                  <div>
                    <div style={styles.infoLabel}>{item.label}</div>
                    <div style={styles.infoValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.langSection}>
              <p style={styles.langTitle}>Languages Spoken</p>
              <div style={styles.langPills}>
                {languages.map((lang) => (
                  <span key={lang} style={styles.langPill}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Panel: Qualifications */}
        {activeTab === 1 && (
          <div style={styles.panel}>
            {qualifications.map((q, i) => (
              <div key={i} style={styles.qualCard}>
                <div style={{ display: "flex", gap: "14px", flex: 1, width: "100%" }}>
                  <div style={styles.qualDot} />
                  <div style={{ flex: 1, width: "100%" }}>
                    <div style={styles.qualDegree}>{q.degree}</div>
                    <div style={styles.qualSchool}>{q.school}</div>
                    <div style={styles.qualYear}>{q.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Panel: Skills */}
        {activeTab === 2 && (
          <div style={styles.panel}>
            {skillGroups.map((group) => (
              <div key={group.title} style={styles.skillGroup}>
                <p style={styles.skillGroupTitle}>{group.title}</p>
                <div style={styles.skillTags}>
                  {group.skills.map((skill) => (
                    <span key={skill} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
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
    width:"100%"
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "2rem 1.5rem",
    boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
    height:"100%"
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: "clamp(22px, 5vw, 30px)",
    fontWeight: 600,
    color: "#111827",
    margin: "0 0 6px",
  },
  titleAccent: {
    color: "#16a34a",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
  },
  tabRow: {
    display: "flex",
    gap: "8px",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    padding: "5px",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
  },
  tab: {
    flex: "1 1 auto",
    minWidth: "80px",
    padding: "9px 12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  tabActive: {
    backgroundColor: "#16a34a",
    color: "#ffffff",
  },
  tabInactive: {
    backgroundColor: "transparent",
    color: "#6b7280",
  },
  panel: {
    animation: "fadeIn 0.2s ease",
  },
  bio: {
    fontSize: "14px",
    color: "#374151",
    lineHeight: 1.75,
    padding: "14px 16px",
    backgroundColor: "#f0fdf4",
    borderLeft: "3px solid #16a34a",
    borderRadius: "0 10px 10px 0",
    marginBottom: "1.25rem",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "12px",
    marginBottom: "1.25rem",
    flexwrap: "wrap",
  },
  infoCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
  },
  infoIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    backgroundColor: "#dcfce7",
    color: "#16a34a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: "11px",
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "2px",
  },
  infoValue: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#111827",
  },
  langSection: {
    marginTop: "0.5rem",
  },
  langTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "10px",
  },
  langPills: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  langPill: {
    padding: "7px 20px",
    backgroundColor: "#f0fdf4",
    border: "1px solid #86efac",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: 500,
    color: "#166534",
  },
  qualCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "14px",
    padding: "16px",
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    marginBottom: "10px",
    flexWrap: "wrap",
    "@media (max-width: 640px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  qualDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#16a34a",
    marginTop: "5px",
    flexShrink: 0,
  },
  qualDegree: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
  },
  qualSchool: {
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "2px",
  },
  qualYear: {
    fontSize: "12px",
    color: "#16a34a",
    fontWeight: "bold",
    backgroundColor: "#dcfce7",
    padding:"6px 16px",
    borderRadius:"20px",
    whiteSpace: "nowrap",
    marginTop: "8px",
    display: "inline-block",
  },
  skillGroup: {
    marginBottom: "1.25rem",
  },
  skillGroupTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "10px",
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
  },
  skillTag: {
    padding: "6px 14px",
    backgroundColor: "#f0fdf4",
    border: "1px solid #86efac",
    borderRadius: "20px",
    fontSize: "13px",
    color: "#166534",
    fontWeight: 500,
  },
};