import axios from "axios";
import React from "react";

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
        axios({
            method : "post",
            url : "https://masai-api-mocker.herokuapp.com/auth/register",
            data : signupData
        }).then(res =>{

        }).catch(err =>{
            
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