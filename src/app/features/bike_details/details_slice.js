const { createSlice } = require("@reduxjs/toolkit");

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        details: []
    },
    reducers: {
        addDetailS: (state, action) => {
            state.details = action.payload;
        },
        clearDetailS: (state) => {
            state.details = []
        }
    }
})

export const { addDetailS, clearDetailS } = detailsSlice.actions;

export default detailsSlice.reducer;