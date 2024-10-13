import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing images from the assets folder
import MohamedImage from "../assets/Mohamed.jpg";
import DivyangImage from "../assets/Divyang.jpg";

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
                        At Team 3, our goal is to provide golfers with the best gear, support, 
                        and advice to elevate their game.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        We aim to be a trusted name in golf, inspiring players of all levels to 
                        improve and enjoy the game.
                    </p>
                </section>

                <section className="strategy mb-5">
                    <h2>Our Strategy</h2>
                    <p>
                        We focus on delivering top-quality products and personalized service to meet 
                        the needs of golfers, from beginners to pros.
                    </p>
                </section>

                <section className="team mb-5">
                    <h2>Meet the Team</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img
                                src={MohamedImage}
                                alt="Mohamed Asmali"
                                className="rounded-circle mb-3"
                            />
                            <h5>Mohamed Asmali</h5>
                            <p>(asmali.1)</p>
                            <p>
                                4th Studying Computer Science at Ohio State University. Passionate about Backend end 
                                software engineering, and building technology solutions that help build communities.  I am aiming to 
                                bridge the gap between innovation and representation in the tech world.
                            </p>
                        </div>

                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150" /* Placeholder image - Add your image here */
                                alt="Krishna Sai Ketha"
                                className="rounded-circle mb-3"
                            />
                            <h5>Krishna Sai Ketha</h5>
                            <p>(ketha.2)</p>
                            <p>
                                {/* Add your description here */}
                            </p>
                        </div>

                        <div className="col-md-4 text-center">
                            <img
                                src={DivyangImage}
                                alt="Divyang Prajapati"
                                className="rounded-circle mb-3"
                            />
                            <h5>Divyang Prajapati</h5>
                            <p>(prajapati.30)</p>
                            <p>
                                Studying Computer Science. Passionate about web development and software engineering. 
                                I aim to provide the best user experience by implementing simple, intuitive UIs that 
                                are easy on the eyes. I’ve worked on several web applications and ensured users are 
                                satisfied with the final product.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3 Golf. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
