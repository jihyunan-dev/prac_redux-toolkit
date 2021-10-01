// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "./module/counter";

export default configureStore({
  reducer: {
    counter,
  },
});
