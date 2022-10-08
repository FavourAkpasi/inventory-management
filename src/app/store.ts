import { configureStore } from "@reduxjs/toolkit";
import machineTypeReducer from "../features/machineTypeSlice";

const store = configureStore({
  reducer: {
    machineType: machineTypeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
