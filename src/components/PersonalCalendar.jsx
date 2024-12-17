import { Link } from "react-router-dom"

function PersonalCalendar() {

    return (
        <div id="personalcal-page">
            <div className="calendar-illu">

            </div>
            <div className="intro-section">
                <div className="title">
                    <h2>隨BAND排</h2>
                    <h3>個人行事曆</h3>
                </div>
                <p>打造屬於你的專屬音樂行事曆！<br />
                    隨時管理喜愛的演出活動、設定開票和演出提醒，不再錯過任何一場心儀的表演！
                </p>
                <div className="cta">
                    <span>馬上編輯</span>
                    <Link to='/calendar'><button className="cta-btn"><img src="../images/btn-next-b&w.svg" alt="" /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default PersonalCalendar