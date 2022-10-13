import "./dayContent.css"
import { useWeather } from "../../context/weatherApi";
import Weather from "../weather/Weather"

function DayContent() {

  const { status, data, index } = useWeather();

  const date = new Date();

  const getDayName = (e) => {
    date.setDate(data.forecast.forecastday[e].date.slice(8, 10))
    return (
      date.toString().slice(0, 3)
    );
  };

  if (!status) {
    return (
      <div className="dayContent">
        Loading..
      </div>
    )
  } else {
    return (
      <div className="content">
        <div className="dayContent">
        <Weather />
          <div className="day-info city"><b>{data.location.name.toLocaleUpperCase()}</b></div>
          <div className="day-info"><b>{data.forecast.forecastday[index].date}</b></div>
          <div className="day-info"><b>{getDayName(index)}</b></div>
          <div className="day-info temp">
            <div className="max-temp">
              <div><b>Max Temp</b></div>
              {data.forecast.forecastday[index].day.maxtemp_c}°C
            </div>
            <div className="min-temp">
              <div><b>Min Temp</b></div>
              {data.forecast.forecastday[index].day.mintemp_c}°C
            </div>
          </div>
          <div className="day-info">{data.forecast.forecastday[index].day.condition.text}</div>
        </div>

        <div className="section">
          <div className="info">
            <div>HUMANIDY</div>
            <div>%{data.forecast.forecastday[index].day.avghumidity}</div>
          </div>
          <div className="info">
            <div>WIND</div>
            <div>{data.forecast.forecastday[index].day.maxwind_kph} km/h</div>
          </div>
          <div className="info">
            <div>UV Index</div>
            <div>{data.forecast.forecastday[index].day.uv}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default DayContent