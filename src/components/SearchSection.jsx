function SearchSection() {
    return (
        <>
            <form className="search-section" action="">
                <div className="what">
                    <label htmlFor="search">搜尋</label>
                    <input type="search" name="search" id="search" title="搜尋欄位" placeholder="關鍵字"></input>
                </div>
                <div className="where">
                    <label htmlFor="location">地點</label>
                    <select name="" id="location">
                        <option value="">請選擇</option>
                        <optgroup label="地區">
                            <option value="音樂祭">音樂祭</option>
                            <option value="全台">全台</option>
                            <option value="北部">北部</option>
                            <option value="中部">中部</option>
                            <option value="南部">南部</option>
                            <option value="東部">東部</option>
                        </optgroup>
                    </select>
                </div>
                <div className="when">
                    <label htmlFor="time">時間</label>
                    <select name="" id="time">
                        <option value="">請選擇</option>
                        <optgroup label="2024">
                            <option value="JAN">JAN</option>
                            <option value="FEB">FEB</option>
                            <option value="MAR">MAR</option>
                            <option value="APR">APR</option>
                            <option value="MAY">MAY</option>
                            <option value="JUN">JUN</option>
                            <option value="JUL">JUL</option>
                            <option value="AUG">AUG</option>
                            <option value="SEP">SEP</option>
                            <option value="OCT">OCT</option>
                            <option value="NOV">NOV</option>
                            <option value="DEC">DEC</option>
                        </optgroup>
                    </select>
                </div>
                <div className="btn-container">
                    <button className="submit-btn" type="submit" value="">
                        <img src="./images/icon/icon-search.svg" alt="search" />
                    </button>
                </div>
            </form>
        </>
    )
}

export default SearchSection