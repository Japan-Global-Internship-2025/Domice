import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardContentInfo from "../components/BoardContentInfo";
import BoardInNav from "../components/BoardInNav";

const Container = styled.div``;

const Main = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 32px 24px 60px 24px;
    background-color: #f9f9f9;
`;

const ContentBox = styled.div`
    border-radius: 14px;
    background: #FFF;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    padding: 20px 24px 14px 24px;
`;

const Title = styled.p`
    color: #404040;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 137.5% */
`;

const Content = styled.p`
    color: #696969;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
`

const data_all = [
    {
        id: 1,
        title: "기숙사 소음 관련 안내",
        author_name: "민재",
        content: "대충 내용. 샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라",
        user_id: "3c1b3b5b-xxxx-xxxx-xxxx",
        is_secret: false,
        created_at: "2025-01-03T11:20:00Z",
        updated_at: "2025-01-03T11:20:00Z"
    },
    {
        id: 2,
        title: "신채은바보",
        author_name: null,
        content: "대충 바보같다는 내용. 샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라",
        user_id: "3c1b3b5b-xxxx-xxxx-xxxx",
        is_secret: true,
        created_at: "2025-12-01T11:20:00Z",
        updated_at: "2025-12-01T11:20:00Z"
    }
];

const Info = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: end;
`;

const data_private = [
    {
        id: 1,
        title: "419호 조명 나갔어요",
        author_name: "민재",
        content: "조명이 나갔다 켜졌다 해요 빨리 고쳐주세요....",
        user_id: "3c1b3b5b-xxxx-xxxx-xxxx",
        reply: false,
        created_at: "2025-01-03T11:20:00Z",
        updated_at: "2025-01-03T11:20:00Z"
    },
    {
        id: 2,
        title: "윗 방이 너무 시끄러워요",
        author_name: null,
        content: "윗 방이 자꾸 쿵쿵 거려요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        user_id: "3c1b3b5b-xxxx-xxxx-xxxx",
        reply: true,
        created_at: "2025-12-01T11:20:00Z",
        updated_at: "2025-12-01T11:20:00Z"
    }
];

export default function BoardDetail(props) {
    const type = props.type;
    const [postData, setPostData] = useState(null);
    const [postId, setPostId] = useState(null);
    const [info2, SetInfo2] = useState(null);
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const segments = pathname.split('/');
    const id = segments[segments.length - 1];
    useEffect(() => {
        setPostId(Number(id));
        const data = fecthData(id, type);
        console.log(data)
        if (type == "private") {
            SetInfo2(data.reply ? "답변 완료" : "답변 미완료");
        }
        else {
            SetInfo2(data.is_secret ? '익명' : data.author_name);
        }
        setPostData(data);
    }, [navigate])

    return (
        <Container>
            <Header />
            <BoardInNav type={type}/>
            <Main>
                {postData && <ContentBox>
                    <Title>
                        {postData.title}
                    </Title>
                    <Content>
                        {postData.content}
                    </Content>
                    <Info>
                        <BoardContentInfo info1={postData.created_at} info2={info2} />
                    </Info>
                </ContentBox>}
            </Main>
            <Navigation idx={3} />
        </Container>
    )
};

function fecthData(id, type) {
    const datas = type == 'all' ? data_all : data_private;
    const result = datas.find(item => item.id == id);
    return result || {};
}
