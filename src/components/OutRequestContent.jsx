import styled from "styled-components";

const OutRequestContentBox = styled.div`
    display: flex;
    padding: 8px 14px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 14px;
    border: 0.8px solid rgba(64, 64, 64, 0.24);
`;

const OutRequestContentInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const OutRequestContentDate = styled.p`
    height: 17px;
    align-self: stretch;
    color: #818181;
    font-family: Pretendard;
    font-size: 10px;
    font-weight: 400;
    line-height: 22px;
`

const OutRequestContentReason = styled.p`
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`;

export default function OutRequestContent(props) {
    return (
        <OutRequestContentBox>
            <OutRequestContentInnerBox>
                <OutRequestContentDate>
                    {props.date} ({props.day})
                </OutRequestContentDate>
                <OutRequestContentReason>
                    {props.reason}
                </OutRequestContentReason>
            </OutRequestContentInnerBox>
        </OutRequestContentBox>
    )
}