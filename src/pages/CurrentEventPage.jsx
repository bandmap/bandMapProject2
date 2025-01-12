import { useEffect, useState } from "react"
import axios from 'axios';
import CardLong from "../components/CardLong"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useLocation } from "react-router-dom";

function CurrentEventPage() {
    const location = useLocation();
    const maskSrc =
        location.pathname === "/event"
            ? "./images/mask-pink.svg"
            : "./images/mask-blue.svg";

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let sparkle_pink = <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5087 22.5592C44.5605 22.9046 35.7104 26.613 37.9081 27.0011C35.7104 26.613 42.7602 33.1234 46.3523 34.7993C42.7602 33.1234 33.2397 31.9006 34.9487 33.3346C33.2397 31.9006 36.0971 41.0641 38.3712 44.3106C36.0971 41.0641 28.4615 35.2518 29.2253 37.3487C28.4615 35.2518 26.3463 44.6114 26.6918 48.5596C26.3463 44.6114 22.638 35.7613 22.2499 37.959C22.638 35.7613 16.1275 42.8111 14.4517 46.4032C16.1275 42.8111 17.3503 33.2906 15.9163 34.9996C17.3503 33.2906 8.18686 36.148 4.9403 38.4221C8.18686 36.148 13.9991 28.5124 11.9022 29.2762C13.9991 28.5124 4.63957 26.3972 0.691346 26.7426C4.63957 26.3972 13.4896 22.6889 11.292 22.3008C13.4896 22.6889 6.43987 16.1784 2.84776 14.5026C6.43987 16.1784 15.9603 17.4012 14.2514 15.9672C15.9603 17.4012 13.103 8.23775 10.8288 4.99119C13.103 8.23775 20.7386 14.05 19.9748 11.9531C20.7386 14.05 22.8537 4.69045 22.5083 0.742247C22.8537 4.69047 26.5621 13.5405 26.9502 11.3429C26.5621 13.5405 33.0725 6.49077 34.7484 2.89866C33.0725 6.49077 31.8497 16.0112 33.2837 14.3022C31.8497 16.0112 41.0132 13.1539 44.2597 10.8797C41.0132 13.1539 35.2009 20.7895 37.2978 20.0257C35.2009 20.7894 44.5605 22.9046 48.5087 22.5592Z" fill="#FE8DBA" />
    </svg>

    // 耳朵svg變數
    let earSvg = <svg className='ear' width="193" height="306" viewBox="0 0 193 306" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.708 49.353L115.75 0L192.827 73.823L169.082 173.05L137.626 217.909L138.023 272.542L95.468 305.576L56.405 304.222L0 250.88L29.708 49.353Z" fill="#FFF8E4" />
        <path d="M117.324 70.2617L81.6308 74.6517L58.3138 118.472L57.5088 187.568L86.7518 204.071L112.524 192.005L123.472 156.541L117.099 130.774L95.3398 115.168L71.9558 118.142L90.0108 82.5297L114.833 80.6717L117.324 70.2617Z" fill="#FE8DBA" />
    </svg>

    const [eventInfo, setEventInfo] = useState([]);

    useEffect(() => {
        (async () => {
            // const data = await axios.get('/json/eventInfo.json');
            const data = await axios.get('https://bandmap.github.io/bandMapProject2/json/eventInfo.json');

            const { eventinfo } = data.data.eventdata;
            setEventInfo(eventinfo);
        })()
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <div id="currentevent-main">
                    {/* 背景區 */}
                    <div className="linear-bg">
                        <img src="./images/texture.png" alt="" />
                    </div>
                    {/* 頁面topbar */}
                    <div className="topbar">
                        <div className="left-part">
                            <div className="title">
                                <h2 className="title-ani title-ani-tar">BAND地開花</h2>
                                <p className="title-ani-s title-ani-tar-s">近期活動</p>
                            </div>
                        </div>
                        <div className="right-part">
                            {earSvg}{earSvg}{earSvg}
                        </div>
                    </div>

                    {/* 輪播banner區 */}
                    <Carousel maskSrc={maskSrc}/>

                    {/* 近期活動跑馬燈 */}
                    <div className="newsTicker">
                        <div className='bandmap-wrapper'>
                            <span>CURRENT EVENT</span><span>{sparkle_pink}</span><span>CURRENT EVENT</span><span>{sparkle_pink}</span><span>CURRENT EVENT</span><span>{sparkle_pink}</span>
                        </div>
                        <div className='bandmap-wrapper'>
                            <span>CURRENT EVENT</span><span>{sparkle_pink}</span><span>CURRENT EVENT</span><span>{sparkle_pink}</span><span>CURRENT EVENT</span><span>{sparkle_pink}</span>
                        </div>
                    </div>

                    {/* 近期演出長卡片 */}
                    <div className="cards">
                        {
                            eventInfo.slice(0,10).map((searchcard) => {
                                return <CardLong searchcard={searchcard} key={searchcard.key} />
                            })
                        }
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CurrentEventPage