import { useState } from "react"
import { Link } from "react-router-dom";

function BandDiscover() {

    // 樂團介紹卡片array
    const arrBandCard = [
        { img: './images/banddiscover-2.jpg', key: '1', name: '樂團介紹-andr', band: 'Andr', content: 'Andr，台灣新生代音樂創作人，以細膩的旋律編寫與多元的音樂風格迅速崭露頭角。從電子音樂到實驗性聲音設計，他的作品總是帶著獨特的個人印記，既有對情感的深刻詮釋，也不乏對時代議題的敏銳觀察。' },

        { img: './images/banddiscover-1.jpg', key: '2', name: '樂團介紹-秋波愛麗', band: '秋波愛麗', content: '秋波愛麗是一支來自台灣的新生代獨立樂團，以夢幻且充滿情感的旋律在樂迷間迅速打響名號。樂團名稱「秋波愛麗」帶有濃厚的文學與藝術氣息，彷彿是一場溫柔的凝視，帶領聽眾進入如同愛麗絲仙境般的音樂世界。' },

        { img: './images/banddiscover-3.png', key: '3', name: '樂團介紹-Resa Club', band: 'Resa Club', content: 'Resa Club，台灣備受矚目的音樂創作單位，以獨特的音樂美學與精緻的聲音製作在獨立音樂圈中嶄露頭角。「Resa」源自於「旅程」的意涵，而這個名字也象徵著他們以音樂為載體，帶領聽眾踏上一場感官與情感的探索旅途。' }
    ]

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div id="banddiscover-page">
            {/* 滑鼠hover進卡片的時候背景也出現相對應的樂團圖片 */}
            <div className="hover-bg"
            style={{opacity: hoverIndex !== null ? 0.3 : 0}}>
                { hoverIndex !== null && (
                    <img src={arrBandCard[hoverIndex].img} alt={arrBandCard[hoverIndex].name} />
                )}
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2>BAND利商店</h2>
                    <h3>本月樂團推薦</h3>
                </div>
                <p>每月精選值得關注的新樂團，<br />
                    讓你發現未來的音樂新星，<br />
                    感受不同風格與多元創意！
                </p>
                <div className="cta">
                    <span>點進探索</span>
                    <Link to='/band'><button className="cta-btn"><img src="./images/btn-next-w&b.svg" alt="" /></button></Link>
                </div>
            </div>
            <div className="box-roll">
                <article className="box-intro">
                    {
                        arrBandCard.map((band, index) => {
                            return (
                                <div className="box-pic" key={band.key}
                                onMouseOver={() => {setHoverIndex(index)}}
                                onMouseOut={() => {setHoverIndex(null)}}>
                                    <img src={band.img} alt={band.name} />
                                    <div className="hover-text">
                                        <h4>{band.band}</h4>
                                        <p>{band.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </article>
            </div>

        </div>
    )
}

export default BandDiscover