import { Link, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

function SignUpTwo() {

    const navigate = useNavigate();

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
                        <div className="line"></div>
                        <div className="undo">2</div>
                        <div className="line"></div>
                        <div className="undo">3</div>
                    </div>
                    <div className="login-card">
                        <h1>帳號密碼設定</h1>
                        <div className="card-content">

                            {/* 登入/註冊表單 */}
                            <form action="">
                                <label htmlFor="email"></label>
                                <input className="user-data" type="email" name="email" id="email" title="電子郵件" placeholder="電子郵件" required />
                                <label htmlFor="user-id"></label>
                                <input className="user-data" type="text" name="user-id" id="user-id" title="帳號" placeholder="帳號" required />
                                <label htmlFor="password"></label>
                                <input className="user-data" type="password" name="password" id="password" title="密碼" placeholder="密碼" required />

                                <div className="remember-me">
                                    <div>
                                        <input type="checkbox" id="isChecked" />
                                        <label htmlFor="isChecked">顯示密碼</label>
                                    </div>
                                </div>

                                <div className="login-btns">
                                    <Link to='/signup3' input type="submit" className="orange-btn" name="submit-btn" id="submit-btn">下一步</Link>
                                    <button onClick={() => navigate(-1)} type="submit" className="normal-btn">上一步</button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </main>
        </>
    )
}

export default SignUpTwo