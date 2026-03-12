"use client"
import { configureStore } from '@reduxjs/toolkit'
import typeReducer from '../features/type/type_slice'
import bikeReducer from '../features/bike/bike_slice'
import firmReducer from '../features/firm/firmSlice'

var store = configureStore({
  reducer: {
    type: typeReducer,
    bike: bikeReducer,
    firm: firmReducer,
  },
});

export default store;