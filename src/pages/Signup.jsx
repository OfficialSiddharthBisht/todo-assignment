import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import {signupLoading, signupSuccess , signupError } from '../store/auth/actions'

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
        dispatch(signupLoading());
        axios({
            method : "post",
            url : "https://masai-api-mocker.herokuapp.com/auth/register",
            data : signupData
        }).then(res =>{
            dispatch(signupSuccess);
            setSignupData(initialState);
        }).catch(err =>{
            dispatch(signupError);
        })
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