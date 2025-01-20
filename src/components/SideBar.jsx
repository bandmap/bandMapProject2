import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserProvider";

function SideBar({ scrollToSection, collectBandRef, collectRef }) {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

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
            <li className="logout-btn" onClick={handleLogout}>登出</li>
        </div>
    )
}

export default SideBar