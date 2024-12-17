import { useEffect } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import CarouselBand from "../components/CarouselBand"

function BandDiscoverPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <NavBar />
            <main>
                <div id="banddiscover-main">
                    {/* 背景區 */}
                    <div className="linear-bg">
                        <img src="./images/texture.png" alt="" />
                    </div>
                    {/* 頁面topbar */}
                    <div className="topbar">
                        <div className="left-part">
                            <div className="title">
                                <h2>BAND利商店</h2>
                                <p>本月樂團推薦</p>
                            </div>
                        </div>
                        <div className="right-part">
                            <img src="./images/line.svg" alt="" />
                        </div>
                    </div>
                    {/* 輪播banner區 */}
                    <CarouselBand />
                </div>

            </main>
            <footer>
                {<Footer />}
            </footer>
        </>
    )
}

export default BandDiscoverPage