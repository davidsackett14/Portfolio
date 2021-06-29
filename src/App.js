import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ProjectPage from "./pages/projects";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}
