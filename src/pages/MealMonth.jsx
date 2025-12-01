import styled from "styled-components";
import MidBoxTitle from "../components/MidBoxTitle";

const Container = styled.div`
`;

export default function MealMonth() {
    return (
        <Container>
            <MidBoxTitle text={"이번달 급식표"} />
        </Container>
    )
};