import { Link, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

function SignUpThree() {

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
                        <div className="line done"></div>
                        <div className="done">2</div>
                        <div className="line"></div>
                        <div className="undo">3</div>
                    </div>
                    <div className="login-card">
                        <h1>接收認證碼</h1>
                        <div className="card-content">

                            {/* 登入/註冊表單 */}
                            <form action="">
                                <label htmlFor="code"></label>
                                <input className="user-data" type="text" name="code" id="code" title="輸入驗證碼" placeholder="輸入驗證碼" required />

                                <div className="remember-me">
                                    <div>
                                        <p>重新發送驗證碼</p>
                                    </div>
                                </div>

                                <div className="login-btns">
                                    <Link to='/signup4' input type="submit" className="orange-btn" name="submit-btn" id="submit-btn">進行驗證</Link>
                                    <button onClick={() => navigate(-1)} type="submit" className="normal-btn" >上一步</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUpThree