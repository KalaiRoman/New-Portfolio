import React from "react";
import "./Testimonials.css";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    initials: "NK",
    avatarBg: "#bbf7d0",
    avatarColor: "#166534",
    name: "NARENDRA KULKARNI",
    role: "Chief Executive Officer",
    company: "CDP360 Technologies",
    website: "womeyn.com",
    quote:
      "Kalaisurya delivered our project with exceptional quality and speed. His clean coding approach helped us build a scalable product our team loves every day.",
    tag: "Product · E-Commerce",
    featured: false,
    logo:"https://www.womeyn.com/_next/static/media/Mobileviewlogoshort.59813e5d.png"
  },
  {
    initials: "SD",
    avatarBg: "#a7f3d0",
    avatarColor: "#166534",
    name: "SAM DEV",
    role: "Chief Executive Officer",
    company: "CDP360 Technologies",
    website: "cdp360.com",
    quote:
      "Working with Kalai was the smoothest dev experience we've had. He delivered a scalable React.js platform on time with zero hand-holding and outstanding communication.",
    tag: "Product - React.js and Next.js",
    featured: true,
    logo:"https://cdp360.com/assets/img/newlogocdp.webp"
  },
  {
    initials: "AB",
    avatarBg: "#d1fae5",
    avatarColor: "#166534",
    name: "ABINESH",
    role: "Chief Executive Officer",
    company: "Eternosoft Technologies",
    website: "eternosoft.in",
    quote:
      "Kalaisurya revamped our frontend and results were immediate — page speed up 45%, bounce rate dropped significantly. Precise, communicative, exceptional work.",
    tag: "Frontend · ReactJS",
    featured: false,
    logo:"https://eternosoft.in/img/logo2.png"
  },
];

const StarIcon = () => (
  <svg className="ts-star-svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const PinIcon = () => (
  <svg className="ts-pin-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

function PersonSilhouette() {
  return (
    <svg className="ts-silhouette" viewBox="0 0 62 62" fill="none" aria-hidden="true">
      <circle cx="31" cy="21" r="12" fill="rgba(22,101,52,0.25)" />
      <ellipse cx="31" cy="53" rx="20" ry="13" fill="rgba(22,101,52,0.18)" />
    </svg>
  );
}

function TestimonialCard({ data }) {
  const { initials, avatarBg, avatarColor, name, role, website, quote, tag, featured,logo } = data;

  return (
    <article className={`ts-card${featured ? " ts-card--featured" : ""}`}>
      {featured && <div className="ts-feat-label">⭐ Top Review</div>}

      {/* <div className="ts-logo" aria-hidden="true">
        <img src={logo} alt={`${name}'s company logo`}
        className="logo"
        />
      </div> */}

      <div className={`ts-card-top${featured ? " ts-card-top--label" : ""}`}>
        <div className="ts-heading">
          {/* CLIENT<br />TESTIMONIAL */}
           ❝
        </div>
        <div className="ts-photo-wrap">
          <div
            className="ts-photo"
            style={{ background: avatarBg }}
            aria-label={`${name} avatar`}
          >
            <PersonSilhouette />
            <span className="ts-initials" style={{ color: avatarColor }}>
              {initials}
            </span>
          </div>
          <div className="ts-notch" aria-hidden="true" />
        </div>
      </div>

      <div className="ts-panel">
        <div className="ts-panel-top">
          <p className="ts-name">{name}</p>
          <p className="ts-role">{role}</p>
        </div>
        <p className="ts-quote">{quote}</p>
        <div className="ts-panel-footer">
          <span className="ts-website">{website}</span>
          <div className="ts-stars" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>
      </div>

      <div className="ts-tag">{tag}</div>
    </article>
  );
}

export default function Testimonials({mode}) {

  const navigate=useNavigate();
  return (
    <section className="ts-section" id="testimonials" aria-labelledby="ts-heading">

      {/* Header */}
      <div className="ts-header">
        <div className="ts-badge">💬 CEO Testimonials {mode}</div>
        <h2 id="ts-heading" className="ts-title">
          Client <span className="ts-title-accent">Testimonial</span>
        </h2>
        <p className="ts-subtitle">Trusted by CEOs across India and the globe</p>
      </div>

      {/* Cards Grid */}
      <div className="ts-grid">
        {testimonials.map((item, i) => (
          <TestimonialCard key={i} data={item} />
        ))}
      </div>

      {/* CTA */}

      {mode == "Single Page" ?<>
      <div className="ts-cta">
        <a href="#contact" className="ts-btn-primary">Work with Kalai →</a>
        <a href="#projects" className="ts-btn-ghost">View Projects</a>
      </div>
      </>:<>
      <div className="ts-cta">
        <div className="ts-btn-primary" onClick={()=>navigate("/contact")}>Work with Kalai →</div>
        <div className="ts-btn-ghost" onClick={()=>navigate("/projects")}>View Projects</div>
      </div>
      </>}
      

    </section>
  );
}