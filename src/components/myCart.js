import React from "react";

const MyCart = () => {
    let title = "My Cart page";

    return (
        <div>
            <h1>
                {title}
            </h1>
            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default MyCart;