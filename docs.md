# Note code

## 1. Áp dụng Redux persist

**Trước khi sử dụng:**

```js
export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackBar: snackBarReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});
```

**Sau khi sử dụng:**

```js
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, {
  auth: authReducer,
  snackBar: snackBarReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export const store = configureStore({
  persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});
```
