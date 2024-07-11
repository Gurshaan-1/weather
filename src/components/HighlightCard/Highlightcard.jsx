import React, { useContext } from "react";
import "./Highlightcard.css";
import { DataContext } from "../../context/DataContext";
import Pressure from "../../assets/pressure.png";
import Visibility from "../../assets/visibility.png";
import MinMAx from "../../assets/minmaxtemp.png";
import Moon from "../../assets/moon.png";
import Rain from "../../assets/rains.png";
import UVIndexGauge from "../uvchart/UVchart";
const Highlightcard = (ind) => {
  const { Dailydata } = useContext(DataContext);
  const handleclick = () => {
    console.log(Dailydata);
  };
  return (
    <div className="Highlightscard">
      <div className="card-body">
        {ind.index == 0 && (
          <p className="card_text card_text_highlight" onClick={handleclick}>
            <div className="uv">
              <UVIndexGauge uvIndex={Dailydata.current.uv}></UVIndexGauge>
            </div>
            <span>UV Index : {Dailydata.current.uv}</span>
          </p>
        )}
        {ind.index == 1 && (
          <p className="card_text card_text_highlight" onClick={handleclick}>
            <div>
              <img src={Pressure} alt="" />
              <span>Pressure</span>
            </div>
            <span className="main-data-highlight">
              {Dailydata.current.pressure_mb} hPa
            </span>
          </p>
        )}
        {ind.index == 2 && (
          <p className="card_text card_text_highlight" onClick={handleclick}>
            <div>
              <img src={Visibility} alt="" />
              <span>Visibility</span>
            </div>
            <span className="main-data-highlight">
              {Dailydata.current.vis_km} km
            </span>
          </p>
        )}
        {ind.index == 3 && (
          <p className="card_text card_text_highlight" onClick={handleclick}>
            <div>
              <img src={MinMAx} alt="" />
              <div>
                Min Temp : {Dailydata.forecast.forecastday[0].day.mintemp_c}
                &deg;C
              </div>
              <div>
                Max Temp : {Dailydata.forecast.forecastday[0].day.maxtemp_c}
                &deg;C
              </div>
            </div>
          </p>
        )}
        {ind.index == 4 && (
          <p className="card_text card_text_highlight" onClick={handleclick}>
            <div>
              <img src={Moon} alt="" />
              <div>
                Moonrise: {Dailydata.forecast.forecastday[0].astro.moonrise}
              </div>
              <div>
                Moonset : {Dailydata.forecast.forecastday[0].astro.moonset}
              </div>
            </div>
          </p>
        )}
        {ind.index == 5 && (
          <p className="card_text card_text_highlight" onClick={handleclick}>
            <div>
              <img src={Rain} alt="" />
              <div>Cloud Cover : {Dailydata.current.cloud}%</div>
              <div>
                Rain Possibility :{" "}
                {Dailydata.forecast.forecastday[0].day.daily_chance_of_rain}%
              </div>
            </div>
          </p>
        )}
      </div>
    </div>
  );
};

export default Highlightcard;
