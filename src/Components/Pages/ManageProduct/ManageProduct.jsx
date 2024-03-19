import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
    editProduct,
    getProductAsync,
  } from "../../../State/Slice/productSlice.jsx";
  import './ManageProduct.css';
import { useNavigate, useParams } from "react-router-dom";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";

function ManageProduct(){
    const {products, isProductsLoading} = useSelector((state) => state.product);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [password, setPassword] = useState("");
    let {action, productId} = useParams(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let productObj = "";
    // logic to find the product and display it in fields 
    
    let pageTitle = "Register";
    if(action === "add"){
      pageTitle = "Add Product";
    } else if(action === "edit"){
      pageTitle= "Edit Product";
    }

    productObj =   products && products?.find(item => {
      return productId == item.id;
    });

    useEffect(()=>{       
        setName(productObj?.name);
        setPrice(productObj?.price);
    },[products]);


    const handleSubmit = () =>
    {
      if(action == "edit")
      {        
        const existingProductObj = {...productObj,  name, price};
        dispatch(editProduct(existingProductObj));
      }
      else{
        const productId =Math.floor((Math.random() * 999) + 1);
        const newProductObj = {id:productId, name, price};
        dispatch(addProduct(newProductObj));
      }
      navigate("/products");
    }


  return (
    <Paper  className="manage-product__wrapper">

      <Typography variant="h4">{pageTitle}</Typography>
      <TextField value = {name} onChange={(e)=> {  setName(e.target.value)}} id = "name"  label="Name" variant="outlined" />
      
      
      <TextField value = {price} onChange={(e)=> {  setPrice(e.target.value)}} id = "price"  label="Price" variant="outlined" />
      
      
      <Button onClick = {handleSubmit} variant="contained">Submit</Button>
     </Paper>
  );
}
export default ManageProduct;

