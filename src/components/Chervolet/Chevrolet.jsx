import React from 'react'
import './Chevrolet.css'

const Chevrolet = () => {
    return (
        <div name='chevrolet' className='chevrolet'>
            <div className="container">
                <div className="top">
                    <h1>Chevrolet ZL1</h1>
                </div>

                <div className="bottom">
                    <button className="btn btn-dark">Drive</button>
                    <button className="btn">Ride</button>
                </div>
            </div>
        </div>
    )
}

export default Chevrolet