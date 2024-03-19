import React from "react";
import {Routes, Route } from "react-router-dom";
import Users from "../Pages/Users/Users";
import ManageUser from "../Pages/ManageUser/ManageUser";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import ProductList from "../Pages/ProductList/ProductList";
import ManageProduct from "../Pages/ManageProduct/ManageProduct";



const RoutesConfig = function () {
    return (
      
        <Routes>
          <Route path="/" element={<ProductList/>} exact={true} /> 
          <Route path="/login" element={<Login/>} exact={true} /> 
          <Route path="/user/:action/:userId" element={<ManageUser/>} exact={true} /> 
          <Route path="/user/:action" element={<ManageUser/>} exact={true} /> 
          <Route path="/register" element={<ManageUser/>} exact={true} /> 
          <Route path="/users" element={<Users/>} exact={true} /> 
          <Route path="/products" element={<Products/>} exact={true} /> 
          <Route path="/product/:action/:userId" element={<ManageProduct/>} exact={true} /> 
          <Route path="/product/:action" element={<ManageProduct/>} exact={true} /> 
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
        
    );
  };
  export default RoutesConfig;