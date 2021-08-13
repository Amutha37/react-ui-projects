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
            <Link exact to="/" className="nav-links active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link exact to="/about" className="nav-links active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link exact to="/blog" className="nav-links active">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link exact to="/contact" className="nav-links active">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link exact to="/navigate" className="nav-links active">
              Navigation bar2
            </Link>
            {/* <li className="nav-item">
              <Link exact to="/menuapp" className="nav-links active">
                Menubutton
              </Link>
            </li> */}
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
        </div>
      </div>
    </nav>
  );
};
