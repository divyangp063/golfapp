import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './MyCart.css';

const MyCart = () => {
    const title = "My Cart page";
    const { state } = useLocation(); // Get order details from state

    const order = state; // Destructure order details from the state
    const [error, setError] = useState(null); // State to store error message for display
    const list = [];
    let total = 0;

    // Generate cart items and calculate total
    for (let i = 0; i < order.buyQuantity.length; i++) {
        if (order.buyQuantity[i] > 0) {
            list.push(
                <div className="item-card" key={i}>
                    <div className="image-container">
                        <img className="item-image" src={require(`../assets/${order.productImage[i]}`)} alt="Item" />
                    </div>
                    <div className="title-container">
                        <h3>{order.productName[i]}</h3>
                        <p> Quantity: {order.buyQuantity[i]}</p>
                    </div>
                    <div className="price-container">
                        <h3> $ {order.buyQuantity[i] * order.productPrice[i]}</h3>
                    </div>
                </div>
            );
            total += order.buyQuantity[i] * order.productPrice[i];
        }
    }

    // Handle checkout and update stock
    function handleClick() {
        // Clear any previous error message
        setError(null);

        // Prepare data to update stock
        const updatedInventory = order.productName
            .map((name, index) => ({
                name: name,
                quantity: order.buyQuantity[index]
            }))
            .filter(item => item.quantity > 0); // Only include items with quantity > 0

        // Send API request to update inventory stock
        fetch('https://xjz3fpwsp6.execute-api.us-east-2.amazonaws.com/prod/order-processing/order', {
            method: 'POST', // Use POST to send the order and update stock
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedInventory),
        })
        .then(response => response.json().then(data => ({ status: response.status, body: data })))
        .then(({ status, body }) => {
            if (status === 200) { //&& body.message === 'Inventory updated successfully') {
                alert(`Order processed successfully. Total: $${total.toFixed(2)}`);
            }
            // } else {
            //     setError(`Error: ${JSON.stringify(body, null, 2)}`);
            // }
        })
        .catch(error => {
            // Set the error message to display on the website
            setError(`There was a problem updating the stock. Please try again.\n\nError: ${error.message || error}`);
        });
    }

    return (
        <div>
            <h1>{title}</h1>
            {/* Display error message at the top if present */}
            {error && <div className="error-message">{error}</div>}
            <div className="cart-holder">
                <hr/>
                {list}
            </div>
            <h4>Total: $ {total.toFixed(2)}</h4>
            <button onClick={handleClick}> Proceed to Checkout </button>
            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default MyCart;
