import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

function SignUpOne() {
    return (
        <>
            <NavBar />
            <main>
                <div className="signup-bg">
                    <img className="bg-smile" src="./images/bg-smile.svg" alt="" />
                    <img className="bg-blue12" src="./images/bg-Vector.svg" alt="" />
                </div>
                <div className="login-popup">
                    <div className="login-card">
                        <h1>註冊隨Band地圖</h1>
                        <p>只要註冊即可使用隨Band地圖完整服務<br />
                            立即擇一管道驗證註冊</p>
                        <div className="card-content">

                            {/* 登入/註冊表單 */}
                            <form action="">
                                <div className="login-btns">
                                    <Link to='/signup2' className="orange-btn">註冊</Link>
                                    <Link to='/signup2' className="orange-btn link-btn">
                                        <img src="./images/icon/icon-google.svg" alt="google icon" />
                                        <p>使用Google帳號註冊</p>
                                    </Link>
                                    <div className="line"></div>
                                    <Link to='/login' className="normal-btn">登入</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUpOne