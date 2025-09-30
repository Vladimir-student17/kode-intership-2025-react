import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PageState = string;

const initialState: PageState = "/";

const currentPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    togglePage: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

export const { togglePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
