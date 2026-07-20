import React from 'react';

const Current = ({ data }) => {
  if (!data) return null;

  return (
    <div className="card shadow border-0 p-4">
      <h3 className="text-primary">{data.location.name}</h3>
      <p className="text-muted">{data.location.country}</p>
      
      <div className="d-flex align-items-center">
        <img src={data.current.condition.icon} alt="weather" style={{ width: "80px" }} />
        <div>
          <h1 className="display-4">{data.current.temp_c}°C</h1>
          <p className="lead">{data.current.condition.text}</p>
        </div>
      </div>
      
      <div className="mt-3">
        <p><strong>Ощущается как:</strong> {data.current.feelslike_c}°C</p>
        <p><strong>Ветер:</strong> {data.current.wind_kph} км/ч</p>
        <p><strong>Влажность:</strong> {data.current.humidity}%</p>
      </div>
    </div>
  );
};

export default Current;