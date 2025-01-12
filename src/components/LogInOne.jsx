import { Link, useNavigate } from "react-router-dom"
import ReactDOM from 'react-dom'
import { signInWithPopup } from "firebase/auth";
import { auth, provide } from "../config/firebase";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

function LogInOne({ togglePopup, redirectPath }) {
    const { login } = useContext(UserContext); // 從 UserContext 獲取 login 方法
    const navigate = useNavigate();

    const loginGoogle = async () => {
        const result = await signInWithPopup(auth, provide);
        console.log(result);
        login();
        navigate(redirectPath);
    }

    const handleLogin = () => {
        login(); // 更新登入狀態
        togglePopup(); // 關閉彈窗
        navigate(redirectPath); // 導向指定頁面
    }

    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={togglePopup}></div>
            <div className="login-card">
                <h1>登入隨Band地圖</h1>
                <div className="card-content">

                    {/* 登入/註冊表單 */}
                    <form action="">
                        <label htmlFor="user-name"></label>
                        <input className="user-data" type="text" name="user-name" id="user-name" title="使用者姓名" placeholder="帳號" required />
                        <label htmlFor="password"></label>
                        <input className="user-data" type="password" name="password" id="password" title="密碼" placeholder="密碼" required />

                        <div className="remember-me">
                            <div>
                                <input type="checkbox" id="isChecked" />
                                <label htmlFor="isChecked">記住我</label>
                            </div>
                            <p>忘記密碼?</p>
                        </div>

                        <div className="login-btns">
                            <button type="submit" className="orange-btn" d="submit-btn" onClick={handleLogin} >確認</button>
                            <button type="submit" className="orange-btn link-btn" id="submit-google-btn" onClick={loginGoogle} >
                                <img src="./images/icon/icon-google.svg" alt="google icon" />
                                <p>使用Google帳號登入</p>
                            </button>
                            <div className="line"></div>
                            <Link to='/signup1' className="normal-btn">註冊</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>,
        document.body // 渲染到 body 元素
    )
}

export default LogInOne