import { useEffect, useState } from "react"
import axios from 'axios';
import CardOne from "../components/CardOne"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import SearchSection from "../components/SearchSection"
import { useLocation } from "react-router-dom";

function BandMapPage() {
    const location = useLocation();
    const maskSrc =
        location.pathname === "/search"
            ? "./images/mask-blue.svg"
            : "./images/mask-pink.svg";

    // 眼睛svg變數
    let eyesSvg = <svg className='eyes' width="404" height="168" viewBox="0 0 404 168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M141.785 67.6318H50.0249C22.3969 67.6318 0 90.0287 0 117.657V117.657C0 145.285 22.3969 167.682 50.0249 167.682H141.785C169.413 167.682 191.81 145.285 191.81 117.657V117.657C191.81 90.0287 169.413 67.6318 141.785 67.6318Z" fill="#FFF8E4" />
        <path d="M50 149C69.8822 149 86 132.882 86 113C86 93.1177 69.8822 77 50 77C30.1177 77 14 93.1177 14 113C14 132.882 30.1177 149 50 149Z" fill="#0099FF" />
        <path d="M353.801 67.6318H262.04C234.413 67.6318 212.016 90.0287 212.016 117.657V117.657C212.016 145.285 234.413 167.682 262.04 167.682H353.801C381.429 167.682 403.825 145.285 403.825 117.657V117.657C403.825 90.0287 381.429 67.6318 353.801 67.6318Z" fill="#FFF8E4" />
        <path d="M262 149C281.882 149 298 132.882 298 113C298 93.1177 281.882 77 262 77C242.118 77 226 93.1177 226 113C226 132.882 242.118 149 262 149Z" fill="#0099FF" />
        <path d="M40.3857 36.6395C47.0801 27.1702 55.9488 19.4455 66.2471 14.114C76.5455 8.78255 87.9728 5.99998 99.5694 6C111.166 6.00002 122.593 8.78263 132.892 14.1142C143.19 19.4457 152.059 27.1704 158.753 36.6397" stroke="#FFF8E4" strokeWidth="11" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M245.072 36.6395C251.767 27.1702 260.635 19.4455 270.934 14.114C281.232 8.78255 292.659 5.99998 304.256 6C315.852 6.00002 327.28 8.78263 337.578 14.1142C347.876 19.4457 356.745 27.1704 363.439 36.6397" stroke="#FFF8E4" strokeWidth="11" strokeMiterlimit="10" strokeLinecap="round" />
    </svg>

    let sparkleBlue = <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5087 22.5592C44.5605 22.9046 35.7104 26.613 37.9081 27.0011C35.7104 26.613 42.7602 33.1234 46.3523 34.7993C42.7602 33.1234 33.2397 31.9006 34.9487 33.3346C33.2397 31.9006 36.0971 41.0641 38.3712 44.3106C36.0971 41.0641 28.4615 35.2518 29.2253 37.3487C28.4615 35.2518 26.3463 44.6114 26.6918 48.5596C26.3463 44.6114 22.638 35.7613 22.2499 37.959C22.638 35.7613 16.1275 42.8111 14.4517 46.4032C16.1275 42.8111 17.3503 33.2906 15.9163 34.9996C17.3503 33.2906 8.18686 36.148 4.9403 38.4221C8.18686 36.148 13.9991 28.5124 11.9022 29.2762C13.9991 28.5124 4.63957 26.3972 0.691346 26.7426C4.63957 26.3972 13.4896 22.6889 11.292 22.3008C13.4896 22.6889 6.43987 16.1784 2.84776 14.5026C6.43987 16.1784 15.9603 17.4012 14.2514 15.9672C15.9603 17.4012 13.103 8.23775 10.8288 4.99119C13.103 8.23775 20.7386 14.05 19.9748 11.9531C20.7386 14.05 22.8537 4.69045 22.5083 0.742247C22.8537 4.69047 26.5621 13.5405 26.9502 11.3429C26.5621 13.5405 33.0725 6.49077 34.7484 2.89866C33.0725 6.49077 31.8497 16.0112 33.2837 14.3022C31.8497 16.0112 41.0132 13.1539 44.2597 10.8797C41.0132 13.1539 35.2009 20.7895 37.2978 20.0257C35.2009 20.7894 44.5605 22.9046 48.5087 22.5592Z" fill="#0099FF" />
    </svg>

    const [eventInfo, setEventInfo] = useState([]);
    const [currentMonths, setCurrentMonths] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // 設定當前月份清單
        const currentMonthIndex = new Date().getMonth(); // 取得當前月份索引 (0 - 11)
        const dynamicMonths = [
            ...months.slice(currentMonthIndex), // 當月到年底的月份
            ...months.slice(0, currentMonthIndex), // 次年的月份（環繞）
        ];
        setCurrentMonths(dynamicMonths);

        (async () => {
            // const data = await axios.get('/json/eventInfo.json');
            const data = await axios.get('https://bandmap.github.io/bandMapProject2/json/eventInfo.json');

            const { eventinfo } = data.data.eventdata;
            setEventInfo(eventinfo);

            // 排序 eventinfo，根據日期大小
            const sortedEventInfo = eventinfo.sort((a, b) => {
                const dateA = new Date(a.calendarDate);
                const dateB = new Date(b.calendarDate);
                return dateA - dateB; // 由小到大排序
            });
            setEventInfo(sortedEventInfo);

        })()
    }, [])

    // 定義月份清單
    const months = [
        { name: "JANUARY", key: "jan" },
        { name: "FEBRUARY", key: "feb" },
        { name: "MARCH", key: "mar" },
        { name: "APRIL", key: "apr" },
        { name: "MAY", key: "may" },
        { name: "JUNE", key: "jun" },
        { name: "JULY", key: "jul" },
        { name: "AUGUST", key: "aug" },
        { name: "SEPTEMBER", key: "sep" },
        { name: "OCTOBER", key: "oct" },
        { name: "NOVEMBER", key: "nov" },
        { name: "DECEMBER", key: "dec" },
    ];


    return (
        <>
            <NavBar />
            <main>
                <div id="bandmap-main">
                    {/* 背景區 */}
                    <div className="linear-bg">
                        <img src="./images/texture.png" alt="" />
                    </div>
                    {/* 頁面topbar */}
                    <div className="topbar">
                        <div className="left-part">
                            <div className="title">
                                <h2 className="title-ani title-ani-tar">隨BAND地圖</h2>
                                <p className="title-ani-s title-ani-tar-s">全台演出搜尋</p>
                            </div>
                        </div>
                        <div className="right-part">
                            {eyesSvg}
                        </div>
                    </div>

                    {/* 輪播banner區 */}
                    <Carousel maskSrc={maskSrc} />

                    {/* 搜尋選單 */}
                    <SearchSection />

                    {/* 根據月份動態生成跑馬燈和演出卡片 */}
                    {
                        currentMonths.slice(0, 2).map((month) => (
                            <div key={month.key}>
                                {/* 月份跑馬燈 */}
                                <div className="newsTicker">
                                    <div className="bandmap-wrapper">
                                        {[...Array(4)].map((_, i) => (
                                            <span key={i}>
                                                <p>{month.name}</p>
                                                {sparkleBlue}
                                            </span>

                                        ))}
                                    </div>
                                    <div className="bandmap-wrapper">
                                        {[...Array(4)].map((_, i) => (
                                            <span key={i}>
                                                <p>{month.name}</p>
                                                {sparkleBlue}
                                            </span>

                                        ))}
                                    </div>
                                </div>

                                {/* 演出卡片 */}
                                <div className="cards-center">
                                    <div className="cards">
                                        {eventInfo
                                            .filter(event => event.month === month.key) // 過濾出對應月份的資料
                                            .map((searchcard, index) => (
                                                <CardOne
                                                    key={searchcard.key}
                                                    searchcard={searchcard}
                                                    index={index}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                </div >
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default BandMapPage