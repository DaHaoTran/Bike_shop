import { createSlice } from "@reduxjs/toolkit";

export const bikeSlice = createSlice({
    name: "bike",
    initialState: {
        bike: {}
    },
    reducers: {
        addBike: (state, action) => {
            state.bike = action.payload;
        },
        clearBike: (state, action) => {
            state.bike = {}
        },
    }
});

export const { addBike } = bikeSlice.actions;

export default bikeSlice.reducer;