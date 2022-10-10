import { useWeather } from "../../context/weatherApi"
import "./content.css"

function Content() {

  const { status, day, data } = useWeather();
  const date = new Date();

  const getDayName = (e) => {
    date.setDate(data.forecast.forecastday[e].date.slice(8, 10))
    return (
      date.toString().slice(0, 3)
    );
  };

  const activeFunction = (e) => {
    console.log(e.target.className);
    // document.querySelector(`${e.target.className}`).classList.add("active");
  };

  if (status) {
    return (
          status && <div className="days">
            {day.map(index => {
              return (
                <div onClick={activeFunction} key={index} className="day">
                  <img src={data.forecast.forecastday[index].day.condition.icon} alt="" />
                  {getDayName(index)} <br />
                  {data.forecast.forecastday[index].day.avgtemp_c}°C
                </div>
              )
            })}
          </div>
    )
  }
}

export default Content