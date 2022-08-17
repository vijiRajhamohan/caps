import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            let index = state.products.indexOf(action.payload);
            state.quantity -= 1;
            state.products.splice(index, 1);
            state.total -= state.total / action.payload.quantity;
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;