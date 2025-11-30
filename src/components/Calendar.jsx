import styled from "styled-components";

const TodayCalendarContainer = styled.div`
    width: 100%;
`;

const CalendarMonth = styled.div`
    margin-top: 16px;
    margin-left: 10px;
    display: flex;
    width: 48px;
    height: 20px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 24px 24px 0 0;
    background: #48BFA2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
`

const CalendarDate = styled.div`
    display: flex;
    width: 100%;
    padding: 12px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 14px;
    background: #FFF;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
`;

const DateBox = styled.div`
    display: flex;
    height: 55px;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

const DateTitle = styled.div`
    display: flex;
    width: 303px;
    justify-content: space-between;
    align-items: center;
`;

const DayText = styled.p`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    opacity: ${props => props.$isActive ? 1 : 0.36};
`;

const DateValue = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

const DateText = styled.p`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    color: ${props => props.$isActive ? props.$isNow ? "#fff" : "rgba(72, 191, 162, 1)" : "rgba(64, 64, 64, 0.32)"};
    text-align: center;
    font-family: "Lexend Deca", Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    background: ${props => props.$isNow ? "#48BFA2" : "#fff"};
    border-radius: 8px;
`;

export default function Calendar(props) {
    const now = new Date();
    const now_month = now.getMonth() + 1;
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const now_day = now.getDay();
    const mondayBasedDay = (now_day === 0) ? 6 : now_day - 1;
    const dates = props.dates;

    return (
        <TodayCalendarContainer>
            <CalendarMonth>
                {now_month}월
            </CalendarMonth>
            <CalendarDate>
                <DateBox>
                    <DateTitle>
                        {days.map((item, idx) => {
                            return (
                                <DayText key={idx} $isActive={idx <= mondayBasedDay}>{item}</DayText>
                            );
                        })}
                    </DateTitle>
                    <DateValue>
                        {dates.map((item, idx) => {
                            return (
                                <DateText key={idx} $isActive={idx <= mondayBasedDay} $isNow={idx == mondayBasedDay}>{item}</DateText>
                            );
                        })}
                    </DateValue>
                </DateBox>
            </CalendarDate>
        </TodayCalendarContainer>
    );
}

