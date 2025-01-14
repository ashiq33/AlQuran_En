import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.facebook.com/ashiqshahariar/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-ashiq-shahariar-a4ab7b267/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="email-box">
        <h4>Subscribe to our Newsletter</h4>
        <form className="email-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            required
          />
          <button type="submit" className="email-submit">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </form>
      </div>
      <p className="footer-text">© 2025.Developed by Md Ashiq Shahriar</p>
    </footer>
  );
};

export default Footer;
