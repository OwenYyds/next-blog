import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./modules/tokenStore";
import userinfoReducer from "./modules/userInfoStore";
const store = configureStore({
  reducer: {
    userInfo: userinfoReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
