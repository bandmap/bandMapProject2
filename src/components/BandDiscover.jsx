import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

function BandDiscover() {

    // 樂團介紹卡片array
    const arrBandCard = [
        { img: './images/banddiscover-2.jpg', key: '1', name: '樂團介紹-andr', band: 'Andr', content: 'Andr，台灣新生代音樂創作人，以細膩的旋律編寫與多元的音樂風格迅速崭露頭角。從電子音樂到實驗性聲音設計，他的作品總是帶著獨特的個人印記，既有對情感的深刻詮釋，也不乏對時代議題的敏銳觀察。' },

        { img: './images/banddiscover-1.jpg', key: '2', name: '樂團介紹-秋波愛麗', band: '秋波愛麗', content: '秋波愛麗是一支來自台灣的新生代獨立樂團，以夢幻且充滿情感的旋律在樂迷間迅速打響名號。樂團名稱「秋波愛麗」帶有濃厚的文學與藝術氣息，彷彿是一場溫柔的凝視，帶領聽眾進入如同愛麗絲仙境般的音樂世界。' },

        { img: './images/banddiscover-3.png', key: '3', name: '樂團介紹-Resa Club', band: 'Resa Club', content: 'Resa Club，台灣備受矚目的音樂創作單位，以獨特的音樂美學與精緻的聲音製作在獨立音樂圈中嶄露頭角。「Resa」源自於「旅程」的意涵，而這個名字也象徵著他們以音樂為載體，帶領聽眾踏上一場感官與情感的探索旅途。' }
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
    const [isLocked, setIsLocked] = useState(false); // 控制是否鎖住滾動

    useEffect(() => {
        let timeout; // 防止過多操作

        const handleScrollAll = () => {
            const targetPosition = window.innerHeight * 2; // 目標位置 (第二頁頂部)
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
        <div id="banddiscover-page" ref={containerRef}>
            {/* 滑鼠hover進卡片的時候背景也出現相對應的樂團圖片 */}
            <div className="hover-bg"
                style={{ opacity: hoverIndex !== null ? 0.3 : 0 }}>
                {hoverIndex !== null && (
                    <img src={arrBandCard[hoverIndex].img} alt={arrBandCard[hoverIndex].name} />
                )}
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2
                        ref={titleRef}
                        className={`title-ani-tar ${isVisible ? 'title-ani' : ''}`}>
                        BAND利商店
                    </h2>
                    <h3
                        ref={subtitleRef}
                        className={`title-ani-tar-s ${isVisible ? 'title-ani-s' : ''}`}>
                        本月樂團推薦
                    </h3>
                </div>
                <p
                    ref={contentRef}
                    className={`fadein-bottom ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    每月精選值得關注的新樂團，<br />
                    讓你發現未來的音樂新星，<br />
                    感受不同風格與多元創意！
                </p>
                <div
                    ref={contentRef}
                    className={`cta fadein-bottom button-delay ${isVisible ? 'fadein-bottom-show' : ''}`}>
                    <span>點進探索</span>
                    <Link to='/band'><button className="cta-btn"><img src="./images/btn-next-w&b.svg" alt="" /></button></Link>
                </div>
            </div>
            <div className="box-roll">
                <article className="box-intro">
                    {
                        arrBandCard.map((band, index) => {
                            return (
                                <Link to='/band1' className="box-pic" key={band.key}
                                    onMouseOver={() => { setHoverIndex(index) }}
                                    onMouseOut={() => { setHoverIndex(null) }}>
                                    <img src={band.img} alt={band.name} />
                                    <div className="hover-text">
                                        <h4>{band.band}</h4>
                                        <p>{band.content}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </article>
            </div>

        </div>
    )
}

export default BandDiscover