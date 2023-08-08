import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import { invoiceReducer } from "./invoiceSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "invoice",
  storage,
  whitelist: ["userDataInvoices"],
};

export const store = configureStore({
  reducer: {
    invoice: persistReducer(authPersistConfig, invoiceReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
