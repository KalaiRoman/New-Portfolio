import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    initials: "NK",
    avatarBg: "linear-gradient(135deg,#bbf7d0,#86efac)",
    avatarColor: "#166534",
    name: "NARENDRA KULKARNI",
    role: "CEO, CDP360 Technologies",
    website: "womeyn.com",
    quote:
      "Kalaisurya delivered our project with exceptional quality and speed. His clean coding approach helped us build a scalable product our team loves every day.",
    tag: "E-Commerce",
    featured: false,
  },
  {
    initials: "SD",
    avatarBg: "linear-gradient(135deg,#a7f3d0,#6ee7b7)",
    avatarColor: "#065f46",
    name: "SAM DEV",
    role: "CEO, CDP360 Technologies",
    website: "cdp360.com",
    quote:
      "Working with Kalai was the smoothest dev experience we've had. He delivered a scalable React.js platform on time with zero hand-holding and outstanding communication.",
    tag: "React.js / Next.js",
    featured: true,
  },
  {
    initials: "AB",
    avatarBg: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    avatarColor: "#166534",
    name: "ABINESH",
    role: "CEO, Eternosoft Technologies",
    website: "eternosoft.in",
    quote:
      "Kalaisurya revamped our frontend and results were immediate — page speed up 45%, bounce rate dropped significantly. Precise, communicative, exceptional work.",
    tag: "Frontend · ReactJS",
    featured: false,
  },
  {
    initials: "RS",
    avatarBg: "linear-gradient(135deg,#bbf7d0,#4ade80)",
    avatarColor: "#14532d",
    name: "RAJESH SHARMA",
    role: "Engineering Manager, Wipro",
    website: "wipro.com",
    quote:
      "Kalaisurya's attention to detail and strong grasp of React best practices made him stand out. He consistently shipped clean, maintainable code ahead of deadlines.",
    tag: "Enterprise · React.js",
    featured: false,
  },
];

const StarIcon = () => (
  <svg className="ts-star-svg" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowIcon = ({ direction }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
    {direction === "prev" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

function TestimonialCard({ data }) {
  const { initials, avatarBg, avatarColor, name, role, website, quote, tag, featured } = data;

  return (
    <div className={`ts-card${featured ? " ts-card--featured" : ""}`}>
      {featured && <div className="ts-feat-label">⭐ Top Review</div>}

      <span className="ts-quote-mark">❝</span>
      <p className="ts-quote">{quote}</p>

      <div className="ts-person">
        <div className="ts-photo" style={{ background: avatarBg, color: avatarColor }}>
          {initials}
        </div>
        <div className="ts-person-info">
          <p className="ts-name">{name}</p>
          <p className="ts-role">{role}</p>
          <div className="ts-stars" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="ts-footer-row">
        <span className="ts-website">{website}</span>
        <span className="ts-tag">{tag}</span>
      </div>
    </div>
  );
}

function useVisibleCount() {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 700) setVisible(1);
      else if (window.innerWidth < 1000) setVisible(2);
      else setVisible(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return visible;
}

export default function Testimonials({ mode }) {
  const navigate = useNavigate();
  const visible = useVisibleCount();
  const total = testimonials.length;
  const maxIndex = Math.max(total - visible, 0);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Clamp current whenever the visible count changes (e.g. resize)
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const goTo = (i) => setCurrent(Math.max(0, Math.min(i, maxIndex)));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  const resetAutoplay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 3500);
  };

  useEffect(() => {
    resetAutoplay();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const handleDot = (i) => {
    goTo(i);
    resetAutoplay();
  };
  const handlePrev = () => {
    prev();
    resetAutoplay();
  };
  const handleNext = () => {
    next();
    resetAutoplay();
  };

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

      {/* Carousel */}
      <div className="ts-carousel">
        <button className="ts-arrow prev" onClick={handlePrev} aria-label="Previous">
          <ArrowIcon direction="prev" />
        </button>
        <button className="ts-arrow next" onClick={handleNext} aria-label="Next">
          <ArrowIcon direction="next" />
        </button>

        <div
          className="ts-track"
          style={{
            transform: `translateX(-${current * (100 / visible)}%)`,
            "--ts-visible": visible,
          }}
        >
          {testimonials.map((item, i) => (
            <div className="ts-slide" key={i}>
              <TestimonialCard data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="ts-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`ts-dot${i === current ? " active" : ""}`}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* CTA */}
      {mode === "Single Page" ? (
        <div className="ts-cta">
          <a href="#contact" className="ts-btn-primary">Work with Kalai →</a>
          <a href="#projects" className="ts-btn-ghost">View Projects</a>
        </div>
      ) : (
        <div className="ts-cta">
          <div className="ts-btn-primary" onClick={() => navigate("/contact")}>Work with Kalai →</div>
          <div className="ts-btn-ghost" onClick={() => navigate("/projects")}>View Projects</div>
        </div>
      )}
    </section>
  );
}