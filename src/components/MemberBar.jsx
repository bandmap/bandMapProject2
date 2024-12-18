import React from "react";
import { Link } from "react-router-dom";

function MemberBar() {
    return (
        <div id="member-bar">
            <Link to='/'><img className="logo" src="./images/logo.svg" alt="logo" /></Link>
            <div className="menu">
                <img src="./images/icon/icon-member.svg" alt="" />
                <img src="./images/icon/icon-msg.svg" alt="" />
            </div>
        </div>
    )
}

export default MemberBar