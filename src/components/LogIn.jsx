import { Link } from "react-router-dom"
import NavBar from "./NavBar"

function LogIn() {
    return (
        <>
            <NavBar />
            <main>
                <div id="login-page">
                    <div className="login-left">
                        <h3>隨Band看 隨Band聽 隨Band聊</h3>
                        <p>不再錯過任何一場表演!</p>
                    </div>
                    <div className="login-right">
                        <div className="login-card">
                            <figure><img src="./images/logo-black.svg" alt="" /></figure>
                            <p>打造屬於你的專屬音樂行事曆！</p>
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
                                        <input type="submit" className="orange-btn" name="submit-btn" id="submit-btn" value="確認" />
                                        <input type="submit" className="orange-btn" name="submit-btn" id="submit-google-btn" value="使用Google帳號登入" />
                                        <div className="line"></div>
                                        <Link to='/signup1' className="normal-btn">註冊</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LogIn