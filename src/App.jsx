import './App.css'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserView>
        <h1>PC에서는 제공되지 않습니다.</h1>
      </BrowserView>
      <MobileView>
        <Routes>
        </Routes>
      </MobileView>
    </>
  )
}

export default App
