import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../State/Slice/productSlice";
import userReducer from "../State/Slice/userSlice";

export const store = configureStore({
    reducer:{
        product: productReducer,
        user: userReducer,
    },
});
