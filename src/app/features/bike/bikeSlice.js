import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const [bike, setBike] = useState([]);
const [bikes, SetBikes] = useState([]);

export const bikeSlice = createSlice({
    name: 'bike',
    initialState: {
        bikes: bikes,
        bike: bike
    },
    reducers: {

    }
})

export const {} = bikeSlice.actions;

export default bikeSlice.reducer;

