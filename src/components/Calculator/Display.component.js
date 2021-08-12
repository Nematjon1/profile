import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const currentNum = useSelector(state => state.calc.currentNum)
  const isEmpty = useSelector(state => state.calc.isEmpty);
  return (
    <div className={`display ${isEmpty ? "display__empty" : "display__notEmpty"}`}>
      {currentNum}
    </div>
  );
};
export default Display;
