import { useEffect } from "react"
import MemberBar from "../components/MemberBar";
import SideBar from "../components/SideBar";
import CardOne from "../components/CardOne";
import CardCollectBand from "../components/CardCollectBand";

function MemberPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const sampleCards = [
        {
            img: "./images/event/currentevent-json-7.jpg",
            key: 1,
            date: "2024/12/14 (六）20: 00",
            event: "【2024都市女聲】：洪佩瑜-台北場(加場)",
            location: "Legacy Taipei 音樂展演空間",
            nametag: [
                "洪佩瑜"
            ]
        },
        {
            img: "./images/event/currentevent-json-9.jpg",
            key: 2,
            date: "2024/12/26 (四）19: 30",
            event: "柯泯薰 misi Ke《好好的 BE GOOD》專輯發片專場",
            location: "Legacy Taipei 音樂展演空間",
            nametag: [
                "柯泯薰 misi Ke"
            ]
        },
    ];

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
                            {sampleCards.map((searchcard) => (
                                <CardOne searchcard={searchcard} />
                            ))}
                        </div>
                    </div>
                    <div id="collect-band" className="collect-a">
                        <h2>收藏的樂團</h2>
                        < div className="card-list" >
                            {sampleBandCard.map((searchcard) => (
                                <CardCollectBand searchcard={searchcard} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </ >
    )
}

export default MemberPage