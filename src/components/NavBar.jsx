import { Link, useNavigate } from 'react-router-dom';
import './css/style.css';
import { useEffect, useState } from 'react';
import LogInOne from './LogInOne';

function NavBar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleMemberCenterClick = () => {
        if (isLoggedIn) {
            navigate('/member');
        } else {
            setShowPopup(true);
        }
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    if (showPopup) {
        document.body.classList.add('active-popup')
    } else {
        document.body.classList.remove('active-popup')
    }

    return (
        <div id="nav-bar" className="sticky-header">
            <h1><Link to='/'><img src="./images/logo.svg" alt="logo" /></Link></h1>
            <ul className="menu">
                <li><Link to='/search'><p>演出搜尋</p></Link></li>
                <li><Link to='/band'><p>本月樂團推薦</p></Link></li>
                <li><Link to='/event'><p>近期活動</p></Link></li>
                <li><Link to='/chatboard'><p>樂迷留言板</p></Link></li>
                <li><Link to='/calendar'><p>個人行事曆</p></Link></li>
                <li>
                    <button type='button' id='membership-page' onClick={handleMemberCenterClick}><p>會員中心</p></button>
                </li>
            </ul>
            {
                showPopup && <LogInOne togglePopup={togglePopup}/>
            }


        </div>
    )
}

export default NavBar