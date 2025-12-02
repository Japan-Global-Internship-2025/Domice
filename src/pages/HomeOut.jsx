import styled from "styled-components";
import TodayNotice from "../components/TodayNotice";
import OutRequest from "../components/OutRequest";
import LeftBoxTitle from "../components/LeftBoxTitle";
import SelectRemain from "../components/SelectRemain";
import { useEffect, useState } from "react";

const Container = styled.div``;

const CheckInContainer = styled.div`
    margin-top: 32px;
`;

const CheckInBox = styled.div`
    margin-top: 18.5px;
`;

const NearyByDates = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
`;

const DateBox = styled.div`
    display: flex;
    flex: 1 1 0;
    padding: ${props => props.$today ? "9.5px 23px" : "10px 19px"};
    flex-direction: column;
    align-items: center;
    gap: ${props => props.$today ? "9.5" : "7"}px;
    flex-shrink: 0;
    border-radius: 14px;
    background: ${props => props.$today ? "#48BFA2" : "#FFF"};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
    transition: 0.5s ease-in-out;
`;

const MonthText = styled.p`
    color: ${props => props.$today ? "#FFF" : "#616161"};
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: ${props => props.$today ? "13" : "9.5"}px;
    font-weight: 500;
    line-height: normal;
`;

const DateText = styled.p`
    color: ${props => props.$today ? "#FFF" : "#616161"};
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "Lexend Deca";
    font-size: ${props => props.$today ? "22" : "16"}px;
    font-weight: 600;
    line-height: normal;
    text-align: center;
    min-width: ${props => props.$today && "26"}px;
`;

export default function HomeOut() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const dayOffsets = [-2, -1, 0, 1, 2];
    const [nearbyDate, setNearbyDate] = useState([]);

    useEffect(() => {
        const calculatedDates = dayOffsets.map(offset => {
            const tempDate = new Date(currentDate);
            tempDate.setDate(currentDate.getDate() + offset);
            return tempDate;
        });
        setNearbyDate(calculatedDates);
    }, [currentDate])
    // console.log(nearbyDate);

    function changeDate(offset) {
        const tempDate = new Date(currentDate);
        tempDate.setDate(currentDate.getDate() + offset);
        setCurrentDate(tempDate);
    }

    return (
        <Container>
            <TodayNotice />
            <CheckInContainer>
                <LeftBoxTitle text={"입실체크"}/>
                <CheckInBox>
                    <NearyByDates>
                        {nearbyDate.map((item, idx) => {
                            const today = item.getMonth() == currentDate.getMonth() && item.getDate() == currentDate.getDate();
                            return (
                                <DateBox key={idx} $today={today} onClick={() => { changeDate(dayOffsets[idx]) }}>
                                    <MonthText $today={today}>
                                        {item.getMonth() + 1}월
                                    </MonthText>
                                    <DateText $today={today}>
                                        {item.getDate()}
                                    </DateText>
                                </DateBox>
                            )
                        })}
                    </NearyByDates>
                </CheckInBox>
            </CheckInContainer>
            <OutRequest />
            <SelectRemain />
        </Container>
    )
}

