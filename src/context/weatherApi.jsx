import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import animation from "../cities.json/animation.json"

const WeatherContext = createContext();


const apiUrl = "https://api.weatherapi.com/v1/forecast.json?";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [animationData, setAnimationData] = useState(animation);
  const [selectIndex, setSelectIndex] = useState(0);
  const [animationName, setAnimationName] = useState("");
  const [weatherDay, setWeatherDay] = useState({});
  const [statusDisplay, setStatusDisplay] = useState(false);
  const [city, setCity] = useState("");
  const [toastShow, setToastShow] = useState(false);

  const values =
  {
    day: [0, 1, 2, 3, 4, 5, 6],
    setCity,
    statusDisplay,
    data,
    weatherDay,
    setWeatherDay,
    selectIndex,
    setSelectIndex,
    animationData,
    setAnimationData,
    animationName,
    setAnimationName,
    toastShow,
    setToastShow,
  };



  useEffect(() => {
    if (city !== "") axios({
      method: "get",
      url: `${apiUrl}key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=no`,
      timeout: 5000,
    })
      .then(item => {
        setData(item.data);
        setWeatherDay(item.data.forecast.forecastday[0]);
        setAnimationName(item.data.forecast.forecastday[selectIndex].day.condition.text);
        setStatusDisplay(true);
      })
      .catch(() => {
        setStatusDisplay(false);
        setToastShow(true);
      })
  }, [city]);

  useEffect(() => {
    const resolve = (position) => {
      axios({
        method: "get",
        url: `${apiUrl}key=${apiKey}&q=${position.coords.latitude},${position.coords.longitude}&days=7&aqi=yes&alerts=no`,
        timeout: 5000,
      })
        .then(item => {
          setData(item.data);
          setWeatherDay(item.data.forecast.forecastday[0]);
          setAnimationName(item.data.forecast.forecastday[selectIndex].day.condition.text);
          setStatusDisplay(true);
        })
        .catch(() => {
          setStatusDisplay(false);
          setToastShow(true);
        })
    }
    const reject = () => {
      setCity("Kocaeli");
    }
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }, []);

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  return useContext(WeatherContext);
};

export { WeatherProvider, useWeather };