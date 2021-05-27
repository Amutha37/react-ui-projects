import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <container>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            CodeReact
            <i class="fab fa-react"></i>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link exact to="/" activeClassName="active" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
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
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className='{click ? "fas fa-items" : "fas fa-bars}'></i>
          </div>
        </div>
      </nav>
    </container>
  );
};

export default NavBar;
