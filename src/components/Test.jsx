import { useEffect, useState } from "react";
import axios from "axios";

function Test(){

    const [eventInfo, setEventInfo] = useState([]);
    

    useEffect(() => {
        (async () => {
            const data = await axios.get('/json/eventInfo.json');
            console.log(data);
            
            const {dec} = data.data.eventdata.year2024;
            console.log(dec);
            // setEventInfo (card);     
        })()
    }, [])

    return(
        <>
        hi
        </>
    )
}

export default Test