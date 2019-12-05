import React from "react";
import {NavLink, Link} from "react-router-dom";

import "./Navbar.styles.css";

const Navbar = props => {
  return (
    <nav className="navbar">
      <Link to ="/" className="navbar__logo"><span >Web developer</span></Link>
      <span className="navbar__author">Nematjon Abdulloev</span>
      <ul className="navbar__links">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
