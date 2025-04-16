import React from 'react'
import './MainContainer.css'
import {useNavigate} from 'react-router-dom'

export default function MainContainer() {

    const handleClick = useNavigate()

    return (
        <div className="home-container">
               
                <div className="home-container-content">
                    <h3>Why should you buy Wood Pressed Oils?</h3>
                    <p>Wood pressed oils are produced at moderate temperatures and with no chemicals, they have low cholesterol levels
                        Helps to reduce the risk of heart disease and other health issues.
                        They improves blood circulation and contributes to healthy skin by preventing wrinkles and premature aging.
                        Loaded with antioxidants, it strengthens the jaws and reduces gum bleeding.
                        Improves hair growth and repairs damaged hair.</p><br/>
                    <center><button className="home-btn" onClick={()=>handleClick('/shop')}>Shop</button></center>
                </div>
        </div>
    )
}
