import BandIntro from '../components/BandIntro'
import CarouselBand from '../components/CarouselBand'
import MusicAlbums from '../components/MusicAlbums'
import NavBar from '../components/NavBar'
import UpcomingEvents from '../components/UpcomingEvents'
import Footer from "../components/Footer"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function BandIntroPage() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <NavBar />
            <main id='bandintro-main'>
                <button onClick={() => navigate(-1)} className="back-to-page">
                    <img src="./images/btn-back.svg" alt="" />
                    <p>回上一頁</p>
                </button>
                <section className="background">
                    <img src="./images/banddiscover-1.jpg" alt="" />
                    <div className="overlay-bg"></div>
                </section >
                <div className="content">
                    {/* 樂團介紹 */}
                    <BandIntro />
                    {/* 近期活動 */}
                    <UpcomingEvents />
                    {/* 專輯介紹 */}
                    <MusicAlbums />
                    {/* 其他樂團 */}
                    <div className="gallery-container">
                        <h2 className="gallery-title">其他樂團</h2>
                        <div className="gallery-grid"></div>
                        <CarouselBand />
                    </div>
                </div>

            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default BandIntroPage
