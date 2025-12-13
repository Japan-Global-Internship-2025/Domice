import styled from "styled-components";
import Header from "../components/Header"
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Main = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 0px 24px 60px 24px;
    background-color: #f9f9f9;
`;

export default function Manage() {
    return (
        <Container>
            <Header />
            <Main>
                
            </Main>
            <Navigation idx={2} />
        </Container>
    )
};
