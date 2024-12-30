import { Link, NavLink, useNavigate } from 'react-router-dom';
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

    /* 當popup出現時，底下畫面不能滑動 */
    if (showPopup) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div id="nav-bar" className="sticky-header">
            <h1><Link to='/'><img src="./images/logo.svg" alt="logo" /></Link></h1>
            <ul className="menu">
                <li><NavLink to='/search' className={({ isActive }) => isActive ? 'active' : ''}>
                    <div className="word-cube"><p>演出搜尋</p><span className='line'></span></div>
                    <div className="word-cube"><p>演出搜尋</p><span className='line'></span></div>
                </NavLink></li>
                <li><NavLink to='/band' className={({ isActive }) => isActive ? 'active' : ''}>
                    <div className="word-cube"><p>本月樂團推薦</p><span className='line'></span></div>
                    <div className="word-cube"><p>本月樂團推薦</p><span className='line'></span></div>
                </NavLink></li>
                <li><NavLink to='/event' className={({ isActive }) => isActive ? 'active' : ''}>
                    <div className="word-cube"><p>近期活動</p><span className='line'></span></div>
                    <div className="word-cube"><p>近期活動</p><span className='line'></span></div>
                </NavLink></li>
                <li><NavLink to='/chatboard' className={({ isActive }) => isActive ? 'active' : ''}>
                    <div className="word-cube"><p>樂迷留言板</p><span className='line'></span></div>
                    <div className="word-cube"><p>樂迷留言板</p><span className='line'></span></div>
                </NavLink></li>
                <li><NavLink to='/calendar' className={({ isActive }) => isActive ? 'active' : ''}>
                    <div className="word-cube"><p>個人行事曆</p><span className='line'></span></div>
                    <div className="word-cube"><p>個人行事曆</p><span className='line'></span></div>
                </NavLink></li>
                <li>
                    <button id='membership-page' onClick={handleMemberCenterClick}>
                        <div className="word-cube"><p>會員中心</p><span className='line'></span></div>
                        <div className="word-cube"><p>會員中心</p><span className='line'></span></div>
                    </button>
                </li>
            </ul>
            {
                showPopup && <LogInOne togglePopup={togglePopup} />
            }


        </div>
    )
}

export default NavBar