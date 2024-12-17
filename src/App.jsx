import BandMapPage from "./pages/BandMapPage"
import { Route, Routes } from "react-router-dom"
import ChatBoardPage from "./pages/ChatBoardPage"
import MemberPage from "./pages/MemberPage"
import Home from "./pages/Home"
import BandDiscoverPage from "./pages/BandDiscoverPage"
import PersonalCalendarPage from "./pages/PersonalCalendarPage"
import CurrentEventPage from "./pages/CurrentEventPage"
import EventOne from "./pages/EventOne"
import BandIntroPage from "./pages/BandIntroPage"
import SignUpOne from "./pages/SignUpOne"
import SignUpTwo from "./pages/SignUpTwo"
import SignUpThree from "./pages/SignUpThree"
import SignUpFour from "./pages/SignUpFour"
import LogIn from "./pages/LogIn"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/search' element={<BandMapPage />}></Route>
      <Route path='/event' element={<CurrentEventPage />}></Route>
      <Route path='/band' element={<BandDiscoverPage />}></Route>
      <Route path='/band1' element={<BandIntroPage />}></Route>
      <Route path='/chatboard' element={<ChatBoardPage />}></Route>
      <Route path='/calendar' element={<PersonalCalendarPage />}></Route>
      <Route path='/member' element={<MemberPage />}></Route>
      <Route path='/event1' element={<EventOne />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/signup1' element={<SignUpOne />}></Route>
      <Route path='/signup2' element={<SignUpTwo />}></Route>
      <Route path='/signup3' element={<SignUpThree />}></Route>
      <Route path='/signup4' element={<SignUpFour />}></Route>
    </Routes>
  )
}

export default App
