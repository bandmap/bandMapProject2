import GalleryImage from "./GalleryImage";

function CarouselBand() {

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

    return (
        <div className="banner-section">
            {/* 下一張按鈕 */}
            <div className="buttons">
                <button className="cta-btn left"><img src="./images/btn-next-b&w.svg" alt="" /></button>
                <button className="cta-btn right"><img src="./images/btn-next-b&w.svg" alt="" /></button>
            </div>
            {/* 輪播卡片 */}
            <div className="carousel">
                {galleryImages.map((band) => (
                    <GalleryImage band={band} />
                ))}
            </div>
        </div>
    )
}

export default CarouselBand