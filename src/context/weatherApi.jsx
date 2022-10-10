import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

const apiUrl = "http://api.weatherapi.com/v1/forecast.json?";
const apiKey = "0f54a14a31c143c981e152648220710";
const WeatherProvider = ({ children }) => {

  const [data, setData] = useState([]);
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
    day: [0, 1, 2, 3, 4, 5, 6],
    setCity,
    status,
    data,
  };

  useEffect(() => {
    axios(`${apiUrl}key=${apiKey}&q=${city.name}&days=7&aqi=yes&alerts=no`)
      .then(item => {
        setData(item.data)
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