import { useState } from "react";
import "./styles/Projects.css";

const projects = [
  {
    id: "01",
    name: "Womeyn",
    year: "2021",
    category: "Web App",
    desc: "A women empowerment platform connecting professionals, entrepreneurs, and mentors in a vibrant community ecosystem.",
    techs: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    id: "02",
    name: "Learning Management System (LMS)",
    year: "2021",
    category: "EdTech",
    desc: "A digital platform to create, manage, and deliver educational content and training programs. Enables tracking of learner progress, assessments, and certifications in an organized way.",
    techs: ["React", "Redux", "REST API"],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
  },
   {
    id: "03",
    name: "Raptor (SCB)",
    year: "2026",
    category: "Banking",
    desc: "Raptor is a cutting-edge banking platform designed to provide seamless financial services with enhanced security and user experience. It offers a range of features including real-time transaction monitoring, personalized financial insights, and robust fraud protection, making it the go-to solution for modern banking needs.",
   techs: ["React", "Lite", "Java", "GraphQL"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
   {
    id: "04",
    name: "EduConnect",
    year: "2024",
    category: "EdTech",
    desc: "A collaborative learning platform enabling students and teachers to share resources, host live sessions, and track milestones.",
    techs: ["Next.js", "WebRTC", "Tailwind"],
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
  {
    id: "05",
    name: "Startup Hire",
    year: "2022",
    category: "Job Portal",
    desc: "A smart hiring platform bridging startups and top talent with AI-powered job matching and applicant tracking.",
    techs: ["Next.js", "Redux","Node.js","MongoDB"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
    {
    id: "06",
    name: "Passion Ai Ari",
    year: "2023",
    category: "EdTech",
    desc: "Passion Ai Ari is an innovative student learning portal focused on personalized and interactive education. It leverages AI-driven tools to enhance understanding, track progress, and adapt to each learner's needs. The platform empowers students to learn at their own pace with engaging content and smart insights.",
    techs: ["React", "Python","Django"],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
  },
    {
    id: "07",
    name: "Kridas",
    year: "2023",
    category: "Sports",
    desc: "A sports community app for discovering tournaments, booking venues, and connecting with local athletes in your area.",
    techs: ["React Native", "Redux", "MongoDB"],
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  },
    {
    id: "08",
    name: "Crofit",
    year: "2024",
    category: "Fitness",
    desc: "React.js,Graphql,  JavaScript, HTML and Sass, Bootstrap, Responsive Web Design, Create the necessary components, such as headers, sections, and footers, using React components.",
    techs: ["React", "GraphQL", "JavaScript"],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    id: "09",
    name: "NEET/JEE Online Mock Test",
    year: "2022",
    category: "EdTech",
    desc: "Comprehensive mock test platform for competitive exam aspirants with real-time scoring and detailed performance analytics.",
    techs: ["React", "Firebase", "Chart.js"],
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
  {
    id: "10",
    name: "Trust (Pure Heart)",
    year: "2023",
    category: "Non-Profit",
    desc: "A donation and volunteer management platform for NGOs, enabling transparent fund tracking and community impact reports.",
    techs: ["React", "Sass", "Node.js"],
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  },
    {
    id: "11",
    name: "Campus Avenue",
    year: "2024",
    category: "Education",
    desc: "React.js, JavaScript, HTML and Sass, Bootstrap, Responsive Web Design, Create the necessary components, such as headers, sections, and footers, using React components.",
    techs: ["React", "JavaScript", "HTML", "Sass", "Bootstrap"],
    img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
  {
id: "12",
    name: "Etihad",
    year: "2025",
    category: "Travel",
    desc: "A travel platform offering seamless booking experiences for flights, hotels, and activities with personalized recommendations.",
    techs: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },
  {
    id: "13",
    name: "HealthPulse",
    year: "2024",
    category: "Health",
    desc: "A wellness tracking dashboard integrating wearables, diet logs, and mental health check-ins for holistic well-being.",
    techs: ["React", "D3.js", "Express"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleDesc = (id, e) => {
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="projects-section">
      {/* Header */}
      <h2 className="projects-title">
        Pro<em>j</em>ects
      </h2>
      <p className="projects-subtitle">Life Journey · Build · Ship · Repeat</p>

      {/* Timeline */}
      <div className="timeline">
        {projects.map((project, index) => {
          const isRight = index % 2 !== 0;
          const isExpanded = expanded[project.id];

          return (
            <div
              key={project.id}
              className={`timeline-row${isRight ? " timeline-row--right" : ""}`}
            >
              {/* Year chip */}
              <span className="timeline-year">{project.year}</span>

              {/* Dot */}
              <span className="timeline-dot" />

              {/* Card */}
              <div className="timeline-card-slot p-1">
                <div className="project-card">
                  {/* Image */}
                  <div className="card-image-wrap">
                    <img src={project.img} alt={project.name} />
                    <span className="card-number">{project.id}</span>
                    <span className="card-tag">{project.category}</span>
                  </div>

                  {/* Body */}
                  <div className="card-body p-2">
                    <p className="card-name">{project.name}</p>
                    <p className={`card-desc${isExpanded ? " expanded" : ""}`}>
                      {project.desc}
                    </p>
                    <button
                      className="card-toggle"
                      onClick={(e) => toggleDesc(project.id, e)}
                    >
                      {isExpanded ? "Show less ▲" : "Read more ▼"}
                    </button>
                    <div className="card-techs  mb-2">
                      {project.techs.map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}