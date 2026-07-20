import React from 'react';

const History = ({ data }) => {
  if (!data || !data.forecast) return <p className="text-center">Нет данных для этой даты</p>;

  const dayData = data.forecast.forecastday[0];

  return (
    <div className="mt-4">
      <h4 className="mb-3">История погоды: {dayData.date}</h4>
      <div className="card shadow-sm">
        <div className="card-body">
          <p><strong>Макс. температура:</strong> {dayData.day.maxtemp_c}°C</p>
          <p><strong>Мин. температура:</strong> {dayData.day.mintemp_c}°C</p>
          <p><strong>Состояние:</strong> {dayData.day.condition.text}</p>
          <img src={dayData.day.condition.icon} alt="icon" />
          <p><strong>Восход:</strong> {dayData.astro.sunrise}</p>
          <p><strong>Закат:</strong> {dayData.astro.sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default History;