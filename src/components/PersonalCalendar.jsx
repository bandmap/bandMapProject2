import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"

function PersonalCalendar() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPosition = window.innerHeight * 0.8;

            if (titleRef.current) {
                const titleTop = titleRef.current.getBoundingClientRect().top;
                if (titleTop < triggerPosition) {
                    setIsVisible(true);
                }
            }
        }
        window.addEventListener('scroll', handleScroll); // 監聽滾動事件
        handleScroll(); // 頁面加載時檢查一次

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div id="personalcal-page">
            <div className="calendar-illu">
                <img className="graphic-sec note-ani" src="./images/calendar-orange-note.svg" alt="" />
                <img className="graphic-sec words" src="./images/calendar-beige-repeat.svg" alt="" />
                <img className="graphic-sec" src="./images/calendar-graphic.svg" alt="" />
                <img className="graphic-sec words" src="./images/calendar-orange-repeat.svg" alt="" />
                <img className="graphic-sec note-ani" src="./images/calendar-beige-note.svg" alt="" />
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2
                        ref={titleRef}
                        className={`title-ani-tar ${isVisible ? 'title-ani' : ''}`}>
                        隨BAND排
                    </h2>
                    <h3
                        ref={subtitleRef}
                        className={`title-ani-tar-s ${isVisible ? 'title-ani-s' : ''}`}>
                        個人行事曆
                    </h3>
                </div>
                <p
                    ref={contentRef}
                    className={`fadein-bottom ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    打造屬於你的專屬音樂行事曆！<br />
                    隨時管理喜愛的演出活動、設定開票和演出提醒，不再錯過任何一場心儀的表演！
                </p>
                <div
                    ref={contentRef}
                    className={`cta fadein-bottom button-delay ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    <span>馬上編輯</span>
                    <Link to='/calendar'><button className="cta-btn"><img src="./images/btn-next-b&w.svg" alt="" /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default PersonalCalendar