import React from "react";

function Project(props) {
  return (
 




    <div className="row" style={{padding:"3px", backgroundColor:"lightgray"}}>
       <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <img className="card-img-top" src={props.image} alt="Card cap" />
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a
          href={props.deploy}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ margin: "5px" }}
        >
          Go to deployed app
        </a>
        <a
          href={props.repo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ margin: "5px" }}
        >
          Go to repository to view code
        </a>
      </div>
    </div>
  </div>
 
</div>
  
      
      
  );
   
    
}

export default Project;
