import React from "react";
import Carousel from "../components/Carousel.jsx";
import Navbar from "../components/Navbar.jsx";
import "../Vanity.css"

const Spotlight = () => {
  return (
    <>
    <Navbar />
    <div className="spotlight">
        <Carousel data={ slides }/>
        <div className="spotlight-text">
            <h1>Spotlight</h1>
            <p className="">Check out our latest deals and offers!</p>
        </div>
    </div>   
    </>
  );
}

export default Spotlight;