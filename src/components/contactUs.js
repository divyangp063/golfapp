import React from "react";
import "./ContactUs.css"; // Custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

const ContactUs = () => {
    return (
        <div className="contact-page">
            <header className="header bg-light p-3 text-center">
                <h1>Contact Us</h1>
            </header>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Customer Support</h2>
                        <p>
                            Need help with your order? Have a question about our products? 
                            We're here to assist you! Contact us for returns, issues, or general inquiries.
                        </p>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Phone:</strong> (614) 688-4636
                            </li>
                            <li className="list-group-item">
                                <strong>Email:</strong> <a href="mailto:team3@osu.edu">team3@osu.edu</a>
                            </li>
                            <li className="list-group-item">
                                <strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM (EST)
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h2>Send Us a Message</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Your message..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer bg-dark text-white mt-5 p-3 text-center">
                <p>&copy; 2024 Team 3. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;
