import React from 'react'
import './Purchase.css'
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios' 

export default function Purchase() {

    const finalClick = useNavigate();

    // const {state}= useLocation();

    const purchaseClicked=(event)=> {
        // event.preventDefault();
        alert('Thank you for your purchase!')
        finalClick('/');
    }

    const deletePurchasedProducts = async () => {
      await axios.delete(`http://localhost:8081/cart/deleteAll`);
    };

    return (
    <div class="mainscreen">
      <div class="card">
        <div class="leftside">
          <img
            src="https://cdn.shopify.com/s/files/1/0673/8650/7546/products/doTERRA-Fractionated-Coconut-Oil-115ml.png?v=1667844737&width=990"
            class="product"
            alt="Shoes"
          />
          {/* <div>{state.totalamt}</div> */}
        </div>
        <div class="rightside">
          <form  onSubmit={purchaseClicked}>
                <h1>CheckOut</h1>
                <h2>Payment Information</h2>
                <p>Cardholder Name</p>
                <input type="text" class="inputbox" name="name" required />
                <p>Card Number</p>
                <input type="number" class="inputbox" name="card_number" id="card_number" required />

                <p>Card Type</p>
                <select class="inputbox" name="card_type" id="card_type" required>
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
                </select>
            <div class="expcvv">

                <p class="expcvv_text">Expiry</p>
                <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                <p class="expcvv_text2">CVV</p>
                <input type="password" class="inputbox" name="cvv" id="cvv" required />
            </div>

                <input type="submit" class="button" value="CheckOut" onClick={deletePurchasedProducts}/>
          </form>
        </div>
      </div>
    </div>
    )
}
