import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {posts: "", isPostLoading:false};

const postSlice = createSlice({
    name: post,
    initialState,
    reducer:{
        addPost:(state,action)=>{state.posts.push(action.payload);}
    }
})