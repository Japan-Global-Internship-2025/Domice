import styled from 'styled-components';

const Container = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(72, 191, 162, 0.13) 74.58%, rgba(72, 191, 162, 0.24) 99%);
    height: 100dvh;
`;

const Logo = styled.img`
    display: block;
    margin: 0 auto;
    padding-top: 270px;
    width: 158.929px;
    height: 47.151px;
`;

const StartBtn = styled.button`
    display: flex;
    margin: 200px auto 0 auto;
    width: 305px;
    height: 54px;
    padding: 0 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: none;
    border-radius: 14px;
    background: #48BFA2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
`;

const StartText = styled.span`
    color: #FFF;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`;

const GoogleLogo = styled.img`
    width: 22px;
    height: 22px;
    aspect-ratio: 1/1;
`;

export function Intro() {
    return (
        <Container>
            <Logo src="/images/logo_green.png" alt="Logo" />
            <StartBtn onClick={() => {alert('로그인 연결')}}>
                <GoogleLogo src="/images/google.png" alt="Google Logo" />
                <StartText>Google로 시작하기</StartText>
            </StartBtn>
        </Container>
    );
}