import "./Weather.css"
import { useWeather } from "../../context/weatherApi"

function Weather() {

  const { animationName, conditionName } = useWeather();

  
  const weatherStatusAnimation = () => {
    document.getElementById("Application").removeAttribute("class");
    document.getElementById("Application").setAttribute("class", `${conditionName.filter(item => item.name === animationName)[0].backgroundColor}`)
    return (
      conditionName.filter(item => item.name === animationName)[0].statusClassName
    );
  };

  const weatherFallAnimation = () => {
    return (
      conditionName.filter(item => item.name === animationName)[0].fallClassName
    );
  };

  const fallRandomNumber = () => {
    return Math.round(Math.random() * 10 + 10);
  };

  return (
    <div className="weather" >
      <div id="status" className={weatherStatusAnimation()}>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="fall" className={weatherFallAnimation()}>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
          <span style={{ "--i": fallRandomNumber() }}></span>
        </div>
      </div>
    </div>
  )
}

export default Weather