import "./dayContent.css";
import { useWeather } from "../../context/weatherApi";
import Weather from "../weather/Weather";

function DayContent() {

  const { statusDisplay, data, selectIndex } = useWeather();

  const date = new Date();

  const getDayName = (e) => {
    date.setDate(data.forecast.forecastday[e].date.slice(8, 10));
    return (
      date.toString().slice(0, 3)
    );
  };

  if (statusDisplay) {
    return (
      <div className="content">
        <div className="dayContent">
        <Weather />
          <div className="day-info city"><b>{data.location.name.toLocaleUpperCase()}</b></div>
          <div className="day-info"><b>{data.forecast.forecastday[selectIndex].date}</b></div>
          <div className="day-info"><b>{getDayName(selectIndex)}</b></div>
          <div className="day-info temp">
            <div className="max-temp">
              <div><b>Max Temp</b></div>
              {parseInt(data.forecast.forecastday[selectIndex].day.maxtemp_c)}°C
            </div>
            <div className="min-temp">
              <div><b>Min Temp</b></div>
              {parseInt(data.forecast.forecastday[selectIndex].day.mintemp_c)}°C
            </div>
          </div>
          <div className="day-info">{data.forecast.forecastday[selectIndex].day.condition.text}</div>
        </div>

        <div className="section">
          <div className="info">
            <div>HUMANIDY</div>
            <div>%{data.forecast.forecastday[selectIndex].day.avghumidity}</div>
          </div>
          <div className="info">
            <div>WIND</div>
            <div>{data.forecast.forecastday[selectIndex].day.maxwind_kph} km/h</div>
          </div>
          <div className="info">
            <div>UV Index</div>
            <div>{data.forecast.forecastday[selectIndex].day.uv}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default DayContent;