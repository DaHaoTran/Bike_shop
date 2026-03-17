import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        types: []
    },
    reducers: {
        addTypeS: (state, action) => {
            state.types = action.payload;
        },
        clearTypeS: (state, action) => {
            state.types = []
        }
    }
});

export const { addTypeS, clearTypeS } = typeSlice.actions;

export default typeSlice.reducer;