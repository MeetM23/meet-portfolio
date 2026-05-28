import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../data/content.json";

export default function Projects() {
  return (
    <div className="container-fluid projectsdiv">
      {data.live_client_projects && data.live_client_projects.length > 0 && (
        <>
          <div className="text-center projects-header">
            <p className="section-eyebrow">What I've built</p>
            <h1>Featured Projects</h1>
            <p className="projects-subtitle">
              A selection of web applications, custom tools, and automation systems I've built.
            </p>
          </div>

          <div className="project-cards-list">
            {data.live_client_projects.map((project, index) => (
              <ProjectCard
                key={`live-${index}`}
                index={index}
                title={project.title}
                content={project.content}
                url={project.url}
                img={require(`../assets/${project.img}`)}
                tech={project.tech}
                imgClass={project.imgClass}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
