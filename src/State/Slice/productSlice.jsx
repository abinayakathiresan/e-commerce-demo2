import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from "../../utils/constants";

const initialState = {
  products: CONSTANTS.DATA.DEFAULT_PRODUCTS,
  isProductLoading: false,
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: { addProduct: (state, action) => {
       state.products.push(action.payload);
    
   },
   editProduct: (state, action) => {
     state.products = state.products.map(item=>{
       console.log(item.id +"=="+ action.payload.id);
       return item.id == action.payload.id? action.payload : item;
     })
     
 },},
  extraReducers: (builder) => {
    builder
    .addCase(getProductAsync.pending, (state) => {
      
      state.isProductLoading=true;
    })
    .addCase(
        getProductAsync.fulfilled,
      (state, action) => {
        state.isProductLoading=false;
        state.products = action.payload;
      }
    );
  },
});



export const getProductAsync = createAsyncThunk(
  "product/getProductsAsync",
  async () => {
    const products = await fetch("https://jsonplaceholder.typicode.com/posts");
    return products.json();
  }
);

export const { addProduct, editProduct  } = productSlice.actions;


export default productSlice.reducer;