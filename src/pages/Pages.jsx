import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from './Home'
import {Login} from './Login'
import {Signup} from './Signup'

export const Pages = () =>{
  return (
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "*" element = {<h2>Page not found</h2>} />
    </Routes>
  )
}

