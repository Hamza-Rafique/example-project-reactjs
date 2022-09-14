import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-01.png";
import "./style.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="vicky impex" width="150" height="65" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/product"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/catalog"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/design"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                 Custom Design
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
