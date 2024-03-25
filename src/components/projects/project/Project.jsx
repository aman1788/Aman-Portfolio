import React from "react";
import "./Project.css";
import TechStack from "./tech-stack/TechStack";

import dummy from "../../../assets/images/projects-images/project-dummy-img.jpg";

const Project = ({ img, name, description, techStack }) => {
  return (
    <div className="project-container">
      <img src={img} alt={`${name} image`} />
      <h3>{name}</h3>
      <p>
        A ReactNative-Typescript mobile app with a node.js and Mongodb backend
      </p>

      <TechStack techStack={["React", "TypeScript", "Node", "MongoDB"]} />
    </div>
  );
};

export default Project;
