
function MusicAlbums() {

    const albumData = [
        {
            cover: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdff358d9374464c4cd58e75e5ae3e209690eaced88469f8fac16ff24cff0695?placeholderIfAbsent=true&apiKey=09f840aaed5947cf856ba45beb67e591",
            title: "愛麗"
        },
        {
            cover: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaee50ee246036d7b986ad1404466d73a7a5dcde66cfc8f49e68a334e3ad64a4?placeholderIfAbsent=true&apiKey=09f840aaed5947cf856ba45beb67e591",
            title: "Soundcheck From 112F Recording Studio"
        },
    ]

    return (
        <section className="music-albums">
            <h2 className="music-title">音樂專輯</h2>
            <div className="album-grid">
                {albumData.map((album, index) => (
                    <div key={index} className="album-card">
                        <img src={album.cover} alt={`${album.title} album cover`} className="album-cover" />
                        <h3 className="album-title">{album.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MusicAlbums