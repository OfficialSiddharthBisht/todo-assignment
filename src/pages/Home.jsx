import React, { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { logout } from '../store/auth/actions';
import { getTasks } from '../store/task/action';
import { DetailsOfUser } from './DetailsOfUser';
export const Home =()=> {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTasks());
  },[])
  return (
    <div>
      <h1>Home</h1>
        {/* <DetailsOfUser /> */}
      {!!token ? <button onClick={()=>dispatch(logout())}>Logout</button>: null}
    </div>
  )
}

