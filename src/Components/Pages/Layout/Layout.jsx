import React from "react";
import Header from "../Header/Header";
import RoutesConfig from "../../Routes/RoutesConfig";


const Layout = function() {
    return(
        <>
        <div class = "container">
        <div>
            <Header></Header>
        </div>
        <div><RoutesConfig></RoutesConfig></div>
        </div>
        </>
    )
}
export default Layout;