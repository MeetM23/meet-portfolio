import React, { useState } from "react";
import data from "../data/content.json";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // first open by default

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container-fluid experiencediv">
      <div className="text-center py-4">
        <p className="section-eyebrow">Work Experience</p>
        <h2 className="experience-section-heading">Career Highlights</h2>
      </div>

      <div className="experience-list">
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            {/* Header row */}
            <div
              className="experience-header"
              onClick={() => toggleExpand(index)}
            >
              <div className="experience-main">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-duration">{exp.duration}</p>
                </div>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="expand-icon">
                <i className={`fas fa-chevron-down ${expandedIndex === index ? "rotated" : ""}`}></i>
              </div>
            </div>

            {/* Expanded content */}
            {expandedIndex === index && (
              <div className="experience-content">
                {/* Bullet points */}
                {exp.bullets && (
                  <ul className="experience-bullets">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="experience-bullet-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Impact line */}
                {exp.impact && (
                  <p className="experience-impact">{exp.impact}</p>
                )}

                {/* Tags */}
                {exp.tags && (
                  <div className="experience-tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="experience-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
