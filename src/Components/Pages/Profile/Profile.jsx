import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
    editUser,
  } from "../../../State/Slice/userSlice.jsx";
  import './Profile.css';
import { useNavigate, useParams } from "react-router-dom";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";

function Profile(){
    const {currentUser, isUserDetailsLoading} = useSelector((state) => state.user);
    
    
    let pageTitle = "Profile"; 
    
 

  return (
    <Paper  className="manage-user__wrapper">

      <Typography variant="h4">{pageTitle}</Typography>

      <TextField value = {currentUser?.name}  id = "name"  label="Name" variant="outlined" readonly disabled />
      
      
      <TextField value = {currentUser?.email}  readonly id = "email"  label="Email" variant="outlined" disabled />
      
       
     </Paper>
  );
}
export default Profile;

