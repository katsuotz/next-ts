import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import counterReducer from '@/features/counter/counterSlice'
import poinReducer from '@/features/poin/poinSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'

const persistConfig = {
  key: 'poinApp',
  storage,
  whitelist: ['auth'],
}

const baseReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  poin: poinReducer,
})

const persistedReducer = persistReducer(persistConfig, baseReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
