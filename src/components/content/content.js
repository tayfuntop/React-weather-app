import { useWeather } from "../../context/weatherApi"
import "./content.css"

function Content() {

  const { status, day, data, setIndex, setAnimationName, setConditionName, conditionName } = useWeather();

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
    setConditionName(conditionName);
    setAnimationName(data.forecast.forecastday[e.target.id].day.condition.text);
    // if (data.forecast.forecastday[e.target.id].day.condition.text === "Patchy rain possible") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "rainy clear");
    //   document.getElementById("fall").setAttribute("class", "rain");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Sunny") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "sunny");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Moderate rain") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "rainy");
    //   document.getElementById("fall").setAttribute("class", "rain");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Partly cloudy") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "cloudy clear");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Heavy rain") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "rainy");
    //   document.getElementById("fall").setAttribute("class", "rain heavy");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Overcast") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "overcast");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Cloudy") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "cloudy");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Moderate snow" ||
    //   data.forecast.forecastday[e.target.id].day.condition.text === "Light freezing rain" ||
    //   data.forecast.forecastday[e.target.id].day.condition.text === "Light snow") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "snowy");
    //   document.getElementById("fall").setAttribute("class", "snow");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Heavy snow") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "snowy");
    //   document.getElementById("fall").setAttribute("class", "snow heavy");
    // } else if (data.forecast.forecastday[e.target.id].day.condition.text === "Patchy moderate snow") {
    //   document.getElementById("status").removeAttribute("class");
    //   document.getElementById("fall").removeAttribute("class");
    //   document.getElementById("status").setAttribute("class", "snowy clear");
    //   document.getElementById("fall").setAttribute("class", "snow");
    // }
  };


  if (status) {
    return (
      status && <div className="days">
        {day.map(index => {
          return (
            <div onClick={activeFunction} id={index} key={index} className=
              {`day ${index === 0 ? "active" : ""}`}>
              <img onClick={activeFunction} id={index} src={data.forecast.forecastday[index].day.condition.icon} alt="" />
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