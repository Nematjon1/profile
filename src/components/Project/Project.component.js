import React from "react";

import "./Project.styles.css";

const Project = ({name, link, description}) => {
  return (
    <div className="project">
      {/* <img src={ alt="Project photo" /> */}
      <a className="project__link" href={link}>{name}</a>
      <p className="project__description">{description}</p>
    </div>
  );

};

export default Project;
