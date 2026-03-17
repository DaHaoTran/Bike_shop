import { createSlice } from "@reduxjs/toolkit";

export const bikeSlice = createSlice({
    name: "bike",
    initialState: {
        bike: {},
        bikes: []
    },
    reducers: {
        addBike: (state, action) => {
            state.bike = action.payload;
        },
        addBikeS: (state, action) => {
            state.bikes = action.payload;
        },
        clearBikes: (state) => {
            state.bikes = []
        },
    }
});

export const { addBike, addBikeS, clearBikes } = bikeSlice.actions;

export default bikeSlice.reducer;