// import "./styles.css";
// import Earth from "./components/Earth";
// import NavbarApp from "./components/navbar/NavbarApp";
// function App() {
//   return (
//     <div className="App">
//       <Earth />
//       <NavbarApp />
//     </div>
//   );
// }

// import "./App.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
// import Navtriangle from "./components//navbar/Navtriangle";
const App = () => {
  return (
    <div className="navrender pages">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
