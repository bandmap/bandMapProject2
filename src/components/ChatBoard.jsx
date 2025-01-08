import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"

function ChatBoard() {

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
    const [isLocked, setIsLocked] = useState(false); // 控制是否鎖住滾動

    useEffect(() => {
        let timeout; // 防止過多操作

        const handleScrollAll = () => {
            const targetPosition = window.innerHeight * 4; // 目標位置
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
        window.addEventListener("scroll", handleScrollAll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", handleScrollAll); // 清理事件
        };
    }, [isLocked]);



    return (
        <div id="chatboard-page" ref={containerRef}>
            <div className="intro-section">
                <div className="title">
                    <h2
                        ref={titleRef}
                        className={`title-ani-tar ${isVisible ? 'title-ani' : ''}`}>
                        BAND利貼
                    </h2>
                    <h3
                        ref={subtitleRef}
                        className={`title-ani-tar-s ${isVisible ? 'title-ani-s' : ''}`}>
                        樂迷留言板
                    </h3>
                </div>
                <p
                    ref={contentRef}
                    className={`fadein-bottom ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    演出心得、樂團推薦、或是想揪團前往表演現場，Band利貼提供聽團仔們自由發表、分享、交流的空間，讓聲音互相傳遞，一起分享對音樂的熱愛！
                </p>
            </div>
            <div className="buttons">
                <Link to='/chatboard' className="button">
                    <p>前往隨BAND聊</p>
                    <button className="cta-btn"><img src="./images/btn-next-b&w.svg" alt="" /></button>
                </Link>
                <Link to='/chatboard' className="button">
                    <p>前往隨BAND揪</p>
                    <button className="cta-btn"><img src="./images/btn-next-b&w.svg" alt="" /></button>
                </Link>
            </div>
        </div>
    )
}

export default ChatBoard