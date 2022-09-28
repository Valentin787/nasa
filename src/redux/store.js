import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from 'redux-persist/lib/storage';
import itemsReducers from "./spaceX/reducers";
import favoriteDragonsReducer from './favoriteDragons/slice';
import authReducer from './auth/authSlice'; 

const persistAuthConfig = {
  key: 'token',
  storage,
  whitelist: ['token','refreshToken']
}

const store = configureStore({
  reducer: {
    auth:persistReducer(persistAuthConfig,authReducer),
    base: itemsReducers,
    dragons: favoriteDragonsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
