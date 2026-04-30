import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // state.items.push(action.payload)
            // localStorage.setItem('cart', JSON.stringify(state.items))
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
                console.log('existingItem');

            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
            // localStorage.setItem('cart', JSON.stringify([...state.items]));
        },
        removeItem: (state, action) => {
            // const cartData = state.items.filter(item => item.id != action.payload.id);
            // state.items = cartData;
            // localStorage.setItem('cart', JSON.stringify(cartData));
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        item => item.id !== action.payload.id
                    );
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            );

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart');
        }
    }
})

export const { addItem, removeItem, deleteItem, clearCart } = addToCart.actions;
export default addToCart.reducer;