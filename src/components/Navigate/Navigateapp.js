import React, { useState } from "react";
// import { Signin } from "./Button";
import { Link } from "react-router-dom";
import { Menuitems } from "./Menuitems";
import "./Navigateapp.css";

export const Navigateapp = () => {
  const [clicked, setClicked] = useState(false);
  // set the opposite icon on click hamburger or cross
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="Navbar-Item">
      {/* <h1 className="navbar-log">
        React<i class="fab fa-react"></i>
      </h1> */}
      <Link exact to="/" className="navbar-log">
        React
        <i className="fab fa-react"></i>
      </Link>
      <div className="men-icon" onClick={handleClicked}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}> </i>
      </div>
      <ul className={clicked ? "nav-men active" : "nav-men"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link exact to={item.to} className={item.cName}>
                {item.title}
              </Link>
              {/* <a href={item.url} className={item.cName}>
                {item.title}
              </a> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
// export default Navigateapp;
