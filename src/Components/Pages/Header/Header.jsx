import React from "react";
import './Header.css';
import logoimg from "./../.././../assets/logo.svg";
const Header = function()
{
    return(
        <>
        <div class = "container">
            <div class = "header-top margin-bottom">
            <div class = "header-top_left">
            <div class = "padding-5 border-right">About Us</div>
            <div class = "padding-5 border-right">My Account</div>
            <div class = "padding-5 border-right">Wishlist</div>
            <div class = "padding-5 border-right">Order Tracking</div>
            </div>
            <div class = "header-top_right">
                <div class ="padding-5 border-right">English</div>
                <div class ="padding-5 ">USD</div>
            </div>
            </div>
        </div>
        <div class = "border-bottom">
        </div>
        <div class = "logo-section">
            <div>

                <img src = {logoimg}/>
            </div>
        </div>
        </>
    )
}
export default Header; 