import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authed: false,
  notesList: [],
  userName: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, { payload }) {
      state.authed = true;
      if (payload) {
        state.userName = payload;
      }
    },
    userLogout(state) {
      state.authed = false;
    },
    updateNotes(state, { payload }) {
      if (payload) {
        state.notesList = payload;
      }
    },
    addNotes(state, { payload }) {
      if (payload) {
        // @ts-ignore
        const existingIndex = state.notesList.findIndex(note => note.id === payload.id);
        if (existingIndex !== -1) {
          // @ts-ignore
          state.notesList[existingIndex] = { ...state.notesList[existingIndex], ...payload };
        } else {
          // @ts-ignore
          state.notesList = [...state.notesList, payload];
        }
      }
    },
    deleteNoteById(state, { payload }: { payload: number }) {
      // @ts-ignore
      state.notesList = state.notesList.filter(note => note.id !== payload);
    }

  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
