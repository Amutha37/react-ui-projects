import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navtriangle.css";

function Navtringle() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-toggle js-nav-menu-toggle">
          <Link exact to="/" className="nav-logo">
            CodeReact
            <i class="fab fa-react"></i>
          </Link>
          {/* <span className="nav-logo" onClick={handleClick}></span> */}
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item nav-item">
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
        </div>
      </nav>
    </div>
  );
}

export default Navtringle;
