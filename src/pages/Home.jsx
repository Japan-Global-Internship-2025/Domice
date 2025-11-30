import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";
import { useState } from "react";
import HomeMain from "../components/HomeMain";
import HomeOut from "../components/HomeOut";

const Container = styled.div`
`;

const HomeNav = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: #48BFA2;
`;

const HomeNavBtn = styled.div`
    padding: 16px 16px;
    width: 50%;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    color: #FFF;
    opacity: ${props => props.$isActive ? 1 : 0.64};
    position: relative;
`;

const SelectMenu = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 144px;
    height: 3px;
    border-radius: 9px;
    background: #008263;
    transition: color 0.2s ease-in-out;
`;

const HomeNavList = [
    { value: '홈', idx: 0 },
    { value: '외출관리', idx: 1 }
]

export default function Home() {
    const [homeMenu, setHomeMenu] = useState(0);


    return (
        <Container>
            <Header />
            <HomeNav>
                {HomeNavList.map((item, idx) => {
                    return (
                        <HomeNavBtn onClick={() => { setHomeMenu(item.idx) }} $isActive={homeMenu == item.idx} key={idx}>
                            {item.value}
                            {homeMenu == item.idx && <SelectMenu/>}
                        </HomeNavBtn>
                    );
                })}
            </HomeNav>
            {homeMenu==0? <HomeMain/>: <HomeOut/>}
            <Navigation idx={0} />
        </Container>

    );
}