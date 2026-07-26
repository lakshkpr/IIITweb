import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SignIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { setname, setroll } from '../features/Hostelslice'
import logoImg from '../assets/logo.png'
import toast from 'react-hot-toast'

const SignIn = () => {
    // const [roll, setroll] = useState('')
    const [password, setpassword] = useState('')
    const [user, setuser] = useState('student')
    const [error, seterror]= useState('')
    const dispatch= useDispatch()
    const roll=useSelector((state)=>state.hostel.roll)
    const name=useSelector((state)=>state.hostel.name)

    const isvalidpass= (value)=>{
        if(value.length<8){
            toast.error("Password must be altleast 8 characters long")
        }
        if(!/[A-Z]/.test(value))
        {
            toast.error("Password must contain atlest one uppercase letter")
        }
        if(!/[0-9]/.test(value))
        {
        toast.error("Password must contain atleast one number")
        }
        if(!/[!@#$%^&*]/.test(value))
        {
        toast.error("Password must contain any one uppercase letter")
        }
    }

    function handlesign()
    {
        toast.success("You have successfully logged in!")
    }
  return (
    <div className='myhome'>
      <div id='first'>
        <div className="first">
            <img src={logoImg} alt="iiit" />
            <h1>IIIT Una</h1>
            <p>Hostel Management System - the central hub for room allocations, fee submission, and notices</p>
        </div>
      </div>
      <div id='second'>
        <div className="second">
            <div className="title">
                <h2>Welcome Back</h2>
                <p>Online Hostel alocation system</p>
            </div>
            <div className="card">
                <div className="item1">
                    <p>SIGN IN AS</p>
                    <div className="buttons">
                       <button
                       onClick={()=>setuser('student')}
                       >Student</button>
                       <button
                       onClick={()=>setuser('teacher')}
                       >Teacher</button>
                    </div>
                </div>
                <div className="item2">
                    <p>Name</p>
                    <input type="text"
                    value={name}
                    placeholder='Enter your Name' 
                    onChange={(e)=>dispatch(
                        setname(e.target.value))}/>
                </div>
                <div className="item2">
                    <p>{user=='student'?'Roll number': 'Employee id'}</p>
                    <input type="text" 
                    value={roll}
                    placeholder={user=='student'?'Roll Number(e.g. 25BTEC040)': 'Employee id (e.g. EMP001'}
                    onChange={(e)=>dispatch((setroll(e.target.value)))}
                    />
                </div>
                <div className="item3">
                    <p>Password</p>
                    <input type="text" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                {/* <button
                id='sign'
                onClick= {handlesign}
                > */}
                    <NavLink to={'/dashboard'}
                    className={'sign-nav'}
                    onClick={handlesign}>Sign in: </NavLink>
                {/* </button> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
