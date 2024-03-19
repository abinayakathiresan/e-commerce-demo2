import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mergecst } from "../../utils";

const initialState = {comments: [], isCommentLoading:false};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers:{
        addComment: (state,action) => {
            state.comments.push(action.payload);
            
        },
        editComment: (state, action) => {
            state.comments = state.comments.map(item=>{
                
                return item.id == action.payload.id? action.payload : item;
              })
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCommentAsync.pending, (state) => {
          
          state.isCommentLoading=true;
        })
        .addCase(
            getCommentAsync.fulfilled,
          (state, action) => {
            state.isCommentLoading=false;
            state.comments = mergecst(state.comments, action.payload, 'id');
          }
        );
      },
    });
    
    
    
    export const getCommentAsync = createAsyncThunk(
      "comment/getCommentAsync",
      async () => {
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        return comments.json();
      }
    );


export const { addComment ,editComment} = commentSlice.actions;

export default commentSlice.reducer;