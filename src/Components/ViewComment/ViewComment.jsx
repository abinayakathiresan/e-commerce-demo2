import React, { useState } from "react";
import { useEffect } from "react";
import "./ViewComment.css";
import { useDispatch, useSelector } from "react-redux";
import { getCommentAsync } from "../../State/Slice/commentSlice";
import { useNavigate } from "react-router-dom";

const ViewComment = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {comments, isCommentLoading} = useSelector((state) =>  state.comment);
    useEffect(()=>{
        dispatch(getCommentAsync());
       },[]);
  
    function editComment(item)
    {
        navigate('/comment/edit/' + item.id);
    }

    return(
        <div>
            <div class ="row">
                <div class = "col">Name</div>
                <div class = "col">Email</div>
            </div>
            {comments && comments?.map((item) =>{
                      return <div class = "row"> 
                        <div class = "col">{item.name}</div>
                        <div >{item.email}</div>
                        <div><button onClick = {()=>editComment(item)}>Edit</button></div>
                        </div>
                    })}
        </div>
    )
}
export default ViewComment;