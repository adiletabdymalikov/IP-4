import React from 'react';

const Sports = ({ data }) => {
  
  if (!data || !data.sports) return <p className="text-center">Нет данных о спорте</p>;

  return (
    <div className="mt-4">
      <h4 className="mb-3">Спортивные события</h4>
      
      {data.sports.football?.length > 0 && (
        <div className="mb-4">
          <h5>Футбол</h5>
          <div className="row">
            {data.sports.football.map((match, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h6 className="card-title text-primary">{match.match}</h6>
                    <p className="card-text small">
                      <strong>Лига:</strong> {match.tournament} <br />
                      <strong>Стадион:</strong> {match.stadium} <br />
                      <strong>Время:</strong> {match.start}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sports;