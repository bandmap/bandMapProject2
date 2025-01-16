import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LikeListContext } from "./LikeListContext";
import { CalendarListContext } from "./CalendarListContext";

function CardOne({ searchcard, index }) {
    const navigate = useNavigate();
    const location = useLocation();

    let className = 'card';
    if (index % 2 === 0) {
        className += ' right-place';
    }

    // 加入收藏
    const { likeList, toggleLike } = useContext(LikeListContext);
    const [popupLikeMessage, setPopupLikeMessage] = useState(null); // 控制彈窗消息
    const [isPopupLikeVisible, setPopupLikeVisible] = useState(false); // 控制彈窗顯示
    const isLiked = likeList.some((item) => item.key === searchcard.key); // 判斷是否已經 liked

    const handleLikeClick = (e) => {
        e.preventDefault(); // 阻止預設行為
        e.stopPropagation(); // 阻止事件冒泡
        const action2 = toggleLike(searchcard); // 更新 likeList 狀態

        if (action2 === 'added') {
            setPopupLikeMessage(`已收藏活動`);
        } else if (action2 === 'removed') {
            setPopupLikeMessage(`已取消收藏`);
        }
        setPopupLikeVisible(true); // 顯示彈窗

        // 自動隱藏彈窗
        setTimeout(() => setPopupLikeVisible(false), 1000);
    };

    // 加入行事曆
    const { calendarList, toggleCalendar } = useContext(CalendarListContext);
    const [popupMessage, setPopupMessage] = useState(null); // 控制彈窗消息
    const [isPopupVisible, setPopupVisible] = useState(false); // 控制彈窗顯示
    const isCollected = calendarList.some((item) => item.key === searchcard.key);

    const handleCollectClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // toggleCalendar(searchcard);
        const action = toggleCalendar(searchcard);
        if (action === 'added') {
            setPopupMessage(`已加入行事曆`);
        } else if (action === 'removed') {
            setPopupMessage(`已移除行事曆`);
        }
        setPopupVisible(true); // 顯示彈窗

        // 自動隱藏彈窗
        setTimeout(() => setPopupVisible(false), 1000);
    };

    // 強制刷新頁面
    const handleLinkClick = (e) => {
        e.preventDefault();
        location.pathname === '/event1'
            ? navigate(0)
            : navigate('/event1')
    }

    // 從nametag連結到樂團頁面
    const handleNametagClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // 防止冒泡
        navigate('/band1');
    }

    return (
        <div className={className} key={searchcard.key} onClick={handleLinkClick}>
            <figure><img src={searchcard.img} alt={searchcard.event} /></figure>
            <div className="content">
                <p className="date">{searchcard.date}</p>
                <p className="event">{searchcard.event}</p>
                <div className="location">
                    <figure><img src="./images/icon/icon-location.svg" alt="icon-地點" /></figure>
                    <p>{searchcard.location}</p>
                </div>
                <div className="bottom-line">
                    <div className="name-tags">
                        {
                            searchcard.nametag.map((band, i) => {
                                return <p key={i} onClick={handleNametagClick} className="nametag">{band}</p>
                            })}
                    </div>
                    <div className="btns">
                        <figure className="like-btn" onClick={handleLikeClick}>
                            <img src={isLiked ? "./images/icon/icon-liked.svg" : "./images/icon/icon-like.svg"} alt="like" />
                        </figure>
                        <div className="collect-btn" onClick={handleCollectClick}>
                            <figure>
                                <img src={isCollected ? "./images/icon/icon-collected.svg" : "./images/icon/icon-plus.svg"} alt="collect" />
                            </figure>
                            <p>行事曆</p>
                        </div>
                        {/* 顯示行事曆彈窗 */}
                        <div className={`popup-alert ${isPopupVisible ? 'alert-slidein' : ''}`}>
                            <p>{popupMessage}</p>
                        </div>
                        {/* 顯示收藏彈窗 */}
                        <div className={`popup-alert like-alert ${isPopupLikeVisible ? 'alert-slidein' : ''}`}>
                            <p>{popupLikeMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOne