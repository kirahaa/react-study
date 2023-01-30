import todo from './todo'
import layout from './layout'
import feed from './feed'
import auth from './auth'
import {combineReducers} from "redux"
import {configureStore} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const combineReducer = combineReducers({
  todo,
  layout,
  feed,
  auth
})

const persistedReducer = persistReducer(persistConfig, combineReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export default store