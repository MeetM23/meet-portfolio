import React from "react";

const categories = [
  {
    title: "Frontend Development",
    icon: "fa-solid fa-laptop-code",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: "fa-solid fa-server",
    skills: ["Node.js", "Express.js", "PHP", "Python", "REST API Design", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: "fa-solid fa-database",
    skills: ["MongoDB", "MySQL / SQL"],
  },
  {
    title: "Tools & Platforms",
    icon: "fa-solid fa-screwdriver-wrench",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Selenium", "BeautifulSoup"],
  },
  {
    title: "Other Skills",
    icon: "fa-solid fa-gears",
    skills: ["Shopify (Liquid)", "AI API Integration", "Responsive Design"],
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
