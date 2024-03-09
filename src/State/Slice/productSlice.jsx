import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:"",
  isProductLoading: false,
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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

export default productSlice.reducer;