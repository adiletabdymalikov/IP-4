import React from 'react';

const Timezone = ({ data }) => {
  if (!data || !data.location) return <p className="text-center">Данные часового пояса недоступны</p>;

  const { name, region, country, localtime, tz_id } = data.location;

  return (
    <div className="mt-4">
      <h4 className="mb-3">🌍 Часовой пояс: {name}</h4>
      <div className="card shadow-sm">
        <div className="card-body">
          <p><strong>Страна:</strong> {country} ({region})</p>
          <p><strong>ID пояса:</strong> {tz_id}</p>
          <div className="alert alert-info">
            <h5 className="mb-0">Местное время: {localtime}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;