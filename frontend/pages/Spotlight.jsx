import React from "react";
import { Carousel } from "../components/Carousel";
import { slides } from "../data/carouselData.json"
import Navbar from "../components/Navbar";

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