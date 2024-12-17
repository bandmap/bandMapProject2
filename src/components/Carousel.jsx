import { useEffect, useState } from "react";
import axios from 'axios';

function Carousel() {

    const [eventInfo, setEventInfo] = useState([]);

    useEffect(() => {
        (async () => {
            // const data = await axios.get('/json/eventInfo.json');
            const data = await axios.get('https://bandmap.github.io/band-map-project/json/eventInfo.json');

            const { eventinfo } = data.data.eventdata;
            setEventInfo(eventinfo);
        })()
    }, [])

    return (
        <div className="banner-section">
            {/* 下一張按鈕 */}
            <div className="buttons">
                <button className="cta-btn left"><img src="./images/btn-next-b&w.svg" alt="" /></button>
                <button className="cta-btn right"><img src="./images/btn-next-b&w.svg" alt="" /></button>
            </div>
            {/* 輪播卡片 */}
            <div className="carousel">
                {
                    eventInfo.map((banner) => {
                        return (
                            <figure className="banner-card" key={banner.key}>
                                <img className="mask" src="./images/mask-blue.svg" alt="" />
                                <img className="event-img" src={banner.img} alt="" />
                            </figure>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel