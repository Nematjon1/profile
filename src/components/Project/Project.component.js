import React from "react";
import { Link } from "react-router-dom";

import "./Project.styles.css";

const Project = ({name, link, description}) => {
  return (
    <div className="project">
      {/* <img src={ alt="Project photo" /> */}
      <Link className="project__link" to={link}>{name}</Link>
      <p className="project__description">{description}</p>
    </div>
  );

};

export default Project;
