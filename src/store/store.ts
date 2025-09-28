import { configureStore } from "@reduxjs/toolkit/react";
import sortReducer from "./slices/sortSlice";
import modalReducer from "./slices/modalWindowSlice";

const store = configureStore({
  reducer: {
    sortType: sortReducer,
    showModal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
