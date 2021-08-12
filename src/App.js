import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import './App.css';

import Home from "./pages/Home/Home.component";
import About from "./pages/About/About.component";
import Projects from "./pages/Projects/Projects.component";
import Skills from "./pages/Skills/Skills.component";
import Contact from "./pages/Contact/Contact.component";
import TicTacToeGame from "./components/TicTacToeGame/Game";
import Calculator from "./components/Calculator/Calculator.component";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App(props) {
  const handleCloseIcon = e => {
    const parent = e.target.closest("mobile-menu");
    parent.classList.toggle("open");
  }

  return (
    <div className="app">
      <div className="mobile-menu hidden-lg">
        <span className="close-icon" onClick={handleCloseIcon}></span>
        <ul className="navbar__links">
          <NavLink to="/profile" exact>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/skills">Skills</NavLink>
        </ul>
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/profile" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/tic-tac-toe" component={TicTacToeGame} />
        <Route path="/calculator" component={Calculator} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
