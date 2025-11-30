import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";

const Container = styled.div``;

export default function Mypage() {
    return (
        <Container>
            <Header />
            <Navigation idx={4}/>
        </Container>
    )
}