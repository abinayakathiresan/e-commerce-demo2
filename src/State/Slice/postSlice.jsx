import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {posts: [], isPostLoading:false};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{
        addPost: (state,action) => {
            state.posts.push(action.payload);
        },
        editPost: (state, action) => {
            state.posts = state.posts.map(item=>{
                return item.id == action.payload.id? action.payload : item;
              })
        }
    }
})

export const { addPost ,editPost} = postSlice.actions;

export default postSlice.reducer;