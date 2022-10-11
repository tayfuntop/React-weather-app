import { useWeather } from "../../context/weatherApi"
import "./content.css"

function Content() {

  const { status, day, data, setIndex } = useWeather();

  const date = new Date();
  const getDayName = (e) => {
    date.setDate(data.forecast.forecastday[e].date.slice(8, 10))
    return (
      date.toString().slice(0, 3)
    );
  };

  const activeFunction = (e) => {
    document.querySelector(".active").classList.remove("active")    // active function hem img hem dis div kullandik neden?
    document.getElementById(`${e.target.id}`).classList.add("active");
    setIndex(e.target.id);
  };


  if (status) {
    return (
          status && <div className="days">
            {day.map(index => {
              return (
                <div onClick={activeFunction} id={index.id} key={index.id} className=
                {`day ${index.id === 0 ? "active" : ""}`}>
                  <img onClick={activeFunction} id={index.id} src={data.forecast.forecastday[index.id].day.condition.icon} alt="" />
                  {getDayName(index.id)} <br />
                  {data.forecast.forecastday[index.id].day.avgtemp_c}°C
                </div>
              )
            })}
          </div>
    )
  }
}

export default Content