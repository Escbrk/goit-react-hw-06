import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";
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
import storage from "redux-persist/lib/storage";

const persitdedContactsReducer = persistReducer(
  {
    key: "contacts",
    storage,
  },
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persitdedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
