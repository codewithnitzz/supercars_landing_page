import React from 'react'
import './Toyota.css'


const Toyota = () => {
  return (
    <div name="toyota" className="toyota">
        <div className="container">
            <div className="top">
                <h1>Toyota GR 86</h1>
            </div>

            <div className="bottom">
                <button className="btn btn-dark">Drive</button>
                <button className="btn">Ride</button>
            </div>
        </div>
    </div>
  )
}

export default Toyota