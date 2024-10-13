import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
    return (
        <div className="about-page">
            <header className="header bg-light p-3 text-center">
                <h1>About Team 3</h1>
            </header>

            <div className="container mt-5">
                <section className="mission-vision mb-5">
                    <h2>Our Mission</h2>
                    <p>
                        At Team 3, our goal is to bring golfers the best equipment, advice, 
                        and support to help them enjoy every game.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        We aim to be a trusted name in the golf community, helping players of all skill levels 
                        improve their performance and passion for the game.
                    </p>
                </section>

                <section className="strategy mb-5">
                    <h2>Our Strategy</h2>
                    <p>
                        We focus on providing high-quality gear, expert guidance, and reliable customer service. 
                        Our products and support are designed to meet the needs of both beginners and pros.
                    </p>
                </section>

                <section className="team mb-5">
                    <h2>Meet the Team</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Mohamed Asmali (asmali.1)</li>
                        <li className="list-group-item">Krishna Sai Ketha (ketha.2)</li>
                        <li className="list-group-item">Divyang Prajapati (prajapati.30)</li>
                    </ul>
                </section>
            </div>

            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
