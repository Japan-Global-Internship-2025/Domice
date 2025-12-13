import './App.css'
import { BrowserView, MobileView } from 'react-device-detect'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Notice from './pages/Notice';
import MealInfo from './pages/Meal';
import Board from './pages/Board';
import Mypage from './pages/Mypage';
import Manage from './pages/Manage';
import NoticeDetail from './pages/NoticeDetail';
import BoardDetail from './pages/BoardDetail';
import BoardWrite from './pages/BoardWrite';
import QRScan from './pages/QRScan';
import { UserProvider } from './services/UserContext';

function App() {
  return (
    <>
      <BrowserView>
        <h1>PC에서는 제공되지 않습니다.</h1>
      </BrowserView>
      <MobileView>
        <UserProvider>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/notice/:id' element={<NoticeDetail />} />
            <Route path='/meal' element={<MealInfo />} />
            <Route path='/board' element={<Board />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/manage' element={<Manage />} />
            <Route path='/board/private/:id' element={<BoardDetail type={"private"} title={"1대1 문의"} />} />
            <Route path='/board/all/:id' element={<BoardDetail type={"all"} title={"전체 게시판"} />} />
            <Route path='/board/write' element={<BoardWrite title={"작성하기"} />} />
            <Route path='/qr/scan' element={<QRScan />} />
          </Routes>
        </UserProvider>
      </MobileView>
    </>
  )
}

export default App
