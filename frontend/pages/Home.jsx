import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import './Home.css';
import back_video from '../src/assets/gamestop_homescreen2.mp4';

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