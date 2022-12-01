import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk(
    'products/getProducts',
    async (thunkApi) => {
        const response = await fetch('https://6378cea27eb4705cf274e216.mockapi.io/games')
        const result = await response.json();

        return result;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        entities: [],
    },

    extraReducers: {
        [getProducts.fulfilled]: (state, { payload }) => {
            state.entities = payload;
        }
       
    }
})

export default productsSlice.reducer;

export { getProducts };