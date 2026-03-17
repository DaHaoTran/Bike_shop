"use client"
import { configureStore } from '@reduxjs/toolkit'
import typeReducer from '../features/type/type_slice'
import bikeReducer from '../features/bike/bike_slice'
import firmReducer from '../features/firm/firmSlice'
import detailsReducer from '../features/bike_details/details_slice'

var store = configureStore({
  reducer: {
    type: typeReducer,
    bike: bikeReducer,
    firm: firmReducer,
    details: detailsReducer
  },
});

export default store;