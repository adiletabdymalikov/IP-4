import { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import Sports from "./Sports";
import History from "./History";
import Future from "./Future";
import Timezone from "./Timezone";
const Home = () => {
  const [city, setCity] = useState("London");
  const [date, setDate] = useState("2026-07-20"); 
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("current");
  const [loading, setLoading] = useState(false);

  const tabs = [
    { id: "current", path: "current.json", label: "Current" },
    { id: "forecast", path: "forecast.json", label: "Forecast" },
    { id: "sports", path: "sports.json", label: "Sports" },
    { id: "history", path: "history.json", label: "History" },
    { id: "future", path: "future.json", label: "Future" },
    { id: "timezone", path: "timezone.json", label: "Timezone" }
  ];

  const fetchWeather = async (tabId = activeTab) => {
    setLoading(true);
    setData(null);
    
    const tab = tabs.find(t => t.id === tabId);
    const params = { key: "994662b6d2c7468f9a6170717261807", q: city };
    
    if (tabId === "history" || tabId === "future") {
        params.dt = date;
    }

    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/${tab.path}`, { params });
      setData(response.data);
      setActiveTab(tabId);
    } catch (e) {
      alert("Ошибка при получении данных. Проверьте город или дату.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Weather Dashboard</h2>
      
      <div className="nav nav-pills justify-content-center gap-2 mb-4">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            className={`btn ${activeTab === tab.id ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => fetchWeather(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-2 mb-4">
        <input className="form-control w-25" value={city} onChange={e => setCity(e.target.value)} placeholder="Город" />
        
        {(activeTab === "history" || activeTab === "future") && (
          <input type="date" className="form-control w-25" value={date} onChange={e => setDate(e.target.value)} />
        )}
        
        <button className="btn btn-success" onClick={() => fetchWeather()}>Поиск</button>
      </div>

      {loading && <p className="text-center">Загрузка...</p>}

      {data && (
        <div className="mt-4">
          {activeTab === "current" && <Current data={data} />}
          {activeTab === "forecast" && <Forecast data={data} />}
          {activeTab === "sports" && <Sports data={data} />}
          {activeTab === "history" && <History data={data} />}
          {activeTab === "future" && <Future data={data} />}
          {activeTab === "timezone" && <Timezone data={data} />}
        </div>
      )}
    </div>
  );
};

export default Home;