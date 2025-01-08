import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";


function CurrentEvent() {
    // 樂團介紹卡片array
    const arrEventCard = [
        { img: './images/currentevent-1.jpg', key: '1', name: '近期活動-揪音秘', event: '揪音秘', time: '2024/11/10 (日）', place: 'Legacy Taipei 音樂展演空間' },

        { img: './images/currentevent-2.jpg', key: '2', name: '近期活動-刑男大主廚', event: '刑男大主廚', time: '2024/11/24 (日）', place: 'Legacy Taipei 音樂展演空間' },

        { img: './images/currentevent-3.jpg', key: '3', name: '近期活動-開往天堂的海盜船', event: '開往天堂的海盜船', time: '2024/11/29 (五）', place: 'Legacy Taipei 音樂展演空間' },
    ]

    const [hoverIndex, setHoverIndex] = useState(null);

    /* 滾動到位置時才觸發標題動畫 */
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

     /* 滾動到每個頁面讓它停留一秒 */
     const containerRef = useRef(null); // 用來參考主容器
     const isAtTarget = useRef(false); // 紀錄是否已到達目標位置
 
     useEffect(() => {
         const handleScrollAll = () => {
             const targetPosition3 = window.innerHeight * 3;
             const currentScroll = window.scrollY;
 
             if (!isAtTarget.current) {
                 // 如果未到達目標位置
                 if (currentScroll >= targetPosition3) {
                     window.scrollTo(0, targetPosition3); // 固定滾動到目標位置
                     isAtTarget.current = true; // 標記為已到達
                     document.body.style.overflow = "hidden"; // 鎖住滾動
 
                     setTimeout(() => {
                         document.body.style.overflow = "auto"; // 解鎖滾動
                     }, 1000); // 停留時間（1秒）
                 }
             }
         };
 
         document.body.style.overflow = "auto"; // 初始設置：滾動
         window.addEventListener("scroll", handleScrollAll);
 
         return () => {
             window.removeEventListener("scroll", handleScrollAll); // 清理事件
         };
     }, []);
 
    return (
        <div id="currentevent-page" ref={containerRef}>
            {/* 滑鼠hover進卡片的時候背景也出現相對應的活動圖片 */}
            <div className="hover-bg"
                style={{ opacity: hoverIndex !== null ? 0.2 : 0 }}>
                {hoverIndex !== null && (
                    <img src={arrEventCard[hoverIndex].img} alt={arrEventCard[hoverIndex].event} />
                )}
            </div>
            <div className="box-roll">
                <article className="box-intro">
                    {
                        arrEventCard.map((e, index) => {
                            return (
                                <Link to='/event1' className="box-pic" key={e.key}
                                    onMouseOver={() => { setHoverIndex(index) }}
                                    onMouseOut={() => { setHoverIndex(null) }}>
                                    <img src={e.img} alt={e.name} />
                                    <div className="hover-text">
                                        <div className="text-left">
                                            <h4>{e.event}</h4>
                                            <div className="place">
                                                <figure><img src="./images/icon/icon-location.svg" alt="icon-地點" /></figure>
                                                <p>{e.place}</p>
                                            </div>
                                        </div>
                                        <p className="event-time">{e.time}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </article>
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2
                        ref={titleRef}
                        className={`title-ani-tar ${isVisible ? 'title-ani' : ''}`}>
                        BAND地開花
                    </h2>
                    <h3
                        ref={subtitleRef}
                        className={`title-ani-tar-s ${isVisible ? 'title-ani-s' : ''}`}>
                        近期活動
                    </h3>
                </div>
                <p
                    ref={contentRef}
                    className={`fadein-bottom ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    彙整全台音樂節及專場演出資訊，<br />
                    快速鎖定心儀的演出！<br />
                    讓你感受現場音樂的震撼！
                </p>
                <div
                    ref={contentRef}
                    className={`cta fadein-bottom button-delay ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    <span>點進探索</span>
                    <Link to='/event'><button className="cta-btn"><img src="./images/btn-next-w&p.svg" alt="" /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default CurrentEvent