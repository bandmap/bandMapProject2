import React from "react";
import { Link } from "react-router-dom";

function MemberBar() {
    return (
        <div id="member-bar">
            <Link to='/'><img src="./images/logo.svg" alt="logo" /></Link>
            <ul className="menu">
                <li><a href="" className="icon-member"></a></li>
                <li><a href="" className="icon-msg"></a></li>
            </ul>
        </div>
    )
}

export default MemberBar