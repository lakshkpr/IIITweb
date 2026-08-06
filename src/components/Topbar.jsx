import React from 'react'
import './Topbar.css'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setroll } from '../features/Hostelslice'
const Topbar = () => {
    const dispatch= useDispatch()
    const roll= useSelector((state)=>state.hostel.roll)
  return (
    <div className='topbar'>
        <div className="una">
            <img src={logoImg} alt="" />
            <h2>IIIT Una</h2>
            <p>* Hostel Allocation Process</p>
        </div>
        {/* <NavLink to={'/'}
        className={'nav-logout'}
        onClick={()=>dispatch(setroll(''))}>Logout</NavLink> */}
    </div>
  )
}

export default Topbar

