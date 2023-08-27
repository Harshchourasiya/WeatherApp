
import {QUERY_WITH_CITY_NAME} from '../Strings';


const getWeatherInfo = async(city, setData) => {
    fetch(QUERY_WITH_CITY_NAME+city, {
      method: 'GET',
    }).then((res)=> {
      if (res.status===200) {
        res.json().then((data)=> {
            const res = data.data[0];
            setData({
              cityName : res.city_name,
              timezone : res.timezone,
              windSpeed : res.wind_spd,
              temp : res.temp,
              humidity : res.rh,
              weatherDecs : res.weather.description,
              icon : res.weather.icon,
              isFound : true,
              isSame : (city.toLowerCase().trim()==res.city_name.toLowerCase())
            });

        }).catch((err) => console.log(err));
      }
    })
  }

export {
    getWeatherInfo
}