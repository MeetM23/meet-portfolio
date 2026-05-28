import React from "react";

export default function About() {
  return (
    <div className="container-fluid aboutdiv">
      <div className="about-inner">

        <p className="section-eyebrow">About Me</p>
        <h2 className="about-heading">
          Full-Stack Developer focused on real-world applications
        </h2>

        <p className="about-text">
          Full-stack developer with hands-on experience building and deploying real-world 
          web applications using React, Node.js, Express, and MongoDB. Delivered two live 
          production e-commerce platforms (Lotsy, Foxplay) and a full-stack Lead Management 
          System with AI integration during internship.
        </p>
        <p className="about-text">
          Comfortable across the entire development lifecycle — from REST API design and database 
          modeling to responsive UI and deployment on Vercel/Netlify. Open to junior/mid frontend or 
          full-stack roles — remote or willing to relocate internationally.
        </p>

        <div className="status-badge mt-4">
          <span className="status-badge-dot"></span>
          Open to Remote & Relocation
        </div>

      </div>
    </div>
  );
}
