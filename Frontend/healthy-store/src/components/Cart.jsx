import React from 'react'
import './Shop.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState,useEffect } from 'react';
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'

export default function Cart() {

  const [product,setProducts]=useState("");

  //For fetching items from cart table in database
  useEffect(() => {
      fetch("http://localhost:8081/cart/cart_list")
      .then(result => result.json())
      .then(
          (result) => {
          console.log("Records received")
          console.log(result)
          setProducts(result)
          updateCartTotal()
      })
  }, [])


  //To remove cart Item from cart table in database
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8081/cart/delete/${id}`);
    window.location.reload();
    updateCartTotal()
  };

//To keep the quantity to minimum 1
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {   //If input quantity is not a number or less than 0
        input.value = 1
    }
    updateCartTotal()
}


//To update cart total
function updateCartTotal() {
    //First element is cart items container with cart item rows 
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] 
     //List of cart item rows
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    //Looping through each cart-item-row
    for (let i=0; i < cartRows.length; i++) {
        //Storing ith cart-item-row
        var cartRow = cartRows[i]   
        //Only one (first) item in list of elements with class name:cart-price inside cart-row
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] 
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        //Replacing $ inside the text of priceElement and taking floating number(price) only 
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        //Taking input value but not innerText
        var quantity = quantityElement.value 
         //Total amount for each cart-item-row and adding it to total variable
        total = total + (price * quantity)

        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', deleteItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }
    //Round off to two decimal places
    total = Math.round(total * 100) / 100   

     //Updating total cart amount
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total 
    
    
}


const handleClick = useNavigate()

  
  return (
    <div>
      <Navbar/>
      <section className="container content-section">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM</span>
                <span className="cart-price cart-header cart-column">PRICE</span>
                <span className="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>

            
                <div className="cart-items">
                {product && product.map(record => (
                <div key={record.id}>
                  < div className="cart-row">
                  <div className="cart-item cart-column">
                      <img className="cart-item-image" src={record.image} width="100" height="100" />
                      <span className="cart-item-title">{record.name}</span>
                  </div>
                  <span className="cart-price cart-column">${record.price}</span>
                  <div className="cart-quantity cart-column">
                    <input className="cart-quantity-input" type="number" />
                     <button className="btn btn-danger" type="button" onClick={() => deleteItem(record.id)}>REMOVE</button>
                  </div>
                </div>
              </div>))}
            </div>

            {/* --------------------------------------------------------------------------- */}
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <strong><span className="cart-total-price"><b>$0</b></span></strong>
            </div>
            <button className="btn btn-primary btn-purchase" type="button" onClick={()=>handleClick('/purchase')}>PURCHASE</button>
        </section>
        <Footer />
    </div>
  )
}
