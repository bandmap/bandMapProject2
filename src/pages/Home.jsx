import { useEffect, useRef, useState } from "react"
import BandDiscover from "../components/BandDiscover"
import BandMap from "../components/BandMap"
import ChatBoard from "../components/ChatBoard"
import CubeSection from "../components/CubeSection"
import CurrentEvent from "../components/CurrentEvent"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import PersonalCalendar from "../components/PersonalCalendar"

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const sectionRefs = useRef([]); // 儲存所有元件的 ref
    const [isScrollEnabled, setIsScrollEnabled] = useState(true); // 控制是否允許滾動

    useEffect(() => {
        const handleScrollAll = () => {
            const currentScroll = window.scrollY;

            // 找到離當前滾動最近的 section 的 targetPosition
            const targetIndex = sectionRefs.current.findIndex((ref, index) => {
                const nextRef = sectionRefs.current[index + 1];
                const currentTop = ref.offsetTop;
                const nextTop = nextRef ? nextRef.offsetTop : Infinity; // 如果沒有下一個，設為無窮大
                return currentScroll >= currentTop && currentScroll < nextTop; // 當前滾動範圍
            });

            const targetPosition = sectionRefs.current[targetIndex]?.offsetTop;

            if (targetPosition !== undefined && currentScroll !== targetPosition) {
                window.scrollTo(0, targetPosition); // 對齊到目標位置
                setIsScrollEnabled(false); // 禁用滾動
                document.body.style.overflow = "hidden"; // 鎖住滾動

                setTimeout(() => {
                    setIsScrollEnabled(true); // 解鎖滾動
                }, 1000); // 停留時間（1秒）
            }
        };
        document.body.style.overflow = "auto"; 
        window.addEventListener("scroll", handleScrollAll);

        return () => {
            window.removeEventListener("scroll", handleScrollAll);
        };
    }, [isScrollEnabled]);

    // 將每個 section 的 ref 綁定到 sectionRefs.current 陣列
    const assignRef = (ref, index) => {
        sectionRefs.current[index] = ref;
    };


    return (
        <>
            <CubeSection />
            <NavBar />
            <BandMap />
            <BandDiscover />
            <CurrentEvent />
            <ChatBoard />
            <PersonalCalendar />
            <Footer />
        </>
    )
}

export default Home