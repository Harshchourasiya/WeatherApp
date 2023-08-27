import { Card, CardMedia } from "@mui/material";

const WeatherIcon = ({ uri }) => {

    return (
            <CardMedia
                component="img"
                alt="weather Icon"
                height="40"
                image={uri}
                style={{width: '50px'}}
            />
    );
}

export default WeatherIcon;