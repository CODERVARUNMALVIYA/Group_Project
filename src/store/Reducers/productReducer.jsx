import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: null,
    
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        saveProduct: (state, action) => {
            console.log(action.payload)
            state.product = action.payload;
            
        },
        removeProduct: (state, action) => {
            state.product = null;
            
        }
        
    },
});

export const { saveProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;