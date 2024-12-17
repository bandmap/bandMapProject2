import { useState } from "react"
import { Link } from "react-router-dom";


function CurrentEvent() {

    // 箭頭button變數
    const arrow_button = <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.0153 0.567141C14.0152 0.566093 14.015 0.565065 16.5 0.291167C18.985 0.0172684 18.9848 0.0162815 18.9847 0.0153151L18.9845 0.0134799L18.9842 0.0101627L18.9836 0.00493076L18.983 0L18.9845 0.0116533C18.9869 0.028776 18.992 0.0641574 19.0007 0.116075C19.0181 0.220106 19.0497 0.389202 19.102 0.609783C19.207 1.05296 19.3923 1.69136 19.7059 2.42136C20.3347 3.88467 21.4484 5.64917 23.4108 7.00451L23.4142 7.0069C26.0193 8.81257 28.7945 9.73324 31.553 9.79173L31.5 12.2912L31.553 14.7906C28.7945 14.8491 26.0193 15.7698 23.4142 17.5754L23.4108 17.5778C21.4484 18.9332 20.3347 20.6977 19.7059 22.161C19.3923 22.891 19.207 23.5294 19.102 23.9725C19.0497 24.1931 19.0181 24.3622 19.0007 24.4663C18.992 24.5182 18.9869 24.5536 18.9845 24.5707L18.983 24.5823L18.9836 24.5774L18.9842 24.5722L18.9845 24.5689L18.9847 24.567C18.9848 24.5661 18.985 24.5651 16.5 24.2912C14.015 24.0173 14.0152 24.0162 14.0153 24.0152L14.0155 24.013L14.0161 24.0082L14.0173 23.9971L14.0207 23.9689C14.0234 23.9474 14.0268 23.9207 14.0312 23.889C14.0399 23.8255 14.0524 23.7418 14.0695 23.6398C14.1036 23.4359 14.1567 23.1575 14.2366 22.8201C14.396 22.1472 14.6652 21.227 15.1121 20.1871C15.8192 18.5413 16.9906 16.5537 18.9067 14.7912H0V9.79117H18.9067C16.9906 8.02865 15.8192 6.04104 15.1121 4.39527C14.6652 3.35535 14.396 2.43518 14.2366 1.76226C14.1567 1.42479 14.1036 1.14646 14.0695 0.942578C14.0524 0.840537 14.0399 0.756839 14.0312 0.693371C14.0268 0.661627 14.0234 0.634911 14.0207 0.613457L14.0173 0.58524L14.0161 0.574137L14.0155 0.569346L14.0153 0.567141Z" fill="#FE8DBA" />
    </svg>

    // 樂團介紹卡片array
    const arrEventCard = [
        { img: './images/近期活動-揪音秘.jpg', key: '1', name: '近期活動-揪音秘', event: '揪音秘', time: '2024/11/10 (日）', place: 'Legacy Taipei 音樂展演空間' },

        { img: './images/近期活動-刑男大主廚.jpg', key: '2', name: '近期活動-刑男大主廚', event: '刑男大主廚', time: '2024/11/24 (日）', place: 'Legacy Taipei 音樂展演空間' },

        { img: './images/近期活動-開往天堂的海盜船.jpg', key: '3', name: '近期活動-開往天堂的海盜船', event: '開往天堂的海盜船', time: '2024/11/29 (五）', place: 'Legacy Taipei 音樂展演空間' },
    ]

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div id="currentevent-page">
            {/* 滑鼠hover進卡片的時候背景也出現相對應的活動圖片 */}
            <div className="hover-bg" 
            style={{opacity: hoverIndex !== null ? 0.2 : 0}}>
                {hoverIndex !== null && (
                    <img src={arrEventCard[hoverIndex].img} alt={arrEventCard[hoverIndex].event} />
                )}
            </div>
            <div className="box-roll">
                <article className="box-intro">
                    {
                        arrEventCard.map((e,index) => {
                            return (
                                <div className="box-pic" key={e.key}
                                onMouseOver={() => {setHoverIndex(index)}}
                                onMouseOut={() => {setHoverIndex(null)}}>
                                    <img src={e.img} alt={e.name} />
                                    <div className="hover-text">
                                        <div className="text-left">
                                            <h4>{e.event}</h4>
                                            <div className="place">
                                                <figure><img src="./images/icon/icon-地點.svg" alt="icon-地點" /></figure>
                                                <p>{e.place}</p>
                                            </div>
                                        </div>
                                        <p className="event-time">{e.time}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
            <div className="intro-section">
                <div className="title">
                    <h2>BAND地開花</h2>
                    <h3>近期活動</h3>
                </div>
                <p>彙整全台音樂節及專場演出資訊，<br />
                    快速鎖定心儀的演出！<br />
                    讓你感受現場音樂的震撼！
                </p>
                <div className="cta">
                    <span>點進探索</span>
                    <Link to='/event'><button className="cta-btn"><img src="./images/btn-next-w&p.svg" alt="" /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default CurrentEvent