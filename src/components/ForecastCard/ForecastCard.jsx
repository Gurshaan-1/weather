import React, { useContext } from "react";
import "./ForecastCard.css";
import { DataContext } from "../../context/DataContext";
const ForecastCard = (ind) => {
  const { Dailydata } = useContext(DataContext);
  const handleclick = () => {
    console.log(ind);
    console.log(Dailydata);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];

    return `${day} ${monthName}`;
  };

  const today = new Date();
  const formattedDate = formatDate(
    Dailydata.forecast.forecastday[ind.index].date
  );
  const isToday = formattedDate === formatDate(today);

  return (
    <div
      className={`card1 ${isToday ? "today" : ""}`}
      style={{ width: "6rem" }}
    >
      <div className="card-body">
        <p className="card_text date">{formattedDate}</p>

        <div className="img-div">
          <img
            src={
              isToday
                ? Dailydata.current.condition.icon
                : Dailydata.forecast.forecastday[ind.index].day.condition.icon
            }
            alt="weather icon"
            className="daily-img"
          />
        </div>
        <p className="card_text" onClick={handleclick}>
          {isToday
            ? Dailydata.current.temp_c
            : Dailydata.forecast.forecastday[ind.index].day.avgtemp_c}
          &deg;
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
