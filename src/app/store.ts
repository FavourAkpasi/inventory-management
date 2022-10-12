// redux store is where all the states are held. this store is sent to the main.tsx file so that all the states can be accessible throughout the app.
import { configureStore } from "@reduxjs/toolkit";
// machineReducer is where the machine states are managed, updated, etc. we import here in the store and save it so the store can send to the required locations in the app.
import machineReducer from "../features/machineSlice";
// storage is redux toolkit's way of using local storage
import storage from "redux-persist/lib/storage";
// all these other jagons are required for some fucked up reason to use local storage
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// persistConfig is how we tell our app to use the key "machine" to save our state in local storage. If you open your console and check application, you should see the key "machine" with all the state information.
const persistConfig = {
  key: "machine",
  storage,
};

// persistedReducer is telling redux toolkit to save the state in our machineReducer to local storage which we defined in persistConfig
const persistedReducer = persistReducer(persistConfig, machineReducer);

// here we are saving our states which is now in persistedReducer in our store so we can move it around the app
const store = configureStore({
  reducer: {
    persistedReducer,
  },
  // this jargon is required too to avoid typeScript wahala.
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// then we export the store so we can import it in main.tsx
export default store;
// this is required so we can create the react-redux hook types. check hooks file in app folder for clarity.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// persistor is required in main.tsx for the local storage management. we imported it from "redux-persist at the top. check"
export const persistor = persistStore(store);
