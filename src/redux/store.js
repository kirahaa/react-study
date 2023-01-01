import todo from './todo'
import layout from './layout'
import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit";

const combineReducer = combineReducers({
  todo,
  layout
})

const store = configureStore({
  reducer: combineReducer
})

export default store