import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="container-fluid text-center navbardiv sticky-top">
      <Link
        className="navbar-link"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Home
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Skills
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Career Highlights
      </Link>
      <Link
        className="navbar-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar
        duration={500}
      >
        Contact
      </Link>
    </div>
  );
}
