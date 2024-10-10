import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        saveProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id); // Use _id
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product._id === action.payload._id); // Use _id
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...action.payload }; // Update product
            }
        },
    },
});

export const { saveProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
