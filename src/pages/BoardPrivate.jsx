import styled from "styled-components";
import BoardList from "../components/BoardList";

const Container = styled.div`
`;

const data = [
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
    ]

export default function BoardPrivate() {
    return (
        <Container>
            <BoardList data={data} type={"private"}/>
        </Container>
    )
};
