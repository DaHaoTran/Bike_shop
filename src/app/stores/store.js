"use client"
import { configureStore } from '@reduxjs/toolkit'
import typeReducer from '../features/type/type_slice'

var store = configureStore({
  reducer: {
    type: typeReducer,
  },
});

export default store;