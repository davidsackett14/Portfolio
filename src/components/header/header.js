import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">
        
       <h4><b>D</b>avid <b>S</b>ackett</h4> 
      
      </span>
      <span className="navbar-brand">
        <Link to="/">Home</Link>
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

      <span className="col-md-4 offset-md-4">
        <a href="tel:+1-385-226-7667">385-226-7667</a>
      </span>
    </nav>
  );
}

export default Header;
