import { useEffect, useState, useContext } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import axios from 'axios';
import { CalendarListContext } from "./CalendarListContext";

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null); // 被選到的日期
    const [isSidebarVisible, setSidebarVisible] = useState(false); // sidebar的出現

    const { calendarList } = useContext(CalendarListContext); // 被加進行事曆的清單

    // 取得當前的月份和年份
    const currentMonth = () => format(currentDate, 'MMMM yyyy');

    // 切換到上個月
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    // 切換到下個月
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    // 生成月份的所有日期
    const renderDays = () => {
        const startDate = startOfWeek(startOfMonth(currentDate));
        const endDate = endOfWeek(endOfMonth(currentDate));
        const dateFormat = 'yyyy-MM-dd';
        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const formattedDate = format(day, 'd');
                const fullDate = format(day, dateFormat);
                const cloneDay = day;

                // 查找行程資料
                const event = calendarList.find(e => e.calendarDate === fullDate);

                // 判斷是否為週六或週日
                const isWeekend = day.getDay() === 6 || day.getDay() === 0;

                days.push(
                    <div
                        className={`cell 
                            ${!isSameMonth(day, currentDate) ? 'disabled' : ''}
                            ${isSameDay(day, new Date()) ? 'today' : ''}
                            ${event ? 'has-event' : ''}
                            ${isWeekend ? 'weekend' : ''}`}
                        key={day}
                        onClick={() => {
                            if (event) {
                                setSelectedEvent(event);
                                setSidebarVisible(true);
                            } else {
                                setSidebarVisible(false);
                            }
                        }}
                    >
                        <span className="number">{formattedDate}</span>
                        {/* 顯示行程內容 */}
                        <div className='event-total'>
                            {
                                calendarList
                                    .filter(e => e.calendarDate === fullDate) // 過濾出當天的事件
                                    .map((event, index) => {
                                        return (

                                            <div className="event-each" key={index}>
                                                <div className="event-left">
                                                    <span className='ball'></span>
                                                    <span className='event-name'>{event.event}</span>
                                                </div>
                                                <span className='event-right'>{event.calendarTime}</span>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>{days}</div>);
            days = [];
        }

        return <div className="body">{rows}</div>;
    };

    // 生成星期標題
    const renderWeekDays = () => {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return (
            <div className="days row">
                {days.map((day, index) => (
                    <div className={`cell ${index === 0 || index === 6 ? 'weekend' : ''}`} key={index}>
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="calendar">
            <div className="menu">
                <button className='left' onClick={prevMonth}><img src="./images/btn-back.svg" /></button>
                <h2>{currentMonth()}</h2>
                <button className='right' onClick={nextMonth}><img src="./images/btn-next.svg" alt="" /></button>
            </div>
            {renderWeekDays()}
            {renderDays()}
            <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
                {selectedEvent ? (
                    <>
                        <div className="side-details">
                            <h2>{selectedEvent.calendarDate} 的活動</h2>
                            {
                                calendarList
                                    .filter(event => event.calendarDate === selectedEvent.calendarDate)
                                    .map((event, index) => {
                                        return (
                                            <>
                                                <span className='event-name'>{event.event}</span>
                                                <span>演出者: {event.nametag}</span>
                                                <span>時間: {event.calendarTime}</span>
                                                <span>地點: {event.location}</span>
                                            </>
                                        )
                                    })
                            }
                        </div>
                    </>
                ) : (
                    <p>請選擇日期以查看行程</p>
                )}
            </div>
            {isSidebarVisible && <div className="overlay" onClick={() => setSidebarVisible(false)} />}
        </div>
    );
};

export default Calendar

