import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "/";

const currentPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    togglePage: (state, { payload }: PayloadAction<string>) =>
      (state = payload),
  },
});

export const { togglePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
