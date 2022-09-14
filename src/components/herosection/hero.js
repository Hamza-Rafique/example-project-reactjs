import React from "react";
import "./style.css";
import sample from "../../images/video/k25.mp4";

const Hero = () => {
  return (
    <>
      <div className="overlay"></div>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div className="container h-100">
        <div className="App">
          <header className="App-header">
            <h1>Hey! Visiter</h1>
            <h2>We have latest Gloves product for you.</h2>
            <h3>Please DM and Shop Now.</h3>
            <div className="links">
              <a
                className="link"
                href="https://api.whatsapp.com/send?phone=9203107242237"
              >
                WhatsApp
                <li className="fa fa-whatsapp"></li>
              </a>

              <a
                className="link"
                href="mailto:hamzarafique964@gamil.com?subject = Feedback&body = Message"
              >
                Email
                <li className="fa fa-envelope"></li>
              </a>
              <a
                className="link"
                href="https://web.facebook.com/Vicky-Impex-109714995216107"
              >
                Facebook
                <li className="fa fa-facebook"></li>
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/hamza-rafique-mehar/"
              >
                linkedin
                <li className="fa fa-linkedin"></li>
              </a>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Hero;
