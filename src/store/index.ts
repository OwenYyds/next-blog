import { configureStore } from "@reduxjs/toolkit";
import userInfoStore from "./modules/userInfoStore";
const store = configureStore({
  reducer: {
    userInfo: userInfoStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
