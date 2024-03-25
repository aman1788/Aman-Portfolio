import React from "react";
import "./Projects.css";
import Project from "./project/Project";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>projects</h2>
      <div className="test">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
