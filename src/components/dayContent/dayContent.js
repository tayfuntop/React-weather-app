import "./dayContent.css"
import { useWeather } from "../../context/weatherApi";

function DayContent() {

  const { status, data } = useWeather();
  // const [weather, setWeather] = useState(null);
  console.log(data);


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
          <div className="day-info">Sunday</div>
          <div className="day-info">{data.forecast.forecastday[0].date}</div>
          <div className="day-info">{data.location.name}</div>
          <div className="day-info"><img src={`${data.forecast.forecastday[0].day.condition.icon}`} alt="" /></div>
          <div className="day-info temp">
            <div className="max-temp">
              <div><b>Max Temp</b></div>
              {data.forecast.forecastday[0].day.maxtemp_c}°C
            </div>
            <div className="min-temp">
              <div><b>Min Temp</b></div>
              {data.forecast.forecastday[0].day.mintemp_c}°C
            </div>
          </div>
          <div className="day-info">{data.forecast.forecastday[0].day.condition.text}</div>
        </div>

        <div className="section">
          <div className="info">
            <div>HUMANIDY</div>
            <div>%33</div>
          </div>
          <div className="info">
            <div>WIND</div>
            <div>5 km/h</div>
          </div>
          <div className="info">
            <div>UV Index</div>
            <div>7</div>
          </div>
        </div>
      </div>
    )
  }
}

export default DayContent