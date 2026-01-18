import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

import data from "../data/content.json";
import resume from "../assets/Meet  Modasiya  Resume.pdf";

export default function Tagline() {
  return (
    <div className="container-fluid taglinediv text-center">
      <div className="background-overlay"></div>

      <Fade direction="down" triggerOnce="true">
        <h1>Hi, I'm {data.profile.name}</h1>
      </Fade>
      <Fade cascade>
        <h6 className="fw-light">
          {/* A Web Developer who creates websites and do Network Marketing for
          startups and founders. */}
          {data.profile.tagline}
        </h6>
      </Fade>

      <Fade direction="up">
        <div className="my-4">
          <Link to="about" smooth={true} offset={-70} duration={500}>
            <button type="button" className="btn btn1">
              About me
            </button>
          </Link>
          <a href={resume} download="Meet Modasiya Resume.pdf">
            <button type="button" className="btn btn2">
              download CV
            </button>
          </a>
        </div>
      </Fade>
    </div>
  );
}
