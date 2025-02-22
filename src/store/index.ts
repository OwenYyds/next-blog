import { configureStore } from "@reduxjs/toolkit";
import userInfoStore from "./modules/userInfoStore";
const store = configureStore({
  reducer: {
    userInfo: userInfoStore,
  },
});

export default store;
