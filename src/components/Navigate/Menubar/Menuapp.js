import React, { Fragment } from "react";

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styling
import "./App.css";
// import {  Switch, Route } from "react-router-dom";
import { Navigateapp } from "../Navigateapp";
// data
// import dataa from "./menudata.json";

// components
import Menu from "./Menunav/Menu";

import { Home } from "../../Pages/Home";
import { About } from "../../Pages/About";
import { Blog } from "../../Pages/Blog";
import { Contact } from "../../Pages/Contact";

export const Menuapp = () => {
  return (
    <Fragment>
      <Router>
        <div className="navrender pages">
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/navigate" component={Navigateapp} />
            {/* <Route exact path="/menuapp" component={Menuapp} /> */}
            {/* <Route exact path="/navtri" component={Navtriangle} /> */}
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};
// export default Menuapp;
