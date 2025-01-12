import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ maskSrc }) {

    const [eventInfo, setEventInfo] = useState([]);

    useEffect(() => {

        (async () => {
            // const data = await axios.get('/json/eventInfo.json');
            const data = await axios.get('https://bandmap.github.io/bandMapProject2/json/eventInfo.json');

            const { eventinfo } = data.data.eventdata;
            setEventInfo(eventinfo);

            // 取得當前日期
            const today = new Date();

            // 排序資料，最近的活動排在最前
            const sortedEventInfo = eventinfo
                .filter(event => new Date(event.calendarDate) >= today) // 過濾出未來的活動
                .sort((a, b) => {
                    const dateA = new Date(a.calendarDate);
                    const dateB = new Date(b.calendarDate);
                    return dateA - dateB; // 由近到遠排序
                });

            setEventInfo(sortedEventInfo);
        })()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "0px",
    };


    return (
        <Slider {...settings}>
            {
                eventInfo.slice(0, 5).map((banner) => {
                    return (
                        <div className="carousel" key={banner.key}>
                            <figure className="banner-card">
                                <img className="mask" src={maskSrc} alt="" />
                                <img className="event-img" src={banner.img} alt="" />
                            </figure>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default Carousel