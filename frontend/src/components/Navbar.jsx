import React from "react";
import "../Vanity.css"
import { useState } from "react";
import CartContext from "../context/cartContext";

const Navbar = () => {
    const [ isCartOpen, setIsCartOpen] = useState( CartContext);

    const handleCartClick = () => {
        console.log( "Cart logo clicked")
        setIsCartOpen( true)
    }

    return (
        <>
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
                <button className="cart-button" onClick={ () => handleCartClick()}>
                    <i class="fa-solid fa-cart-shopping" ></i>
                </button>
            </div>
        </div>
        { isCartOpen == true ? (
        <>
        <div className='cart-popup-main'>
          <button className="cart-popup-button" onClick={ () => setIsCartOpen( false)}>X</button>
        </div>
        </>) : null}
        </>
    );
};

export default Navbar;