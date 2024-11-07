import React, { useContext } from "react";
import "../Vanity.css"
import axios from "axios";
import CartSignInContext from "../context/cartSignInContext.jsx";
import UsernameContext from "../context/usernameContext.jsx";
import CartListContext from "../context/cartListContext.jsx";

const DB_URL = "http://127.0.0.1:8000";

const Spotlight_Sidebar = () => {
    const [ isUserSignedIn, setIsUserSignedIn] = useContext( CartSignInContext)
  const [ Username, setUsername] = useContext( UsernameContext)
  const [ cartContent, setCartContent] = useContext( CartListContext)

const handleAddToCartClick = async () => {
    const gamesToAdd = document.getElementById( "spotlight-add-game").value
    console.log( gamesToAdd)
    console.log( typeof( gamesToAdd))
    console.log( Username)
    const response = await axios.get( `${DB_URL}/addToCart/?usn=${Username}&toAdd=${gamesToAdd}`)
    console.log( response.data)
    setCartContent( response.data)
  }
  return (
    <>
    {/* <div className="spotlight"> */}
        {/* <Carousel data={ slides }/>
        <div className="spotlight-text">
            <h1>Spotlight</h1>
            <p className="">Check out our latest deals and offers!</p>
        </div> */}
        <div className="g1">
          { isUserSignedIn == true
            ?
            <>
            <label>
                Test Cart
            <input type="text" id="spotlight-add-game" placeholder="Comma Separated Names"></input>
          </label> <br />
          <button className="cart-popup-button" onClick={ () => handleAddToCartClick()}>
            Add To Cart
          </button>
          </>
          :
          <>
          <label>Login To Add Games</label>
          </>}
        </div>
    {/* </div> */}
    </>
  );
}

export default Spotlight_Sidebar