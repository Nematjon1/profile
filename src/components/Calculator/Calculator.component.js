import React from "react";

import Display from "./Display.component";
import Numbers from "./Numbers.component";
import Operations from "./Operations.component";

import "./Calculator.styles.css";

const Calculator = () => {
  return (
    <div className="calculator-app">
      <h1 className="app__header">Calculator App</h1>
      <div>
        <Display />
        <div className="buttons">
          <Numbers />
          <Operations />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
