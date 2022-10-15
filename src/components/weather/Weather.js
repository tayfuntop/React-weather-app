import "./Weather.css";
import { useWeather } from "../../context/weatherApi";

function Weather() {

  const { animationName, animationData } = useWeather();


  const weatherStatusAnimation = () => {
    document.getElementById("Application").removeAttribute("class");
    if (animationData.filter(item => item.name === animationName).length !== 0) {
      document.getElementById("Application").setAttribute("class", `app ${animationData.filter(item => item.name === animationName)[0].backgroundColor}`);
      return (
        animationData.filter(item => item.name === animationName)[0].statusClassName
      );
    }
  };

  const weatherFallAnimation = () => {
    if (animationData.filter(item => item.name === animationName).length !== 0) {
      return (
        animationData.filter(item => item.name === animationName)[0].fallClassName
      );
    };
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
  );
};

export default Weather;