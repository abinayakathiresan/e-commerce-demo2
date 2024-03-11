import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserAsync,
  } from "../../../State/Slice/userSlice.jsx";
  import './Users.css';
import { NavLink, useNavigate } from "react-router-dom";

function Users(){
    const {users, isUserDetailsLoading} = useSelector((state) => { console.log(state.user.users); return state.user});
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUserAsync());
    },[]);

    function editHandler(item)
    {
    navigate("/user/edit/"+item.id);
    }

  const renderUsers = () => {
    return users && users?.map(item=>{
        return <div className="row" key = {item.id}>
            <div className="col-1">
                {item.id}
            </div>
            <div className="col-2">
                {item.name}
            </div>
            <div className="col-3">
                {item.email}
            </div>
            <div className="col-3">
            <button onClick={() => editHandler(item)}>Edit</button>
            </div>
        </div>
    })
  }
  return (
    <div>
       <NavLink to = "/user/add">Add User</NavLink>
      {isUserDetailsLoading ?<div>Loading...</div>:<div className="todos__list">{renderUsers()}</div>}
       
    </div>
  );
}
export default Users;

