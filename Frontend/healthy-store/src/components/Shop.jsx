import React from 'react'
import './Shop.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState,useEffect } from 'react';
import axios from 'axios'

const Shop=()=>{    

    const [oilsrecord,setOilrecord]=useState("");

    //To get Products data from oils table in database
    useEffect(() => {
        fetch("http://localhost:8081/oils/Oils_list")
        .then(result => result.json())
        .then(
            (result) => {
            console.log("Records received")
            console.log(result)
            setOilrecord(result)
        })
    }, [])

    //To get user data in local storage
    const user = JSON.parse(localStorage.getItem("token"));

    //To add product data to Cart table in database
    const insertFunction = async (record) => {
        await axios.post('http://localhost:8081/cart/insert',record)
        alert("Product addded to cart");
    }

return (
    <div className="app"><Navbar/>
    <section className="container content-section">
        <h2 className="section-header">Restore your Energy!</h2>
        <div className="shop-items">

            <div className="shop-item">{oilsrecord && oilsrecord.map(record => (
                <div key={record.id}>
                <span className="shop-item-title">{record.name}</span>
                <img className="shop-item-image" src={record.image} alt="Oils"/>
                <div className="shop-item-details">
                    <span className="shop-item-price">${record.price}</span>
                    {user && <button className="btn btn-primary" type="button" onClick={(e) => insertFunction(record)}>ADD TO CART</button>}
                    {!user &&  <button className="btn btn-primary" onClick={() => {alert("Login to add the product in cart")} }>Add to cart</button>}
                </div>
                </div>
                ))}
            </div>
            
        </div>
    </section>
    <Footer />
    </div>
    )
}

export default Shop;