import { configureStore } from "@reduxjs/toolkit/react";
import sortReducer from "./slices/sortSlice";
import modalReducer from "./slices/modalWindowSlice";
import togglePathPage from "./slices/togglePageSlice";
import { userApi } from "./getUsers";
import { testApi } from "./testApi";
import { getCode500 } from "./getCode500";

const store = configureStore({
  reducer: {
    sortType: sortReducer,
    showModal: modalReducer,
    page: togglePathPage,

    [userApi.reducerPath]: userApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [getCode500.reducerPath]: getCode500.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      testApi.middleware,
      getCode500.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
