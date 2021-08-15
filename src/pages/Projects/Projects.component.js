import React from "react";

import Project from "../../components/Project/Project.component";

import "./Projects.styles.css";

const Projects = props => {
  const projects = [{
    id: 1,
    name: "Tic Tac Toe Game",
    description: "Implemented in React library. The game has a time-travel history. Implemented React best practices and modern patterns. The game offers good UI interaction. The game also responsive. Maintainable and clear code structure.",
    "link": "/tic-tac-toe"
  }, {
    id: 2,
    name: "Calculator Applicaton",
    description: "Calculator application implemented in React with Redux Toolkit. It performs all math operations. Edge cases also has been taken into account.",
    "link": "/calculator"
  }];

  return (
    <div className="pt-4 projects">
      {projects && projects.map(({id, ...otherProject}) => {
        return (<Project key={id} {...otherProject} />);
      })}
      {projects === null && <h3 className="center">This Page is in Progress!</h3>}
    </div>
  );
};

export default Projects;

