import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = true;

const inputState = createSlice({
  name: "inputState",
  initialState,
  reducers: {
    isShowInput: (state, { payload }: PayloadAction<boolean>) => {
      state = payload;
    },
  },
});

export const { isShowInput } = inputState.actions;

export default inputState.reducer;
