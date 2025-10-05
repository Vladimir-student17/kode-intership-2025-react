import type { SortType } from "@/types/typeSort";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = "abc" as SortType;

const sortTypeSlice = createSlice({
  name: "sortType",
  initialState,
  reducers: {
    setAbcType: (): SortType => {
      return "abc";
    },
    setBirthdayType: (): SortType => {
      return "birthday";
    },
    setValueType: (state, { payload }: PayloadAction<SortType>) => {
      state = payload;
    },
  },
});

export const { setAbcType, setBirthdayType, setValueType } =
  sortTypeSlice.actions;
export default sortTypeSlice.reducer;
