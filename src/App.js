import React from "react";
import { Navigateapp } from "./Components/Navigate/Navigateapp";
import { Navbar } from "./Components/Navbar/Navbar";
import { Menuapp } from "./Components/Navigate/Menubar/Menuapp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";
import "./styles.css";

const App = () => {
  return (
    <div className="navrender pages">
      <Router>
        <Navbar />
        {/* <Navtriangle /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/navigate" component={Navigateapp} />
          <Route exact path="/menuapp" component={Menuapp} />
          {/* <Route exact path="/navtri" component={Navtriangle} /> */}
        </Switch>
      </Router>
    </div>
  );
};
export default App;
