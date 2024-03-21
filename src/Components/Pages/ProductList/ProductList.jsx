import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productImg from "../../../assets/products/product1.jpg";
  import './ProductList.css';
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ProductList(){
    const {products, isProductLoading} = useSelector((state) => {  return state.product});
    const navigate = useNavigate(); 

    function editHandler(item)
    {
    navigate("/product/edit/"+item.id);
    }

  const renderProducts = () => {
    return products && <Grid container spacing={2} className="product-list__container">{products?.map(item=>{
        return <Grid item  key = {item.id} md={3} className="product-list__row">
          <Card className="product-list__card"  >
            <div className="product-list__image"><img src={"https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg"} /></div>
            <div className="product-list__name"> {item.name}</div>
            <div className="product-list__price">${item.price}</div>
            <div className="product-list__action">
              <Button variant="contained" className="product-list__btn"><ShoppingCartIcon/> Add to cart</Button>
               
            </div>
          </Card>             
        </Grid>
    })}</Grid>
  }
   
  return (
    <section className="product-list">
       <Box component="section" sx={{display:"flex", justifyContent:"space-between", p: 4, color : "primary.main"}}>
            <Typography variant="h4" component={"h4"}>Products</Typography>
           {/*<NavLink to = "/product/add"><Button variant="contained">Add Product</Button></NavLink> */}
        </Box>
       {isProductLoading ?<div>Loading...</div>:<div>{renderProducts()}</div>}
    </section>
  );
}
export default ProductList;

