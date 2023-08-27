// api details
const API = process.env.REACT_APP_WEATHER_API_URL;
const QUERY_WITH_CITY_NAME = API;
const ICON_URL = "https://cdn.weatherbit.io/static/img/icons/";
const ICON_END_EX = ".png";

const getIconURL = (code)=> {
    return ICON_URL + code + ICON_END_EX;
}
export {
    QUERY_WITH_CITY_NAME,
    getIconURL
}