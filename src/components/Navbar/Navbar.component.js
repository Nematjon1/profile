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
      <ul className="navbar__links">
        <NavLink to="/profile" exact>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </ul>
      <div className="show-md hidden-lg menu-icon-container" onClick={handleMobileMenu}>
        <div className="menu-icon"></div>
      </div>
    </nav>
  );
}

export default Navbar;
