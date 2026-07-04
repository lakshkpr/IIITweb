import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './BookRoom.css'
const BookRoom = () => {
  return (
    <div className='hosteltype'>
        <div className="kalindi">
            <h2>Kalindi Hostel</h2>
                <NavLink to={'/dashboard/kalindi_h'}
                className={"nav-hostel"}
                >Choose Room</NavLink>
        </div>
        <div className="iravati">
            <h2>Iravati Hostel</h2>
                <NavLink to={'/dashboard/iravati_h'}
                className={ "nav-hostel"}
                >Choose Room</NavLink>
        </div>
    </div>
  )
}

export default BookRoom
