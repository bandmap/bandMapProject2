import { createContext, useState } from "react";

export const CalendarListContext = createContext();

// 提供 Context 的組件
export const CalendarListProvider = ({ children }) => {
    const [calendarList, setCalendarList] = useState([]);

    // 更新 likeList 的函數
    const toggleCalendar = (card) => {
        setCalendarList((prevList) => {
            const isCollected = prevList.some((item) => item.key === card.key);
            if (isCollected) {
                // 移除已經存在的卡片
                return prevList.filter((item) => item.key !== card.key);
            } else {
                // 新增新的卡片
                return [...prevList, card];
            }
        });
    };

    return (
        <CalendarListContext.Provider value={{ calendarList, toggleCalendar, setCalendarList }}>
            {children}
        </CalendarListContext.Provider>
    );
};