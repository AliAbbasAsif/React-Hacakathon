import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: {
    email: " ",
    password: " ",
    username: " ",
  },
  reducers: {
    add(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.username = action.payload.username;
    },
    edit(state, action) {    },
    delete(state, action) {},
  },
});
export const { edit,add } = loginSlice.actions;

export default loginSlice.reducer;
