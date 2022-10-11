import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import info from "../cities.json/data.json"

const WeatherContext = createContext();

const apiUrl = "http://api.weatherapi.com/v1/forecast.json?";
const apiKey = "0f54a14a31c143c981e152648220710";
const WeatherProvider = ({ children }) => {

  const [data, setData] = useState(info);
  const [index, setIndex] = useState(0);
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
    day: [
      {dayName: "Sunday", id: 0},
      {dayName: "Monday", id: 1},
      {dayName: "Tuesday", id: 2},
      {dayName: "Wednesday", id: 3},
      {dayName: "Thursday", id: 4},
      {dayName: "Friday", id: 5},
      {dayName: "Saturday", id: 6},
    ], 
    setCity,
    status,
    data,
    weatherDay,
    setWeatherDay,
    index,
    setIndex,
  };

  useEffect(() => {

    // setWeatherDay(data.forecast.forecastday[0])
    // setStatus(true)
    axios(`${apiUrl}key=${apiKey}&q=${city.name}&days=7&aqi=yes&alerts=no`)
      .then(item => {
        setData(item.data)
        setWeatherDay(item.data.forecast.forecastday[0])
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