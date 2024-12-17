function EventInfoCard() {
    return (
        <div className="info-sec">
            <div className="time">
                <p>2024.11.07（四）<br />20:00</p>
            </div>
            <div className="li-sec">
                <h3>演出者</h3>
                <p>秋波愛麗、Resa Club、Andr</p>
            </div>
            <div className="li-sec">
                <h3>場館</h3>
                <p>Legacy Taipei </p>
            </div>
            <div className="li-sec">
                <h3>票價資訊</h3>
                <p>
                    預售票300元<br />
                    身障票150元<br />
                    現場票350元
                </p>
            </div>
            <div className="li-sec">
                <h3>僅限iNDIEVOX傳真訂購</h3>
            </div>
            <button>購票連結</button>
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