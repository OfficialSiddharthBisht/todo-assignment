import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { logout } from '../store/auth/actions';

export const Home =()=> {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      {!!token ? <button onClick={()=>dispatch(logout())}>Logout</button>: null}
    </div>
  )
}

