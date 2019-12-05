import React from "react";

import Project from "../../components/Project/Project.component";

import "./Projects.styles.css";

const Projects = props => {
  const projects = [{
    id: 1,
    name: "ChatsApp",
    description: "React and NodeJS application. State implemented in Redux. Server-side in Express, RESTful API architecture.MongoDB for data storage. JSON Web Tokens for user's tokens, bcryptjs for encrypting passwords. Error handling implemented in server and client sides. This application is fully responsive. Structured to expand and future project support. Implemented B.E.M. methodology and CSS Modules.",
    link: "https://chatsapp-client-na.herokuapp.com"
  }, {
    id: 2,
    name: "BurgerConstructor",
    link: "https://burger-constructor-nematjon.herokuapp.com",
    description: "Beginning to end the full-stack project in React. Implemented Hooks API and modern React work-flow. The state implemented in the Redux state manangement library. Back-end  and data storage implemented in Firebase. Responsive design and mobile-first technique. Implemented data serialization in input fields."
  }, {
    id: 3,
    name: "Tik Tak Toe Game",
    link: "https://burger-constructor-nematjon.herokuapp.com",
    description: "Implemented in React library. The game has a time-travel history. Implemented React best practices and modern patterns. The game offers good UI interaction. The game also responsive. Maintainable and clear code structure."
  }, {
    id: 4,
    name: "BlogsApp",
    link: "https://blogsapp-nematjon.herokuapp.com",
    description: "Implemented in pure JavaScript. Server-side in NodeJS with Express. Data storage implemented in the MongoDB. User's authentication implemented with sessions. Used OOP paradigm for better code maintainability. Responsive and mobile-first design. Implemented data sanitization to prevent cross-site resource forging."
  }];

  return (
    <div className="pt-4 projects">
      {projects.map(({id, ...otherProject}) => {
        return (<Project key={id} {...otherProject} />);
      })}
    </div>
  );
};

export default Projects;

