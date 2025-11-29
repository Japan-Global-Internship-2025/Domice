import './App.css'
import { Intro } from './pages/Intro'
import { Login } from './pages/Login';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const Container = styled.div`
`;

function App() {

  return (
    <Container>
      <BrowserView>
        <h1>PC에서는 제공되지 않습니다.</h1>
      </BrowserView>
      <MobileView>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MobileView>
    </Container>
  )
}

export default App
