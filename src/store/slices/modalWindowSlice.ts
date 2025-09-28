import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const modalState = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      return !state;
    },
    openModal: () => {
      return true;
    },
    closeModal: () => {
      return false;
    },
  },
});

export const { toggleModal, openModal, closeModal } = modalState.actions;

export default modalState.reducer;
