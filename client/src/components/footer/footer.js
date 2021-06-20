import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <div>  
          
            <footer
      className="text-center text-white"
      style={{ backgroundColor: "f1f1f1" }}
    >
       
      <div className="container pt-4">
      <section className="mb-4">
      <h6 className="text-center text-black">Please visit me at Instagram, LinkedIn, GitHub, or reach out by E-mail</h6>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: (0, 0, 0, 0.2) }}
      >
       Please visit me at Instagram, LinkedIn, GitHub, or reach out by E-mail
       
      </div>
      </section>
        <section className="mb-4">
          <Link
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="https://www.instagram.com/dsi_hvac/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-instagram"></i>
          </Link>
          <Link
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="https://www.linkedin.com/in/david-sackett-5324a911b/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            to="https://github.com/davidsackett14"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fa fa-github"></i>
          </Link>
          <a
            target="_blank"
            href="mailto:david@dsihvac.com"
            className="link-primary btn btn-link btn-floating btn-lg text-dark m-1"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: (0, 0, 0, 0.2) }}
      >
        © 2021 Copyright:
        <a className="text-dark" href="mailto:david@dsihvac.com">
          David Sackett
        </a>
      </div>
    </footer></div>

  );
}

export default Footer;
