export function dateAndDay(date) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const str_date = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    const day_date = "(" + String(days[date.getDay()]) + ")";
    return str_date + " " + day_date
}

export function isLastNDays(n, date) {
    const threeDaysInMs = n * 24 * 60 * 60 * 1000; // 3일
    const threeDaysAgo = new Date(Date.now() - threeDaysInMs);
    return date.getTime() >= threeDaysAgo.getTime();
}

export function dataAndDayAndTime(date) {
    const str_date = dateAndDay(date);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${str_date} ${hours}:${minutes}`;
}