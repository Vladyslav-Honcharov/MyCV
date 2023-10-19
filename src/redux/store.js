// store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    // Другие редукс-слайсы, если они есть
  },
});

export default store;
