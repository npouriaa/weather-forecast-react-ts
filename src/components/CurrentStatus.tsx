import "../styles/currentStatus.css";

const CurrentStatus = () => {
  return (
    <div className="current-weather-status-con">
      <div className="date-location-con">
        <p className="date">Monday, 12 Feb</p>
        <p className="location">Iran, Khorasan, Sabzevar</p>
      </div>
      <div className="weather-condition">
        <div className="status-icon-con">
          <img
            src="https://cdn.weatherapi.com/weather/64x64/day/377.png"
            alt="condition-icon"
          />
        </div>
        <div className="status-details">
          <h1 className="weather-degree">12°C</h1>
          <h3 className="status-text">Sunny</h3>
        </div>
      </div>
      <div className="other-details-con">
        <div className="other-details">
          <div className="item">
            <h4>Wind</h4>
            <p>8 km/h</p>
          </div>
          <span></span>
          <div className="item">
            <h4>Temp</h4>
            <p>10°C / 20°C</p>
          </div>
          <span></span>
          <div className="item">
            <h4>Humidity</h4>
            <p>79%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;
