import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";

import { addPost, editPost } from "../../../State/Slice/postSlice";
import { useNavigate, useParams } from "react-router-dom";


const Post = ()=>
{
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {action, postId} = useParams(); 
    const {posts, isPostLoading} = useSelector((state) => state.post);

    let postObj = posts && posts?.find(item => {
        return postId == item.id;
    });
    useEffect(()=>{
        
          setName(postObj?.name);
          setDes(postObj?.des);
      },[postObj]);

    function handleSubmit()
    {
        if(action == "edit"){
            const editPostObj = {...postObj, name:name, des:des};
            dispatch(editPost(editPostObj));
        }
        else{
            const id = Math.floor((Math.random() * 999) + 1);
            postObj = {id,name,des};
            dispatch(addPost(postObj));           
        }        
        navigate("/post-list");
    }
    
  
    
    
    return(
        <div>
            <div>Name: <input type = "text" value = {name} onChange={(e)=>{setName(e.target.value)}}/></div>
            <div>Description:<input type = "text" value = {des} onChange={(e)=>{setDes(e.target.value)}}/></div>
            <div><button onClick={handleSubmit}>Add Post</button></div>
        </div>
        
    )
}
export default Post;