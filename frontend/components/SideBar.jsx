import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className="main-body">
            <div className="desc-box">
                <div className="intro">
                    <h2 id="app-title" onClick={() => navigate('/')}><i class="fa-brands fa-algolia"></i> GAMESTOP</h2>
                    <h4 id="app-tag">Level Up Your Play</h4>
                    <h5 id="app-desc">This is not a commercial project. All of the prices are generated to imitate a real game shop.</h5>
                </div>
                <div className="hyperlinks">
                    
                </div>
            </div>
            <div className="sidebar">
                {/* <h3 id="quick-nav-title">Quick Navigation</h3> */}
                <button className="sidebar-links" onClick={() => navigate('spotlight')}>
                    <div className="icon-circle"><i class="fa-solid fa-highlighter"></i></div> Spotlight
                </button>
                <button className="sidebar-links">
                    <div className="icon-circle"><i class="fa-solid fa-trophy"></i></div> All time Top
                </button>
                <button className="sidebar-links">
                    <div className="icon-circle"><i class="fa-solid fa-award"></i></div> Best of the Year
                </button>
                <button className="sidebar-links">
                    <div className="icon-circle"><i class="fa-solid fa-ranking-star"></i></div> Top Charting
                </button>
                <button className="sidebar-links">
                    <div className="icon-circle"><i class="fa-solid fa-backward-fast"></i></div> Last 30 days
                </button>
                <button className="sidebar-links">
                    <div className="icon-circle"><i class="fa-solid fa-hourglass-end"></i></div> Coming Soon
                </button>
            </div>
        </div>
    );
};

export default SideBar;