import './App.css'
import { BrowserView, MobileView } from 'react-device-detect'
import { Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserView>
        <h1>PC에서는 제공되지 않습니다.</h1>
      </BrowserView>
      <MobileView>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </MobileView>
    </>
  )
}

export default App
