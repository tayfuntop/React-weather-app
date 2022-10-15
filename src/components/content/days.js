import { useWeather } from "../../context/weatherApi";
import "./days.css";

function Days() {

  const { statusDisplay, day, data, setSelectIndex, setAnimationName, setAnimationData, animationData } = useWeather();

  const date = new Date();
  const getDayName = (e) => {
    date.setDate(data.forecast.forecastday[e].date.slice(8, 10))
    return (
      date.toString().slice(0, 3)
    );
  };

  const activeFunction = (e) => {
    document.querySelector(".active").classList.remove("active");
    document.getElementById(`${e.target.id}`).classList.add("active");
    setSelectIndex(e.target.id);
    setAnimationData(animationData);
    setAnimationName(data.forecast.forecastday[e.target.id].day.condition.text);
  };


  if (statusDisplay) {
    return (
      <div className="days">
        {day.map(index => {
          return (
            <div onClick={activeFunction} id={index} key={index} className=
              {`day ${index === 0 ? "active" : ""}`}>
              <img onClick={activeFunction} id={index} src={data.forecast.forecastday[index].day.condition.icon} alt="" />
              {getDayName(index)} <br />
              {parseInt(data.forecast.forecastday[index].day.avgtemp_c)}°C
            </div>
          )
        })}
      </div>
    );
  };
};

export default Days;