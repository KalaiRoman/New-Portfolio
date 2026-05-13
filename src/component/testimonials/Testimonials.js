import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    initials: "NK",
    avatarClass: "av-1",
    name: "NARENDRA KULKARNI",
    role: "Chief Executive Officer",
    // company: "CDP360 Technologies Private Limited",
   quote: "Kalaisurya delivered our project with exceptional quality and speed.  His clean coding approach, problem-solving skills, and attention to detail helped us build a smooth and scalable product experience.",
    location: "Austria",
    tag: "Product- Ecommerce (React & Nextjs)",
  },
  {
    initials: "SD",
    avatarClass: "av-2",
    name: "Sam Dev",
    role: "Chief Executive Officer",
    // company: "CDP360 Technologies Private Limited",
  quote:
  "Working with Kalai was an excellent experience. He delivered a scalable and high-performance Next.js platform on time,  with clean code, smooth communication, and great attention to detail.",
    location: "Chennai, TamilNadu, India",
    tag: "Product - (React & Nextjs & Nodejs)",
  },
  {
    initials: "AB",
    avatarClass: "av-3",
    name: "Abinesh",
    role: "Chief Executive Officer",
    // company: "Eternosoft Technologies Private Limited",
   quote:
  "Kalaisurya completely transformed our frontend experience with modern, clean, and high-performance development.His communication, attention to detail, and commitment to quality made the entire project smooth and successful.",
    location: "Chennai, TamilNadu, India",
    tag: "Frontend (ReactJs)",
  },
];

export default function Testimonials() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3500);

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

  return (
    <div className="c-wrap" id="testimonials">

      <div className="c-header">

        <div className="c-badge">
          CEO Testimonials
        </div>

        <h1 className="c-title">
          What top leaders say
        </h1>

        <p className="c-sub">
          Trusted by CEOs across India and the globe
        </p>

      </div>

      <div className="slider-outer">

        <div
          className="slider-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >

          {testimonials.map((item, index) => (

            <div className="slide" key={index}>

              <div className="card">

                <div className="card-top">

                  <div className={`av ${item.avatarClass}`}>
                    {item.initials}
                  </div>

                  <div className="card-meta">

                    <div className="card-name">
                      {item.name}
                    </div>

                    <div className="card-role">
                      {item.role}
                    </div>

                    <div className="card-company">
                      {item.company}
                    </div>

                  </div>
                </div>

                <div className="stars">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="card-quote">
                  {item.quote}
                </p>

                <div className="card-footer">

                  <div className="card-loc">
                    📍 {item.location}
                  </div>

                  <span className="card-tag">
                    {item.tag}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="controls">

        <button className="nav-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="dot-row">

          {testimonials.map((_, index) => (

            <button
              key={index}
              className={`dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

        <button className="nav-btn" onClick={nextSlide}>
          ❯
        </button>

      </div>

    </div>
  );
}