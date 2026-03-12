"use client"
import { configureStore } from '@reduxjs/toolkit'
import typeReducer from '../features/type/type_slice'
import bikeReducer from '../features/bike/bike_slice'

var store = configureStore({
  reducer: {
    type: typeReducer,
    bike: bikeReducer,
  },
});

export default store;