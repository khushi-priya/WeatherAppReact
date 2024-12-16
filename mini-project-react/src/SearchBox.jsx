import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c6134e8404e57bd0406236b4108dc904";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message || "City not found");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false); // Reset error state on success
            setCity(""); // Clear the input field
        } catch (err) {
            console.error(err.message);
            setError(true); // Set error state on failure
        }
    };

    return (
        <div className="SearchBox">
            <h2 style={{color:"blue"}}>Search for Weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    value={city}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" >
                    Search
                </Button>
                {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
            </form>
        </div>
    );
}

