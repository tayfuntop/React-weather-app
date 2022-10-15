import "./dropdown.css";
import cities from "../../cities.json/turkeyCities.json";
import { useWeather } from "../../context/weatherApi";
import { useState } from "react";

function Dropdown() {

  const { setCity, statusDisplay } = useWeather();

  const [listCity, setListCity] = useState([]);
  const [inputCity, setInputCity] = useState("");

  const FindEnterFunction = (e) => {
    e.preventDefault();
    setCity(inputCity[0].toUpperCase() + inputCity.slice(1, inputCity.length));
    document.getElementById("list").removeAttribute("class");
    document.querySelector(".inputCity").value = "";
  };

  const findClickCityFunction = (e) => {
    document.querySelector(".inputCity").value = "";
    setCity(e.target.innerHTML);
    document.getElementById("list").removeAttribute("class");
  };

  const changeCityFunction = (e) => {
    let syllable = e.target.value.length;
    setInputCity(e.target.value);
    if (syllable !== 0) {
      document.getElementById("list").setAttribute("class", "visible");
    } else {
      document.getElementById("list").removeAttribute("class");
    };
    setListCity(cities.filter(item => item.name.slice(0, syllable).toLocaleLowerCase() ===
      e.target.value.toLocaleLowerCase()));
  };

  if (statusDisplay) {
    return (
      <div className="dropdown">
        <form action="">
          <input className="inputCity" onChange={changeCityFunction} placeholder="Please enter city.." type="text" />
          <ul id="list">
            {
              listCity.map((item, index) => {
                return (
                  <li key={index} onClick={findClickCityFunction} className="list-item">{item.name}</li>
                )
              })
            }
          </ul>
          <button style={{ "opacity": "0" }} onClick={FindEnterFunction}></button>
        </form>
      </div>
    );
  };
};

export default Dropdown;