import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a>about</a>
        </li>
        <li>
          <a>projects</a>
        </li>
        <li>
          <a>resume</a>
        </li>
        <li>
          <a>contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
