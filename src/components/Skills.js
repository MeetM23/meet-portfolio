import React from "react";

const categories = [
  {
    title: "Core Technologies",
    icon: "fa-solid fa-code",
    skills: ["React", "JavaScript", "Node.js", "Express", "PHP"],
  },
  {
    title: "Databases & APIs",
    icon: "fa-solid fa-database",
    skills: ["MongoDB", "MySQL", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Tools & Platforms",
    icon: "fa-solid fa-screwdriver-wrench",
    skills: ["Git & GitHub", "Postman", "VS Code", "Shopify"],
  },
];

export default function Skills() {
  return (
    <div className="container-fluid skillsdiv">
      <div className="skills-inner">
        <div className="text-center skills-header">
          <p className="section-eyebrow">What I use</p>
          <h2 className="skills-heading">Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-header">
                <i className={`${cat.icon} skill-icon`}></i>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>
              <ul className="skill-list">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="skill-item">
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
