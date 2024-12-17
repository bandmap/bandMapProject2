import { useEffect } from "react"
import ChatBoardCard from "../components/ChatBoardCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function ChatBoardPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <NavBar />
            <main>
                <div id="chatboard-main">
                    {/* 背景區 */}
                    <div className="linear-bg">
                        <img src="./images/texture.png" alt="" />
                    </div>
                    {/* 頁面topbar */}
                    <div className="topbar">
                        <div className="left-part">
                            <div className="title">
                                <h2>隨BAND聊</h2>
                                <p>樂迷留言板</p>
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="smile-face-roll">
                                <img className="smile-face" src="./images/chatboard.svg" alt="" />
                                <img className="smile-face" src="./images/chatboard.svg" alt="" />
                            </div>
                            <div className="smile-face-roll">
                                <img className="smile-face" src="./images/chatboard.svg" alt="" />
                                <img className="smile-face" src="./images/chatboard.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="main-area">
                        {/* search-bar */}
                        <div className="searchbar">
                            <input type="search" className="search" title="search" placeholder="關鍵字" />
                            <figure className="magnifier">
                                <img src="./images/icon/icon-search.svg" alt="smile-face" />
                            </figure>
                        </div>
                        {/* filter */}
                        <div className="filter">
                            <div className="option">熱門</div>
                            <div className="option">時間由近到遠</div>
                            <div className="option">時間由遠到近</div>
                        </div>
                        {/* 下方文章區 */}
                        <ChatBoardCard />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default ChatBoardPage