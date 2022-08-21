import axios from "axios";
import React from "react";

const initialState = {
    username : "",
    password : "",
}

export const Login = () =>{
    const [loginData, setLoginData] = React.useState(initialState);

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
        axios({
            method : "post",
            url : "https://masai-api-mocker.herokuapp.com/auth/login",
            data : loginData
        }).then(res =>{

        }).catch(err =>{
            
        })
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

