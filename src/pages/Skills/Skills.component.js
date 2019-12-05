import React from "react";

import "./Skills.styles.css";

const Skills = props => {
  return (
    <div className="skills pt-4">
      <div className="skills__group">
        <h3 className="skills__title">Machine Languages</h3>
        <ul className="skills__list">
          <li>JavaScript - Dynamicly typed, interpreted scripting language.</li>
          <li>CSS3 - Cancading Style Sheets.</li>
          <li>HTML5 - Hyper Text Markup Language.</li>
          <li>NodeJS - JavaScript based run-time environment.</li>
        </ul>
      </div>
      <div className="skills__group">
        <h3 className="skills__title">Human Languages</h3>
        <ul className="skills__list">
          <li>Uzbek</li>
          <li>Tajik</li>
          <li>English</li>
          <li>Russian</li>
          <li>Arab</li>
          <li>Turkish</li>
        </ul>
      </div>
      <div className="skills__group">
        <h3 className="skills__title">Related Skills</h3>
        <ul className="skills__list">
          <li>OOP and Functional Programming paradigms</li>
          <li>Design Patterns</li>
          <li>Data Structures</li>
          <li>Responsive Design</li>
          <li>Express web Framework</li>
          <li>MongoDB</li>
          <li>Github</li>
          <li>Git</li>
          <li>Sass</li>
          <li>Webpack</li>
          <li>Linux(Ubuntu)</li>
          <li>Ajax</li>
          <li>Promise API</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

