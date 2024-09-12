import React from "react";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/SideBar.jsx";
import back_video from '../assets/gamestop_homescreen2.mp4';

const Home = () => {
    return (
        <>
        <div className="background-video">
            <video src={back_video} autoPlay loop muted/>
        </div>
        <Navbar />
        <SideBar />
        </>
    );
};

export default Home;