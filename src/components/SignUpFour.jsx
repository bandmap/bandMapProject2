import { Link } from "react-router-dom"
import NavBar from "./NavBar"

function SignUpFour() {
    return (
        <>
            <NavBar />
            <main>
                <div className="signup-bg">
                    <img className="bg-smile" src="./images/bg-smile.svg" alt="" />
                    <img className="bg-blue12" src="./images/bg-Vector.svg" alt="" />
                </div>
                <div className="login-popup">
                    <div className="flow">
                        <div className="done">1</div>
                        <div className="line done"></div>
                        <div className="done">2</div>
                        <div className="line done"></div>
                        <div className="done">3</div>
                    </div>
                    <div className="login-card">
                        <h1>完成註冊</h1>
                        <p>開始你的隨Band地圖規劃吧!</p>
                        <div className="card-content">
                            <div className="login-btns">
                                <Link to='/member' className="orange-btn">前往會員中心</Link>
                                <Link to='/' className="normal-btn">返回首頁</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUpFour