import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'
import GroupImg from '../assets/group.png'

const Navbar = () => {
    const roll= useSelector((state)=>state.hostel.roll)
    const name= useSelector((state)=>state.hostel.name)
  return (
    <div className='navbar'> 
        <div className="self">
            <div className="rollno">
                <img src={GroupImg} alt="" />
                <div className="me">
                    <h2>{name}</h2>
                    <h3>{roll}</h3>
                </div>
            </div>
            <div className="specify">
                <label id='label1'>BTECH</label>
                <label id='label1'>Male</label>
                <label id='label3'>Veg-Meal</label>
            </div>
        </div>
        <h4>* NOTICES</h4>
        <div className="notice">
            <div className="allotroom">
                <h5>BTECH Hostel Allocation AY 2026-27</h5>
                <p>Room Allocation will begin on 7th July 2026 - 11:00 AM</p>
            </div>
            <p>22/06/26 11:37:25</p>
        </div>
    </div>
  )
}

export default Navbar
