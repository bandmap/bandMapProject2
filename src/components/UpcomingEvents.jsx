
function UpcomingEvents() {

    const showData = [
        {
            date: "2024/11/07(四) 18:30",
            title: "2024 The Next Big Thing 大團誕生 開發廠 9",
            venue: "Legacy 傳 音樂展演空間"
        },
    ]

    return (
        <section className="upcoming-shows">
            <h2 className="shows-title">近期演出</h2>
            {showData.map((show, index) => (
                <div key={index} className="show-card">
                    <div className="show-info">
                        <time className="show-date">{show.date}</time>
                        <h3 className="show-title">{show.title}</h3>
                        <p className="show-venue">{show.venue}</p>
                    </div>
                    <button className="next-btn">
                        <img src="./images/btn-next-w&black.svg" alt="" className="next-icon" />
                    </button>
                </div>
            ))}
        </section>
    );
}

export default UpcomingEvents