import "../components/WeatherList.css";

function WeatherList({date,mintemp,maxtemp,condition,icon}) {
    return (
        <div className="result">
             <h2>{date}</h2>
            <ul>
                <li><img src={icon} alt=''/></li>
                <li>{condition} </li>
                <li>Min:{mintemp}C  / Max:{maxtemp}C</li>
            </ul>
        </div>
    );
}

export default WeatherList;
