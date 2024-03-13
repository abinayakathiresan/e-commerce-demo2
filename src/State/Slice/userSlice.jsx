import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mergecst } from "../../utils";

const initialState = {
    users:[],
  isUserDetailsLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
   //   state.users = JSON.parse(JSON.stringify(state.users));
      state.users.push(action.payload);
   
  },
  editUser: (state, action) => {
    state.users = state.users.map(item=>{
      return item.id == action.payload.id? action.payload : item;
    })
    
},
},
  extraReducers: (builder) => {
    builder
    .addCase(getUserAsync.pending, (state) => {
      
      state.isUserDetailsLoading=true;
    })
    .addCase(
        getUserAsync.fulfilled,
      (state, action) => {
        state.isUserDetailsLoading=false;
        state.users = mergecst(state.users, action.payload, 'id');
        
      }
    );
  },
});



export const getUserAsync = createAsyncThunk(
  "user/getUserAsync",
  async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    return users.json();
  }
);
export const { addUser, editUser } = userSlice.actions;

export default userSlice.reducer;