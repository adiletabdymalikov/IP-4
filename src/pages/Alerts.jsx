import React from 'react';

const Alerts = ({ data }) => {
  const alerts = data?.alerts?.alert;

  if (!alerts || alerts.length === 0) {
    return <p className="text-center text-success">Активных погодных оповещений нет.</p>;
  }

  return (
    <div className="mt-4">
      <h4 className="mb-3 text-danger">⚠️ Погодные оповещения</h4>
      {alerts.map((alert, index) => (
        <div className="card border-danger mb-3" key={index}>
          <div className="card-body text-danger">
            <h5 className="card-title">{alert.headline}</h5>
            <p className="card-text"><strong>Источник:</strong> {alert.msgtype}</p>
            <p className="card-text">{alert.desc}</p>
            <p className="small"><em>Действует до: {alert.expires}</em></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alerts;