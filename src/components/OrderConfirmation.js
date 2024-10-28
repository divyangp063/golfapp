import React from "react";

import { useLocation } from "react-router-dom";

import './MyCart.css';




const OrderConfirmation = () => {
    let title = "Order Confirmation";



    const { state } = useLocation();
    const order = state;

    console.log(order)

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
            <h3> Order Confirmation Id: {order.orderConfirmationID}</h3>
            <div className="cart-holder">
                <hr/>
                    {list}
            </div>

            <h4>Total: $ {total.toFixed(2)}</h4>
            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default OrderConfirmation;