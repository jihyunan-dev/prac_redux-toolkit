import { createStore, combineReducers } from "redux";
import counter from "./module/counter";

const rootReducer = combineReducers({ counter });

const store = createStore(rootReducer);

export default store;
