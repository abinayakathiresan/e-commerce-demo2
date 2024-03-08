import React from "react";
import {Routes, Route } from "react-router-dom";
import Products from "../Pages/Products/Products";


const RoutesConfig = function () {
    return (
      
        <Routes>
          <Route path="/products" element={<Products/>} exact={true} /> 
          <Route path="/view-product" element={<Products/>} exact={true} /> 
        </Routes>
        
    );
  };
  export default RoutesConfig;