import React from "react";
import Images from "../../images/rodin.jpg";

export default function AboutMe() {
  const profilePic = Images;
  return (
    <div>
      <div
        className="clearfix  p-4 text-dark"
        style={{ backgroundColor: "silver" }}
      >
        <img
          src={profilePic}
          className="col-md-2 float-md-end mb-3 ms-md-3"
          alt="..."
        />

        <p>
          <i
            style={{ fontFamily: "cursive", fontWeight: "bold", fontSize: 22 }}
          >
            Hello
          </i>
          , let me introduce myself. I am a student of life and in this season
          of learning I am exploring the world of web development. I have ran an
          HVAC company for the last 5 of my 12 years in the industry. I love
          architecture, building, and creation which has drawn me to the
          development of web apps. A way to build tangible things where the
          limits are only in one's mind.
        </p>

        <p>
          I am currently attending the University of Utah's coding bootcamp
          program. I am familiar with and have used the following languages and
          technologies:
          <p style={{ fontSize: 17, fontWeight: 7 }}>
            <div className="row">
              <ul className="col-sm-4 p-2">
                <li>HTML</li> <li>CSS</li>
                <li>JavaScript</li>
                <li>Slack</li>
              </ul>
              <ul className="col-sm-4 p-2">
                <li>Bootstrap</li> <li>Materialize</li>
                <li>JQuery</li>
                <li>Zoom</li>
              </ul>
              <ul className="col-sm-4 p-2">
                <li>React</li> <li>Handlebars</li>
                <li>MongoDB Atlas</li>
              </ul>
              <ul className="col-sm-4 p-2">
                <li>MongoDB Compass</li> <li>Sequalize</li>
                <li>Materialize</li>
                <li>Google Docs</li>
              </ul>
              <ul className="col-sm-4 p-2">
                <li>MySQL</li> <li>MySQL Workbench</li>
                <li>GitHub</li>
              </ul>
              <ul className="col-sm-4 p-2">
                <li>Heroku</li> <li>Chrome Dev Tools</li>
                <li>GitLab</li>
                <li>AWS authentication</li>
              </ul>
            </div>
          </p>
        </p>

        <p>
          I am looking forward to building new apps in a production environment
          as well as a personal endevour to further enrich my skills using more
          languages and and technologies.
        </p>
      </div>
    </div>
  );
}
