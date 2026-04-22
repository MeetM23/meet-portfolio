import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import data from "../data/content.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isHome = location.pathname === "/";

  const handleNavClick = (section) => {
    if (!isHome) {
      navigate("/");
      // Small timeout to allow Home to mount before scrolling if needed
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    closeMenu();
  };

  return (
    <nav className={`navbar-wrap ${scrolled ? "navbar-scrolled" : ""} ${isMenuOpen ? "mobile-menu-open" : ""}`}>
      {/* Left: Name / Logo */}
      <RouterLink
        to="/"
        className="navbar-brand-name"
        onClick={closeMenu}
      >
        Meet Modasiya
      </RouterLink>

      {/* Hamburger Icon */}
      <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
      </button>

      {/* Right: Links + CTA */}
      <div className={`navbar-right ${isMenuOpen ? "show" : ""}`}>
        {isHome ? (
          <>
            <ScrollLink className="nav-link" to="home" spy smooth offset={-70} duration={500} onClick={closeMenu}>Home</ScrollLink>
            <RouterLink className="nav-link" to="/projects" onClick={closeMenu}>Projects</RouterLink>
            <ScrollLink className="nav-link" to="skills" spy smooth offset={-70} duration={500} onClick={closeMenu}>Skills</ScrollLink>
            <a className="nav-link" href="/Meet_Modasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
            <ScrollLink className="nav-link" to="contact" spy smooth offset={-70} duration={500} onClick={closeMenu}>Contact</ScrollLink>
          </>
        ) : (
          <>
            <RouterLink className="nav-link" to="/" onClick={closeMenu}>Home</RouterLink>
            <RouterLink className="nav-link" to="/projects" onClick={closeMenu}>Projects</RouterLink>
            <RouterLink className="nav-link" to="/" onClick={() => handleNavClick("skills")}>Skills</RouterLink>
            <a className="nav-link" href="/Meet_Modasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
            <RouterLink className="nav-link" to="/" onClick={() => handleNavClick("contact")}>Contact</RouterLink>
          </>
        )}

        <a
          href={`mailto:${data.profile.email}`}
          className="navbar-hire-btn"
          onClick={closeMenu}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
