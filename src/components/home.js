import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';
import './home.css'; // Import custom CSS

const Home = () => {
    const [order, setOrder] = useState({
        buyQuantity: [],
        productPrice: [],
        productImage: [],
        productName: [],
        credit_card_number: '',
        expiry_date: '',
        cvvCode: '',
        card_holder_name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
        email:''
    });
    const [isSelected, setIsSelected] = useState([]);
    const [inventory, setInventory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://xjz3fpwsp6.execute-api.us-east-2.amazonaws.com/prod/inventory-management/inventory')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setInventory(data);
                setIsSelected(new Array(data.length).fill(false));
                setOrder({
                    /* Map items to their corresponding API spots */
                    ...order,
                    productName: data.map(item => item.NAME),
                    buyQuantity: new Array(data.length).fill(0),
                    productImage: data.map(item => item.IMAGE),
                    productPrice: data.map(item => item.UNIT_PRICE),
                    productDescription: data.map(item => item.DESCRIPTION)
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const handleIncrement = (index) => {
        const newOrder = { ...order };
        if (newOrder.buyQuantity[index] < 100) {
            newOrder.buyQuantity[index] += 1;
            setOrder(newOrder);
        }
    };

    const handleDecrement = (index) => {
        const newOrder = { ...order };
        if (newOrder.buyQuantity[index] > 0) {
            newOrder.buyQuantity[index] -= 1;
            setOrder(newOrder);
        }
    };

    const handleChange = (index, event) => {

        const newOrder = { ...order };
        newOrder.buyQuantity[index] = parseInt(event.target.value);
        setOrder(newOrder);
    };


    const handleSubmit = () => {
        navigate('/home/payment-info', { state: order });
    };

    return (
        <>
            <div className="home-page">
                <header className="text-center my-4">
                    <h1>Golf Essentials</h1>
                    <p>Make the opponents throw, with GolfShopPro...</p>
                </header>
                <div className="container">
                    <div className="row justify-content-center">
                        {inventory.map((item, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                                <div className="card h-100 card-hover">
                                    <div className="position-relative">
                                        <img className="card-img-top image-shadow" src={require(`../assets/${item.IMAGE}`)} alt={item.NAME} />
                                        <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: ${item.UNIT_PRICE}</span>
                                        <span className="badge position-absolute bottom-0 start-0 m-3 price-badge">Items left: {item.AVAILABLE_QUANTITY}</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.NAME}</h5>
                                        <hr className="title-separator" />
                                        <p className="card-text">{item.DESCRIPTION}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-center align-items-center">
                                        <div className="quantity-control">
                                            <button className="minus-btn" onClick={() => handleDecrement(index)}>-</button>
                                            <input
                                                type="text"
                                                className="quantity-input"
                                                value={order.buyQuantity[index]}
                                                onChange={(e) => handleChange(index, e)}
                                            />
                                            <button className="plus-btn" onClick={() => handleIncrement(index)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div className="button-container">
                    <button className="add-order" onClick={handleSubmit} disabled={!order.buyQuantity.some(quantity => quantity > 0)}>Add to cart</button>
                </div>
                <br />
                <br />
                <footer className="footer bg-dark">
                    <p>© 2024 Team 3 Golf. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Home;