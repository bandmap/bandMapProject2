import { useEffect, useState } from "react"
import axios from 'axios';
import CardOne from "../components/CardOne"
import EventInfoCard from "../components/EventInfoCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom";

function EventOne() {
    const navigate = useNavigate();

    let sparkleBlue = <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5087 22.5592C44.5605 22.9046 35.7104 26.613 37.9081 27.0011C35.7104 26.613 42.7602 33.1234 46.3523 34.7993C42.7602 33.1234 33.2397 31.9006 34.9487 33.3346C33.2397 31.9006 36.0971 41.0641 38.3712 44.3106C36.0971 41.0641 28.4615 35.2518 29.2253 37.3487C28.4615 35.2518 26.3463 44.6114 26.6918 48.5596C26.3463 44.6114 22.638 35.7613 22.2499 37.959C22.638 35.7613 16.1275 42.8111 14.4517 46.4032C16.1275 42.8111 17.3503 33.2906 15.9163 34.9996C17.3503 33.2906 8.18686 36.148 4.9403 38.4221C8.18686 36.148 13.9991 28.5124 11.9022 29.2762C13.9991 28.5124 4.63957 26.3972 0.691346 26.7426C4.63957 26.3972 13.4896 22.6889 11.292 22.3008C13.4896 22.6889 6.43987 16.1784 2.84776 14.5026C6.43987 16.1784 15.9603 17.4012 14.2514 15.9672C15.9603 17.4012 13.103 8.23775 10.8288 4.99119C13.103 8.23775 20.7386 14.05 19.9748 11.9531C20.7386 14.05 22.8537 4.69045 22.5083 0.742247C22.8537 4.69047 26.5621 13.5405 26.9502 11.3429C26.5621 13.5405 33.0725 6.49077 34.7484 2.89866C33.0725 6.49077 31.8497 16.0112 33.2837 14.3022C31.8497 16.0112 41.0132 13.1539 44.2597 10.8797C41.0132 13.1539 35.2009 20.7895 37.2978 20.0257C35.2009 20.7894 44.5605 22.9046 48.5087 22.5592Z" fill="#0099FF" />
    </svg>

    const arrEventInfoCard = [
        {
            title: '挺音樂｜揪音秘',
            content: `這次音樂派對將為你帶來5組獨具特色的音樂人，共同呈現音樂的多元樣貌！<br/><br/>【阿橘】14:00-14:30 <br />阿橘受復古浪潮影響，創作融合R& B與Neo Soul的獨特風格，且擅長詞曲創作與和聲編寫，其作品充滿標誌性復古魅力。<br /><br />【粗大Band】15:30 - 16:00< br />粗大Band以美式流行龐克為基，十年不變地保持青春與龐克態度。推出《難道我是一隻怪獸》專輯大獲好評，登上多個指標音樂舞台。 <br /><br />【Who Cares胡凱兒】17:00 - 17:30< br />以真摯細膩的文字為基，胡凱兒的音樂編織出深刻情感與不為人知的心事。融合多元風格，展現獨樹一幟的另類搖滾魅力。<br /><br />【林潔心】18:30 - 19:00< br />透過作品展現自我成長的省思，結合多元曲風創作獨特音樂風貌。以《等我回家》一曲嶄露頭角，憑其真誠衝擊成為嘻哈圈最強黑馬。<br /><br />【FEniX】20:00 - 20:20<br />以團結力量為基，FEniX從小火苗化為烈焰鳳凰。 成員各自擅長歌舞、創作、戲劇，展現無限潛力與魅力。<br /><br />#揪音秘最挺的就是ME #我挺的 #挺有意思的`,
            time: '2024.11.10(四) <br/> 13:00',
            line: '阿橘、粗大Band、Who Cares胡凱兒、林潔心、FEniX',
            location: 'Legacy Taipei ',
            price: '早鳥票400元<br/>一般票500元'
        },
    ]

    const [eventInfo, setEventInfo] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

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

    const [currentIndex, setCurrentIndex] = useState(0); // 追蹤當前顯示的起始索引
    const itemsPerPage = 6; // 每頁顯示的卡片數量

    // 控制上下頁按鈕的點擊事件
    const handleNext = () => {
        if (currentIndex + itemsPerPage < eventInfo.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    // 計算容器的位移
    const translateX = -currentIndex * 85; // 每次移動寬度

    return (
        <>
            <NavBar />
            <main className="event-page">
                <button onClick={() => navigate(-1)} className="back-to-page">
                    <img src="./images/btn-back.svg" alt="" />
                    <p>回上一頁</p>
                </button>
                <div className="event-banner">
                    <figure className="eventpic"><img src="./images/event/event1-banner-1.jpg" alt="活動頁-揪音秘" /></figure>
                </div>
                <div className="content-bg-up">
                    <img src="./images/event1-bg.svg" alt="" />
                </div>
                <div className="content-down">
                    <div className="left-part">
                        <figure><img src="./images/event/currentevent-json-1.jpg" alt="" /></figure>
                        <div className="content-words">
                            <h2>{arrEventInfoCard[0].title}</h2>
                            <p>這次音樂派對將為你帶來5組獨具特色的音樂人，共同呈現音樂的多元樣貌！<br /><br />【阿橘】14:00-14:30 <br />阿橘受復古浪潮影響，創作融合R& B與Neo Soul的獨特風格，且擅長詞曲創作與和聲編寫，其作品充滿標誌性復古魅力。<br /><br />【粗大Band】15:30 - 16:00< br />粗大Band以美式流行龐克為基，十年不變地保持青春與龐克態度。推出《難道我是一隻怪獸》專輯大獲好評，登上多個指標音樂舞台。 <br /><br />【Who Cares胡凱兒】17:00 - 17:30< br />以真摯細膩的文字為基，胡凱兒的音樂編織出深刻情感與不為人知的心事。融合多元風格，展現獨樹一幟的另類搖滾魅力。<br /><br />【林潔心】18:30 - 19:00< br />透過作品展現自我成長的省思，結合多元曲風創作獨特音樂風貌。以《等我回家》一曲嶄露頭角，憑其真誠衝擊成為嘻哈圈最強黑馬。<br /><br />【FEniX】20:00 - 20:20<br />以團結力量為基，FEniX從小火苗化為烈焰鳳凰。 成員各自擅長歌舞、創作、戲劇，展現無限潛力與魅力。<br /><br />#揪音秘最挺的就是ME #我挺的 #挺有意思的</p>
                        </div>
                    </div>
                    <div className="right-part">
                        <EventInfoCard arrEventInfoCard={arrEventInfoCard} />
                    </div>
                </div>

                {/* 近期活動跑馬燈 */}
                <div className="newsTicker">
                    <div className='bandmap-wrapper'>
                        <span>CURRENTEVENT</span><span>{sparkleBlue}</span><span>CURRENTEVENT</span><span>{sparkleBlue}</span><span>CURRENTEVENT</span><span>{sparkleBlue}</span>
                    </div>
                    <div className='bandmap-wrapper'>
                        <span>CURRENTEVENT</span><span>{sparkleBlue}</span><span>CURRENTEVENT</span><span>{sparkleBlue}</span><span>CURRENTEVENT</span><span>{sparkleBlue}</span>
                    </div>
                </div>
                <div className="cards-bottom">
                    {/* 下一張按鈕 */}
                    <div className="buttons">
                        <button className={`cta-btn left ${currentIndex === 0 ? "disabled" : ""}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}>
                            <img src="./images/btn-back.svg" alt="prev-btn" />
                        </button>
                        <button className={`cta-btn right ${currentIndex + itemsPerPage >= eventInfo.length ? "disabled" : ""
                            }`}
                            onClick={handleNext}
                            disabled={currentIndex + itemsPerPage >= eventInfo.length}>
                            <img src="./images/btn-next.svg" alt="next-btn" />
                        </button>
                    </div>
                    <div className="cards-wrapper">
                        <div className="cards"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: "transform 0.5s ease-in-out", // 平滑過渡效果
                            }}>
                            {
                                eventInfo.slice(0, 6).map((searchcard, index) => {
                                    return <CardOne searchcard={searchcard} index={index} key={searchcard.key} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default EventOne