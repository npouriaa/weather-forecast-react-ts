import { useContext } from "react";
import "../styles/currentStatus.css";
import { DataContext } from "../context/DataContext";

const CurrentStatus = () => {
  const { data } = useContext(DataContext);

  const formatDatetime = (datetime: string): string => {
    const date = new Date(datetime);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="current-weather-status-con">
      <div className="date-location-con">
        <p className="date">
          {formatDatetime(data.location.localtime.split(" ")[0])}
        </p>
        <p className="location">
          {data.location.country}, {data.location.region}, {data.location.name}
        </p>
      </div>
      <div className="weather-condition">
        <div className="status-icon-con">
          <img src={data.current.condition.icon} alt="condition-icon" />
        </div>
        <div className="status-details">
          <h2
            className={`weather-degree ${
              data.current.temp_c > 20 && "warm-color"
            }`}
          >
            {data.current.temp_c}°C
          </h2>
          <h3 className="status-text">{data.current.condition.text}</h3>
        </div>
      </div>
      <div className="other-details-con">
        <div className="other-details">
          <div className="item">
            <h4>Wind</h4>
            <p>{data.current.wind_kph} km/h</p>
          </div>
          <span></span>
          <div className="item">
            <h4>Temp</h4>
            <p className="min-max-temp">
              {data.forecast.forecastday[0].day.mintemp_c}°C /{" "}
              {data.forecast.forecastday[0].day.maxtemp_c}°C
            </p>
          </div>
          <span></span>
          <div className="item">
            <h4>Humidity</h4>
            <p>{data.current.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStatus;
