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
    const isLiked = likeList.some((item) => item.key === searchcard.key); // 判斷是否已經 liked

    const handleLikeClick = (e) => {
        e.preventDefault(); // 阻止預設行為
        e.stopPropagation(); // 阻止事件冒泡
        toggleLike(searchcard); // 更新 likeList 狀態
    };

    // 加入行事曆
    const { calendarList, toggleCalendar } = useContext(CalendarListContext);
    const isCollected = calendarList.some((item) => item.key === searchcard.key);

    const handleCollectClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleCalendar(searchcard);
    }

    // 強制刷新頁面
    const handleLinkClick = (e) => {
        e.preventDefault();
        location.pathname === '/event1'
            ? navigate(0)
            : navigate('/event1')
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
                                return <p key={i} className="nametag">{band}</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOne