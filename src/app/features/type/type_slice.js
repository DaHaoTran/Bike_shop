import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        types: []
    },
    reducers: {
        addTypes: (state, action) => {
            state.types = action.payload;
        },
        clearTypes: (state, action) => {
            state.types = []
        }
    }
});

export const { addTypes, clearTypes } = typeSlice.actions;

export default typeSlice.reducer;