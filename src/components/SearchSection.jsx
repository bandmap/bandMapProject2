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
                        <optgroup label="分類一">
                            <option value="選項一">選項一</option>
                            <option value="選項二">選項二</option>
                            <option value="選項三">選項三</option>
                        </optgroup>
                    </select>
                </div>
                <div className="when">
                    <label htmlFor="time">時間</label>
                    <select name="" id="time">
                        <option value="">請選擇</option>
                        <optgroup label="分類二">
                            <option value="選項一">選項一</option>
                            <option value="選項二">選項二</option>
                            <option value="選項三">選項三</option>
                        </optgroup>
                    </select>
                </div>
            </form>
        </>
    )
}

export default SearchSection