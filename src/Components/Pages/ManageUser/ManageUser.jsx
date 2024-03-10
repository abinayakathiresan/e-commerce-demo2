import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
    editUser,
    getUserAsync,
  } from "../../../State/Slice/userSlice.jsx";
  import './ManageUser.css';
import { useNavigate, useParams } from "react-router-dom";

function ManageUser(){
    const {users, isUserDetailsLoading} = useSelector((state) => state.user);
    const [userName, setUserName] = useState("");
    let {action, userId} = useParams(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let userObj = "";
    // logic to find the user and display it in fields 
    

    useEffect(()=>{
      userObj =   users && users?.find(item => {
          return userId == item.id;
        });
       
      setUserName(userObj?.name);
    },[users]);


    function handleSubmit()
    {
      const userName = document.getElementById("userName").value;
      if(action == "add")
      {
        const userId = Math.random();
        const newUserObj = {userId, name:userName};
        dispatch(addUser(newUserObj));
      }
      else{

        const existingUserObj = {...userObj, name:userName};
        dispatch(editUser(existingUserObj));
      }
      navigate("/users");
    }


  return (
    <div>
     
     <div className="row">
            <div className="col-1">
                <input type = "text" value = {userName} onChange={(e)=> { console.log(e.target.value); setUserName(e.target.value)}} id = "userName" />
            </div>
            <div className="col-2">
               <button onClick = {handleSubmit}>Submit</button>
            </div>
           
        </div>
    </div>
  );
}
export default ManageUser;

