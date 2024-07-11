import React, { useState, useEffect, useContext } from "react";
import GaugeChart from "react-gauge-chart";
import { DataContext } from "../../context/DataContext";
import sunIcon from "../../assets/sun.png";
import "./Sunpos.Module.css";

const SunPositionGauge = () => {
  const [sunPosition, setSunPosition] = useState(0);
  const { Sundata } = useContext(DataContext);

  const parseTime = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return new Date().setHours(hours, minutes, 0, 0);
  };

  const calculateSunPosition = () => {
    const now = new Date();
    const sunriseTime = parseTime(Sundata.astronomy.astro.sunrise);
    const sunsetTime = parseTime(Sundata.astronomy.astro.sunset);

    if (now < sunriseTime) {
      setSunPosition(0);
      return;
    }

    if (now > sunsetTime) {
      setSunPosition(1);
      return;
    }

    const dayDuration = sunsetTime - sunriseTime;
    const elapsedTime = now - sunriseTime;
    const position = elapsedTime / dayDuration;

    setSunPosition(position);
  };

  useEffect(() => {
    calculateSunPosition();
    const intervalId = setInterval(calculateSunPosition, 60000);

    return () => clearInterval(intervalId);
  }, [Sundata.astronomy.astro.sunrise, Sundata.astronomy.astro.sunset]);

  const sunIconPosition = (sunPosition) => {
    const radius = 63;
    const angle = sunPosition * Math.PI;
    const x = 2 * radius - radius - radius * Math.cos(angle) - 15;
    const y = radius - radius * Math.sin(angle) - 15;
    return { left: `${x}px`, top: `${y}px` };
  };

  return (
    <div className="sun-gauge-container">
      <h5 id="sun">Sun Position</h5>
      <div className="gauge-wrapper">
        <GaugeChart
          id="sun-gauge-chart"
          nrOfLevels={30}
          arcsLength={[1]}
          percent={sunPosition}
          arcPadding={0.02}
          needleColor="#000000"
          arcWidth={0.2}
          hideText
        />
        {/* <img
          src={sunIcon}
          alt="Sun Icon"
          className="sun-icon"
          style={sunIconPosition(sunPosition)}
        /> */}
        <div className="time">
          <span>{Sundata.astronomy.astro.sunrise}</span>
          <span>{Sundata.astronomy.astro.sunset}</span>
        </div>
      </div>
      {/* <div className="slider-container">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sunPosition}
          onChange={(e) => setSunPosition(parseFloat(e.target.value))}
        />
      </div> */}
    </div>
  );
};

export default SunPositionGauge;
