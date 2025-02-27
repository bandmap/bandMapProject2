import { useState } from "react";

function ChatBoardCard() {

    const [articles, setArticles] = useState([
        {
            tag: '步行者',
            key: 1,
            user_img: "./images/avatar/Avatar-1.png",
            username: "Huli123",
            title: "現場聽橋讚爆了!",
            content: "昨晚橋的演出真的是一場視覺與聽覺的饗宴！他們的吉他riff搭配主唱那充滿力量的嗓音，直接點燃整個場館！特別是最後一首歌，全場大合唱的畫面實在太震撼，感覺整個靈魂都被他們的音樂帶走了。期待他們的下一場巡演！",
            pic: "",
            number: [1607, 569, 785],
            liked: false,
            marked: false
        },
        {
            tag: '生祥樂隊',
            key: 2,
            user_img: "./images/avatar/Avatar-2.png",
            username: "NatureLover88",
            title: "種樹與野生的現場像進入了森林音樂祭🌳🎶",
            content: "昨天第一次去看種樹和野生的聯合演出，簡直像走進了音樂與自然交融的世界🍃✨！種樹的開場曲《綠意漫山》直接帶我進入放鬆的狀態，而野生的《風中追尋》又瞬間讓人熱血沸騰🔥。現場的舞台布置也超有意境，真的像在森林裡開音樂會🌲🎤。兩團合作的安可曲《與自然共舞》更是全場亮點，全觀眾一起揮手合唱，氣氛美到讓人忘了時間❤️。超推薦給喜歡自然系音樂的朋友，下次他們有演出一定要去支持",
            pic: "./images/chatcard/chatcard_7.jpg",
            number: [673, 56, 45],
            liked: false,
            marked: false
        },
        {
            tag: '打狗祭',
            key: 3,
            user_img: "./images/avatar/Avatar-3.png",
            username: "Huanglala789",
            title: "周邊用搶的，好難!!",
            content: "打狗祭的周邊真的是難買到嚇死人，預售沒跟到，開賣後也沒有搶到><，要不是強者我朋友，我可能就買不到了。建議有計畫購買打狗祭周邊商品的朋友下次一定要趁早上網訂購啊!",
            pic: "./images/chatcard/chatcard_3.jfif",
            number: [98, 6, 18],
            liked: false,
            marked: false
        },
        {
            tag: '洪佩瑜',
            key: 4,
            user_img: "./images/avatar/Avatar-4.png",
            username: "Musicfans583",
            title: "洪佩瑜的感動現場!",
            content: "洪佩瑜昨晚的現場真是動人心弦，特別是那首新歌，讓人感覺到她滿滿的真心和溫暖。現場安靜得只能聽見她的聲音，真的好想時間能停在那一刻。",
            pic: "",
            number: [291, 186, 290],
            liked: false,
            marked: false
        },
        {
            tag: '巴大雄',
            key: 5,
            user_img: "./images/avatar/Avatar-5.png",
            username: "BigBearFan",
            title: "巴大雄的溫暖夜晚!",
            content: "巴大雄昨晚的現場超級溫暖，他的每一句歌詞都像是直接說進心坎裡一樣。看到他彈吉他那麼投入的樣子，真的很感動！尤其是那首《遠方》，全場靜靜地聽著，彷彿整個空間都只剩下他的聲音!",
            pic: "",
            number: [51, 12, 10],
            liked: false,
            marked: false
        },
        {
            tag: '揪音秘',
            key: 6,
            user_img: "./images/avatar/Avatar-6.png",
            username: "IndieFan33",
            title: "揪音秘演唱會相關問題求助！",
            content: "請問12/23揪音秘演唱會現場有官方賣周邊嗎？還有想問有沒有人一起拼住宿或交通的？我是從台中出發，超期待這場演出啊！",
            pic: "",
            number: [116, 28, 25],
            liked: false,
            marked: false
        },
        {
            tag: '秋波愛麗',
            key: 7,
            user_img: "./images/avatar/Avatar-7.png",
            username: "IndieLove_22",
            title: "秋波愛麗的夢幻現場!!",
            content: "秋波愛麗的現場氣氛太美了，燈光、音樂和他們的表演融合得無比自然！特別是那首慢板曲《銀河之聲》，直接把大家帶到另一個次元。現場粉絲都超安靜，好像怕打擾到這份美好。",
            pic: "./images/chatcard/chatcard_6.jfif",
            number: [418, 40, 279],
            liked: false,
            marked: false
        },
        {
            tag: '刑男大主廚',
            key: 8,
            user_img: "./images/avatar/Avatar-8.png",
            username: "ChefFan_66",
            title: "刑男大主廚的瘋狂夜",
            content: "刑男大主廚的現場根本是狂歡派對！每一首歌都讓全場蹦蹦跳，連我這平常比較害羞的人都忍不住大聲跟著唱。主唱的幽默感讓演出更加分，真的超值得一看！ ",
            pic: "",
            number: [85, 156, 30],
            liked: false,
            marked: false
        },
        {
            tag: '',
            key: 9,
            user_img: "./images/avatar/Avatar-9.png",
            username: "Lisa098",
            title: "關於聽團穿搭這件事",
            content: "一直都不是個會在意穿搭的人直到開始聽團之後，看到朋友們去聽團錢都會用心搭配穿著，增加聽團的儀式感，我也慢慢受到影響......",
            pic: "./images/chatcard/chatcard_4.jfif",
            number: [108, 30, 38],
            liked: false,
            marked: false
        },
    ])

    let className = 'text-area';

    const toggleLiked = (key) => {
        // 更新被點擊的文章的「喜歡」狀態
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article.key === key
                    ? {
                        ...article,
                        liked: !article.liked,
                        number: [
                            article.number[0],
                            article.liked ? article.number[1] - 1 : article.number[1] + 1,
                            article.number[2]
                        ]
                    }
                    : article
            )
        );
    }

    const toggleMarked = (key) => {
        // 更新被點擊的文章的「喜歡」狀態
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article.key === key
                    ? {
                        ...article,
                        marked: !article.marked,
                        number: [
                            article.number[0],
                            article.number[1],
                            article.marked ? article.number[2] - 1 : article.number[2] + 1
                        ]
                    }
                    : article
            )
        );
    }

    return (
        <>
            {
                articles.map((article) => {
                    const dynamicClass = article.pic === '' ? `${className} no-graph-area` : className;

                    return (
                        <article className="article" key={article.key}>
                            <div className="message">
                                <div className={dynamicClass}>
                                    <div className="user">
                                        <figure className="profile"><img src={article.user_img} /></figure>
                                        <p className="username">{article.username}</p>
                                    </div>
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="content">{article.content}</p>
                                    <div className="feedback">
                                        <div className="icon-number">
                                            <figure><img src="./images/icon/icon-chat.svg" /></figure>
                                            <p>{article.number[0]}</p>
                                        </div>
                                        <div className="icon-number">
                                            <figure onClick={() => toggleLiked(article.key)} className="btn-point">
                                                <img src={
                                                    article.liked
                                                        ? "./images/icon/icon-liked.svg"
                                                        : "./images/icon/icon-like-black.svg"
                                                } />
                                            </figure>
                                            <p>{article.number[1]}</p>
                                        </div>
                                        <div className="icon-number">
                                            <figure onClick={() => toggleMarked(article.key)}
                                            className="btn-point">
                                                <img src={
                                                    article.marked
                                                        ? "./images/icon/icon-marked.svg"
                                                        : "./images/icon/icon-bookmark.svg"
                                                } />
                                            </figure>
                                            <p>{article.number[2]}</p>
                                        </div>
                                    </div>
                                </div>
                                {article.pic && (
                                    <figure className="picture">
                                        <img src={article.pic} alt="上傳圖片" />
                                    </figure>
                                )}
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}

export default ChatBoardCard