import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE === "development",
});
