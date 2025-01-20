import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function CubeSection() {

    // 動畫箭頭svg變數
    let arrowSvgRed = <svg className='ani-arrow arrow1' viewBox="0 0 119 179" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.5625 40.0899L0 0.0898544L118.645 0.0898438L78.0829 40.0898L118.645 40.0898L78.0829 80.0898H118.645L78.0829 120.09H118.645L59.3227 178.59L0 120.09H40.5626L0 80.0899H40.5625L0 40.0899L40.5625 40.0899Z" />
    </svg>

    let arrowSvgBeige = <svg className='ani-arrow' viewBox="0 0 119 179" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M40.5625 40.0899L0 0.0898544L118.645 0.0898438L78.0829 40.0898L118.645 40.0898L78.0829 80.0898H118.645L78.0829 120.09H118.645L59.3227 178.59L0 120.09H40.5626L0 80.0899H40.5625L0 40.0899L40.5625 40.0899Z" />
    </svg>

    // 爆炸svg變數
    let bongSvg = <svg className='ani-bong' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.5195 237.70326"><path className="cls-1" d="M241.45443,118.85163c-19.76609,0-65.3478,14.5774-54.59787,17.46084-10.74993-2.88344,21.44551,32.52664,38.56377,42.41427-17.11826-9.88763-63.88709-20.10108-56.01981-12.23369-7.86728-7.86739,2.34567,38.9015,12.23309,56.01988-9.88742-17.11838-45.29686-49.31432-42.41349-38.56436-2.88337-10.75-17.46037,34.83165-17.46037,54.59775,0-19.7661-14.57739-65.34781-17.46083-54.59788,2.88344-10.74993-32.52665,21.44551-42.41428,38.56377,9.88763-17.11826,20.10108-63.88709,12.23369-56.01981,7.86739-7.86728-38.9015,2.34567-56.01988,12.23309,17.11838-9.88742,49.31432-45.29686,38.56437-42.41349,10.74995-2.88337-34.83166-17.46037-54.59775-17.46037,19.76609,0,65.3478-14.57739,54.59787-17.46083,10.74993,2.88344-21.44551-32.52665-38.56377-42.41428C35.21743,68.86415,81.98626,79.0776,74.119,71.21021c7.86728,7.86739-2.34566-38.9015-12.23309-56.01988,9.88743,17.11838,45.29686,49.31432,42.41349,38.56437C107.18275,64.50465,121.75975,18.923,121.75975-.843c0,19.76609,14.5774,65.3478,17.46084,54.59787-2.88344,10.74993,32.52664-21.44551,42.41427-38.56377-9.88763,17.11826-20.10108,63.88709-12.23369,56.01981-7.86739,7.86728,38.9015-2.34566,56.01988-12.23309-17.11838,9.88743-49.31432,45.29686-38.56436,42.41349C176.10673,104.27463,221.68834,118.85163,241.45443,118.85163Z" /></svg>

    // 音符svg變數
    let noteSvg = <svg className='ani-note' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.15066 105.22057"><polygon points="38.959 6.232 31.503 68.183 9.626 63.744 5.468 98.291 44.276 98.282 52.674 28.511 99.053 28.511 94.278 68.183 72.401 63.744 68.243 98.291 107.051 98.282 118.129 6.241 38.959 6.232" /></svg>

    // 音符odd-svg變數
    let noteSvgOdd = <svg className='ani-note odd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.15066 105.22057"><polygon points="38.959 6.232 31.503 68.183 9.626 63.744 5.468 98.291 44.276 98.282 52.674 28.511 99.053 28.511 94.278 68.183 72.401 63.744 68.243 98.291 107.051 98.282 118.129 6.241 38.959 6.232" /></svg>

    // 笑臉svg變數
    let smileFaceSvg = <svg className='smile-face' width="143" height="77" viewBox="0 0 143 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38.3335" cy="38.0898" r="38" fill="#FFF8E4" />
        <circle cx="16.3335" cy="31.0898" r="5" fill="#FF4438" />
        <circle cx="46.3335" cy="31.0898" r="5" fill="#FF4438" />
        <path d="M54.3335 41.0898C54.3335 43.9789 53.7645 46.8397 52.6588 49.5089C51.5532 52.178 49.9327 54.6033 47.8898 56.6462C45.847 58.6891 43.4217 60.3096 40.7525 61.4152C38.0834 62.5208 35.2226 63.0898 32.3335 63.0898C29.4444 63.0898 26.5836 62.5208 23.9145 61.4152C21.2453 60.3096 18.82 58.6891 16.7771 56.6462C14.7343 54.6033 13.1137 52.178 12.0081 49.5089C10.9025 46.8397 10.3335 43.9789 10.3335 41.0898L32.3335 41.0898H54.3335Z" fill="#FF4438" />
        <circle cx="104.333" cy="38.0898" r="38" fill="#FFAF00" />
        <circle cx="82.3335" cy="31.0898" r="5" fill="#FFF8E4" />
        <circle cx="112.333" cy="31.0898" r="5" fill="#FFF8E4" />
        <path d="M120.333 41.0898C120.333 43.9789 119.764 46.8397 118.659 49.5089C117.553 52.178 115.933 54.6033 113.89 56.6462C111.847 58.6891 109.422 60.3096 106.753 61.4152C104.083 62.5208 101.223 63.0898 98.3335 63.0898C95.4444 63.0898 92.5836 62.5208 89.9145 61.4152C87.2453 60.3096 84.82 58.6891 82.7771 56.6462C80.7343 54.6033 79.1137 52.178 78.0081 49.5089C76.9025 46.8397 76.3335 43.9789 76.3335 41.0898L98.3335 41.0898H120.333Z" fill="#FFF8E4" />
    </svg>

    // 耳朵svg變數
    let earSvg = <svg className='ear' width="193" height="306" viewBox="0 0 193 306" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.708 49.353L115.75 0L192.827 73.823L169.082 173.05L137.626 217.909L138.023 272.542L95.468 305.576L56.405 304.222L0 250.88L29.708 49.353Z" fill="#FFF8E4" />
        <path d="M117.324 70.2617L81.6308 74.6517L58.3138 118.472L57.5088 187.568L86.7518 204.071L112.524 192.005L123.472 156.541L117.099 130.774L95.3398 115.168L71.9558 118.142L90.0108 82.5297L114.833 80.6717L117.324 70.2617Z" fill="#FF4438" />
    </svg>

    // 眼睛svg變數
    let eyesSvg = <svg className='eyes' width="404" height="168" viewBox="0 0 404 168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M141.785 67.6318H50.0249C22.3969 67.6318 0 90.0287 0 117.657V117.657C0 145.285 22.3969 167.682 50.0249 167.682H141.785C169.413 167.682 191.81 145.285 191.81 117.657V117.657C191.81 90.0287 169.413 67.6318 141.785 67.6318Z" fill="#FFF8E4" />
        <path d="M50 149C69.8822 149 86 132.882 86 113C86 93.1177 69.8822 77 50 77C30.1177 77 14 93.1177 14 113C14 132.882 30.1177 149 50 149Z" fill="#0099FF" />
        <path d="M353.801 67.6318H262.04C234.413 67.6318 212.016 90.0287 212.016 117.657V117.657C212.016 145.285 234.413 167.682 262.04 167.682H353.801C381.429 167.682 403.825 145.285 403.825 117.657V117.657C403.825 90.0287 381.429 67.6318 353.801 67.6318Z" fill="#FFF8E4" />
        <path d="M262 149C281.882 149 298 132.882 298 113C298 93.1177 281.882 77 262 77C242.118 77 226 93.1177 226 113C226 132.882 242.118 149 262 149Z" fill="#0099FF" />
        <path d="M40.3857 36.6395C47.0801 27.1702 55.9488 19.4455 66.2471 14.114C76.5455 8.78255 87.9728 5.99998 99.5694 6C111.166 6.00002 122.593 8.78263 132.892 14.1142C143.19 19.4457 152.059 27.1704 158.753 36.6397" stroke="#FFF8E4" strokeWidth="11" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M245.072 36.6395C251.767 27.1702 260.635 19.4455 270.934 14.114C281.232 8.78255 292.659 5.99998 304.256 6C315.852 6.00002 327.28 8.78263 337.578 14.1142C347.876 19.4457 356.745 27.1704 363.439 36.6397" stroke="#FFF8E4" strokeWidth="11" strokeMiterlimit="10" strokeLinecap="round" />
    </svg>


    // 滑鼠hover大標換字
    useEffect(() => {
        const changeBandTitle = document.getElementById('changeBandTitle');
        changeBandTitle.addEventListener('mouseover', () => {
            change1.textContent = '本月樂團推薦';
        })
        changeBandTitle.addEventListener('mouseout', () => {
            change1.textContent = 'BAND利商店';
        })
        const changeBoardTitle = document.getElementById('changeBoardTitle');
        changeBoardTitle.addEventListener('mouseover', () => {
            change2.textContent = '個人行事曆';
        })
        changeBoardTitle.addEventListener('mouseout', () => {
            change2.textContent = '隨BAND排';
        })

    }, [])

    return (
        <>
            <div id='media-Lg'>
                <div className="newsTicker">
                    <div className='bandmap-wrapper'>
                        <span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span>
                    </div>
                    <div className='bandmap-wrapper'>
                        <span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span><span>BANDMAP</span>
                    </div>
                </div>
                <div id="cubes">
                    <div className="cube-left">
                        <Link to='/search' className='row-left-up'>
                            <figure className="cube1 cube-btn">
                                <img className='texture' src="./images/texture.png" alt="背景材質" />
                                <img className='logo' src="./images/logo.svg" alt="隨Band地圖logo" />
                            </figure>
                            <figure className="cube2 cube-btn">
                                <img className='texture' src="./images/texture.png" alt="背景材質" />
                                <img src="./images/logo.svg" alt="隨Band地圖logo" /></figure>
                        </Link>

                        <div className='row-left-down'>
                            <figure className='cube3'>
                                <div className="arrow-roll">
                                    {arrowSvgRed}{arrowSvgBeige}{arrowSvgRed}{arrowSvgBeige}
                                </div>
                                <div className="arrow-roll">
                                    {arrowSvgRed}{arrowSvgBeige}{arrowSvgRed}{arrowSvgBeige}
                                </div>
                            </figure>
                            <div className="row-right">
                                <div className='row-1'>
                                    <figure className="cube4">
                                        <div className="note-roll">
                                            {noteSvg}{noteSvg}{noteSvg}{noteSvg}
                                        </div>
                                        <div className="note-roll">
                                            {noteSvg}{noteSvg}{noteSvg}{noteSvg}
                                        </div>

                                    </figure>
                                    <Link to='/band' id='changeBandTitle'
                                        className="cube5 cube-btn">
                                        <img className='texture' src="./images/texture.png" alt="背景材質" />
                                        <p id='change1' className='band-introducement btn-ani' href="">BAND利商店</p>
                                        <figure>
                                            <svg className='arrow' height="57" viewBox="0 0 556 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 28.1738H554.985" strokeWidth="10" strokeMiterlimit="10" />
                                                <path d="M506.397 1.08984C506.397 1.08984 508.321 13.2502 524.18 20.8808C533.795 25.5236 544.308 28.0108 554.985 28.1685" strokeWidth="10" strokeMiterlimit="10" />
                                                <path d="M506.397 55.2574C506.397 55.2574 508.321 43.097 524.18 35.4664C533.795 30.8236 544.308 28.3364 554.985 28.1787" strokeWidth="10" strokeMiterlimit="10" />
                                            </svg>
                                        </figure>
                                    </Link>

                                </div>
                                <div className="row-2">
                                    <div className="row-right-left">
                                        <div className='row-right-left-up'>
                                            <figure className="cube6"><img src="./images/line.svg" alt="" /></figure>

                                            <figure className="cube7">
                                                {/* 笑臉動畫 */}
                                                <div className="smile-face-roll">
                                                    {smileFaceSvg}{smileFaceSvg}{smileFaceSvg}{smileFaceSvg}{smileFaceSvg}{smileFaceSvg}
                                                </div>
                                                <div className="smile-face-roll">
                                                    {smileFaceSvg}{smileFaceSvg}{smileFaceSvg}{smileFaceSvg}{smileFaceSvg}{smileFaceSvg}
                                                </div>

                                            </figure>

                                            <figure className="cube8"></figure>
                                        </div>
                                        <Link to='/calendar' id='changeBoardTitle'
                                            className="cube9 cube-btn">
                                            <img className='texture' src="./images/texture.png" alt="背景材質" />
                                            <p id='change2' className='band-discussion' href="">隨BAND排</p>
                                            <figure>
                                                <svg className='arrow' height="57" viewBox="0 0 556 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 28.1738H554.985" strokeWidth="10" strokeMiterlimit="10" />
                                                    <path d="M506.397 1.08984C506.397 1.08984 508.321 13.2502 524.18 20.8808C533.795 25.5236 544.308 28.0108 554.985 28.1685" strokeWidth="10" strokeMiterlimit="10" />
                                                    <path d="M506.397 55.2574C506.397 55.2574 508.321 43.097 524.18 35.4664C533.795 30.8236 544.308 28.3364 554.985 28.1787" strokeWidth="10" strokeMiterlimit="10" />
                                                </svg>
                                            </figure>
                                        </Link>
                                    </div>
                                    <figure className="cube10">
                                        {bongSvg}
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cube-right">
                        <div className="cube-right-up">
                            {/* 耳朵動畫 */}
                            <figure className="cube11">{earSvg}</figure>
                            {/* 四排音符來回動畫 */}
                            <figure className="cube12">
                                <div className="note-roll-cube12 odd-roll">
                                    {noteSvgOdd}{noteSvgOdd}{noteSvgOdd}{noteSvgOdd}
                                </div>
                                <div className="note-roll-cube12 even-roll">
                                    {noteSvg}{noteSvg}{noteSvg}{noteSvg}
                                </div>
                                <div className="note-roll-cube12 odd-roll">
                                    {noteSvgOdd}{noteSvgOdd}{noteSvgOdd}{noteSvgOdd}
                                </div>
                                <div className="note-roll-cube12 even-roll">
                                    {noteSvg}{noteSvg}{noteSvg}{noteSvg}
                                </div>
                            </figure>
                        </div>
                        {/* 眼睛動畫 */}
                        <figure className="cube13">
                            <img className='texture' src="./images/texture.png" alt="背景材質" />
                            {eyesSvg}
                        </figure>
                    </div>
                </div>
            </div>
            <div id="media-Sm">
                
            </div>
        </>
    )
}

export default CubeSection