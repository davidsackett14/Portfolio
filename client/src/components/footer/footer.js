import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "f1f1f1" }}
    >
      <div className="container pt-4">
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
        </section>
      </div>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: (0, 0, 0, 0.2) }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
