import React from 'react'
import './Navbar.css';
import { Link,useNavigate } from "react-router-dom" ;
import Logo from './images/Logo.jpeg';
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


export default function Navbar() {
    //To get user data from local storage
    const user = JSON.parse(localStorage.getItem("token"));
    //console.log(user)

    const navigate = useNavigate();

    return (
        <div className="app">
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                      <li><img className="logo" src={Logo} alt="Logo"/></li>
                      <li><Link to="/">HOME</Link></li>
                      <li><Link to="/shop">SHOP</Link></li>
                      <li><Link to="/aboutus">ABOUT US</Link></li>
                      <li>{!user && <Link to='/login'>LOGIN</Link>}
                        {user && <a onClick={()=>{localStorage.removeItem("token")
                        navigate("/");}}>LOGOUT</a>}</li>

                      <li>{!user && <Link to="/login"><BsFillCartFill /></Link>}
                      {user && <Link to="/cart"><BsFillCartFill/></Link>}</li>
                    </ul>
                </nav>
                <h2 className="band-name band-name-large">Wood Pressed Oils</h2>
            </header>
        </div>
    )
}
