import React from "react";

function Project(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a
          href={props.deploy}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Go to deployed app
        </a>
        <a
          href={props.repo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Go to repository to view code
        </a>
      </div>
    </div>
  );
}

export default Project;
