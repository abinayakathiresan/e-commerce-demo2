import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {addComment, editComment} from "../../State/Slice/commentSlice";

const Comment = () => {
    
    const[name, setName] = useState("");

    const[email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {action, commentId:id} = useParams(); 
    const {comments, isCommentsLoading} = useSelector((state) => state.comment);
    // logic to find the user and display it in fields 
    const commentObj =   comments && comments?.find(item => {
          return id == item.id;
        });

    useEffect(()=>{
       
      setName(commentObj?.name);

      setEmail(commentObj?.email);
    },[commentObj]);

    function handleSubmit(){
        if(action == "edit")
        {
            const existingcommentObj = {...commentObj, name, email};
            dispatch(editComment(existingcommentObj));
        }
        else{
            const id = Math.random();
        let commentObj = {id:id, name:name, email:email};
        dispatch(addComment(commentObj));
        }
        
        navigate("/comment-list");
    }
    return(
        <div>
        <div>
            Name:<input type = "text" value ={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            Email:<input type = "text" value= {email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div><button onClick =  {handleSubmit}>Add Comment</button></div>
        </div>
    )
}
export default Comment;