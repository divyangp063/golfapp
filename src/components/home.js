import React, { useState } from "react";
import './home.css'; // Import custom CSS

const Home = () => {
    const [quantity, setQuantity] = useState(1);
    const [isSelected, setIsSelected] = useState(false);

    const handleIncrement = () => {
        if (quantity < 100) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        if (value === "") {
            setQuantity(0);
        } else {
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
                setQuantity(parsedValue);
            }
        }
    };

    const handleSelection = () => {
        if (isSelected) {
            setIsSelected(false);
            return;
        }
        setIsSelected(true);
        alert(`Selected quantity: ${quantity}`);
    };

    return (
        <>
            <header className="text-center my-4">
                <h1>GolfShopPro</h1>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top" src={require("../assets/V1XCover.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $47.99</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Titleist Pro V1</h5>
                                <hr className="title=separator" />
                                <p className="card-text">A premium golf ball designed for golfers seeking optimal performance in all areas of their game. Known for its exceptional distance, consistent flight, and soft feel.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={handleDecrement}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={quantity}
                                        onChange={handleChange}
                                    />
                                    <button className="plus-btn" onClick={handleIncrement}>+</button>
                                </div>
                                <button className="select-btn" onClick={handleSelection} disabled={quantity === 0}>{isSelected ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card h-100 card-hover">
                            <div className="position-relative">
                                <img className="card-img-top" src={require("../assets/V1XCover.jpg")} alt="Golf club cover" />
                                <span className="badge position-absolute top-0 end-0 m-3 price-badge">Unit price: $47.99</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Titleist Pro V1</h5>
                                <hr className="title=separator" />
                                <p className="card-text">A premium golf ball designed for golfers seeking optimal performance in all areas of their game. Known for its exceptional distance, consistent flight, and soft feel.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="quantity-control">
                                    <button className="minus-btn" onClick={handleDecrement}>-</button>
                                    <input
                                        type="text"
                                        className="quantity-input"
                                        value={quantity}
                                        onChange={handleChange}
                                    />
                                    <button className="plus-btn" onClick={handleIncrement}>+</button>
                                </div>
                                <button className="select-btn" onClick={handleSelection} disabled={quantity === 0}>{isSelected ? "Selected" : "Select"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;