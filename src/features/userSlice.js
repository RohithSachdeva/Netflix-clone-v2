import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //piece of state
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
//Export actions that affect the user section of the global store

export const selectUser = (state) => state.user.user;
//Create a selector that allows us to grab state from the global store

export default userSlice.reducer;
