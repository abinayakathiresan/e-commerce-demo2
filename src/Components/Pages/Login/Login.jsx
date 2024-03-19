import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../State/Slice/userSlice";
import { Button, Paper, TextField, Typography } from "@mui/material";
import "./Login.css";
const Login = ()=> {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, isUserDetailsLoading} = useSelector((state) => state.user);

    const handleSubmit = () =>
    {
        
        const currentUser = users && users?.find(item => {
            return email === item.email && password === item.password ;
        });
        if(currentUser?.email)
        {
            dispatch(handleLogin(currentUser));
            navigate("/users");
        }
        else 
        {
           setHasError(true);
        }

        
    } 
    return(
        
        <Paper  className="login__wrapper">
{hasError && <Typography variant="h4" className="error">Invalid Login. Please try again</Typography>}
      <Typography variant="h4">Login</Typography>
      
      
      <TextField value = {email} onChange={(e)=> {  setEmail(e.target.value)}} id = "email"  label="Email" variant="outlined" />
      
      <TextField value = {password} onChange={(e)=> {  setPassword(e.target.value)}} id = "password"  label="Password" variant="outlined" />
      
      <Button onClick = {handleSubmit} variant="contained">Submit</Button>
     </Paper>
      
        
    )
}
export default Login;
