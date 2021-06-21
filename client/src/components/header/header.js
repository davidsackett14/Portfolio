import React from "react";
import { Link } from "react-router-dom";
import AllPagesPDFViewer from "../../components/pdf/all-pages";
import samplePDF from "../pdf/resume.pdf"
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
      <div className="all-page-container">
        <a href={<AllPagesPDFViewer pdf={samplePDF}/>}>resume</a>
      </div>
      </span>
      
      <span className="navbar justify-content-right ">
              <a href="tel:+1-555-555-1212">555-555-1212</a>
      </span>
     
    </nav>
  );
}

export default Header;
