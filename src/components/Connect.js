import React from "react";
import data from "../data/content.json";

export default function Connect() {
  return (
    <div className="container-fluid connect-section" id="contact">
      <div className="connect-inner">

        <div className="connect-header text-center">
          <p className="section-eyebrow">Contact</p>
          <h2 className="connect-heading">Let's work together</h2>
          <p className="connect-subtext">Open to full-time roles and freelance opportunities.</p>
        </div>

        <div className="connect-links-wrap mt-4">
          <div className="connect-links">
            <a
              href={`mailto:${data.profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link-clean"
            >
              <div className="connect-link-content">
                <p className="connect-label">Email</p>
                <div className="connect-value-wrap">
                  <i className="fa-solid fa-envelope icon-small"></i>
                  <span className="connect-link-value">{data.profile.email}</span>
                </div>
              </div>
            </a>

            <a
              href={data.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link-clean"
            >
              <div className="connect-link-content">
                <p className="connect-label">LinkedIn</p>
                <div className="connect-value-wrap">
                  <i className="fa-brands fa-linkedin icon-small"></i>
                  <span className="connect-link-value">linkedin.com/in/meet-modasiya</span>
                </div>
              </div>
            </a>

            <a
              href={data.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link-clean"
            >
              <div className="connect-link-content">
                <p className="connect-label">GitHub</p>
                <div className="connect-value-wrap">
                  <i className="fa-brands fa-github icon-small"></i>
                  <span className="connect-link-value">github.com/MeetM23</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="connect-cta-group text-center mt-5">
          <a
            href={`mailto:${data.profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-main mx-sm-2"
          >
            <button className="btn-contact-primary">Email Me</button>
          </a>

          <a
            href="/Meet_Modasiya_Resume.pdf"
            download
            className="cta-button-sub d-inline-block mx-sm-2"
          >
            <button className="btn-contact-secondary-outline">
              <i className="fa-solid fa-download" style={{ marginRight: "8px" }}></i>
              Download Resume
            </button>
          </a>

          <p className="connect-footer-note mt-4">I usually respond within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}
