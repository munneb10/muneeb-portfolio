import React, { useContext } from "react";
import "./Progress.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const { isDark } = useContext(StyleContext);

  const skillsByCategory = {
    title: "Skills",
    subtitle: "What I’m confident building and shipping in production.",
    display: true,
    categories: [
      {
        title: "Frontend Engineering",
        iconClass: "fas fa-laptop-code",
        highlights: ["Component Architecture", "State Management", "UX Performance"],
        skills: ["React", "Angular", "TypeScript", "JavaScript (ES6+)", "RxJS", "HTML", "CSS/SCSS"]
      },
      {
        title: "Backend & APIs",
        iconClass: "fas fa-server",
        highlights: ["REST APIs", "Auth Systems", "Validation & Middleware"],
        skills: ["Node.js", "FastAPI", "Django", "REST", "JWT", "OAuth2 / PKCE"]
      },
      {
        title: "Databases",
        iconClass: "fas fa-database",
        highlights: ["Schema Design", "Query Optimization", "Indexes"],
        skills: ["PostgreSQL", "SQL", "Normalization", "B+ Trees (concept)", "SQLite"]
      },
      {
        title: "Cloud & Tooling",
        iconClass: "fas fa-cloud",
        highlights: ["Deployment", "Version Control", "Automation"],
        skills: ["AWS (Core Services)", "Git", "CI/CD", "Linux Basics", "Netlify"]
      },
      {
        title: "Engineering Fundamentals",
        iconClass: "fas fa-sitemap",
        highlights: ["DSA", "System Design", "Trade-offs"],
        skills: ["Graphs", "Distributed Transactions (Saga/2PC)", "Systems Thinking"]
      }
    ]
  };

  if (!skillsByCategory.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className={`skillsCat ${isDark ? "skillsCat--dark" : ""}`}
        id="skills"
      >
        <div className="skillsCat__head">
          <h1 className="skillsCat__title">{skillsByCategory.title}</h1>
          <p className="skillsCat__subtitle">{skillsByCategory.subtitle}</p>
        </div>

        <div className="skillsCat__grid">
          {skillsByCategory.categories.map((cat, idx) => (
            <div key={idx} className="skillsCat__card">
              <div className="skillsCat__cardTop">
                <div className="skillsCat__icon">
                  <i className={cat.iconClass} />
                </div>

                <div>
                  <h3 className="skillsCat__cardTitle">{cat.title}</h3>

                  <div className="skillsCat__highlights">
                    {cat.highlights.map((h, i) => (
                      <span key={i} className="skillsCat__highlight">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="skillsCat__tags">
                {cat.skills.map((s, i) => (
                  <span key={i} className="skillsCat__tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
