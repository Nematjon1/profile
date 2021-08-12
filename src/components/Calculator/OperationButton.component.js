import React from "react";
import {useDispatch} from "react-redux";

import { computation } from "./calculator/calculator.reducer";

const OperationButton = ({value}) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(computation(value));
  };
  return (
    <button
      className={`operation`}
      onClick={clickHandler}
      name={value}
    >{value}</button>
  );
};

export default OperationButton;

