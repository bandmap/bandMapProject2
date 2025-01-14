import { createContext, useState } from "react";

export const LikeListContext = createContext();

// 提供 Context 的組件
export const LikeListProvider = ({ children }) => {
    const [likeList, setLikeList] = useState([]);

    // 更新 likeList 的函數
    const toggleLike = (card) => {
        setLikeList((prevList) => {
            const isLiked = prevList.some((item) => item.key === card.key);
            if (isLiked) {
                // 移除已經存在的卡片
                return prevList.filter((item) => item.key !== card.key);
            } else {
                // 新增新的卡片
                return [...prevList, card];
            }
        });
        window.localStorage.setItem('user1-likelist', likeList);
        console.log(window.localStorage.getItem('user1-likelist'));
    };

    return (
        <LikeListContext.Provider value={{ likeList, toggleLike }}>
            {children}
        </LikeListContext.Provider>
    );
};