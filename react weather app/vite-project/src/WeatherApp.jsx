import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 37.6,
        humidity: 10,
        temp: 40.62,
        tempMax: 41.05,
        tempMin: 40.62,
        weather: "sunny"
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h3>Search For The Weather</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}