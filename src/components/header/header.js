import React, { useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "../../images/logo-01.png";
import "./style.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar-header" onClick={(e) => e.stopPropagation()}>
        <MDBContainer>
          <div className="nav-container">
            <a exact href="/" className="nav-logo">
              <img src={logo} alt="vicky impex" width="150" height="65" />
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="#home"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  
                  href="#products"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://wa.me/c/923107242237"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  target="_blank"
                  rel="noreferrer"
                >
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#custom"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Custom Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/contact"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </MDBContainer>
      </nav>
    </>
  );
}
