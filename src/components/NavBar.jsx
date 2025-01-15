import { Link, NavLink, useNavigate } from 'react-router-dom';
import './css/style.css';
import { useContext, useEffect, useState } from 'react';
import LogInOne from './LogInOne';
import { UserContext } from './UserProvider';

function NavBar() {
    const { isLogin, logout } = useContext(UserContext); // 從 UserContext 獲取登入狀態
    const [showPopup, setShowPopup] = useState(false);
    const [redirectPath, setRedirectPath] = useState('/');
    const [isMemberMenuVisible, setIsMemberMenuVisible] = useState(false);
    const navigate = useNavigate();

    const handleMemberCenterClick = () => {
        if (isLogin) {
            navigate('/member');
        } else {
            setRedirectPath('/member');
            setShowPopup(true);
        }
    }

    const handleCalendarClick = () => {
        if (isLogin) {
            navigate('/calendar');
        } else {
            setRedirectPath('/calendar');
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
                <li><NavLink to='/calendar' className={({ isActive }) => isActive ? 'active' : ''} onClick={(e) => {
                    e.preventDefault(); // 阻止默認行為，手動處理點擊事件
                    handleCalendarClick(); // 執行自定義邏輯
                }}>
                    <div className="word-cube"><p>個人行事曆</p><span className='line'></span></div>
                    <div className="word-cube"><p>個人行事曆</p><span className='line'></span></div>
                </NavLink></li>
                <li>
                    <button id='membership-page'
                        onClick={handleMemberCenterClick}
                        onMouseEnter={() => setIsMemberMenuVisible(true)}
                        onMouseLeave={() => setIsMemberMenuVisible(false)}>
                        <div className="word-cube"><p>{isLogin ? '會員中心' : '登入'}</p><span className='line'></span></div>
                        <div className="word-cube"><p>{isLogin ? '會員中心' : '登入'}</p><span className='line'></span></div>
                    </button>
                </li>
            </ul>
            {
                isLogin &&
                <button
                    className={`member-link ${isMemberMenuVisible ? 'visible' : ''}`}
                    onClick={logout}
                    onMouseEnter={() => setIsMemberMenuVisible(true)}
                    onMouseLeave={() => setIsMemberMenuVisible(false)}>
                    <div className="word-cube">
                        <p>登出</p>
                        <span className='line'></span>
                    </div>
                </button>
            }

            {
                showPopup && <LogInOne togglePopup={togglePopup} redirectPath={redirectPath} />
            }


        </div>
    )
}

export default NavBar