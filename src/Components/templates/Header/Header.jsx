import React from "react";
import {  NavLink } from 'react-router-dom';
import './Header.css';
import logoimg from "./../.././../assets/logo.svg";
import customercareimg from "./../.././../assets/customercare.png";
import { useDispatch, useSelector } from "react-redux";
import {handleLogoutAction } from "../../../State/Slice/userSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = function()
{
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const handleLogout = ()=> {
        dispatch(handleLogoutAction());
    }
    return(
        <>
       
        <div className = "header-top__container">
            <div className = "header-top margin-bottom">
            <div className = "header-top__left">
            <div className = "padding-4 border-right">About Us</div>
            <div className = "padding-4 border-right">My Account</div>
            <div className = "padding-4 border-right">Wishlist</div>
            <div className = "padding-4 border-right">Order Tracking</div>
            </div>
            <div className = "header-top__right">
                <div className ="padding-4 border-right">English</div>
                <div className ="padding-4 ">USD</div>
            </div>
            </div>
        </div>
        <div className = "border-bottom">
        </div>
        <div className = "logo-section__container">
            <div>
                <img className = "logo-section__image" src = {logoimg}/>
            </div>
            <div className = "logo-section__wrapper">
            <div className = "logo-section__search">
                <div className ="margin-left__20">All Category</div>
                <div className = "border-right padding-4"></div>
                <div className ="margin-left__20">
                    Search for item...
                </div>
            </div>
            </div>
            
            <div className = "user-section">
            <div className = "user-section__wrapper">
                {/*<img className = "user-section__image padding-4" src = {wishlistimg}/>*/}
                <FavoriteIcon/>
                <div className = "user-section__icondetail">Wishlist</div>
            </div>
            <div className = "user-section__wrapper">
                {/*<img className = "user-section__image padding-4" src = {cartimg}/>*/}
                <ShoppingCartIcon/>
                <div className = "user-section__icondetail">Cart</div>
            </div>
            <div className = "user-section__wrapper">
                <AccountCircleIcon/>
                <div className = "user-section__icondetail">Account</div>
            </div>
            </div>
        </div>
        <div className = "border-bottom">
        </div>
        <div className = "header-menu__container">
            <div className = "header-menu__wrapper ">                
                <div className = "header-menu__item">
                    <NavLink to="/"  className={({isActive}) => (isActive ? "header-menu__item-active" : '')}  > Home </NavLink>
                </div>
                <div className = "header-menu__item">
                    <NavLink to="/products" className={({isActive}) => (isActive ? "header-menu__item-active" : '')} > Products </NavLink>
                </div>
                {!currentUser?.email && <><div className = "header-menu__item">
                    <NavLink to="/register" className={({isActive}) => (isActive ? "header-menu__item-active" : '')} > Register</NavLink>
                </div>
                <div className = "header-menu__item">
                    <NavLink to="/login" className={({isActive}) => (isActive ? "header-menu__item-active" : '')} > Login </NavLink>
                </div></>}
                
                {currentUser?.email && <><div className = "header-menu__item">
                    <NavLink to="/profile" className={({isActive}) => (isActive ? "header-menu__item-active" : '')} > Profile </NavLink>
                </div>
                <div className = "header-menu__item">
                    <NavLink  onClick={handleLogout} className={({isActive}) => (isActive ? "header-menu__item-active" : '')} > LogOut </NavLink>
                </div></>}
                <div className = "header-menu__item">
                    <NavLink to="/users" className={({isActive}) => (isActive ? "header-menu__item-active" : '')} > Users </NavLink>
                </div>
               
                
                
            </div>
            <div>
            Welcome {currentUser?.name?  currentUser.name: "Guest"}
            </div>
            <div className = "header-menu__customercare">
            <div>
                <img className = "header-menu__customercareimg" src = {customercareimg}/>
            </div>
            <div className = "header-menu__customercareitem">
            <div>1900-888</div>
            <div>24/7 Support Center</div>
            </div>
            </div>
        </div>
        <div className = "border-bottom">
        </div>
        {/*<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>*/}
       
        </>
    )
}
export default Header; 