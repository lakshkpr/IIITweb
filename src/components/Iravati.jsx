import React from 'react'
import toast from 'react-hot-toast'

const Iravati = () => {
    function handlebtn()
    {
        toast.error("Room can only be booked after the group formation. Make sure you have completed that step!")
        toast.success("Only group leader can book room")
    }
  return (
    <div className='grid'>
      <div className="choose">
        <div>
            <h2>301</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>302</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>303</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>304</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
        </div>
      <div className="choose">
        <div>
            {/* <h2>101</h2>
        </div>
        <div><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button>Book Room</button>
      </div>
      <div className="choose">
        <div> */}
            <h2>305</h2>
        </div>
       <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>306</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>307</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>308</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>309</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>310</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
      <div className="choose">
        <div>
            <h2>311</h2>
        </div>
        <div id='beds'><button>A</button><button>B</button><button>C</button><button>D</button></div>
        <button id='bookit'
        onClick={handlebtn}>Book Room</button>
      </div>
    </div>
  )
}

export default Iravati
