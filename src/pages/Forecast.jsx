import React from 'react';

const Forecast = ({ data }) => {
  
  if (!data || !data.forecast) return <p className="text-center">Нет данных прогноза</p>;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Прогноз на день</h4>
      <div className="row">
        {data.forecast.forecastday[0].hour.map((hour, index) => (
          index % 3 === 0 && (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <h6 className="card-title">{hour.time.split(' ')[1]}</h6>
                  <img src={hour.condition.icon} alt="icon" style={{ width: "40px" }} />
                  <p className="card-text fw-bold">{hour.temp_c}°C</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Forecast;