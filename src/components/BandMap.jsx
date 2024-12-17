import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function BandMap() {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const maxOffset = 300; // 最大偏移量
            const scrollFactor = 0.1; // 滾動速度比例
            const scrollY = window.scrollY * scrollFactor;
            const offset = Math.min(scrollY, maxOffset); // 限制最大偏移

            const targetElements = document.getElementsByClassName("my-rellax");
            if (targetElements.length > 0) {
                targetElements[0].style.transform = `translate3d(0px, ${offset}px, 0px)`;
            }
        });
    }, []);

    // taiwan map svg變數
    const map = <svg width="488" height="764" viewBox="0 0 488 764" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M168.529 177.096L264.65 244.328L310.767 233.942L413.218 266.969L447.281 164.388L437.836 147.765L435.947 101.589L478.45 68.3415L467.664 48.9468L416.111 37.865L372.664 0L331.105 35.094L247.988 62.8006L168.529 177.096Z" fill="#FFAF00" />
        <path d="M168.529 177.096L35.4708 368.49L29.1575 399.457L109.875 388.096L225.929 443.36L296.914 367.031L310.767 233.942L264.65 244.328L168.529 177.096Z" fill="#FE8DBA" />
        <path d="M225.929 443.36L176.252 534.928L196.759 565.389L178.639 596.75L189.36 656.929L224.419 666.396L219.651 757.297H172.426L153.535 671.409L79.921 633.72L8.52417 500.665L29.1576 399.457L109.875 388.096L225.929 443.36Z" fill="#0099FF" />
        <path d="M224.419 666.396L189.36 656.929L178.639 596.75L196.759 565.389L176.252 534.928L225.929 443.36L296.914 367.031L310.767 233.942L413.219 266.969L329.216 519.949L225.319 649.244L224.419 666.396Z" fill="#FF4438" />
    </svg>

    return (
        <div id="bandmap-page" >
            <div className="map">
                <figure>{map}</figure>
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2>隨BAND地圖</h2>
                    <h3>全台演出搜尋</h3>
                </div>
                <p>輕鬆搜尋音樂節及專場，<br />
                    打造專屬於你的音樂地圖，<br />
                    隨時隨地掌握全台獨立音樂活動！
                </p>
                <div className="cta">
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