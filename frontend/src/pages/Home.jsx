import React from "react";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/SideBar.jsx";
import back_video from '../assets/gamestop_homescreen2.mp4';
import { CartProvider } from "../context/cartContext.jsx";

const Home = () => {
    return (
        <>
        <CartProvider>
        {/* <div className="background-video">
            <video src={back_video} autoPlay loop muted/>
        </div> */}
        <Navbar />
        <SideBar />
        </CartProvider>
        </>
    );
};

export default Home;