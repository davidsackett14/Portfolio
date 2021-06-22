import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Project from "../components/projectcard/projectCard";
import projects from "../projects.json";

const projectArray = projects;
export default function ProjectPage() {
   
  return (
   <div>
     <Header />
      {projectArray.map(project => (
            <Project
              
              image={project.image}
              title={project.title}
              desc={project.desc}
              deploy={project.deploy}
              repo={project.repo}
            />
          ))}
      <Footer />
   </div>
     
    
  );
}
