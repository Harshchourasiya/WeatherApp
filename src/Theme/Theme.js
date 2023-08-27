import {createTheme} from "@mui/material/styles";

const theme = createTheme(
    {
        typography: {
            fontFamily: ['Merriweather', 'serif'].join(','),
            fontSize: 16,
            h6 : {
                fontWeight: 100,
                fontSize: 15
            }
        },
    }
)

export default theme;