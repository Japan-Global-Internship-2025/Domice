import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";
import ArrowIcon from "../assets/icon/right_outline_arrow.svg?react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Main = styled.div`
    padding: 32px 24px 60px 24px;
    display: flex;
    flex-direction: column; 
`;

const UserInfoContainer = styled.div`
    display: flex;
    padding: 0 14px;
    align-items: center;
    align-self: stretch;
    border-radius: 14px;
    background: #FFF;
`;

const UserProfile = styled.div`
    padding: 22px 0px;
    margin-right: 14px;
    width: 64px;
    height: 64px;
`;

const UserProfileImg = styled.img`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    border-radius: 100px;
`;

const UserInfoBox = styled.div`
    
`;

const UserInfo = styled.div`
    display: flex;
    gap: 8px;
`;

const UserName = styled.p`
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
`;

const UserRoom = styled.p`
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
`;

const UserSchool = styled.p`
    color: rgba(64, 64, 64, 0.64);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
`;

const UserScoreBox = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const PlusMinusScore = styled.div`
    width: 100%;
    display: flex;
    gap: 6px;
`;

const ScoreInnerBox = styled.div`
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 24px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 14px;
    border: 1px solid #48BFA2;
    background: ${props => props.$background};
`;

const InnerBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.$justify};
    
`;

const ScoreBoxText = styled.p`
    color: ${props => props.$color};
    font-family: Pretendard;
    font-size: ${props => props.$size}px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 122.222% */
`;

const TotalScoreBox = styled.div`
    display: flex;
    padding: 18px 16px;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 14px;
    background: #FFF;
`;

const TotalScoreText = styled.div`
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
`

const TotalScoreDatailBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const GoDatailText = styled.p`
    color: rgba(64, 64, 64, 0.64);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
`;

const GoDetailIcon = styled.div`
    display: flex;
    align-items: center;
    width: 12px; 
    height: 12px;
    svg {
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        ${props => props.$rotate && 'transform: rotate(90deg)'};
        &:focus {
            outline: none;
        }
    }
`;

const LogoutBtn = styled.div`
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 14px;
    background: #FFF;
`

const LogoutBtnText = styled.p`
    display: flex;
    align-items: center;
    color: #FF2929;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
`;

export default function Mypage() {
    const navigator = useNavigate();
    const [data, setData] = useState(null)
    const [scoreDetail, setScoreDetail] = useState(false);
    const SERVER_URL = import.meta.env.VITE_SERVER_URL
    useEffect(() => {
        async function fecthData() {
            const response = await fetch(`${SERVER_URL}/api/profile`, {
                method: 'GET',
                credentials: 'include'
            })
            const temp = await response.json()
            console.log(temp);
            setData(temp.data);
        }
        fecthData();
    }, []);

    const logoutHandler = () => {
        async function logout() {
            const response = await fetch(`${SERVER_URL}/api/auth/logout`, {
                method: 'GET',
                credentials: 'include'
            })
            const temp = await response.json()
            if (response.ok) {
                navigator('/')
            }
            console.log(temp);
            setData(temp.data);
        }
        logout();
    }


    return (
        <Container>
            <Header />
            {data && <Main>
                <UserInfoContainer>
                    <UserProfile>
                        <UserProfileImg src={data.profile_img} />
                    </UserProfile>
                    <UserInfoBox>
                        <UserInfo>
                            <UserName>{data.name}</UserName>
                            <UserRoom>{data.room}호</UserRoom>
                        </UserInfo>
                        <UserInfo>
                            <UserSchool>미림마이스터고등학교 {data.stu_num[0]}학년 {data.stu_num[1]}반</UserSchool>
                        </UserInfo>
                    </UserInfoBox>
                </UserInfoContainer>
                <UserScoreBox>
                    <PlusMinusScore>
                        <ScoreInnerBox $background="#48BFA2">
                            <InnerBox $justify="start">
                                <ScoreBoxText $color="#fff" $size="18">상점</ScoreBoxText>
                            </InnerBox>
                            <InnerBox $justify="end">
                                <ScoreBoxText $color="#fff" $size="24">{data.plus_score}점</ScoreBoxText>
                            </InnerBox>
                        </ScoreInnerBox>
                        <ScoreInnerBox $background="#fff">
                            <InnerBox $justify="start">
                                <ScoreBoxText $color="#48BFA2" $size="18">벌점</ScoreBoxText>
                            </InnerBox>
                            <InnerBox $justify="end">
                                <ScoreBoxText $color="#48BFA2" $size="24">{data.minus_score}점</ScoreBoxText>
                            </InnerBox>
                        </ScoreInnerBox>
                    </PlusMinusScore>
                    <TotalScoreBox onClick={() => { setScoreDetail(!scoreDetail) }}>
                        <TotalScoreText>
                            총 상점 {data.plus_score - data.minus_score}점
                        </TotalScoreText>
                        <TotalScoreDatailBtn>
                            <GoDatailText>{scoreDetail ? '상벌점 내역 숨기기' : '상벌점 내역 보기'}</GoDatailText>
                            <GoDetailIcon $rotate={scoreDetail}>
                                <ArrowIcon />
                            </GoDetailIcon>
                        </TotalScoreDatailBtn>
                    </TotalScoreBox>
                </UserScoreBox>
                <LogoutBtn onClick={logoutHandler}>
                    <LogoutBtnText>로그아웃</LogoutBtnText>
                </LogoutBtn>
            </Main>}
            <Navigation idx={4} />
        </Container>
    )
}