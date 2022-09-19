import React from "react";
import "./style.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="text-section">
          <h1>Hey! Visiter</h1>
          <h2>We have latest Gloves product for you.</h2>
          <h3>Please DM and Shop Now.</h3>
          <div className="links">
            <a
              className="link"
              href="https://api.whatsapp.com/send?phone=9203107242237"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
              <span className="fa fa-whatsapp"></span>
            </a>

            <a
              className="link"
              href="mailto:hamzarafique964@gamil.com?subject = Feedback&body = Message"
              target="_blank"
              rel="noreferrer"
            >
              Email
              <span className="fa fa-envelope"></span>
            </a>
            <a
              className="link"
              href="https://www.instagram.com/vicky_impex/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="link"
              href="https://web.facebook.com/Vicky-Impex-109714995216107"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/hamza-rafique-mehar/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
              <span className="fa fa-linkedin"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
