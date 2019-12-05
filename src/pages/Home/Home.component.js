import React from "react";

import "./Home.styles.css";

const HomePage = props => {
  return (
    <div className="pt-4 home">
      <div className="home__hero">
        <div className="motion">
        </div>
        
        <div className="main">
          <h1 className="main__title">Welcome, dear guest!</h1>
          <h3 className="main__subtitle">My name is Nematjon Abdulloev, I am a web developer.</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
