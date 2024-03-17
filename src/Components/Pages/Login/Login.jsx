import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../State/Slice/userSlice";

const Login = ()=> {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hasError, setHasError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users, isUserDetailsLoading} = useSelector((state) => state.user);

    function login()
    {
        const currentUser = users && users?.find(item => {
            return email === item.email && password === item.password ;
        });
        if(currentUser?.email)
        {
            dispatch(handleLogin(currentUser));
            navigate("/users");
        }
        else 
        {
           setHasError(true);
        }

        console.log("fn",hasError);
    }
console.log("out",hasError);
    return(
        <div>
            {hasError && <div className="error">Invalid Login. Please try again</div>}
            <div>Email: <input type = "text" value = {email} onChange={(e)=>setEmail(e.target.value)}/></div>
            <div>Password: <input type = "text" value = {password} onChange={(e)=>setPassword(e.target.value)}/></div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}
export default Login;
