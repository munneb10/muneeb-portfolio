import React, { useContext, useMemo, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

/**
 * STRICT dedupe:
 * - Prefer GitHub URL if present
 * - Otherwise dedupe by projectName only (case-insensitive)
 */
function dedupeProjectsStrict(projects = []) {
  const seen = new Set();
  const out = [];

  for (const p of projects) {
    const key =
      (p?.actions?.github && `github:${p.actions.github}`) ||
      `name:${(p?.projectName || "").trim().toLowerCase()}`;

    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }

  return out;
}

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  const [activeCategory, setActiveCategory] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  const categories = useMemo(() => {
    const set = new Set();
    (bigProjects.projects || []).forEach((p) => set.add(p.category || "Other"));
    return ["All", ...Array.from(set).sort()];
  }, []);

  useEffect(() => {
    if (!categories.includes(activeCategory)) setActiveCategory("All");
  }, [categories, activeCategory]);

  const filteredProjects = useMemo(() => {
    const raw = bigProjects.projects || [];

    if (activeCategory === "All") return dedupeProjectsStrict(raw);

    const inCategory = raw.filter((p) => (p.category || "Other") === activeCategory);
    return dedupeProjectsStrict(inCategory);
  }, [activeCategory]);

  // ESC closes modal
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpenProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Optional: always scroll modal into view on open (even though portal fixes positioning)
  useEffect(() => {
    if (openProject) {
      // keep current page position, but ensure modal is visible
      // (portal ensures it's centered, so no scroll required)
      // window.scrollTo({ top: window.scrollY, behavior: "auto" });
    }
  }, [openProject]);

  if (!bigProjects.display) return null;

  const techList = openProject?.techStack || openProject?.modal?.techStack || [];

  // ✅ MODAL as a portal to document.body (fixes "fixed inside transformed parent" bug)
  const modalNode =
    openProject?.modal && typeof document !== "undefined"
      ? ReactDOM.createPortal(
          <div
            className="project-modal-backdrop"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenProject(null)}
          >
            <div
              className={`project-modal ${isDark ? "project-modal-dark" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="project-modal-close"
                type="button"
                aria-label="Close"
                onClick={() => setOpenProject(null)}
              >
                ✕
              </button>

              <div className="project-modal-header">
                <h2 className="project-modal-title">{openProject.modal.title}</h2>
                {openProject.modal.greeting ? (
                  <p className="project-modal-greeting">{openProject.modal.greeting}</p>
                ) : null}
              </div>

              <div className="project-modal-body">
                <div className="project-modal-body-scroll">
                  {(openProject.modal.body || []).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}

                  {openProject.modal.email ? (
                    <p className="project-modal-email">
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${openProject.modal.email}`}>{openProject.modal.email}</a>
                    </p>
                  ) : null}

                  {(openProject.modal.images || []).length ? (
                    <div className="project-modal-images">
                      {openProject.modal.images.map((img, idx) => (
                        <figure className="project-modal-figure" key={idx}>
                          <img
                            src={img}
                            alt=""
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <figcaption>{`${openProject.modal.title} — screenshot ${idx + 1}`}</figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : null}

                  {Array.isArray(techList) && techList.length ? (
                    <div className="project-modal-tech">
                      <h3 className="project-modal-tech-title">Technologies used</h3>
                      <div className="project-modal-tech-tags">
                        {techList.map((t, idx) => (
                          <span key={`${t}-${idx}`} className="project-modal-tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="project-modal-footer">
                {openProject?.actions?.github ? (
                  <button
                    type="button"
                    className="project-modal-btn"
                    onClick={() => openUrlInNewTab(openProject.actions.github)}
                  >
                    <i className="fab fa-github" /> GitHub
                  </button>
                ) : null}

                {openProject?.actions?.live ? (
                  <button
                    type="button"
                    className="project-modal-btn"
                    onClick={() => openUrlInNewTab(openProject.actions.live)}
                  >
                    <i className="fas fa-link" /> Live
                  </button>
                ) : null}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className="main" id="projects">
          <div id="creativePortfolio">
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
              {bigProjects.subtitle}
            </p>

            {/* Categories */}
            <div className="project-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`project-category-btn ${activeCategory === cat ? "active" : ""} ${
                    isDark ? "dark" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="projects-container">
              {filteredProjects.map((project, i) => {
                const githubUrl = project?.actions?.github;
                const liveUrl = project?.actions?.live;
                const canOpenInfo = project?.actions?.info && project?.modal;

                return (
                  <div
                    key={`${(project?.actions?.github || project?.projectName || "p")}-${i}`}
                    className={`project-card ${isDark ? "project-card-dark" : "project-card-light"}`}
                  >
                    {project.image ? (
                      <div className="project-media">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="project-media-img"
                          loading="lazy"
                        />
                      </div>
                    ) : null}

                    {/* Hover actions */}
                    <div className="project-actions">
                      {githubUrl && project.isGithubProject ? (
                        <button
                          className="project-action-btn"
                          type="button"
                          aria-label="Open GitHub"
                          onClick={() => openUrlInNewTab(githubUrl)}
                        >
                          <i className="fab fa-github" />
                        </button>
                      ) : null}

                      {liveUrl ? (
                        <button
                          className="project-action-btn"
                          type="button"
                          aria-label="Open Live"
                          onClick={() => openUrlInNewTab(liveUrl)}
                        >
                          <i className="fas fa-arrow-up-right-from-square" />
                        </button>
                      ) : null}

                      {canOpenInfo ? (
                        <button
                          className="project-action-btn"
                          type="button"
                          aria-label="Open Details"
                          onClick={() => setOpenProject(project)}
                        >
                          <i className="fas fa-info" />
                        </button>
                      ) : null}
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.projectName}</h3>
                      <div className="project-meta">{project.category || "Other"}</div>
                      <p className="project-desc">{project.projectDesc}</p>

                      {/* Tech preview on card */}
                      {Array.isArray(project.techStack) && project.techStack.length ? (
                        <div className="project-tech-preview">
                          {project.techStack.slice(0, 4).map((t, idx) => (
                            <span key={`${t}-${idx}`} className="project-tech-pill">
                              {t}
                            </span>
                          ))}
                          {project.techStack.length > 4 ? (
                            <span className="project-tech-pill project-tech-more">
                              +{project.techStack.length - 4}
                            </span>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredProjects.length === 0 ? (
              <p className={isDark ? "dark-mode project-empty" : "project-empty"}>
                No projects in this category yet.
              </p>
            ) : null}
          </div>
        </div>
      {/* ✅ Portal-rendered modal (outside transformed containers) */}
      {modalNode}
    </>
  );
}