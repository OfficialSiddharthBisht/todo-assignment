import React from 'react'
import { useDispatch , useSelector } from 'react-redux'


export const DetailsOfUser=()=>{
    const UserDetail = useSelector(UserDetails => UserDetails.userDetails)
    const dispatch = useDispatch();
    const {description , email , mobile , name ,token , username} = UserDetail;
    return (
        <div>
                <p>{name}</p>
                <p>{username}</p>
                <p>{mobile}</p>
                <p>{email}</p>
                <p>{description}</p>
        </div>
  )
}
/*
description: "hey"
email: "officialsiddharthbisht@gmail.com"
mobile: "08077305268"
name: "Siddharth Bisht"
token: "b8c1a3069167247e3503f0daba6c5723"
username: "sid"
*/
