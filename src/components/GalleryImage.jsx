import { Link } from "react-router-dom"

function GalleryImage({ band }) {
    
    return (
        <Link to='/band1' className="gallery-image-wrapper">
            <img
                loading="lazy"
                src={band.src}
                alt={band.alt}
                className="gallery-image"
            />
            <img
                src={band.svgPath}
                alt={band.alt}
                className="svg-overlay"
            />
            <div className="overlay-text">
                <div className='text'>{band.text}</div>
                <div className='text'>{band.text}</div>
                <div className='text'>{band.text}</div>
                <div className='text'>{band.text}</div>
                <div className='text'>{band.text}</div>
                <div className='text'>{band.text}</div>
            </div>
        </Link>
    )
}
export default GalleryImage