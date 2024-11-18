import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './MyCart.css';




const MyCart = () => {
    let title = "My Cart page";

    const navigate = useNavigate()

    const { state } = useLocation();
    const order = state

    const [buttonEnabled,setButtonEnabled] = useState(false)
    const [orderStatus, setOrderStatus] = useState(0)

    function handleClick(e){

        e.preventDefault()
        const localAddr = 'http://localhost:3000/order-confirmation'
        const awsAddr = 'https://slxicufy92.execute-api.us-east-2.amazonaws.com/deploy/order-confirmation'
        console.log(order)

        fetch(awsAddr, 
            {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type':'application/json'
            },
            mode:'cors'
        })
        .then((response) => response.json())
        .then((data)=>{
            setButtonEnabled(true)
            setOrderStatus(data.result)
        })

    }

    const list = []
    let total = 0;

    for(let i = 0; i<order.buyQuantity.length; i++){
        if(order.buyQuantity[i]>0){

            list.push(
    
                    <div className="item-card">
                        <div className="image-container">
                            <img className="item-image" src={require(`../assets/${order.productImage[i]}`)} alt="Item"/>
                        </div>
                        <div className="title-container">
                            <h3>{order.productName[i]}</h3>
                            <p> quantity: {order.buyQuantity[i]}</p>
                        </div>
                        <div className="price-container">
                            <h3> $ {order.buyQuantity[i] * order.productPrice[i]}</h3>
                        </div>
                    </div>

            )

            total = total + order.buyQuantity[i] * order.productPrice[i]

        }
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            {buttonEnabled && (
                <h3>Order has been processed successfully: {orderStatus}</h3>
            )}
            <div className="cart-holder">
                <hr/>
                    {list}
            </div>

            <h4>Total: $ {total.toFixed(2)}</h4>
            <button disabled= {buttonEnabled} onClick={handleClick}> Proceed to Checkout </button>
            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default MyCart;