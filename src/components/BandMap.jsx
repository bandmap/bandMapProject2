import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"

function BandMap() {
    // taiwan map svg變數
    const map = <svg width="488" height="764" viewBox="0 0 488 764" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M168.529 177.096L264.65 244.328L310.767 233.942L413.218 266.969L447.281 164.388L437.836 147.765L435.947 101.589L478.45 68.3415L467.664 48.9468L416.111 37.865L372.664 0L331.105 35.094L247.988 62.8006L168.529 177.096Z" fill="#FFAF00" />
        <path d="M168.529 177.096L35.4708 368.49L29.1575 399.457L109.875 388.096L225.929 443.36L296.914 367.031L310.767 233.942L264.65 244.328L168.529 177.096Z" fill="#FE8DBA" />
        <path d="M225.929 443.36L176.252 534.928L196.759 565.389L178.639 596.75L189.36 656.929L224.419 666.396L219.651 757.297H172.426L153.535 671.409L79.921 633.72L8.52417 500.665L29.1576 399.457L109.875 388.096L225.929 443.36Z" fill="#0099FF" />
        <path d="M224.419 666.396L189.36 656.929L178.639 596.75L196.759 565.389L176.252 534.928L225.929 443.36L296.914 367.031L310.767 233.942L413.219 266.969L329.216 519.949L225.319 649.244L224.419 666.396Z" fill="#FF4438" />
    </svg>

    /* 滾動到位置時才觸發標題動畫 */
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    // const [animationDone, setAnimationDone] = useState(false); // 確保動畫完成

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
    const [isLocked, setIsLocked] = useState(false); // 控制是否鎖住滾動

    useEffect(() => {
        let timeout; // 防止過多操作

        const handleScrollAll = () => {
            const targetPosition = window.innerHeight; // 目標位置 (第二頁頂部)
            const currentScroll = window.scrollY;

            if (!isLocked && Math.abs(currentScroll - targetPosition) < 10) {
                // 達到目標位置時執行動作 (容忍範圍 ±10px)
                setIsLocked(true); // 標記滾動鎖住
                clearTimeout(timeout);

                document.body.style.overflow = "hidden"; // 暫時鎖住滾動
                window.scrollTo({ top: targetPosition, behavior: "smooth" }); // 平滑滾動到目標位置

                setTimeout(() => {
                    document.body.style.overflow = "auto"; // 解鎖滾動
                    setIsLocked(false); // 解鎖標記，允許再次觸發
                }, 500); // 鎖住 1 秒
            }
        };
        // const handleScrollAll = () => {
        //     const targetPosition2 = window.innerHeight;
        //     const currentScroll = window.scrollY;

        //     if (!isAtTarget.current) {
        //         // 如果未到達目標位置
        //         if (currentScroll >= targetPosition2) {
        //             window.scrollTo(0, targetPosition2); // 固定滾動到目標位置
        //             isAtTarget.current = true; // 標記為已到達
        //             document.body.style.overflow = "hidden"; // 鎖住滾動

        //             setTimeout(() => {
        //                 document.body.style.overflow = "auto"; // 解鎖滾動
        //             }, 1000); // 停留時間（1秒）
        //         }
        //     }
        // };
        // document.body.style.overflow = "auto"; // 初始設置：滾動

        window.addEventListener("scroll", handleScrollAll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", handleScrollAll); // 清理事件
        };
    }, [isLocked]);

    return (
        <div id="bandmap-page" ref={containerRef} >
            <div className="map">
                <figure>{map}</figure>
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2
                        ref={titleRef}
                        className={`title-ani-tar ${isVisible ? 'title-ani' : ''}`}>
                        隨BAND地圖
                    </h2>
                    <h3
                        ref={subtitleRef}
                        className={`title-ani-tar-s ${isVisible ? 'title-ani-s' : ''}`}>
                        全台演出搜尋
                    </h3>
                </div>
                <p
                    ref={contentRef}
                    className={`fadein-bottom ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    輕鬆搜尋音樂節及專場，<br />
                    打造專屬於你的音樂地圖，<br />
                    隨時隨地掌握全台獨立音樂活動！
                </p>
                <div
                    ref={contentRef}
                    className={`cta fadein-bottom button-delay ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    <span>開始查詢</span>
                    <Link to="/search">
                        <button className="cta-btn"><img src="./images/btn-next-b&w.svg" alt="" /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BandMap