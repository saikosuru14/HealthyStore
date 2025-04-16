import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { BsPersonFill, BsPersonBadgeFill, BsKey, BsEye, BsEyeFill } from 'react-icons/bs';


export default function Login() {
    
    //To keep form data private
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClick = useNavigate();

    const [User, setUser] = useState([
        {
            "username" : "",
            "password" : ""
        }
    ]);

    //To set input login data to User object
    function changeDetails(e) {
        let val = e.target.value;
        setUser({...User, [e.target.name]: val})
    }

    //Call Verify method in Backend to compare login details with the database
    const verifyUser = async (e) => {
        let username = document.getElementById('username').value;
        let result;
        try {
            result = await axios.post("http://localhost:8081/users/verify", User);
        }
        catch(err) {
            alert("Enter Username and Password to Login!")
        }

        //To store user data in local storage
       if(result.data !== null) {
        const user = {
            username : User.username
        }
        localStorage.setItem('token', JSON.stringify(user));
        }

        if(result.data === username) {
            alert("Login successful!");
            // const loginUser = result.data;
            handleClick('/');
        }
        else {
            alert(result.data);
        }
    }


    return (
            <div className="login-container" >
            <form onSubmit={(e) => handleSubmit(e)}>
                <div class="con">
                <header class="head-form">
                    <h2>Log In</h2>
                    <p className="line">login here using your username and password</p>
                </header>
                
                    <div className="field-set">
                        <span class="input-item"><BsPersonFill/></span>
                        <input type="text" className="form-input" id="username" name="username" value={User.username} onChange={(e) => changeDetails(e)} placeholder="@UserName" required/>
                        <br/><br/>
                        <span class="input-item"><BsKey/></span>
                        <input type="password" className="form-input" id="password" name="password" value={User.password} onChange={(e) => changeDetails(e)} placeholder="Password"  required/>
                        <br/>
                        <button className="login-button" onClick={(e) => verifyUser(e)} > Log In </button>
                        {/* <input className="log-in" type="submit" value="Log In" name="login" onClick={(e) => verifyUser(e)} /> */}
                        <br/><br/> 
                        <span className="">New User ? &nbsp;
                            <Link to="/signup">Register Here</Link>
                        </span>
                       {/* <button class="btn submits sign-up">Sign Up </button> */}
                    </div>
                
                </div>
            </form>
            </div>
    )
}