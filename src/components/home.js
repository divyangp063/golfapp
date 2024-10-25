import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './navbar.css';
import './Home.css'; // Import custom CSS

const Home = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0],
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
    const [isSelected, setIsSelected] = useState([false, false, false, false, false]);
    const [inventory, setInventory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://xjz3fpwsp6.execute-api.us-east-2.amazonaws.com/production/inventory-management/inventory')
            .then(response => response.json())
            .then(data => {
                setInventory(data);
                setIsSelected(new Array(data.length).fill(false));
                setOrder({
                    ...order,
                    productName: data.map(item => item.name),
                    buyQuantity: new Array(data.length).fill(0),
                    productImage: data.map(item => item.image),
                    productPrice: data.map(item => item.price)
                });
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

    const handleSelection = (index) => {
        const newSelection = [...isSelected];
        newSelection[index] = !newSelection[index];
        setIsSelected(newSelection);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedProducts = order.productName
            .map((name, index) => ({ name, quantity: order.buyQuantity[index], selected: isSelected[index] }))
            .filter(product => product.selected && product.quantity > 0);
        if (selectedProducts.length > 0) {
            alert(`Products added:\n${selectedProducts.map(p => `${p.name}: ${p.quantity}`).join('\n')}`);
            navigate('/home/myCart', { state: { order } });
        } else {
            alert('No products selected.');
        }
    };

    return (
        <div>
            <h1>Available Products</h1>
            <form onSubmit={handleSubmit}>
                {inventory.map((item, index) => (
                    <div key={item.id}>
                        <input
                            type="checkbox"
                            checked={isSelected[index]}
                            onChange={() => handleSelection(index)}
                        />
                        <span>{item.name}</span>
                        <button type="button" onClick={() => handleDecrement(index)}>-</button>
                        <input
                            type="number"
                            value={order.buyQuantity[index]}
                            readOnly
                        />
                        <button type="button" onClick={() => handleIncrement(index)}>+</button>
                    </div>
                ))}
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
};

export default Home;