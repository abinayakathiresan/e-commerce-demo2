import React from "react";
import Header from "../Header/Header";
import RoutesConfig from "../../Routes/RoutesConfig";
import Footer from "../Footer/Footer";


const Layout = function() {
    return(
        <>
        <div className = "container">
            <Header></Header>
            <RoutesConfig></RoutesConfig> 
            <Footer/>
        </div>
        </>
    )
}
export default Layout;