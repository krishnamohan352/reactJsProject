import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async (page) => {
    // await new Promise((res) => setTimeout(res, 1000));
    // const response = await fetch('https://dummyjson.com/products');

    const limit = 12;
    const skip = (page - 1) * limit;
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const jsonResponse = await response.json();
    return jsonResponse.products;
})

const initialState = {
    items: [],
    status: null,
    error: null
}

const productsSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // state.status = 'succeeded';
                // // state.items = action.payload;
                // state.items = [...state.items, ...action.payload]
                const newItems = action.payload;

                const existingIds = new Set(state.items.map(item => item.id));

                const filteredItems = newItems.filter(item => !existingIds.has(item.id));

                state.items = [...state.items, ...filteredItems];
                state.status = "succeeded";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export default productsSlice.reducer;