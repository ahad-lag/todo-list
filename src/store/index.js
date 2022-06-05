import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  todo : todoSlice
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)