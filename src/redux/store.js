import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@redux/slices/authSlice';
import { rootApi } from '@/services/rootApi';
import snackBarReducer from '@/redux/slices/snackBarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackBar: snackBarReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});
