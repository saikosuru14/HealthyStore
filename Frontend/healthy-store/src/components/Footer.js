import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css';
import { BsInstagram, BsFacebook,BsLinkedin,BsTwitter } from "react-icons/bs";

export default function Footer() {
    return (
        <div>
             <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><Link to="/aboutus">about us</Link></li>
                                <li><Link to="#">our services</Link></li>
                                <li><Link to="#">privacy policy</Link></li>
                                <li><Link to="#">affiliate program</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">shipping</Link></li>
                                <li><Link to="#">returns</Link></li>
                                <li><Link to="#">order status</Link></li>
                                <li><Link to="#">payment options</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Address</h4>
                            <ul>
                                <li>Forest</li>
                                <li>Amazon</li>
                                <li>Andhra Pradesh</li>
                                <li>India</li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="https://www.instagram.com/"><BsInstagram/></a>
                                <a href="https://www.facebook.com/"><BsFacebook/></a>
                                <a href="https://www.LinkedIn.com/"><BsLinkedin/></a>
                                <a href="https://www.Twitter.com/"><BsTwitter/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
