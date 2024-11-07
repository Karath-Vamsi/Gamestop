import React, { useContext } from "react";
import "../Vanity.css"
import axios from "axios";
import CartSignInContext from "../context/cartSignInContext.jsx";
import UsernameContext from "../context/usernameContext.jsx";
import CartListContext from "../context/cartListContext.jsx";

const DB_URL = "http://127.0.0.1:8000";

const Spotlight_Hero = () => {
    const [ isUserSignedIn, setIsUserSignedIn] = useContext( CartSignInContext)
  const [ Username, setUsername] = useContext( UsernameContext)
  const [ cartContent, setCartContent] = useContext( CartListContext)

const handleAddToCartClick = async ( name) => {
    // const gamesToAdd = document.getElementById( "spotlight-add-game").value
    const response = await axios.get( `${DB_URL}/addToCart/?usn=${Username}&toAdd=${name}`)
    setCartContent( response.data)
  }
  return (
    <>
    <div className="g2">
      <div className="game-card">
        <img className="game-card-image" src="">
        </img>
        <div className="game-card-info">
          Title: Red Dead Redemption<br /> Price: $18
        </div>
        { isUserSignedIn == true ? <div className="game-card-button">
          <button className="cart-popup-button" onClick={() => handleAddToCartClick("Red Dead Redemption")}>Add To Cart</button>
        </div>
        :
        <></>}
      </div>
      <div className="game-card">
        <img className="game-card-image" src="">
        </img>
        <div className="game-card-info">
          Title: Valorant<br /> Price: Free
        </div>
        { isUserSignedIn == true ? <div className="game-card-button">
          <button className="cart-popup-button" onClick={() => handleAddToCartClick("Valorant")}>Add To Cart</button>
        </div>
        :
        <></>}
      </div>
      <div className="game-card"></div>
    </div>
    </>
  );
}

export default Spotlight_Hero