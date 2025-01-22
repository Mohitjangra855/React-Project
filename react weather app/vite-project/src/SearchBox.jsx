import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    let API_KEY = "99844122b0b3967388b4691586e74abf";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result)
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value)
    }
    let handleSubmit = async (evt) => {
        try {

            evt.preventDefault();
            console.log(city)
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='SearchBox'>
            <form action="#" onSubmit={handleSubmit}>
                <TextField id="city" size='small' label="City Name" variant="outlined" onChange={handleChange} value={city} required />
                <br />
                <br />
                <Button variant="outlined" type='submit' endIcon={< SearchIcon />}>
                    Search
                </Button>
            </form>
            {error && <p style={{ color: "red" }}>No such city find in our API,Find differnt city.</p>}
        </div>
    )
}