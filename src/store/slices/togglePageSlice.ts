import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "/";

const currentPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    togglePage: (_, { payload }: PayloadAction<string>) => {
      return payload;
    },
  },
});

export const { togglePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
