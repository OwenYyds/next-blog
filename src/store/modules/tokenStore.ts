import { getToken, request } from "@/services";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "..";

const tokenStore = createSlice({
  name: "token",
  initialState: {
    token: getToken() || "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      setToken(action.payload);
    },
  },
});

const { setToken } = tokenStore.actions;

const fetchToken = () => async (dispatch: AppDispatch) => {
  const response = await request("/token");
  const data = await response.json();
  dispatch(setToken(data.token));
};

const tokenReducer = tokenStore.reducer;

export { setToken, fetchToken };

export default tokenReducer;
