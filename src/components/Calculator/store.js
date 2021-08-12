import { configureStore } from "@reduxjs/toolkit";

import calcReducer from "./calculator/calculator.reducer";

const store = configureStore({
	reducer: {
        calc: calcReducer
    }
});


export default store;

