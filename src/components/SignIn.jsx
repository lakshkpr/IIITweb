// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import './SignIn.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { setname, setroll } from '../features/Hostelslice'
// import logoImg from '../assets/logo.png'
// import toast from 'react-hot-toast'

// const SignIn = () => {
//     // const [roll, setroll] = useState('')
//     const [password, setpassword] = useState('')
//     const [user, setuser] = useState('student')
//     const [error, seterror]= useState('')
//     const dispatch= useDispatch()
//     const roll=useSelector((state)=>state.hostel.roll)
//     const name=useSelector((state)=>state.hostel.name)

//     const isvalidpass= (value)=>{
//         if(value.length<8){
//             toast.error("Password must be altleast 8 characters long")
//         }
//         if(!/[A-Z]/.test(value))
//         {
//             toast.error("Password must contain atlest one uppercase letter")
//         }
//         if(!/[0-9]/.test(value))
//         {
//         toast.error("Password must contain atleast one number")
//         }
//         if(!/[!@#$%^&*]/.test(value))
//         {
//         toast.error("Password must contain any one uppercase letter")
//         }
//     }

//     function handlesign()
//     {
//         toast.success("You have successfully logged in!")
//     }
//   return (
//     <div className='myhome'>
//       <div id='first'>
//         <div className="first">
//             <img src={logoImg} alt="iiit" />
//             <h1>IIIT Una</h1>
//             <p>Hostel Management System - the central hub for room allocations, fee submission, and notices</p>
//         </div>
//       </div>
//       <div id='second'>
//         <div className="second">
//             <div className="title">
//                 <h2>Welcome Back</h2>
//                 <p>Online Hostel alocation system</p>
//             </div>
//             <div className="card">
//                 <div className="item1">
//                     <p>SIGN IN AS</p>
//                     <div className="buttons">
//                        <button
//                        onClick={()=>setuser('student')}
//                        >Student</button>
//                        <button
//                        onClick={()=>setuser('teacher')}
//                        >Teacher</button>
//                     </div>
//                 </div>
//                 <div className="item2">
//                     <p>Name</p>
//                     <input type="text"
//                     value={name}
//                     placeholder='Enter your Name' 
//                     onChange={(e)=>dispatch(
//                         setname(e.target.value))}/>
//                 </div>
//                 <div className="item2">
//                     <p>{user=='student'?'Roll number': 'Employee id'}</p>
//                     <input type="text" 
//                     value={roll}
//                     placeholder={user=='student'?'Roll Number(e.g. 25BTEC040)': 'Employee id (e.g. EMP001'}
//                     onChange={(e)=>dispatch((setroll(e.target.value)))}
//                     />
//                 </div>
//                 <div className="item3">
//                     <p>Password</p>
//                     <input type="text" 
//                     placeholder='Enter your password'
//                     value={password}
//                     onChange={(e)=>setpassword(e.target.value)}/>
//                 </div>
//                 {/* <button
//                 id='sign'
//                 onClick= {handlesign}
//                 > */}
//                     <NavLink to={'/dashboard'}
//                     className={'sign-nav'}
//                     onClick={handlesign}>Sign in: </NavLink>
//                 {/* </button> */}
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignIn


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { setname, setroll } from '../features/Hostelslice'
import logoImg from '../assets/logo.png'
import toast from 'react-hot-toast'

const SignIn = () => {
  const [password, setpassword] = useState('')
  const [user, setuser] = useState('student')
  const [errors, setErrors] = useState({})
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const roll = useSelector((state) => state.hostel.roll)
  const name = useSelector((state) => state.hostel.name)

  // Complete validation logic
  const validateForm = () => {
    let tempErrors = {}
    
    // Name validation
    if (!name.trim()) {
      tempErrors.name = "Name is required"
    }

    // Roll number / Employee ID validation
    if (!roll.trim()) {
      tempErrors.roll = user === 'student' ? "Roll number is required" : "Employee ID is required"
    }

    // Password validation rules
    if (!password) {
      tempErrors.password = "Password is required"
    } else {
      if (password.length < 8) {
        tempErrors.password = "Must be at least 8 characters long"
      } else if (!/[A-Z]/.test(password)) {
        tempErrors.password = "Must contain at least one uppercase letter"
      } else if (!/[0-9]/.test(password)) {
        tempErrors.password = "Must contain at least one number"
      } else if (!/[!@#$%^&*]/.test(password)) {
        tempErrors.password = "Must contain at least one special character"
      }
    }

    setErrors(tempErrors)
    // Returns true if errors object is empty
    return Object.keys(tempErrors).length === 0
  }

  function handlesign(e) {
    e.preventDefault() // Prevents instant navigation
    
    if (validateForm()) {
      toast.success("You have successfully logged in!")
      navigate('/dashboard') // Safe redirect after success
    } else {
      toast.error("Please fix the errors in the form")
    }
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
            <p>Lorem ipsum dolbkjdshfksj sunt.</p>
          </div>
          <div className="card">
            <div className="item1">
              <p>SIGN IN AS</p>
              <div className="buttons">
                <button 
                  className={user === 'student' ? 'active-btn' : ''} 
                  onClick={() => { setuser('student'); setErrors({}); }}
                >
                  Student
                </button>
                <button 
                  className={user === 'teacher' ? 'active-btn' : ''} 
                  onClick={() => { setuser('teacher'); setErrors({}); }}
                >
                  Teacher
                </button>
              </div>
            </div>

            <div className="item2">
              <p>Name</p>
              <input 
                type="text" 
                value={name} 
                placeholder='Enter your Name' 
                onChange={(e) => {
                  dispatch(setname(e.target.value))
                  if(errors.name) setErrors({...errors, name: ''})
                }}
              />
              {errors.name && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.name}</span>}
            </div>

            <div className="item2">
              <p>{user === 'student' ? 'Roll number' : 'Employee id'}</p>
              <input 
                type="text" 
                value={roll} 
                placeholder={user === 'student' ? 'Roll Number(e.g. 25BTEC040)' : 'Employee id (e.g. EMP001)'} 
                onChange={(e) => {
                  dispatch(setroll(e.target.value))
                  if(errors.roll) setErrors({...errors, roll: ''})
                }} 
              />
              {errors.roll && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.roll}</span>}
            </div>

            <div className="item3">
              <p>Password</p>
              <input 
                type="password" 
                placeholder='Enter your password' 
                value={password} 
                onChange={(e) => {
                  setpassword(e.target.value)
                  if(errors.password) setErrors({...errors, password: ''})
                }}
              />
              {errors.password && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.password}</span>}
            </div>

            <button id='sign' className='sign-nav' onClick={handlesign}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

