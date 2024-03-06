import React from "react";
import './Header.css';
import logoimg from "./../.././../assets/logo.svg";
import wishlistimg from "./../.././../assets/wishlist.svg";
import cartimg from "./../.././../assets/cart.svg";
import accountimg from "./../.././../assets/account.svg";

const Header = function()
{
    return(
        <>
        <div class = "container">
            <div class = "header-top margin-bottom">
            <div class = "header-top__left">
            <div class = "padding-4 border-right">About Us</div>
            <div class = "padding-4 border-right">My Account</div>
            <div class = "padding-4 border-right">Wishlist</div>
            <div class = "padding-4 border-right">Order Tracking</div>
            </div>
            <div class = "header-top__right">
                <div class ="padding-4 border-right">English</div>
                <div class ="padding-4 ">USD</div>
            </div>
            </div>
        </div>
        <div class = "border-bottom">
        </div>
        <div class = "logo-section">
            <div>
                <img class = "logo-section__image" src = {logoimg}/>
            </div>
            <div class = "logo-section__wrapper">
            <div class = "logo-section__search">
                <div class ="margin-left__20">All Category</div>
                <div class = "border-right padding-4"></div>
                <div class ="margin-left__20">
                    Search for item...
                </div>
            </div>
            </div>
            
            <div class = "user-section">
            <div class = "user-section__wrapper">
                <img class = "user-section__image padding-4" src = {wishlistimg}/>
                <div class = "user-section__icondetail">Wishlist</div>
            </div>
            <div class = "user-section__wrapper">
                <img class = "user-section__image padding-4" src = {cartimg}/>
                <div class = "user-section__icondetail">Cart</div>
            </div>
            <div class = "user-section__wrapper">
                <img class = "user-section__image padding-4" src = {accountimg}/>
                <div class = "user-section__icondetail">Account</div>
            </div>
            </div>
        </div>
        <div class = "border-bottom">
        </div>
        </>
    )
}
export default Header; 