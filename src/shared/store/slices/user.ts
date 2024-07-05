import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authed: false,
  notesList: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state) {
      state.authed = true;
    },
    userLogout(state) {
      state.authed = false;
    },
    setNotes(state, { payload }) {
      if (payload) {
        state.notesList = payload;
      }
    }
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
