import { useState } from "react";
import "./styles/Contact.css";

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const WatchTimerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M15.07 1H8.93v2h6.14V1zM11 14h2V8h-2v6zm8.03-7.39l1.42-1.42-1.41-1.41-1.42 1.42A8.962 8.962 0 0 0 12 4a9 9 0 1 0 9 9c0-2.21-.8-4.24-2.12-5.8zM12 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>
  </svg>
);

const ContactIllustration = () => (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="160" cy="210" rx="110" ry="18" fill="#ddd6fe" opacity="0.5"/>

    <rect x="100" y="30" width="120" height="185" rx="18" fill="#1e1b4b"/>
    <rect x="107" y="44" width="106" height="157" rx="10" fill="#ede9fe"/>

    <rect x="114" y="60" width="92" height="100" rx="6" fill="#c4b5fd" opacity="0.4"/>

    <circle cx="160" cy="95" r="18" fill="#7c3aed"/>
    <ellipse cx="160" cy="128" rx="20" ry="14" fill="#7c3aed"/>

    <path d="M143 90 Q143 72 160 72 Q177 72 177 90" fill="none" stroke="#4c1d95" strokeWidth="3.5" strokeLinecap="round"/>
    <rect x="140" y="88" width="7" height="10" rx="3" fill="#4c1d95"/>
    <rect x="173" y="88" width="7" height="10" rx="3" fill="#4c1d95"/>

    <rect x="114" y="162" width="92" height="18" rx="4" fill="#7c3aed"/>
    <rect x="127" y="167" width="66" height="6" rx="3" fill="#fff" opacity="0.8"/>

    <rect x="142" y="38" width="36" height="6" rx="3" fill="#312e81"/>

    <rect x="58" y="55" width="36" height="36" rx="8" fill="#8b5cf6"/>
    <path d="M68 66 Q76 60 84 66 L84 82 Q76 76 68 82 Z" fill="#fff" opacity="0.85" transform="scale(0.7) translate(38,32)"/>
    <text x="76" y="78" textAnchor="middle" fontSize="16" fill="#fff">📞</text>

    <rect x="58" y="103" width="36" height="36" rx="8" fill="#a78bfa"/>
    <text x="76" y="126" textAnchor="middle" fontSize="16" fill="#fff">@</text>

    <rect x="58" y="151" width="36" height="36" rx="8" fill="#c4b5fd"/>
    <text x="76" y="174" textAnchor="middle" fontSize="15" fill="#fff">✉</text>

    <ellipse cx="234" cy="190" rx="14" ry="22" fill="#a78bfa" opacity="0.5" transform="rotate(-20 234 190)"/>
    <ellipse cx="244" cy="185" rx="10" ry="18" fill="#7c3aed" opacity="0.35" transform="rotate(-35 244 185)"/>
  </svg>
);

const contactInfo = [
  {
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    icon: <LocationIcon />,
  },
  {
    label: "Phone",
    value: "+91 87783 77119",
    icon: <PhoneIcon />,
  },
  {
    label: "Email",
    value: "kalaimca685@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "Response Time",
    value: "Usually within 24 hours",
    icon: <WatchTimerIcon />,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      {/* Page title */}
      <h1 className="contact-page-title">
        <span style={{color:"#0cb65e"}}>Con</span>tact Me 
      </h1>

      <div className="contact-wrapper">
        {/* ── LEFT: Form ── */}
        <div className="contact-form-card">
          <h2 className="form-heading">Drop me a message 👇</h2>
          <p className="form-subheading mt-3">
              Whether you need a new product built from scratch, want to revamp an existing one, or just want to chat about tech — I'm all ears.
          </p>

          {/* Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              style={errors.name ? { borderColor: "#ef4444" } : {}}
            />
            {errors.name && (
              <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              style={errors.email ? { borderColor: "#ef4444" } : {}}
            />
            {errors.email && (
              <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Leave a comment here..."
              value={form.message}
              onChange={handleChange}
              style={errors.message ? { borderColor: "#ef4444" } : {}}
            />
            {errors.message && (
              <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.message}</p>
            )}
          </div>

          <button className="form-submit" onClick={handleSubmit}>
            Send Message
          </button>

          {submitted && (
            <div className="form-success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </div>

        {/* ── RIGHT: Info Panel ── */}
        <div className="contact-info-panel">
          {/* Illustration */}
          <div className="contact-illustration">
            <ContactIllustration />
          </div>

          {/* Info cards */}
          <div className="info-cards">
            {contactInfo.map((item) => (
              <div key={item.label} className="info-card">
                <div className="info-icon">{item.icon}</div>
                <div className="info-text">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}