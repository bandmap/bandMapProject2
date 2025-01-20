import { Link, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useContext } from "react";
import { UserContext } from "../components/UserProvider";


function SignUpFour() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignUp = () => {
        window.localStorage.setItem('user1','login');
        console.log(window.localStorage.getItem('user1'));
        login(); // 更新登入狀態
        navigate('/member'); // 導向指定頁面
    }

    const handleSignUpHome = () => {
        window.localStorage.setItem('user1','login');
        console.log(window.localStorage.getItem('user1'));
        login(); // 更新登入狀態
        navigate('/'); // 導向指定頁面
    }

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
                                <button className="orange-btn" onClick={handleSignUp}>前往會員中心</button>
                                <button className="normal-btn" onClick={handleSignUpHome}>返回首頁</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUpFour