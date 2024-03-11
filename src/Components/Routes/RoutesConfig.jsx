import React from "react";
import {Routes, Route } from "react-router-dom";
import Products from "../Pages/Products/Products";
import Users from "../Pages/Users/Users";
import ManageUser from "../Pages/ManageUser/ManageUser";
import Post from "../Pages/Post/Post";


const RoutesConfig = function () {
    return (
      
        <Routes>
          <Route path="/" element={<Products/>} exact={true} /> 
          <Route path="/products" element={<Products/>} exact={true} /> 
          <Route path="/user/:action/:userId" element={<ManageUser/>} exact={true} /> 
          <Route path="/user/:action" element={<ManageUser/>} exact={true} /> 

          <Route path="/view-product" element={<Products/>} exact={true} /> 
          <Route path="/users" element={<Users/>} exact={true} /> 
          <Route path="/post" element={<Post/>} exact={true} /> 
        </Routes>
        
    );
  };
  export default RoutesConfig;