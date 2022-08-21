import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Navbar=()=> {
  const token = useSelector(state => state.token);
  return (
    <div>
        <Link to= "/">Home</Link>
        { !token ? <><Link to= "/login">Login</Link>
        <Link to= "/signup">Signup</Link></> : null
        }
    </div>
  )
}
