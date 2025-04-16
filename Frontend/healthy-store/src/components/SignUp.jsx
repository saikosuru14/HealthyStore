import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from './images/Logo.jpeg';
import { BsPersonFill, BsPersonBadgeFill, BsKey, BsEye, BsEyeFill, BsFilePost, BsEnvelope } from 'react-icons/bs';

export default function SignUp() {

    //To handle call the functions to validate form
    function handleForm() {
        handleUsername();
        handleEmail();
        handlePassword();
        handleConfirmPassword();
    }

    //To validate username
    function handleUsername() {
        let name = document.getElementById('username').value;
        let regName = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        if (name === "" || regName.test(name)) {
            window.alert("Please enter your username properly.");
            name.focus();
            return false;
        }
    }

    //To Validate email
    function handleEmail() {
        let email = document.getElementById('email').value;
        let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if (email === "" || !regEmail.test(email)) {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }

    }

    //To validate password
    function handlePassword() {
        let password = document.getElementById('password').value;
        let regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(!regPassword.test(password)) {
            alert("Please enter correct password with all types of characters included.");
            password.focus();
            return false;
        }
    }

    //To Match password
    function handleConfirmPassword() {
        let password = document.getElementById('password').value;
        let confirmpassword = document.getElementById('cpassword').value;

        if(password !== confirmpassword) {
            alert("Confirm Password should match with password");
            confirmpassword.focus();
            return false;
        }
    }

    const handleClick = useNavigate();

    const [User, setUser] = useState([
        {
            "username" : "",
            "email" : "",
            "password" : ""
        }
    ]);

    //To set input data User data to User object 
    function changeDetails(e) {
        let val = e.target.value;
        setUser({...User, [e.target.name]: val})
    }

    //To insert User details to users table in database
    const insertUser = async (e) => {
        await axios.post("http://localhost:8081/users/insert", User);
    }

    //To handle form on submission of form
    const handleSubmit = (event) => {
        event.preventDefault();
        handleForm();
        alert("Successfully Registered!!");
        handleClick('/login');
    }


    return (
            <div className="registration-container">
                
                <div className="registration-form">
                    {/* <div className="logo-container d-flex flex-row m-0 pb-5" >
                        <img src={Logo} alt="Logo"
                            className="logo" onClick={() => {handleClick('/')}} />
                    </div>     */}
                    <header class="head-form">
                        <h2>Sign Up</h2>
                    </header>
                      
                    
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <span class="input-item"><BsPersonFill/></span>
                            <input type="text" className="form-input" id="username" name="username" value={User.username} onChange={(e) => changeDetails(e)} placeholder="@UserName" required/>
                        <br/><br/>
                        
                        <span class="input-item"><BsEnvelope/></span>
                        <input type="email" className="form-input" id="email" name="email" value={User.email} onChange={(e) => changeDetails(e)} placeholder="Email"  required/>
                         <br/><br/>
                        <span class="input-item"><BsKey/></span>
                        <input type="password" className="form-input" id="password" name="password" value={User.password} onChange={(e) => changeDetails(e)} placeholder="Password"  required/>
                         <br/><br/>

                         <span class="input-item"><BsKey/></span>
                        <input type="password" className="form-input" id="cpassword" name="cpassword"  placeholder="Confirm Password"  required/>
                         <br/><br/>

                        
                        <input className="login-button" type="submit" name="insert" value="Register" onClick={(e) => insertUser(e)} />
                        
                        <div className="">
                            <span className="login-here-container">Already a User ? &nbsp;
                                <Link to="/login">Login Here</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

    )
}
