import { useMemo, useState } from 'react';

function SearchSection({ months, onFilterChange, eventInfo }) {

    /* 場館選單 */
    const locations = {
        '全部': ['全部場館'],
        '音樂祭': ['音樂祭'],
        '北部': ['Legacy Taipei 音樂展演空間', 'Legacy TERA', 'SUB LIVE', '台北流行音樂中心', '新莊宏匯廣場', 'Zepp New Taipei'],
        '中部': ['Legacy Taichung 音樂展演空間'],
        '南部': ['海音館', 'LIVE WAREHOUSE 大庫'],
        '東部': ["Le Ark 藝術展演中心"]
    }

    const [showLocation, setShowLocation] = useState(false);
    const [currentVenues, setCurrentVenues] = useState([]);
    const [showVenue, setShowVenue] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState('場館');
    const [selectedArea, setSelectedArea] = useState(''); // 追蹤選取的地區

    const handleLocationClick = () => {
        setShowLocation(!showLocation);
    }

    const handleVenueClick = () => {
        setShowVenue(!showVenue);
    }

    const handleAreaClick = (area) => {
        setSelectedArea(area); // 更新目前選取的地區
        setCurrentVenues(locations[area] || []); // 根據地區更新場館
        setShowVenue(true);
        setSelectedVenue('場館'); // 重置選取的場館
        onFilterChange({ area, venue: selectedVenue, month: selectedMonth });
        console.log(area);
    };

    const handleSelectedVenue = (venue) => {
        setSelectedVenue(venue); // 更新選取的場館
        setShowVenue(false);
        setShowLocation(false);
        onFilterChange({ area: selectedArea, venue, month: selectedMonth });
    };

    /* 月份選單 */
    const [showMonth, setShowMonth] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('月份');

    const handleMonthClick = () => {
        setShowMonth(!showMonth);
    }

    const handleSelectedMonth = (monthSelect) => {
        setSelectedMonth(monthSelect);
        setShowMonth(false);
        onFilterChange({ area: selectedArea, venue: selectedVenue, month: monthSelect });
    }

    /* 共用 overlay 點擊狀態 */
    const closeDropdowns = () => {
        if (showLocation) {
            setShowLocation(false);
        }
        if (showMonth) {
            setShowMonth(false);
        }
    };

    const [search, setSearch] = useState('');

    const filterKeywords = useMemo(() => {
        return [...eventInfo].filter((event) => {
            return event.event.match(search);
        })
    },[search])

    /* 搜尋關鍵字 */
    /* const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchChange = (e) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);
        onFilterChange({ area: selectedArea, venue: selectedVenue, month: selectedMonth, keyword });
    }; */

    return (
        <>
            {
                (showLocation || showMonth) && <div className="overlay" onClick={closeDropdowns}></div>
            }

            <form className="search-section" action="">
                <div className="form-section">
                    <h4>地點</h4>
                    <button className="input-btn" onClick={handleLocationClick}>
                        <p>{selectedVenue !== '場館' ? selectedVenue : selectedArea || '場館'}</p>
                        <img
                            style={{
                                transform: showLocation ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.4s ease'
                            }}
                            src="./images/selector.svg" alt="selector" />
                    </button>
                    {
                        showLocation &&
                        <div className={`selector where-sec1 ${showLocation ? 'show-selector' : ''}`}>
                            <h4>地區</h4>
                            <ul>
                                {Object.keys(locations).map((area, index) => (
                                    <li
                                        key={index}
                                        className={`where-btn ${selectedArea === area ? 'click-status' : ''}`}
                                        onClick={() => handleAreaClick(area)} // 點擊更新地區
                                    >
                                        {area}
                                    </li>
                                ))}
                            </ul>
                            <div className="selector where-sec2">
                                <h4>場館</h4>
                                <button className="input-btn" onClick={handleVenueClick}>
                                    <p>{selectedVenue}</p>
                                    <img
                                        style={{
                                            transform: showVenue ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.4s ease'
                                        }}
                                        src="./images/selector.svg" alt="selector" />
                                </button>
                                {
                                    showVenue &&
                                    <ul className="where-sec2-list">
                                        {currentVenues.map((venue, index) => (
                                            <li
                                                key={index}
                                                className={selectedVenue === venue ? 'click-status' : ''}
                                                onClick={() => handleSelectedVenue(venue)} // 點擊更新場館
                                            >
                                                {venue}
                                            </li>
                                        ))}
                                    </ul>
                                }

                            </div>
                        </div>
                    }

                </div>
                <div className="form-section when">
                    <h4>時間</h4>
                    <button id="drop-down-toggle" className="input-btn" onClick={handleMonthClick}>
                        <p>{selectedMonth}</p>
                        <img
                            style={{
                                transform: showMonth ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.4s ease'
                            }}
                            src="./images/selector.svg" alt="selector" />
                    </button>
                    {
                        showMonth &&
                        <div className="selector when-sec1">
                            <div className="time-sec">
                                <img src="./images/icon/icon-selector-prev.svg" alt="previous" />
                                <h4>2025</h4>
                                <img src="./images/icon/icon-selector-next.svg" alt="next" />
                            </div>
                            <ul>
                                {
                                    months.map((month, index) => (
                                        <li
                                            key={index}
                                            className={selectedMonth === month.select ? 'click-status' : ''}
                                            onClick={() => handleSelectedMonth(month.select)}>
                                            {month.select}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div className="form-section">
                    <label htmlFor="search">搜尋</label>
                    <input type="search" name="search" id="search"
                        title="搜尋欄位"
                        placeholder="關鍵字"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        ></input>
                </div>
            </form>
        </>
    )
}

export default SearchSection