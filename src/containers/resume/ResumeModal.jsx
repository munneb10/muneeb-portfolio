import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./ResumeModal.scss";

export default function ResumeModal({ isOpen, onClose, isDark }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const RESUME_URL = "/resume-v2.pdf"; // ✅ put resume.pdf in /public

  return ReactDOM.createPortal(
    <div className="resumeModalBackdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className={`resumeModal ${isDark ? "resumeModal--dark" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="resumeModal__close" type="button" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <div className="resumeModal__header">
          <h2 className="resumeModal__title">Muneeb Resume</h2>

          <div className="resumeModal__actions">
            <a className="resumeModal__btn" href={RESUME_URL} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <a className="resumeModal__btn" href={RESUME_URL} download>
              Download
            </a>
          </div>
        </div>

        <div className="resumeModal__viewer">
          <iframe
            title="Resume PDF"
            src={RESUME_URL}
            className="resumeModal__iframe"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}