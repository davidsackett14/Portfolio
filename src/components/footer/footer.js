import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: (0, 0, 0, 0.2) }}
            >
              Please visit me at Instagram, LinkedIn, GitHub, or reach out by
              E-mail
            </div>
          </section>
    <section className="mb-4">
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: (0, 0, 0, 0.2) }}
            >
              Please visit me at Instagram, LinkedIn, GitHub, or reach out by
              E-mail
            </div>
          </section>
          <section className="mb-4">
            <a
              target="_blank"
              href={"https://www.instagram.com/dsi_hvac1/"}
              className="link-primary btn btn-link btn-floating btn-lg text-dark m-1"
              rel="noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/david-sackett-5324a911b/"
              className="link-primary btn btn-link btn-floating btn-lg text-dark m-1"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>

            <a
              target="_blank"
              href="https://github.com/davidsackett14"
              className="link-primary btn btn-link btn-floating btn-lg text-dark m-1"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              target="_blank"
              href="mailto:david@dsihvac.com"
              className="link-primary btn btn-link btn-floating btn-lg text-dark m-1"
              rel="noreferrer"
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
      </footer>
    </div>
  );
}

export default Footer;
