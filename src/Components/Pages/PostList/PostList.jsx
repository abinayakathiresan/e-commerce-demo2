import React from "react";


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const PostList = () => {
    const {posts, isPostLoading} = useSelector((state) => state.post);
    const navigate = useNavigate();

    function editPost(item)
    {
        navigate('/post/edit/'+ item.id);
    }

    return(
        <div>
                <div class = "row">
                    <div>Name</div>
                    <div>Description</div>
                </div>
                    {posts && posts?.map((item) =>{
                      return <div class = "row" key = {item.id}> 
                        <div>{item.name}</div>
                        <div>{item.des}</div>
                        <div><button onClick = {()=>editPost(item)}>Edit</button></div>
                        </div>
                    })}
           
                
            </div>
    )
}
export default PostList;