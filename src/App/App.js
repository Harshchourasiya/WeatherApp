
import Search from "../Components/Search/Search";
import Gradient from "../Components/GradientBackground/Gradient";
import DialogBox from "../Components/DialogBox/DialogBox";
import WeatherInfomation from "../Components/WeatherInfomation/WeatherInformation";
import { getWeatherInfo } from "../helper/API/WeatherInfo";
import { useState } from "react";
import { Stack, Typography} from "@mui/material";

const App = () => {

    const initData = {
        cityName: "",
        timezone: "",
        temp: "",
        weatherDecs: "",
        windSpeed: "",
        humidity: "",
        icon: "",
        isFound: false,
        isSame: true
    };

    const [data, setData] = useState(initData);

    const searchTheWeatherOnClick = (search) => {
        getWeatherInfo(search, setData);
    }

    const DidYouMean = () => {
        return (
            <Typography variant="subtitle" align="center">
                Did you mean <strong>{data.cityName} </strong>?
            </Typography>
        );
    }


    const DialogBoxComponent = () => {
        return (
            <Stack justifyContent={'center'}>
                <Search searchTheWeatherOnClick={searchTheWeatherOnClick} />
                {data.isSame ? null : <DidYouMean />}
                {data.isFound ? <WeatherInfomation data={data} /> : null}
            </Stack>
        );
    }

    return (
        <Gradient
            component={<DialogBox component={<DialogBoxComponent/>} />}>
        </Gradient>
    );
}

export default App;