import "./dayContent.css"
import { useWeather } from "../../context/weatherApi";

function DayContent() {

  const { status, data, index, day } = useWeather();
  if (!status) {
    return (
      <div className="dayContent">
        <div>Loading...</div>
      </div>
    )
  } else {
    return (
      <div className="content">
        <div className="dayContent">
          <div className="day-info">{day[index].dayName}</div>
          <div className="day-info">{data.forecast.forecastday[index].date}</div>
          <div className="day-info">{data.location.name}</div>
          <div className="day-info"><img src={`${data.forecast.forecastday[index].day.condition.icon}`} alt="" /></div>
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