import { useEffect, useRef, useState } from "react";
import GalleryImage from "./GalleryImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselBand({ autoplay = true }) {

    const galleryImages = [
        {
            src: './images/Gallery1.png',
            key: 1,
            alt: " ",
            svgPath: "./images/mask-red.svg",
            text: "秋波愛麗",
        },
        {
            src: "./images/Gallery2.png",
            key: 2,
            alt: " ",
            svgPath: "./images/mask-red.svg",
            text: "Andr",
        },
        {
            src: "./images/Gallery3.png",
            key: 3,
            alt: " ",
            svgPath: "./images/mask-red.svg",
            text: "Resa Club",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "0px",
    };


    return (
        <Slider {...settings}>
            {
                galleryImages.map((band) => {
                    return (
                        <div className="carousel" key={band.key}>
                            <div className="gallery-card">
                                <GalleryImage band={band} />
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default CarouselBand