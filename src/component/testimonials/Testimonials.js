import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    initials: "NK",
    avatarClass: "av-1",
    name: "NARENDRA KULKARNI",
    role: "Chief Executive Officer",
    quote:
      "Kalaisurya delivered our project with exceptional quality and speed. His clean coding approach and attention to detail helped us build a scalable product.",
    location: "Austria",
    tag: "Product - Ecommerce",
  },
  {
    initials: "SD",
    avatarClass: "av-2",
    name: "Sam Dev",
    role: "Chief Executive Officer",
    quote:
      "Working with Kalai was an excellent experience. He delivered a high-performance Next.js platform with smooth communication.",
    location: "Chennai, Tamil Nadu, India",
    tag: "React & Next.js",
  },
  {
    initials: "AB",
    avatarClass: "av-3",
    name: "Abinesh",
    role: "Chief Executive Officer",
    quote:
      "Kalaisurya transformed our frontend with modern and high-performance development. Great communication throughout the project.",
    location: "Chennai, Tamil Nadu, India",
    tag: "Frontend ReactJS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

  return (
    <section className="testimonial-section" id="testimonials">
      
      <div className="testimonial-header">
        <span className="testimonial-badge">
          CEO Testimonials
        </span>

        <h2>
          What Top Leaders Say
        </h2>

        <p>
          Trusted by CEOs across India and the globe
        </p>
      </div>

      <div className="testimonial-wrapper">

        <button className="nav-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div
              className={`testimonial-card ${
                current === index ? "active" : ""
              }`}
              key={index}
            >
              <div className="card-top">

                <div className={`avatar ${item.avatarClass}`}>
                  {item.initials}
                </div>

                <div>
                  <div className="name-user">{item.name}</div>
                  <div className="role-user">{item.role}</div>
                </div>

              </div>

              <div className="stars">
                 {Array(5).fill(0).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="quote">
                {item.quote}
              </p>

              <div className="card-footer">
                <p>📍 {item.location}</p>

                <span className="tag">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}

        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          ❯
        </button>

      </div>
    </section>
  );
}