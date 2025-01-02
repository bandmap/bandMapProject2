function EventInfoCard({ arrEventInfoCard }) {

    return (
        <div className="info-sec">
            <div className="time">
                <p>2024.11.10(四) <br /> 13:00</p>
            </div>
            <div className="li-sec">
                <h3>演出者</h3>
                <p>{arrEventInfoCard[0].line}</p>
            </div>
            <div className="li-sec">
                <h3>場館</h3>
                <p>{arrEventInfoCard[0].location}</p>
            </div>
            <div className="li-sec">
                <h3>票價資訊</h3>
                <p>
                    早鳥票400元<br />一般票500元
                </p>
            </div>
            <div className="li-sec">
                <h3>僅限iNDIEVOX傳真訂購</h3>
            </div>
            <a href="#">購票連結</a>
            <div className="share">
                <p>Share :</p>
                <figure><img src="./images/icon/icon-facebook.svg" alt="fb" /></figure>
                <figure><img src="./images/icon/icon-instagram.svg" alt="ig" /></figure>
                <figure><img src="./images/icon/icon-link.svg" alt="link" /></figure>
            </div>
            <button>加入行事曆</button>
            <button>加入收藏</button>
        </div>
    )
}

export default EventInfoCard