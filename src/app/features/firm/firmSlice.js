import { createSlice } from "@reduxjs/toolkit";

export const firmSlice = createSlice({
    name: 'firm',
    initialState: {
        firmId: 0
    },
    reducers: {
        setFirmId: (state, action) => {
            state.firmId = action.payload;
        }
    }
})

export const { setFirmId } = firmSlice.actions;

export default firmSlice.reducer;