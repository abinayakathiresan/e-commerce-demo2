import React from "react";
import {Routes, Route } from "react-router-dom";
import Users from "../Pages/Users/Users";
import ManageUser from "../Pages/ManageUser/ManageUser";
import Login from "../Pages/Login/Login";



const RoutesConfig = function () {
    return (
      
        <Routes>
          <Route path="/" element={<Users/>} exact={true} /> 
          <Route path="/login" element={<Login/>} exact={true} /> 
          <Route path="/user/:action/:userId" element={<ManageUser/>} exact={true} /> 
          <Route path="/user/:action" element={<ManageUser/>} exact={true} /> 
          <Route path="/users" element={<Users/>} exact={true} /> 
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
        
    );
  };
  export default RoutesConfig;