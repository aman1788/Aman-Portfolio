import React from "react";
import "./TechStack.css";

const TechStack = ({ techStack }) => {
  return (
    <div className="techStack-container">
      {techStack.map((tech, index) => (
        <div className="tech" key={index}>
          <h6>{tech}</h6>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
