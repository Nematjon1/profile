import React from "react";
import codeImage from "../../assets/code.jpg";

import "./Home.styles.css";

const HomePage = props => {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="motion">
          <img src={codeImage} alt="Code"/>
          <span className="text-muted image-ref">
          Photo by <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pankaj Patel</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </span>
  
        </div>
        
        <div className="main">
          <h1 className="main__title">Welcome, dear guest!</h1>
          <h3 className="main__subtitle">My name is Nematjon Abdulloev, I am a <strong>Web Developer</strong>.</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
