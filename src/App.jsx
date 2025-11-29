import './App.css'
import { Intro } from './components/Intro'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"
import styled from 'styled-components';


const Container = styled.div`
`;

function App() {

  return (
    <Container>
      <BrowserView>
        <h1>PC에서는 제공되지 않습니다.</h1>
      </BrowserView>
      <MobileView>
        <Intro />
      </MobileView>
    </Container>
  )
}

export default App
