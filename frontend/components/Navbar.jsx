import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="header">
            <div className="search-bar">
                <input className="search-box" type="text" placeholder="Search for games ..." />
                <button className="search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div className="cart">
                <button className="cart-button">
                    <i class="fa-solid fa-user"></i>
                </button> | 
                <button className="cart-button">
                    <i class="fa-solid fa-bell"></i>
                </button> | 
                <button className="cart-button">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    );
};

export default Navbar;