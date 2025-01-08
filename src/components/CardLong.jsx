import { useState } from "react";
import { Link } from "react-router-dom"

function CardLong({ searchcard }) {
    const [liked, setLiked] = useState(false);
    const toggleLiked = (e) => {
        e.preventDefault(); // 阻止 Link 的預設跳轉行為
        e.stopPropagation(); // 阻止事件冒泡到 Link
        setLiked(!liked);
    }

    const [collected, setCollected] = useState(false);
    const toggleCollected = (e) => {
        e.preventDefault(); // 阻止 Link 的預設跳轉行為
        e.stopPropagation(); // 阻止事件冒泡到 Link
        setCollected(!collected);
    }

    return (
        <Link to='/event1' className="card-long" key={searchcard.key}>
            <figure><img src={searchcard.img} alt={searchcard.event} /></figure>

            <div className="card-right">
                <div className="content">
                    <p className="date">{searchcard.date}</p>
                    <p className="event">{searchcard.event}</p>
                    <div className="location">
                        <figure><img src="./images/icon/icon-location.svg" alt="icon-地點" /></figure>
                        <p>{searchcard.location}</p>
                    </div>
                </div>
                <div className="bottom-line">
                    <div className="name-tags">
                        {searchcard.nametag.map((band, i) => {
                            return <p key={i} className="nametag">{band}</p>
                        })}
                    </div>
                    <div className="btns">
                        <figure onClick={toggleLiked} className="like-btn">
                            <img src={liked ? "./images/icon/icon-liked.svg" : "./images/icon/icon-like.svg"} alt="like" />
                        </figure>
                        <div onClick={toggleCollected} className="collect-btn">
                            <figure><img src={collected ? "./images/icon/icon-collected.svg" : "./images/icon/icon-plus.svg"} alt="collect" /></figure>
                            <p>行事曆</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardLong