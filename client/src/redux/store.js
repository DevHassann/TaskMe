import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./slices/api-slice";
import authReducer from "./slices/auth-slice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
