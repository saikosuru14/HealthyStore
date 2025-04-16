import React from 'react'
import {useNavigate} from 'react-router-dom'

//It will be updated soon with our data
export default function Aboutus() {
    const handleClick = useNavigate()
    return (
        <div>
            <h1>About Us</h1>
            <button className="btn btn-primary" onClick={()=>handleClick('/')}>Home</button>
        </div>
    )
}
