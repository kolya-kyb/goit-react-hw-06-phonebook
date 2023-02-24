import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
