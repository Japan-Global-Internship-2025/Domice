async function getMealInfo(date) {
    const API_KEY = "90de860d4ab54f7eb75640bf431149a4";
    const URL = "https://open.neis.go.kr/hub/mealServiceDietInfo";
    const ATPT_OFCDC_SC_CODE = "B10";   //서울 특별시 교육청
    const SD_SCHUL_CODE = "7011569";
    const TYPE = "json";
    const dateData = date;
    const api_url = `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${SD_SCHUL_CODE}&KEY=${API_KEY}&MLSV_YMD=${dateData}&Type=${TYPE}`;
    console.log(dateData);
    const response = await fetch(api_url, {
        method: 'GET'
    })
    const data = await response.json();
    console.log(data);
    return data;
}

export function getMeal(input=new Date()) {
    const now = new Date(input);
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    return getMealInfo(`${year}${month >= 10 ? month : '0' + month}${date >= 10 ? date : '0' + date}`);
}