import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import MyCart from "./components/myCart";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path='/home/aboutUs' element={<AboutUs />} />
          <Route path='/home/contactUs' element={<ContactUs />} />
          <Route path='/home/myCart' element={<MyCart />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
