import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserProvider";

function MemberBar() {
    const { isLogin } = useContext(UserContext);
    return (
        <div id="member-bar">
            <Link to='/'><img className="logo" src="./images/logo.svg" alt="logo" /></Link>
            <div className="menu">
                <p>{isLogin ? '你好，Huang' : ''}</p>
                <img src="./images/icon/icon-member.svg" alt="" />
                <img src="./images/icon/icon-msg.svg" alt="" />
            </div>
        </div>
    )
}

export default MemberBar