import React, { useState } from "react";


const Comment = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    return(
        <div>
        <div>
            Name:<input type = "text" value ={name}/>
        </div>
        <div>
            Email:<input type = "text" value= {email}/>
        </div>
        <div><button onClick =  {handleSubmit}>Add Comment</button></div>
        </div>
    )
}
export default Comment;