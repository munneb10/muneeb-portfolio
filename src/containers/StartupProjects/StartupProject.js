import React, { useMemo, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";

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
      (p?.actions?.github && `github:${String(p.actions.github).trim()}`) ||
      `name:${String(p?.projectName || "").trim().toLowerCase()}`;

    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }

  return out;
}

/**
 * Opens links safely (prevents Safari: "string did not match expected pattern")
 */
function openUrlInNewTab(url) {
  if (!url) return;

  try {
    let finalUrl = String(url).trim();

    // allow mailto/tel
    if (finalUrl.startsWith("mailto:") || finalUrl.startsWith("tel:")) {
      window.location.href = finalUrl;
      return;
    }

    // auto-fix missing protocol
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = `https://${finalUrl}`;
    }

    // validate
    new URL(finalUrl);

    const win = window.open(finalUrl, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  } catch (e) {
    console.error("Invalid URL:", url);
  }
}

export default function StartupProject() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  // ✅ Pagination state
  const PAGE_SIZE = 2; // change if you want (e.g. 4/6/8)
  const [page, setPage] = useState(1);

  // Categories from data
  const categories = useMemo(() => {
    const set = new Set();
    (bigProjects.projects || []).forEach((p) => set.add(p.category || "Other"));
    return ["All", ...Array.from(set).sort()];
  }, []);

  // Keep active category valid if list changes
  useEffect(() => {
    if (!categories.includes(activeCategory)) setActiveCategory("All");
  }, [categories, activeCategory]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  // Filter + dedupe
  const filteredProjects = useMemo(() => {
    const raw = bigProjects.projects || [];

    if (activeCategory === "All") return dedupeProjectsStrict(raw);

    const inCategory = raw.filter((p) => (p.category || "Other") === activeCategory);
    return dedupeProjectsStrict(inCategory);
  }, [activeCategory]);

  // ✅ Pagination derived values
  const total = filteredProjects.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Clamp page if data changes
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
    if (page < 1) setPage(1);
  }, [page, totalPages]);

  const paginatedProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredProjects.slice(start, start + PAGE_SIZE);
  }, [filteredProjects, page]);

  // ESC closes modal
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpenProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!bigProjects.display) return null;

  const techList = openProject?.techStack || openProject?.modal?.techStack || [];

  // Portal modal -> always relative to body (production-safe)
  const modalNode =
    openProject?.modal && typeof document !== "undefined"
      ? ReactDOM.createPortal(
          <div
            className="project-modal-backdrop"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenProject(null)}
          >
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
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

  // ✅ Pagination UI: show max 5 buttons around current page
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pageButtons = useMemo(() => {
    const maxBtns = 5;
    let start = Math.max(1, page - Math.floor(maxBtns / 2));
    let end = start + maxBtns - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxBtns + 1);
    }

    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }, [page, totalPages]);

  return (
    <>
      <div className="main" id="projects">
        <div id="creativePortfolio">
          <div className="text-centre">
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          </div>

          {/* Categories */}
          <div className="project-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`project-category-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards (✅ one column) */}
          <div className="projects-container projects-container--single">
            {paginatedProjects.map((project) => {
              const githubUrl = project?.actions?.github;
              const liveUrl = project?.actions?.live;
              const canOpenInfo = project?.actions?.info && project?.modal;

              const stableKey =
                (project?.actions?.github && `gh-${project.actions.github}`) ||
                `name-${project.projectName}`;

              return (
                <div key={stableKey} className="project-card">
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

                    {/* Tech preview */}
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

          {total === 0 ? <p className="project-empty">No projects in this category yet.</p> : null}

          {/* ✅ Pagination */}
          {total > PAGE_SIZE ? (
            <div className="project-pagination">
              <button
                type="button"
                className="project-page-btn"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Prev
              </button>

              {pageButtons[0] > 1 ? (
                <>
                  <button type="button" className="project-page-btn" onClick={() => setPage(1)}>
                    1
                  </button>
                  <span className="project-page-ellipsis">…</span>
                </>
              ) : null}

              {pageButtons.map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`project-page-btn ${p === page ? "active" : ""}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}

              {pageButtons[pageButtons.length - 1] < totalPages ? (
                <>
                  <span className="project-page-ellipsis">…</span>
                  <button
                    type="button"
                    className="project-page-btn"
                    onClick={() => setPage(totalPages)}
                  >
                    {totalPages}
                  </button>
                </>
              ) : null}

              <button
                type="button"
                className="project-page-btn"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {modalNode}
    </>
  );
}