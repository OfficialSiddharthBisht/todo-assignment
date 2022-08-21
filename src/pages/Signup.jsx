import axios from "axios";
import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import {signupLoading, signupSuccess , signupError ,signupReq } from '../store/auth/actions'
import { Navigate } from "react-router-dom";

const initialState = {
    name : "",
    email : "",
    password : "",
    username : "",
    mobile : "",
    description : ""
}

export const Signup = () =>{
    const [signupData, setSignupData] = React.useState(initialState);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setSignupData(prev =>(
            {...prev , [name] : value}
        ))
    }


    const handleSignup = () =>{
        let isValid = true;
        Object.values(signupData).forEach(el => {
            if(!el){
                isValid = false;
            }
        })
        if(!isValid){
            alert("Fill all the details please");
            return;
        }
       dispatch(signupReq(signupData));
       setSignupData(initialState);
    }
    if(token){
        return <Navigate to = "/" />
    }
    return(
        <>
            {Object.keys(signupData).map(el =>(
                <div key={el}>
                    <input key = {el} onChange = {handleChange} name = {el} type="text" placeholder={el} value = {signupData[el]}/>
                </div>
            ))}
            <button onClick={handleSignup}>Sign Up</button>
        </>
    )
}

/*
{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}
*/