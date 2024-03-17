import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../State/Slice/userSlice";


export const store = configureStore({
    reducer:{
        user: userReducer, 
    },
});
