import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return {
      isLogin: !!token,
      token: token || null,
    };
  }
  // fallback for SSR
  return { isLogin: false, token: null };
};

const initialState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.token = action.payload; // optional
    },
    logout(state) {
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
