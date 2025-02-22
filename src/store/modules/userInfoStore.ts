import { createSlice } from "@reduxjs/toolkit";

const userInfoStore = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {
      name: "John Doe",
      email: "eee",
      phone: "123",
      address: "123",
      role: "user",
    },
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

const { setUserInfo } = userInfoStore.actions;

const reducers = userInfoStore.reducer;

export { setUserInfo };
export default reducers;
