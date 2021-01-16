import '../components/Input.css';
import { useContext } from "react";
import WeatherList from "./WeatherList";
import ThemeContext from "../context/ThemeContext";

function Input() {
  const {weatherData, setWeatherData} = useContext(ThemeContext);
  const APP_KEY="800d4101f64345cab22230215211501";
  let cityinput='';
  function cityText()
  {
  document.querySelector('input').addEventListener('input', (e) => {
    e.preventDefault();
    cityinput=e.target.value;
  })
  };
  async function getdata(value){
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3`)
      const result=await data.json();
      setWeatherData(result.forecast.forecastday);
      console.log(result)
 }

    return (
        <div className="search">
           <input type="text" placeholder="Şehir Ara" onChange={cityText}></input>
            <button onClick={()=>getdata(cityinput)}>Ara</button>
            <div>
            {weatherData.map(item=>(
             <WeatherList key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>
             ))} 
            </div>

        </div>
        
    );
}

export default Input;
