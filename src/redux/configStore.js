import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./module/counter";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
