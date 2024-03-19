import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
    editUser,
    getUserAsync,
  } from "../../../State/Slice/userSlice.jsx";
  import './ManageUser.css';
import { useNavigate, useParams } from "react-router-dom";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";

function ManageUser(){
    const {users, isUserDetailsLoading} = useSelector((state) => state.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let {action, userId} = useParams(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let userObj = "";
    // logic to find the user and display it in fields 
    
    let pageTitle = "Register";
    if(action === "add"){
      pageTitle = "Add User";
    } else if(action === "edit"){
      pageTitle= "Edit User";
    }

    userObj =   users && users?.find(item => {
      return userId == item.id;
    });

    useEffect(()=>{       
        setName(userObj?.name);
        setEmail(userObj?.email);
        setPassword(userObj?.password);
    },[users]);


    const handleSubmit = () =>
    {
      if(action == "edit")
      {        
        const existingUserObj = {...userObj,  name, email, password};
        dispatch(editUser(existingUserObj));
      }
      else{
        const userId =Math.floor((Math.random() * 999) + 1);
        const newUserObj = {id:userId, name, email, password};
        dispatch(addUser(newUserObj));
      }
      navigate("/users");
    }


  return (
    <Paper  className="manage-user__wrapper">

      <Typography variant="h4">{pageTitle}</Typography>
      <TextField value = {name} onChange={(e)=> {  setName(e.target.value)}} id = "name"  label="Name" variant="outlined" />
      
      
      <TextField value = {email} onChange={(e)=> {  setEmail(e.target.value)}} id = "email"  label="Email" variant="outlined" />
      
      <TextField value = {password} onChange={(e)=> {  setPassword(e.target.value)}} id = "password"  label="Password" variant="outlined" />
      
      <Button onClick = {handleSubmit} variant="contained">Submit</Button>
     </Paper>
  );
}
export default ManageUser;

