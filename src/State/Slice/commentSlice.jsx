import {createSlice } from "@reduxjs/toolkit";

const initialState = {comments: [], isCommentLoading:false};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers:{
        addComment: (state,action) => {
            state.comments.push(action.payload);
        },
        edidComment: (state, action) => {
            state.comments = state.comments.map(item=>{
                return item.id == action.payload.id? action.payload : item;
              })
        }
    }
})

export const { addComment ,edidComment} = commentSlice.actions;

export default commentSlice.reducer;