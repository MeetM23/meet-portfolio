import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js (Working knowledge)", "Express.js (Working knowledge)", "PHP (Familiar with)", "RESTful APIs", "JWT Authentication (Basic)"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL / SQL"]
    },
    {
      title: "E-Commerce & CMS",
      skills: ["Shopify Development", "Shopify API Integration", "Storefront Customization"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Postman", "VS Code", "Chrome DevTools"]
    }
  ];

  return (
    <div className="container-fluid skillsdiv">
      <div className="text-center py-4">
        <h1>Technical Skills</h1>
      </div>
      <div className="experience-list">
        {skillCategories.map((category, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-main">
                <h3 className="experience-title">{category.title}</h3>
              </div>
            </div>
            <div className="experience-content">
              <div className="experience-tags mt-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="experience-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
