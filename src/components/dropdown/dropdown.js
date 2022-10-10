import "./dropdown.css"
import cities from "../../cities.json/turkeyCities.json"
import { useWeather } from "../../context/weatherApi";
 
function Dropdown() {

  const { setCity } = useWeather();

  const getRequest = (e) => {
    setCity(cities.filter(item => item.id === Number(e.target.value))[0])
  };

  return (
    <div className="dropdown">
      <select onChange={getRequest} defaultValue={"41"} name="City" id="cityName">
        {cities.map((item, index) => {
          return (
            <option value={item.id} key={index}>
              {item.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown