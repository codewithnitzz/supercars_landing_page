import React from 'react'
import './Ford.css'


const Ford = () => {
  return (
    <div name="ford" className="ford">
        <div className="container">
            <div className="top">
                <h1>Ford Mustang GT</h1>
            </div>

            <div className="bottom">
                <button className="btn btn-dark">Drive</button>
                <button className="btn">Ride</button>
            </div>
        </div>

    </div>
  )
}

export default Ford