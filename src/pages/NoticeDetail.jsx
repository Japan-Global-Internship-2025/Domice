import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataAndDayAndTime } from "../services/date_format"

const datas = [
    {
        id: 1,
        title: "화재 대피 훈련 안내",
        content: "오늘 7교시 이후 기숙사 화재 대피 훈련이 있습니다. 오늘 7교시 이후 기숙사 화재 대피 훈련이 있습니다. 오늘 7교시 이후 기숙사 화재 대피 훈련이 있습니다. 오늘 7교시 이후 기숙사 화재 대피 훈련이 있습니다. 오늘 7교시 이후 기숙사 화재 대피 훈련이 있습니다.",
        target: "1,2,3",
        author: "김OO",
        created_at: "2025-12-01T12:00:00Z",
    },
    {
        id: 2,
        title: "4층 세탁기 관련 주의사항",
        content: "(대충 세탁기 잘 사용하라는 내용)",
        target: "1,2",
        author: "김OO",
        created_at: "2025-11-30T12:00:00Z"
    }
]

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    height: 100%;
    overflow-y: auto;
    padding: 30px 24px 60px 24px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ContentBox = styled.div`
    flex-grow: 1;
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-radius: 24px;
    border: 1px solid #48BFA2;
    background: #FFF;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

const TitleText = styled.p`
    color: #404040;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
`;

const OtherTitleText = styled.p`
    color: rgba(64, 64, 64, 0.50);
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
`;

const Line = styled.div`
    margin: 10px 0px;
    width: 100%;
    height: 1px;
    background: rgba(64, 64, 64, 0.12);
`;

const Content = styled.p`
    color: rgba(64, 64, 64, 0.80);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`

const MoveBox = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const MoveBtn = styled.div`
    flex-grow: 1;
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #48BFA2;
    background: ${props => props.$background};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    color: ${props => props.$color};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
`

export default function NoticeDetail(props) {
    const [postData, setPostData] = useState(null);
    const [postId, setPostId] = useState(null);
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const segments = pathname.split('/');
    const id = segments[segments.length - 1];
    useEffect(() => {
        setPostId(Number(id));
        const data = fecthData(id);
        setPostData(data);
        if (Object.keys(data).length == 0 || postId < 0) {
            window.history.back();
            alert("마지막입니다.");
        }
    }, [navigate])

    return (
        <Container>
            <Header />
            <Main>
                {postData &&
                    <ContentBox>
                        <Title>
                            <TitleText>{postData.title}</TitleText>
                            <OtherTitleText>{postData.author} 선생님</OtherTitleText>
                            <OtherTitleText>{dataAndDayAndTime(new Date(postData.created_at))}</OtherTitleText>
                        </Title>
                        <Line></Line>
                        <Content>
                            {postData.content}
                        </Content>
                    </ContentBox>
                }
                <MoveBox>
                    <MoveBtn $background={"#fff"} $color={"#48BFA2"} onClick={() => navigate(`/notice/${postId - 1}`)}>
                        이전글
                    </MoveBtn>
                    <MoveBtn $background={"#48BFA2"} $color={"#fff"} onClick={() => navigate(`/notice/${postId + 1}`)}>
                        다음글
                    </MoveBtn>
                </MoveBox>
            </Main>
            <Navigation idx={1} />
        </Container>
    )
};

function fecthData(id) {
    const result = datas.find(item => item.id == id);
    return result || {};
}
