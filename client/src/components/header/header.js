import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">David Sackett</span>
      <span className="navbar-brand">
        <Link to="/">About</Link>
      </span>
      <span className="navbar-brand">
        <Link to="/projects">Projects</Link>
      </span>
      <span className="navbar-brand">
        <a
          href="https://github.com/davidsackett14/Portfolio/raw/main/client/src/components/header/resume.pdf"
          download
        >
          download resume
        </a>
      </span>

      <span className="navbar justify-content-right ">
        <a href="tel:+1-385-226-7667">385-226-7667</a>
      </span>
    </nav>
  );
}

export default Header;
