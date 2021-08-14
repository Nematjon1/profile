import {createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentNum: "0",
  hasDecimal: false,
  hasOperator: false,
  isEmpty: true,
};
const calcSlice = createSlice({
  name: "calc",
  initialState: INITIAL_STATE,
  reducers: {
    computation(state, action) {
      switch(true) {
        case action.payload === "0" ||
            action.payload === "1" ||
            action.payload === "2" ||
            action.payload === "3" ||
            action.payload === "4" ||
            action.payload === "5" ||
            action.payload === "6" ||
            action.payload === "7" ||
            action.payload === "8" ||
            action.payload === "9" ||
            action.payload === "(" ||
            action.payload === ")":
          if(state.currentNum !== "0") {
            state.currentNum += action.payload;
            state.hasOperator = false;
            state.isEmpty = false;
            break;
          } else {
            state.currentNum = action.payload;
            state.isEmpty = false;
            break;
          }
        case action.payload === "sqrt(x)":
          if(!state.hasOperator) {
            state.currentNum = Math.sqrt(Number(state.currentNum));
            break;
          } else {
            state.currentNum = "0";
            state.isEmpty = true;
            break;
          }
        case action.payload === "^":
          if(!state.hasOperator) {
             state.currentNum += "**";
             state.hasOperator = true;
             state.hasDecimal = false;
             state.isEmpty = false;
             break;
          } else {
            const newNum = state.currentNum.slice(0, state.currentNum.length - 1);
            state.currentNum = newNum;
            state.currentNum += "**";
            state.isEmpty = false;
            break;
          }
        case action.payload === "+" ||
            action.payload === "-" ||
            action.payload === "*" ||
            action.payload === "/":
          if(!state.hasOperator) {
            state.currentNum += action.payload;
            state.hasOperator =  true;
            state.hasDecimal =  false;
            break;
          } else {
            const newNum = state.currentNum.slice(0, state.currentNum.length - 1);
            state.currentNum = newNum;
            state.currentNum += action.payload;
            break;
          }
        case action.payload === "C":
          state.currentNum = "0";
          state.hasOperator = false;
          state.hasDecimal = false;
          state.isEmpty = true;
          break;
        case action.payload === "=":
          // eslint-disable-next-line
          state.currentNum = Function("return " + state.currentNum)();
          state.hasOperator = false;
          state.hasDecimal = true;
          state.isEmpty = false;
          break;
        case action.payload === ".":
          if(!state.hasDecimal) {
            state.currentNum += ".";
            state.hasDecimal = true;
            break;
          }
          break;
        default:
          return state;
      }
    }
  }
})

export const { computation } = calcSlice.actions;
export default calcSlice.reducer;