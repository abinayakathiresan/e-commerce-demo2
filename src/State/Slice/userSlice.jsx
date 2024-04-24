import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mergecst } from "../../utils";
import { CONSTANTS } from "../../utils/constants";

const initialState = {
    users: CONSTANTS.DATA.DEFAULT_USERS,
  isUserDetailsLoading: false,
  isLoggedIn: false,
  currentUser: null,
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
handleLogin: (state, action) => {
  state.isLoggedIn = true;
  state.currentUser = action.payload;
 },
 handleLogoutAction: (state) => {
  state.isLoggedIn = false;
  state.currentUser = null;
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
        action.payload = action.payload.map(item => {
          return {...item, password:"test123"}; 
        })
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
export const { addUser, editUser, handleLogin, handleLogoutAction } = userSlice.actions;

export default userSlice.reducer;