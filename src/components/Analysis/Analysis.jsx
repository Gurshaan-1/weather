import React, { useContext, useState, useEffect } from "react";
import "./Analysis.Module.css";
import TemperatureChart from "../analysischart/AnalysisChart";
import { DataContext } from "../../context/DataContext";
import BasicLineChart from "../BasicLineChart/BasicLineChart";
import RainBarChart from "../RainChart/RainBarChart";
const Analysis = () => {
  const { Dailydata } = useContext(DataContext);
  const [hourlyData, setHourlyData] = useState([]);
  const [windData, setWindData] = useState([]);
  const [rainData, setRainData] = useState([]);

  useEffect(() => {
    if (Dailydata) {
      const hourlyWindData = Dailydata.forecast.forecastday[0].hour
        .slice(4, 21)
        .map((hour, index) => ({
          time: index + 4,
          wind: parseFloat(hour.wind_kph),
        }));
      setWindData(hourlyWindData);
    }
  }, [Dailydata]);

  useEffect(() => {
    if (Dailydata) {
      const mappedData = Dailydata.forecast.forecastday[0].hour.map(
        (hour, index) => ({
          time: index,
          temperature: hour.temp_c,
        })
      );
      setHourlyData(mappedData);
    }
  }, [Dailydata]);

  useEffect(() => {
    if (Dailydata) {
      const rains = Dailydata.forecast.forecastday.map((dayData) => {
        const date = new Date(dayData.date);
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

        return {
          day: dayOfWeek,
          chanceOfRain: dayData.day.daily_chance_of_rain,
        };
      });

      setRainData(rains);
    }
  }, [Dailydata]);


  return (
    <>
      <div className="analysis-main">
          <TemperatureChart data={hourlyData}></TemperatureChart>
      </div>
      <div className="rain-aqi">
        <div className="rain-graph">
          <BasicLineChart windData={windData}></BasicLineChart>
        </div>
        <div className="aqi">
          <RainBarChart rainData={rainData}></RainBarChart>
        </div>
      </div>
    </>
  );
};

export default Analysis;
