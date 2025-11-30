import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";

const Container = styled.div``;

export default function MealInfo() {
    return (
        <Container>
            <Header />
            급식정보
            <Navigation idx={2}/>
        </Container>
    )
}