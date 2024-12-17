import { useEffect } from "react"
import NavBar from "../components/NavBar"
import Test from "../components/Test"
import Calendar from "../components/Calendar";

function PersonalCalendarPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <>
            <NavBar />
            <main>
                <Calendar/>
            </main>
        </>
    )
}

export default PersonalCalendarPage