import GalleryImage from "./GalleryImage";

const galleryImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c97d5a3a0b07d3691453443de867fed1b685084f01a8f670cafe82be5bae292?placeholderIfAbsent=true&apiKey=09f840aaed5947cf856ba45beb67e591", alt: "Gallery image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c97d5a3a0b07d3691453443de867fed1b685084f01a8f670cafe82be5bae292?placeholderIfAbsent=true&apiKey=09f840aaed5947cf856ba45beb67e591", alt: "Gallery image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c97d5a3a0b07d3691453443de867fed1b685084f01a8f670cafe82be5bae292?placeholderIfAbsent=true&apiKey=09f840aaed5947cf856ba45beb67e591", alt: "Gallery image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba19ec6f8c7cbe85a6d5130f728ed783e1f12866e223fbfcb492b8019da1547?placeholderIfAbsent=true&apiKey=09f840aaed5947cf856ba45beb67e591", alt: "Gallery image 4" }
];

function ImageGallery() {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryGrid}>
                <GalleryImage src={galleryImages[0].src} alt={galleryImages[0].alt} />
                <div className={styles.stackedImages}>
                    {galleryImages.slice(1, 3).map((image, index) => (
                        <GalleryImage
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            isStacked={true}
                        />
                    ))}
                </div>
                <GalleryImage src={galleryImages[3].src} alt={galleryImages[3].alt} />
            </div>
        </div>
    );
}

export default ImageGallery