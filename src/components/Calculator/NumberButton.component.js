import React from "react";
import { useDispatch } from "react-redux";

import { computation } from "./calculator/calculator.reducer";

export const NumberButton = ({value}) => {

  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(computation(value));
  }
  return (
    <button
      onClick={() => handleClick(value)} 
      className="number"
      name={value}
    >
      {value}
    </button>
  );
};

export default NumberButton;

