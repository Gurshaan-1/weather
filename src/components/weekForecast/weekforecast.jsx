import React from "react";
import ForecastCard from "../ForecastCard/ForecastCard";
import "./weekforecast.css";

const WeekForecast = () => {
  const numOfCards = 7;
  const indices = Array.from({ length: numOfCards }, (_, index) => index);

  return (
    <div className="weekforecast">
      {indices.map((index) => (
        <ForecastCard key={index} index={index} />
      ))}
    </div>
  );
};

export default WeekForecast;
