import React from 'react';

const Future = ({ data }) => {
  if (!data || !data.forecast) return <p className="text-center">Нет данных на эту дату</p>;

  const dayData = data.forecast.forecastday[0];

  return (
    <div className="mt-4">
      <h4 className="mb-3">Прогноз на: {dayData.date}</h4>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{dayData.day.condition.text}</h5>
          <img src={dayData.day.condition.icon} alt="icon" />
          <p><strong>Средняя темп:</strong> {dayData.day.avgtemp_c}°C</p>
          <p><strong>Макс. темп:</strong> {dayData.day.maxtemp_c}°C</p>
          <p><strong>Вероятность дождя:</strong> {dayData.day.daily_chance_of_rain}%</p>
        </div>
      </div>
    </div>
  );
};

export default Future;