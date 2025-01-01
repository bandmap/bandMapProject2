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
                eventInfo.slice(0,5).map((banner) => {
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