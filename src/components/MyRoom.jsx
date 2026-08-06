import React from 'react'
import './MyRoom.css'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import GroupImg from '../assets/group.png'
import roomImg from '../assets/Room.png'
import allocateImg from '../assets/allocate.png'

const MyRoom = () => {
  return (
    <div className='cards'>
        <div id='d1'>
            <div className="head1">
                <img src={roomImg} alt="" />
                <h3>Your Room</h3>
            </div>
            <div className="browseRoom">
                <img src={roomImg} alt="" />
                <p>No room allocated yet</p>
                <NavLink to={'/dashboard/booking'}
                className={'nav-book'}>Browse Rooms</NavLink>
            </div>
        </div>
        <div className="second">
             <div id='d2'>
                <div className="head2">
                    <img src={GroupImg} alt="" />
                    <h3>Grouping Window</h3>
                </div>
                <p id='green'>Grouping Window Open, Choose your roommates!</p>
                <h3>BTECH 2025</h3>
                <div className="timing">
                    <div className="opens">
                        <p id='dull'>Opens</p>
                        <p>dd/mm/yy</p>
                    </div>
                    <div className="closes">
                        <p id='dull'>Closes</p>
                        <p>dd/mm/yy</p>
                    </div>
                </div>
                <NavLink
                to={'/dashboard/group'}
                className={'nav-group'}>Go to group formation</NavLink>
             </div>
             <div id='d3'>
                <div className="head3">
                    <img src={allocateImg} alt="" />
                    <h3>Allocation Window</h3>
                </div>
                <p id='blue'>Opening Soon!</p>
                <h3>BTECH 2025</h3>
                <div className="timing">
                    <div className="opens">
                        <p id='dull'>Opens</p>
                        <p>dd/mm/yy</p>
                    </div>
                    <div className="closes">
                        <p id='dull'>Closes</p>
                        <p>dd/mm/yy</p>
                    </div>
                </div>

             </div>
        </div>
    </div>
  )
}

export default MyRoom
