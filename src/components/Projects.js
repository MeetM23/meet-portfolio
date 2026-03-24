import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../data/content.json";

export default function Projects() {
  return (
    <div className="container-fluid projectsdiv">
      {data.live_client_projects && data.live_client_projects.length > 0 && (
        <>
          <div className="text-center">
            <h1>Live Projects</h1>
          </div>

          {data.live_client_projects.map((project, index) => (
            <ProjectCard
              key={`live-${index}`}
              title={project.title}
              content={project.content}
              url={project.url}
              img={require(`../assets/${project.img}`)}
              tech={project.tech}
              imgClass={project.imgClass}
              showDetails={true}
            />
          ))}
        </>
      )}
    </div>
  );
}
