import React, { useRef } from "react";
import { Link } from "react-router-dom";

function SideBar({ scrollToSection, collectBandRef, collectRef }) {
    return (
        <div id="sidebar">
            <ul className="nav">
                <li className="section-title">我的會員</li>
                <li><Link to='/calendar' className="collect-thing">行事曆</Link></li>
                <li className="section-title">我的收藏</li>
                <li><div className="collect-thing" onClick={() => scrollToSection(collectRef)} >收藏的活動</div></li>
                <li><div className="collect-thing" onClick={() => scrollToSection(collectBandRef)}>收藏的樂團</div></li>
                <li className="section-title">我的貼文</li>
                <li><button className="collect-thing">收藏的貼文</button></li>
            </ul>
        </div>
    )
}

export default SideBar