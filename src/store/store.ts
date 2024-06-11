import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../slice/counterSlice';
import posOrderSlice from '../slice/posOrderSlice';
import userSlice from '../slice/currentUser'; 
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import OrderListSlice from '../slice/OrderListSlice';

// Combine reducers into a single root reducer
const rootReducer = combineReducers({
  counter: counterSlice,
  order: posOrderSlice,
  user: userSlice,
  orderList: OrderListSlice
});


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
