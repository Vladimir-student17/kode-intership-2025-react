import { configureStore } from "@reduxjs/toolkit"; // ← исправленный импорт
import sortReducer from "./slices/sortSlice";
import modalReducer from "./slices/modalWindowSlice";
import togglePathPage from "./slices/togglePageSlice";
import toggleTheme from "./slices/toggleTheme";
import { userApi } from "./getUsers";
import { testApi } from "./testApi";
import { getCode500 } from "./getCode500";

export const store = configureStore({
  reducer: {
    sortType: sortReducer,
    showModal: modalReducer,
    page: togglePathPage,
    isDark: toggleTheme,
    [userApi.reducerPath]: userApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [getCode500.reducerPath]: getCode500.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(
        userApi.middleware,
        testApi.middleware,
        getCode500.middleware
      ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;