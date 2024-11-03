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
                    productName: data.map(item => item.name),
                    buyQuantity: new Array(data.length).fill(0),
                    productImage: data.map(item => item.image),
                    productPrice: data.map(item => item.price),
                    productDescription: data.map(item => item.description)
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
        const value = event.target.value;
        const newOrder = { ...order };
        if (value === "") {
            newOrder.buyQuantity[index] = 0;
        } else {
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
                newOrder.buyQuantity[index] = parsedValue;
            }
        }
        setOrder(newOrder);
    };

    const handleSelection = (index) => {
        const newSelection = [...isSelected];
        newSelection[index] = !newSelection[index];
        setIsSelected(newSelection);

        if (!newSelection[index]) {
            const newOrder = { ...order };
            newOrder.buyQuantity[index] = 0;
            setOrder(newOrder);
        }
    };

    const isAnyItemSelected = isSelected.some((selected) => selected);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const selectedProducts = order.productName
            .map((name, index) => ({ name, quantity: order.buyQuantity[index], selected: isSelected[index] }))
            .filter(product => product.selected && product.quantity > 0)
            .map(product => `${product.name}: ${product.quantity}`)
            .join('\n');
    
        if (selectedProducts.length > 0) {
            alert(`Products added:\n${selectedProducts}`);
            navigate('/home/myCart', { state: order });
        } else {
            alert('No products selected.');
        }
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
                                        <img className="card-img-top image-shadow" src={require(`../assets/${item.image}`)} alt={item.name} />
                                        <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: ${item.price}</span>
                                        <span className="badge position-absolute bottom-0 start-0 m-3 price-badge">Items left: {item.quantity}!</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <hr className="title-separator" />
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
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
                                        <button className="select-btn" onClick={() => handleSelection(index)} disabled={order.buyQuantity[index] === 0}>{isSelected[index] ? "Selected" : "Select"}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <div className="button-container">
                    <button className="add-order" onClick={handleSubmit} disabled={!isAnyItemSelected}>Add to cart</button>
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