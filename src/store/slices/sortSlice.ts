import type { SortType } from "@/types/typeSort";
import { createSlice } from "@reduxjs/toolkit";

const initialState = "abc" as SortType;;

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
  },
});

export const { setAbcType, setBirthdayType } = sortTypeSlice.actions;
export default sortTypeSlice.reducer;
