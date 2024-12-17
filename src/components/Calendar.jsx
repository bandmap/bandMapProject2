import { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

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
        const dateFormat = 'd';
        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`cell ${!isSameMonth(day, currentDate) ? 'disabled' : ''} ${isSameDay(day, new Date()) ? 'today' : ''}`}
                        key={day}
                        onClick={() => console.log('選擇的日期:', cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(<div className="row" key={day}>{days}</div>);
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
                    <div className="cell" key={index}>
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
        </div>
    );
};

export default Calendar

