import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';

import Home from "./pages/Home/Home.component";
import About from "./pages/About/About.component";
import Projects from "./pages/Projects/Projects.component";
import Skills from "./pages/Skills/Skills.component";
import Contact from "./pages/Contact/Contact.component";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
