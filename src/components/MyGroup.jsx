import React, { useState } from 'react'
import './MyGroup.css'
import GroupImg from '../assets/group.png'
import toast, {Toaster} from 'react-hot-toast'



const MyGroup = () => {
    const [grpname, setgrpname] = useState('')
    function handlebtn(){
        const mygrp= {grpname}
        toast.success("Group name is successfully set")
    }
  return (
<div className="formgrp">
    <div className="max">
        <img src={GroupImg} alt="" />
       <div className="write">
        <p> BTECH 2025-- Create or join a group before 05/07/25 23:59:00</p>
       <p>Max 4 students are allowed per group</p>
       </div>
    </div>
    <div className='group'>
      <div className="create">
        <div className="head1">
            <img src={GroupImg} alt="" />
            <h3>Create a group</h3>
        </div>
        <p>Create a group and send invitations to your Roommates!</p>
        <input type="text" 
        placeholder='Group name (required)'
        value={grpname}
        onChange={(e)=>setgrpname(e.target.value)}/>
        <button
        onClick={handlebtn}>Create Group</button>
      </div>
      <div className="invite">
        <div className="head2">
            <img src={GroupImg} alt="" />
            <h3>Invitations:</h3>
        </div>
        <p id='red'>* No invitations recieved yet !
        </p>
      </div>

    </div>
</div>
  )
}

export default MyGroup
