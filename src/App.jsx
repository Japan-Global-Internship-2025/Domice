import './App.css'
import { BrowserView, MobileView } from 'react-device-detect'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <BrowserView>
        <h1>PC에서는 제공되지 않습니다.</h1>
      </BrowserView>
      <MobileView>
        {/* <Routes>
        </Routes> */}
        <Header/>
        <Navigation/>
      </MobileView>
    </>
  )
}

export default App
