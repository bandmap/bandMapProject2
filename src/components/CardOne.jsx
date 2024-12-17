import { Link } from "react-router-dom";

function CardOne({ searchcard }) {

    let className = 'card';
    if (searchcard.key %2 === 0){
        className += ' right-place';
    }

    return (
        <Link to='/event1' className={className} key={searchcard.key}>
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
                        {searchcard.nametag.map((band, i) => {
                            return <p key={i} className="nametag">{band}</p>
                        })}
                    </div>
                    <div className="btns">
                        <figure className="like"><img src="./images/icon/icon-like.svg" alt="icon-like" /></figure>
                        <div className="collect-btn">
                            <figure><img src="./images/icon/icon-plus.svg" alt="" /></figure>
                            <p>行事曆</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default CardOne