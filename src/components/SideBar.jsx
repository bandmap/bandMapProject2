import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div id="sidebar">
            <ul className="nav">
                <li className="section-title">我的會員</li>
                <li><Link to='/calendar'>行事曆</Link></li>
                <li className="section-title">我的收藏</li>
                <li><a href="#collect-event">收藏的活動</a></li>
                <li><a href="#collect-band">收藏的樂團</a></li>
                <li className="section-title">我的貼文</li>
                <li><a href="#">收藏的貼文</a></li>
            </ul>
        </div>
    )
}

export default SideBar