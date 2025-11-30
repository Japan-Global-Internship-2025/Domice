import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NoticeIcon from "../assets/icon/notice.svg?react";
import ArrowIcon from "../assets/icon/top_right_arrow.svg?react";
import UserIcon from "../assets/icon/user.svg?react";
import RightArrowIcon from "../assets/icon/right_outline_arrow.svg?react";
import todayMeal from '../services/meal'
import { useEffect, useState } from "react";

const Container = styled.div`
    overflow-y: auto; 
    padding: 0px 24px 60px 24px;
    background-color: #f9f9f9;
`

const TodayNoticeContainer = styled.div`
    margin-top: 20px;
    display: flex;
    padding: 12px 14px;
    gap: 14px;
    align-self: stretch;
    align-items: center;
    border-radius: 50px;
    background: #FFF;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
    justify-content: space-between;

    svg {
        width: 12px;
        height: 12px;
    }
`

const TodayNoticeBox = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    align-self: stretch;

    svg {
        width: 20px;
        height: 18.353px;
        
        path {
            fill: #48BFA2;
            fill-opacity: 1;
        }
    }
`;

const TodayNoticeText = styled.p`
    color: #B3B3B3;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
`;

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

const TodayTeacherContainer = styled.div`
    margin-top: 20px;
`;

const TodayTitle = styled.p`
    margin-left: 9px;
    color: #404040;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`;

const TodayTeacherBox = styled.div`
    margin-top: 12px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

const BoxTopLine = styled.div`
    display: flex;
    width: 100%;
    height: 13px;
    border-radius: 24px 24px 0 0;
    background: #48BFA2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
`;

const BoxContent = styled.div`
    display: flex;
    padding: 16px 14px 16px 16px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border: 0px solid #fff;
    border-radius: 0 0 14px 14px;
    background: #FFF;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
    svg {
        width: 32px;
        height: 32px;
        aspect-ratio: 1/1;

        path {
            fill: #404040;
            fill-opacity: 1;
        }
    }
`;

const TeacherIconBox = styled.div`
    width: 32px;
    height: 32px;
    padding: 5.33px;
    svg {
        width: 21.333px;
        height: 21.333px;
        aspect-ratio: 1/1;

        path {
            fill: #404040;
            fill-opacity: 1;
        }
    }
`;

const TeacherInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    flex: 1 0 0;
`;

const TeacherName = styled.p`
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
`;

const TeacherPhone = styled.p`
    align-self: stretch;
    color: rgba(64, 64, 64, 0.64);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`;

const TodayMealsContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 24px;
    width: 100%;
`;

const MealsTitle = styled.div`
    display: flex;
    justify-content: space-between;
`

const ToMealsDatail = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`;

const GoDatailText = styled.span`
    color: rgba(64, 64, 64, 0.64);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
`;

const GoDatailIcon = styled.div``;

const MealsInfo = styled.div`
    margin-top: 20px;
    display: flex;
    min-height: 180px;
    padding: 15px 5px;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    border-radius: 24px;
    background: #48BFA2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
`;

const MealsContent = styled.div`
    display: flex;
`;

const MealBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

const MealTitle = styled.div`
    align-self: stretch;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`;

const MealInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MealInfoBox = styled.div`
    display: flex;
    justify-content: center; 
`;

const MealSpan = styled.span`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: 22px;
`

export default function HomeMain() {
    const navigate = useNavigate();
    const now = new Date();
    const now_month = now.getMonth() + 1;
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const now_day = now.getDay();
    const mondayBasedDay = (now_day === 0) ? 6 : now_day - 1;
    const weekDates = getWeekDates();
    const teacher_name = "김사감";
    const teacher_phone = "010-1234-5678";
    const meal_title = ['아침', '점심', '저녁'];
    const [mealInfo, setMealInfo] = useState([["로딩중..."], ["로딩중..."], ["로딩중..."]]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await todayMeal();
                const data = response.mealServiceDietInfo[1].row;
                const meals = [];
                data.forEach(row => {
                    const temp = [];
                    const info = row.DDISH_NM.split("<br/>");
                    info.forEach(item => {
                        const menu = item.split(" ")[0];
                        temp.push(menu);
                    });
                    meals.push(temp);
                });
                setMealInfo(meals);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [])
    console.log(mealInfo);

    return (
        <Container>
            <TodayNoticeContainer>
                <TodayNoticeBox>
                    <NoticeIcon />
                    <TodayNoticeText>
                        오늘의 공지가 없습니다.
                    </TodayNoticeText>
                </TodayNoticeBox>
                <ArrowIcon />
            </TodayNoticeContainer>
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
                            {weekDates.map((item, idx) => {
                                return (
                                    <DateText key={idx} $isActive={idx <= mondayBasedDay} $isNow={idx == mondayBasedDay}>{item}</DateText>
                                );
                            })}
                        </DateValue>
                    </DateBox>
                </CalendarDate>
            </TodayCalendarContainer>
            <TodayTeacherContainer>
                <TodayTitle>
                    오늘의 선생님
                </TodayTitle>
                <TodayTeacherBox>
                    <BoxTopLine />
                    <BoxContent>
                        <TeacherIconBox>
                            <UserIcon />
                        </TeacherIconBox>
                        <TeacherInfo>
                            <TeacherName>
                                {teacher_name} 선생님
                            </TeacherName>
                            <TeacherPhone>
                                {teacher_phone}
                            </TeacherPhone>
                        </TeacherInfo>
                    </BoxContent>
                </TodayTeacherBox>
            </TodayTeacherContainer>
            <TodayMealsContainer>
                <MealsTitle>
                    <TodayTitle>오늘의 급식</TodayTitle>
                    <ToMealsDatail onClick={() => { navigate("/meal") }}>
                        <GoDatailText>
                            자세히보기
                        </GoDatailText>
                        <GoDatailIcon>
                            <RightArrowIcon />
                        </GoDatailIcon>
                    </ToMealsDatail>
                </MealsTitle>
                <MealsInfo>
                    <MealsContent>
                        {meal_title.map((item, idx) => {
                            const meals = mealInfo[idx];
                            return (
                                <MealBox key={idx}>
                                    <MealTitle>{item}</MealTitle>
                                    <MealInfoBox>
                                        <MealInfo>
                                            {meals && Array.isArray(meals) && meals.map((item, mealIdx) => (
                                                <MealSpan key={mealIdx}>
                                                    {item}
                                                </MealSpan>
                                            ))}
                                        </MealInfo>
                                    </MealInfoBox>
                                </MealBox>
                            )
                        })}

                    </MealsContent>
                </MealsInfo>
            </TodayMealsContainer>
        </Container>
    )
}

function getWeekDates() {
    const today = new Date();
    let currentDay = today.getDay();
    let diff = (currentDay === 0) ? 6 : currentDay - 1;
    const monday = new Date(today);
    monday.setDate(today.getDate() - diff);
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        weekDates.push(date.getDate());
    }
    return weekDates;
}