import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../State/Slice/productSlice";
import userReducer from "../State/Slice/userSlice";
import postReducer from "../State/Slice/postSlice";
import commentReducer from "../State/Slice/commentSlice";

export const store = configureStore({
    reducer:{
        product: productReducer,
        user: userReducer,
        post: postReducer,
        comment: commentReducer,
    },
});
