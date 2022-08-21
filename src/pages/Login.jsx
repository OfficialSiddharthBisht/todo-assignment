import axios from "axios";
import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { loginLoading, loginSuccess , loginError ,loginReq} from "../store/auth/actions";
import {Navigate} from 'react-router-dom'
const initialState = {
    username : "",
    password : "",
}

export const Login = () =>{
    const [loginData, setLoginData] = React.useState(initialState);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setLoginData(prev =>(
            {...prev , [name] : value}
        ))
    }

    const handleLogin = () =>{
        let isValid = true;
        Object.values(loginData).forEach(el => {
            if(!el){
                isValid = false;
            }
        })
        if(!isValid){
            alert("Fill all the details please");
            return;
        }
        dispatch(loginReq(loginData));
    }
    if(token){
        return <Navigate to = "/" />
    }
    return(
        <>
            {Object.keys(loginData).map(el =>(
                <div key={el}>
                    <input key = {el} onChange = {handleChange} name = {el} type="text" placeholder={el} value = {loginData[el]}/>
                </div>
            ))}
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

