import React from "react";
import "./Progress.scss";
import { Fade } from "react-reveal";

export default function StackProgress() {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS/SCSS", "RxJS"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Django", "FastAPI", "REST", "JWT", "OAuth2"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQL", "SQLite", "Normalization", "Indexes"]
    },
    {
      title: "Cloud & Tooling",
      skills: ["AWS", "Git", "CI/CD", "Linux", "Netlify"]
    },
    {
      title: "Engineering Fundamentals",
      skills: ["DSA", "System Design", "Graphs", "Distributed Transactions"]
    }
  ];

  return (
    <Fade bottom duration={800}>
      <section className="skillsSection" id="skills">
        <h1 className="skillsTitle" style={{marginTop: '5px !important'}}>Skills</h1>
        <p className="skillsSubtitle">
          What I’m confident building and shipping in production.
        </p>

        <div className="skillsGrid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skillsCard">
              <h3 className="skillsCardTitle">{group.title}</h3>

              <div className="skillsPillsGrid">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skillPill">
                    {skill}
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