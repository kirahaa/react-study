import todo from './todo'
import layout from './layout'
import feed from './feed'
import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit";

const combineReducer = combineReducers({
  todo,
  layout,
  feed
})

const store = configureStore({
  reducer: combineReducer
})

export default store