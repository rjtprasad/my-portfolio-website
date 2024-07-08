import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rajat</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
        
          <a href="https://www.linkedin.com/in/prasadrajat/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/rjtprasad"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.instagram.com/itsme.rajat?igsh=MTZ2NW56N2FzNDkxdw=="
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Rajat. All rights reversed</span>
      </div>
    </footer>
  );
};

export default Footer;
