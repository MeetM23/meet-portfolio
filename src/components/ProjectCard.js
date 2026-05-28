import React from "react";

export default function ProjectCard({ title, content, url, img, tech, imgClass, index }) {
  const techItems = tech ? tech.split(/\s*(?:•|·)\s*/) : [];
  const isEven = index % 2 === 0;

  return (
    <div className={`project-card-saas ${isEven ? "" : "project-card-reverse"}`}>
      {/* Image */}
      <div className="project-card-img-wrap">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" tabIndex="-1">
            <img
              src={img}
              alt={title}
              className={`project-card-img ${imgClass || ""}`}
            />
          </a>
        ) : (
          <img
            src={img}
            alt={title}
            className={`project-card-img ${imgClass || ""}`}
          />
        )}
      </div>

      {/* Content */}
      <div className="project-card-body">
        <p className="project-card-label">Featured Project</p>
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-desc">{content}</p>

        <div className="project-card-tech">
          {techItems.map((item, i) => (
            <span key={i} className="project-tech-pill">{item}</span>
          ))}
        </div>

        {url && (
          <div className="project-card-actions">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="btn-view-project">
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginRight: "8px", fontSize: "0.8rem" }}></i>
                View Live Project
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
