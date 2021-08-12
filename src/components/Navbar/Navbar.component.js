import React from "react";
import {NavLink, Link} from "react-router-dom";

import "./Navbar.styles.css";

const Navbar = props => {
  const handleMobileMenu = e => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("open");
  }
  return (
    <nav className="navbar">
      <Link to ="/profile" className="navbar__logo"><span >Web developer</span></Link>
      <span className="navbar__author">Nematjon Abdulloev</span>
      <ul className="navbar__links hidden-md">
        <NavLink to="/profile" exact>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </ul>
      <div className="menu-icon-container" onClick={handleMobileMenu}>
        <div className="hidden-lg menu-icon"></div>
      </div>
    </nav>
  );
}

export default Navbar;
