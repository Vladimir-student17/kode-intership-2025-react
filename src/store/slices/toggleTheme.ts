import { createSlice } from "@reduxjs/toolkit";

const stored = localStorage.getItem("isDark") || "false";
let initialState: boolean = JSON.parse(stored);

const isDark = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: boolean) => {
      return !state;
    },
  },
});

export const { toggleTheme } = isDark.actions;

export default isDark.reducer;
