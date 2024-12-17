import { Link } from "react-router-dom"

function Footer() {

    return (
        <div id="footer">
            <div className="footer-up">
                <figure><img src="./images/Footer.svg" alt="" />
                </figure>
            </div>
            <div className="footer-main">
                <figure className="logo"><Link to='/'><img src="./images/logo.svg" alt="" /></Link></figure>
                <ul className="menu">
                    <li><Link to='/search'>演出搜尋</Link></li>
                    <li><Link to='/band'>本月樂團推薦</Link></li>
                    <li><Link to='/event'>近期活動</Link></li>
                    <li><Link to='/chatboard'>樂迷留言板</Link></li>
                    <li><Link to='/calendar'>個人行事曆</Link></li>
                    <li><Link to='/member'>會員中心</Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer