import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '@redux/slices/authSlice';
import { rootApi } from '@/services/rootApi';
import snackBarReducer from '@/redux/slices/snackBarSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [rootApi.reducerPath], // Không lưu trữ dữ liệu của api
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    snackBar: snackBarReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // TODO: Cần tìm hiểu thêm về serializableCheck
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rootApi.middleware),
});

export const persistor = persistStore(store);
