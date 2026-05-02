// ── TechStack.jsx ──
import { useState } from "react";
import "./WorkingTools.css";

const techs = [
  { name: "HTML5",      cat: "Markup",    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       cat: "Styling",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", cat: "Language",  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",      cat: "Framework", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap",  cat: "Styling",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Sass",       cat: "Styling",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Tailwind",   cat: "Styling",   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Redux",      cat: "Framework", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Git",        cat: "Tools",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code",    cat: "Tools",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "GitHub",     cat: "Tools",     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const categories = ["All", ...new Set(techs.map((t) => t.cat))];

export default function WorkingTools() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? techs : techs.filter((t) => t.cat === active);

  const grouped =
    active === "All"
      ? categories.slice(1).reduce((acc, cat) => {
          acc[cat] = techs.filter((t) => t.cat === cat);
          return acc;
        }, {})
      : { [active]: filtered };

  return (
    <section className="tech-stack">
      {/* Title */}
      <h2 className="tech-stack__title mb-5 mt-5">
        <span>My</span>Tech Stack
      </h2>

      <div className="tech-stack__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* {Object.entries(grouped).map(([cat, items]) => ( */}
        {/* <div key={cat}> */}
          <p className="tech-stack__category-label mt-3">{active=="All"?"":active}</p>   
          <div className="tech-stack__grid mt-4">
            {filtered.map((tech) => (
              <div key={tech.name} className="tech-card">
                <img src={tech.img} alt={tech.name} />
                <span className="tech-card__name">{tech.name}</span>
              </div>
            ))}
          </div>
        {/* </div> */}
      {/* ))} */}
    </section>
  );
}