import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const API_KEY = "994662b6d2c7468f9a6170717261807";

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Ошибка при получении погоды:", error);
      alert("Не удалось найти город!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Прогноз погоды</h2>
      <div className="input-group mb-3" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Поиск
        </button>
      </div>

      {loading && <p>Загрузка...</p>}

      {weather && (
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{weather.location.name}</h5>
            <p className="card-text">Температура: {weather.current.temp_c}°C</p>
            <p className="card-text">Состояние: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;