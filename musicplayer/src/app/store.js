import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../feature/musicSlice";

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});
