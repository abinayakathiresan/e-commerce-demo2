import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./ViewComment.css";

const ViewComment = () =>
{
    const[comments, setComments] = useState("");
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
        const comments = response.data;
        console.log(response);
        setComments(comments);
       })
    }, []);

    function editComment()
    {

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