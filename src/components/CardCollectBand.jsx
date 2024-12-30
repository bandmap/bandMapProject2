import { Link } from "react-router-dom";

function CardCollectBand({ searchcard }) {

    return (
        <Link to='/band1' className='card' key={searchcard.key}>
            <figure><img src={searchcard.img} alt={searchcard.name} /></figure>
            <div className="content band-collect-content">
                <p>{searchcard.name}</p>
                <img src="./images/icon/icon-like-full.svg" alt="" />
            </div>
        </Link>

    )
}

export default CardCollectBand