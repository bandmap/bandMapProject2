import { useContext, useEffect } from "react"
import MemberBar from "../components/MemberBar";
import SideBar from "../components/SideBar";
import CardOne from "../components/CardOne";
import CardCollectBand from "../components/CardCollectBand";
import { LikeListContext } from "../components/LikeListContext";

function MemberPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { likeList } = useContext(LikeListContext);

    const sampleBandCard = [
        {
            img: './images/banddiscover-1.jpg',
            key: '1',
            name: '秋波愛麗',
        },
        {
            img: './images/banddiscover-2.jpg',
            key: '2',
            name: 'Andr',
        },
        {
            img: './images/banddiscover-3.png',
            key: '3',
            name: 'Resa Club',
        },
    ]

    return (
        <>
            {/* Topbar */}
            < MemberBar />
            <main>
                <div className="collect-content">
                    {/* Sidebar */}
                    < SideBar />
                    {/* Content */}
                    <div id="collect-event" className="collect-a">
                        <h2>收藏的活動</h2>
                        < div className="card-list" >
                            {likeList.map((searchcard, index) => (
                                <CardOne searchcard={searchcard} key={index} />
                            ))}
                        </div>
                    </div>
                    <div id="collect-band" className="collect-a">
                        <h2>收藏的樂團</h2>
                        < div className="card-list" >
                            {sampleBandCard.map((searchcard, index) => (
                                <CardCollectBand searchcard={searchcard} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </ >
    )
}

export default MemberPage