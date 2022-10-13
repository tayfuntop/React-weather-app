import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
// import info from "../cities.json/data.json"
import condition from "../cities.json/condition.json"

const WeatherContext = createContext();

const apiUrl = "http://api.weatherapi.com/v1/forecast.json?";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const WeatherProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [conditionName, setConditionName] = useState(condition);
  const [index, setIndex] = useState(0);
  const [animationName, setAnimationName] = useState("");
  const [weatherDay, setWeatherDay] = useState({});
  const [status, setStatus] = useState(false);
  const [city, setCity] = useState(
    {
      id: 41,
      name: "Kocaeli",
      latitude: "40.8533",
      longitude: "29.8815",
      population: 1780055,
      region: "Marmara"
    }
  );
  
  const values =
  {
    day: [0,1,2,3,4,5,6], 
    setCity,
    status,
    data,
    weatherDay,
    setWeatherDay,
    index,
    setIndex,
    animationName,
    conditionName,
    setConditionName,
    setAnimationName,
  };

  useEffect(() => {
    // setWeatherDay(data.forecast.forecastday[0])
    // setStatus(true)
    // setWeatherDay(data.forecast.forecastday[0])
    // setAnimationName(data.forecast.forecastday[index].day.condition.text)
    axios(`${apiUrl}key=${apiKey}&q=${city.name}&days=7&aqi=yes&alerts=no`)
      .then(item => {
        setData(item.data)
        setWeatherDay(item.data.forecast.forecastday[0])
        setAnimationName(item.data.forecast.forecastday[index].day.condition.text)
        setStatus(true)
      })
      .catch(() => {
        setStatus(false)
      })
  }, [city])
  
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