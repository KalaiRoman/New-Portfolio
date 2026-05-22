import { useState } from "react";
import "./styles/Projects.css";

const projects = [
  {
    id: "01",
    name: "Womeyn",
    year: "2021",
    category: "Community Platform",
    desc:
      "Womeyn is a women empowerment and networking platform designed to connect professionals, entrepreneurs, mentors, and communities in a secure digital ecosystem. The platform enables users to build professional connections, participate in discussions, attend events, and access mentorship opportunities. Developed scalable frontend modules with responsive UI architecture and seamless API integrations to ensure smooth user engagement and accessibility across devices.",
    techs: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux",
      "REST APIs",
      "Bootstrap",
      "Responsive Design",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },

  {
    id: "02",
    name: "Learning Management System (LMS)",
    year: "2021",
    category: "EdTech",
    desc:
      "A modern Learning Management System built to simplify online education, training, and student performance tracking. The platform supports course management, video learning, assignments, mock tests, certifications, and real-time progress monitoring. Implemented reusable React components, optimized API handling, and responsive dashboards to enhance learning experiences for both students and administrators.",
    techs: [
      "React.js",
      "Redux",
      "REST APIs",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
      "Authentication",
      "Dashboard UI",
    ],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
  },

  {
    id: "03",
    name: "Raptor (SCB)",
    year: "2025",
    category: "Banking",
    desc:
      "Raptor is an enterprise-level banking application developed for secure and seamless financial operations. The platform provides real-time transaction management, account monitoring, personalized financial insights, and enhanced user security features. Worked on scalable frontend architecture, API integration, responsive banking dashboards, and optimized UI performance for smooth customer experiences.",
    techs: [
      "React.js",
      "LIT",
      "Java",
      "GraphQL",
      "Redux",
      "REST APIs",
      "JavaScript",
      "Responsive Design",
      "Banking Dashboard",
      "Performance Optimization",
      "Git",
    ],
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80",
  },

  {
    id: "04",
    name: "EduConnect",
    year: "2024",
    category: "EdTech",
    desc:
      "EduConnect is a collaborative online education platform that enables students and teachers to share study materials, conduct live sessions, manage assignments, and track academic progress. Built responsive interfaces and integrated real-time communication features to create an interactive digital learning environment.",
    techs: [
      "Next.js",
      "React.js",
      "WebRTC",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "JavaScript",
      "Authentication",
      "Responsive UI",
      "Live Streaming",
    ],
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },

  {
    id: "05",
    name: "Startup Hire",
    year: "2022",
    category: "Job Portal",
    desc:
      "Startup Hire is a smart recruitment platform connecting startups with skilled professionals using intelligent job matching and applicant management systems. Developed scalable UI components, integrated secure authentication, and optimized application workflows for job posting, resume management, and hiring processes.",
    techs: [
      "Next.js",
      "React.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "JavaScript",
      "Responsive Design",
      "Dashboard Development",
    ],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },

  {
    id: "06",
    name: "Passion Ai Ari",
    year: "2023",
    category: "AI Education",
    desc:
      "Passion Ai Ari is an AI-powered student learning platform focused on delivering personalized educational experiences. The application provides adaptive learning modules, progress tracking, smart assessments, and interactive educational tools. Contributed to frontend development, API integration, and performance optimization for a seamless learning experience.",
    techs: [
      "React.js",
      "Python",
      "Django",
      "REST APIs",
      "JavaScript",
      "Responsive Design",
      "Authentication",
      "Dashboard UI",
      "AI Integration",
    ],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
  },

  {
    id: "07",
    name: "Kridas",
    year: "2023",
    category: "Sports",
    desc:
      "Kridas is a sports community application designed to connect athletes, sports organizers, and venue providers. Users can discover tournaments, book sports venues, participate in local events, and interact with sports communities. Built reusable components and responsive mobile-friendly interfaces for enhanced usability.",
    techs: [
      "React.js",
      "Redux",
      "MongoDB",
      "Node.js",
      "REST APIs",
      "JavaScript",
      "Responsive Design",
      "Authentication",
      "Mobile App Development",
    ],
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  },

  {
    id: "08",
    name: "Crofit",
    year: "2024",
    category: "Fitness",
    desc:
      "Crofit is a fitness and wellness platform focused on workout tracking, fitness goals, and healthy lifestyle management. Developed responsive user interfaces, reusable React components, and optimized frontend architecture for smooth user interaction and performance.",
    techs: [
      "React.js",
      "GraphQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "SASS",
      "Responsive Design",
      "REST APIs",
      "Performance Optimization",
    ],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },

  {
    id: "09",
    name: "NEET/JEE Online Mock Test",
    year: "2022",
    category: "EdTech",
    desc:
      "An online examination and mock test platform designed for NEET and JEE aspirants. The platform provides timed tests, real-time scoring, performance analytics, and detailed subject-wise reports. Developed dynamic dashboards and optimized frontend performance for smooth exam experiences.",
    techs: [
      "React.js",
      "Firebase",
      "Chart.js",
      "JavaScript",
      "REST APIs",
      "Responsive Design",
      "Authentication",
      "Dashboard Development",
      "Performance Analytics",
    ],
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },

  {
    id: "10",
    name: "Trust (Pure Heart)",
    year: "2023",
    category: "Non-Profit",
    desc:
      "Trust (Pure Heart) is a donation and volunteer management platform developed for NGOs and social organizations. The platform enables transparent donation tracking, volunteer registration, campaign management, and impact reporting to improve community engagement and trust.",
    techs: [
      "React.js",
      "Node.js",
      "MongoDB",
      "SASS",
      "REST APIs",
      "Responsive Design",
      "JavaScript",
      "Authentication",
      "Dashboard UI",
    ],
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  },

  {
    id: "11",
    name: "Campus Avenue",
    year: "2024",
    category: "Education",
    desc:
      "Campus Avenue is a modern educational portal designed for managing academic resources, student communication, and learning activities. Built responsive user interfaces and reusable components for a smooth educational experience across web platforms.",
    techs: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "Responsive Design",
      "REST APIs",
      "Reusable Components",
      "Dashboard Development",
    ],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },

  {
    id: "12",
    name: "Etihad",
    year: "2025",
    category: "Travel",
    desc:
      "Etihad is a travel booking platform that provides users with seamless booking experiences for flights, hotels, and travel packages. Implemented responsive travel interfaces, booking workflows, and optimized API integrations for smooth customer journeys.",
    techs: [
      "React.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Responsive Design",
      "Authentication",
      "JavaScript",
      "Booking System",
      "Dashboard UI",
    ],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },

 {
  id: "13",
  name: "ThoughtPlay",
  year: "2021",
category: "Web Application",
  desc:
    "ThoughtPlay is a modern digital platform designed to deliver engaging user experiences through interactive design and seamless performance. Developed responsive UI components, optimized application performance, and integrated scalable frontend architecture for smooth navigation across devices.",
  
  techs: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "REST APIs",
    "UI/UX Design",
    "Frontend Development",
  ],

  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
}

];

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleDesc = (id, e) => {
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="projects-section" id="projects">
      {/* Header */}
      <h2 className="projects-title">
        Pro<span style={{color:"#0cb65e"}}>j</span>ects
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