import { Typography, TextField, Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
const Search = ({ searchTheWeatherOnClick }) => {
    const [search, setSearch] = useState("");
    const onSearchValueChange = (text) => {
        setSearch(text.target.value);
    }
    const onClick = () => {
        searchTheWeatherOnClick(search);
        setSearch("");
    }
    return (

        <Stack spacing={3} m={3} >
            <Typography variant="h1" component="h2" align='center'>
                Weather App
            </Typography>

            <TextField id="outlined-search" label="Enter City" type="search" onChange={onSearchValueChange} value={search} />
            <Button variant="contained" endIcon={<SearchIcon />} onClick={onClick}>
                Search
            </Button>

        </Stack>
    )
}

export default Search;