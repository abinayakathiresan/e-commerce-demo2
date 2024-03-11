import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Post = ()=>
{
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const {posts, isPostLoading} = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const handleSubmit = ()=>
    {
        const id = Math.random();
       const postObj = {id,name,des};
       dispatch(addPost(postObj));
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