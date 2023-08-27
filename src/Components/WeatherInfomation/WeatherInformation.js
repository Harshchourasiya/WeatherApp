import { Typography, Box,Stack} from "@mui/material";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import AirIcon from '@mui/icons-material/Air';
import FlareIcon from '@mui/icons-material/Flare';
import { getIconURL } from "../../helper/Strings";
const WeatherInfomation = ({ data }) => {

    const borderStyle = '1px solid black';

    return (
        <Box margin={1} padding={1}>
            <Stack
                direction="column"
                justifyContent="center"
                spacing={1}
                border={borderStyle}
                >

                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={1}>
                    <Typography variant="h1" align='left'>{data.temp}°</Typography>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={1}>
                        <Typography variant="h3" align='center'>{data.cityName}</Typography>
                        <Typography variant="h6" align='center'>{data.timezone}</Typography>
                    </Stack>
                </Stack>


                <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={1}
                    padding={1}
                    borderTop={borderStyle}>

                    <Stack direction={"row"} spacing={2} alignItems="center">
                        <WeatherIcon uri={getIconURL(data.icon)} />
                        <Typography variant="h5">
                            {data.weatherDecs}
                        </Typography>

                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems="center">
                        <AirIcon />
                        <Typography variant="h5">
                            {data.windSpeed}
                        </Typography>

                    </Stack>

                    <Stack direction={"row"} spacing={2} alignItems="center">

                        <FlareIcon />
                        <Typography variant="h5">
                            {data.humidity}
                        </Typography>

                    </Stack>

                </Stack>


            </Stack>

        </Box>
    );
}

export default WeatherInfomation;