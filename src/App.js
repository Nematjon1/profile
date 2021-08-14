import React, { Suspense, lazy } from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import './App.css';

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Home from "./pages/Home/Home.component";

const About = lazy(() =>  import("./pages/About/About.component"));
const Projects = lazy(() => import("./pages/Projects/Projects.component"));
const Skills = lazy(() => import("./pages/Skills/Skills.component"));
const Contact = lazy(() => import("./pages/Contact/Contact.component"));
const TicTacToeGame = lazy(() => import("./components/TicTacToeGame/Game"));
const Calculator = lazy(() => import("./components/Calculator/Calculator.component"));

function App(props) {

  const handleMobileMenu = e => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("open");
  }

  return (
    <div className="app">
      <div className="mobile-menu hidden-lg">
        <span className="close-icon" onClick={handleMobileMenu}></span>
        <ul className="mobile-menu__list">
          <li>
            <NavLink to="/profile" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </div>
      <Navbar />
      <Suspense fallback={<div>Loading....</div>}>
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
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
