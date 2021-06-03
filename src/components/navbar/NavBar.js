import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link exact to="/" className="nav-logo">
          CodeReact
          <i className="fab fa-react"></i>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link exact to="/" ClassName="active" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link exact to="/about" ClassName="active" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link exact to="/contact" ClassName="active" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/navigate"
              activeClassName="active"
              className="nav-links"
            >
              Navigation bar2
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
        </div>
      </div>
    </nav>
  );
};
