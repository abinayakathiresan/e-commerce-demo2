import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../State/Slice/userSlice";
import productReducer from "../State/Slice/productSlice";


export const store = configureStore({
    reducer:{
        user: userReducer, 
        product: productReducer,
    },
});
