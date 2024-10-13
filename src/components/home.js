import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'; // Import custom CSS

const Home = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0],
        productName: ['Titleist Pro V1', 'Callaway HEX Warbird', 'Callaway HEX Diablo', 'Bridgestone E6', 'Bridgestone B330-RX'],
        productPrice: [47.99, 14.95, 47.99, 21.95, 37.95],
       productImage: ['V1XCover.jpg', 'CallawayWarbird.jpg','CallawayDiablo.jpg','BridgestoneE6.jpg','BridgestoneTout.jpg'],
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
    const navigate = useNavigate();

    /* '+' button increments the quantity of the product */
    const handleIncrement = (index) => {
        const newOrder = { ...order };
        if (newOrder.buyQuantity[index] < 100) {
            newOrder.buyQuantity[index] += 1;
            setOrder(newOrder);
        }
    };

    /* '-' button decrements the quantity of the product */
    const handleDecrement = (index) => {
        const newOrder = { ...order };
        if (newOrder.buyQuantity[index] > 0) {
            newOrder.buyQuantity[index] -= 1;
            setOrder(newOrder);
        }
    };

    /* Update the quantity of the product */
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

    /* Select the product */
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

    /* Handle form submission */
    const handleSubmit = (e) => {
        const productDetails = order.productName.map((name, index) => `${name}: ${order.buyQuantity[index]}`).join('\n');
        alert(`Products added:\n${productDetails}`);
        navigate('/home/myCart', { state: order });
    };

    return (
        <div className="home-page">
            <header className="text-center my-4">
                <h1>Golf Essentials</h1>
                <p>Make the opponents throw, with GolfShopPro...</p>
            </header>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top image-shadow" src={require("../assets/V1XCover.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $47.99</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Titleist Pro V1</h5>
                                <hr className="title-separator" />
                                <p className="card-text">A premium golf ball designed for golfers seeking optimal performance in all areas of their game. Known for its exceptional distance, consistent flight, and soft feel.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={() => handleDecrement(0)}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={order.buyQuantity[0]}
                                        onChange={(e) => handleChange(0, e)}
                                    />
                                    <button className="plus-btn" onClick={() => handleIncrement(0)}>+</button>
                                </div>
                                <button className="select-btn" onClick={() => handleSelection(0)} disabled={order.buyQuantity[0] === 0}>{isSelected[0] ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top image-shadow" src={require("../assets/CallawayWarbird.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $14.95</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Callaway Golf HEX Warbird</h5>
                                <hr className="title-separator" />
                                <p className="card-text">Built with Callaway’s proprietary HEX Aerodynamics, the Warbird reduces drag and promotes a stable, high-flying ball trajectory, even in windy conditions.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={() => handleDecrement(1)}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={order.buyQuantity[1]}
                                        onChange={(e) => handleChange(1, e)}
                                    />
                                    <button className="plus-btn" onClick={() => handleIncrement(1)}>+</button>
                                </div>
                                <button className="select-btn" onClick={() => handleSelection(1)} disabled={order.buyQuantity[1] === 0}>{isSelected[1] ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top image-shadow" src={require("../assets/CallawayDiablo.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $47.99</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Callaway Golf HEX Diablo</h5>
                                <hr className="title-separator" />
                                <p className="card-text">A versatile golf ball engineered for players seeking a balance of long distance, soft feel, and control. Featuring Callaway’s advanced HEX Aerodynamics, this ball reduces drag for a penetrating flight and stable performance in various conditions.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={() => handleDecrement(2)}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={order.buyQuantity[2]}
                                        onChange={(e) => handleChange(2, e)}
                                    />
                                    <button className="plus-btn" onClick={() => handleIncrement(2)}>+</button>
                                </div>
                                <button className="select-btn" onClick={() => handleSelection(2)} disabled={order.buyQuantity[2] === 0}>{isSelected[2] ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top image-shadow" src={require("../assets/BridgestoneE6.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $21.95</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bridgestone Prior Generation E6</h5>
                                <hr className="title-separator" />
                                <p className="card-text">A performance-focused golf ball designed to help golfers achieve straighter, longer shots with enhanced control. Known for its soft feel and excellent forgiveness, the E6 features a multilayer construction optimized for reducing sidespin, which helps minimize slices and hooks, allowing for more accurate and straighter ball flight.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={() => handleDecrement(3)}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={order.buyQuantity[3]}
                                        onChange={(e) => handleChange(3, e)}
                                    />
                                    <button className="plus-btn" onClick={() => handleIncrement(3)}>+</button>
                                </div>
                                <button className="select-btn" onClick={() => handleSelection(3)} disabled={order.buyQuantity[3] === 0}>{isSelected[3] ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top image-shadow" src={require("../assets/BridgestoneTout.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $37.95</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bridgestone Tout B330-RX</h5>
                                <hr className="title-separator" />
                                <p className="card-text">A premium golf ball designed for players with moderate swing speeds who are looking for tour-level performance without sacrificing distance. Featuring a soft multilayer construction, the B330-RX combines advanced distance technology with excellent control and feel, making it ideal for golfers seeking the best of both worlds.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={() => handleDecrement(4)}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={order.buyQuantity[4]}
                                        onChange={(e) => handleChange(4, e)}
                                    />
                                    <button className="plus-btn" onClick={() => handleIncrement(4)}>+</button>
                                </div>
                                <button className="select-btn" onClick={() => handleSelection(4)} disabled={order.buyQuantity[4] === 0}>{isSelected[4] ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="button-container">
                <button className="add-order" onClick={handleSubmit} disabled={!isAnyItemSelected}>Add to cart</button>
            </div>
            <br />
            <br />
            <footer className="footer bg-dark">
                <p>© 2024 GolfShopPro Team 3, Inc. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;