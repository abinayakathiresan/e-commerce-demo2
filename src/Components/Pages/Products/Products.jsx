import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

  import './Products.css';
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function Products(){
    const {products, isProductLoading} = useSelector((state) => {  return state.product});
    const navigate = useNavigate(); 

    function editHandler(item)
    {
    navigate("/product/edit/"+item.id);
    }

   
  const renderTable = () => {
    return <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">price</TableCell>
          <TableCell align="left">Action</TableCell>
           
        </TableRow>
      </TableHead>
      <TableBody>
        {products && products?.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell component="th" scope="row" align="left">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.price}</TableCell>
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
            <Typography variant="h4" component={"h4"}>Products</Typography>
           <NavLink to = "/product/add">
            <Button variant="contained">Add Product</Button>
            </NavLink> 
        </Box>

       {isProductLoading ?<div>Loading...</div>:<div>{renderTable()}</div>}
      
       
    </div>
  );
}
export default Products;

