import { configureStore } from "@reduxjs/toolkit";
import slounikSlice from "features/Slounik/slounikSlice";

const store = configureStore({
  reducer: {
    slounik: slounikSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
