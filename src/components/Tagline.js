import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Tagline() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid taglinediv text-center">

      <Fade direction="down" triggerOnce>
        <div className="status-badge mb-3">
          <span className="status-badge-dot"></span>
          Open to Remote & Relocation
        </div>
        <p className="hero-role">Full-Stack Developer · React · Node.js · MongoDB · Python</p>
        <h1 className="hero-heading">
          Full-Stack Developer · React · Node.js · MongoDB | Open to Remote & Relocation
        </h1>
      </Fade>

      <Fade cascade triggerOnce>
        <p className="hero-sub">
          I build scalable web applications and automation tools using React, Node.js, MongoDB, and Python — including e-commerce platforms, lead management systems, and browser automation scripts.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="hero-actions-new">
          <button className="btn-hero-primary-new" onClick={() => navigate("/projects")}>
            View Projects
          </button>

          <ScrollLink to="contact" smooth offset={-70} duration={500}>
            <button className="btn-hero-secondary-new">Contact Me</button>
          </ScrollLink>
        </div>

        <div className="hero-resume-text-link mt-4">
          <a href="/Meet_Modasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link-resume">
            View Resume <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.7rem", marginLeft: "4px" }}></i>
          </a>
        </div>

        <p className="hero-trust">
          Built real projects&nbsp;&nbsp;•&nbsp;&nbsp;Deployed apps&nbsp;&nbsp;•&nbsp;&nbsp;Open to work
        </p>
      </Fade>

    </div>
  );
}
