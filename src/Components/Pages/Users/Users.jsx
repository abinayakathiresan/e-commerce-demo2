import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserAsync,
  } from "../../../State/Slice/userSlice.jsx";
  import './Users.css';
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function Users(){
    const {users, isUserDetailsLoading} = useSelector((state) => {   return state.user});
    const navigate = useNavigate();

    const dispatch = useDispatch();

    {/*useEffect(()=>{
        dispatch(getUserAsync());
    },[]);*/}

    function editHandler(item)
    {
    navigate("/user/edit/"+item.id);
    }

  const renderUsers = () => {
    return users && users?.map(item=>{
        return <div className="row" key = {item.id}>
            <div className="col-1">
                {item.id}
            </div>
            <div className="col-2">
                {item.name}
            </div>
            <div className="col-3">
                {item.email}
            </div>
            <div className="col-3">
                {item.password}
            </div>
            <div className="col-3">
            <button onClick={() => editHandler(item)}>Edit</button>
            </div>
        </div>
    })
  }
  const renderTable = () => {
    return <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Password</TableCell>
          <TableCell align="left">Action</TableCell>
           
        </TableRow>
      </TableHead>
      <TableBody>
        {users && users?.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.password}</TableCell>
            <TableCell align="left"><Button onClick={() => editHandler(row)}>Edit</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  }
  return (
    <div>
       <Box component="section" sx={{display:"flex", justifyContent:"space-between", p: 4,}}>
            <Typography variant="h4" component={"h4"}>Users</Typography>
            <NavLink to = "/user/add"><Button variant="contained">Add User</Button></NavLink>
        </Box>

       {isUserDetailsLoading ?<div>Loading...</div>:<div>{renderTable()}</div>}
      {/*{isUserDetailsLoading ?<div>Loading...</div>:<div className="todos__list">
      <div className="row">
            <div className="col-1">
                id
            </div>
            <div className="col-2">
                Name
            </div>
            <div className="col-3">
               Email
            </div>
            <div className="col-3">
                Password
            </div>
            <div className="col-3">
            Action
            </div>
        </div>
  {renderUsers()}</div>}*/}
       
    </div>
  );
}
export default Users;

