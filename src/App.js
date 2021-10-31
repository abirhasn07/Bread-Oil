import AOS from "aos";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-slick/dist/react-slick";
import "./App.css";
import database from "./database/database.js";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
const App = () => {
  AOS.init({
    startEvent: "DOMContentLoaded",
    once: true,
    mirror: true,
  });

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home database={database} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop database={database} />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
