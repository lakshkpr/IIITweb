import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setroll } from '../features/Hostelslice';
import { NavLink, Outlet } from 'react-router-dom';
import './Info.css'

const Info = () => {
    const dispatch= useDispatch();
    const roll= useSelector((state)=>state.hostel?.roll)
  return (
    <div>
      {/* <p>my rool no. is: {roll || 'unidentified id'}</p> */}
      <div className="links">
        <NavLink
        to={'/dashboard/'}
        className={'nav-btn'}
        >My Room</NavLink>
      <NavLink
        to={'/dashboard/group'}className={'nav-btn'}
        >My Group</NavLink>
      <NavLink
        to={'/dashboard/booking'}
        className={'nav-btn'}>Book Room</NavLink>
      </div>
      
      <Outlet/>
    </div>
  )
}

export default Info;
