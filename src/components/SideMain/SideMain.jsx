import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { IoLocationOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import "./SideMain.Module.css";
import Mist from "../../assets/mist.png";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import toast from "react-hot-toast";
const SideMain = () => {
  const { data, addStarredCity, removeStarredCity, isCityStarred } =
    useContext(DataContext);
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });
  const [star, setStar] = useState(isCityStarred(data.location.name));
  const handleStarClick = () => {
    setStar(!star);
    const { name } = data.location;
    const { lat, lon } = data.location;
    if (isCityStarred(name)) {
      removeStarredCity(name);
    } else {
      addStarredCity(name, lat, lon);
    }
  };
  useEffect(() => {
    const monthNames = [
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

    const updateDateTime = () => {
      const currentDate = new Date();
      const month = monthNames[currentDate.getMonth()];
      const date = currentDate.getDate();
      setCurrentDateTime({
        date: `${month} ${date}`,
        time: currentDate.toLocaleTimeString(),
      });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="side_main">
      <div className="main-up">
        <div className="loc-name">
          {data.location.name}
          <span className="star" onClick={handleStarClick}>
            {isCityStarred(data.location.name) ? (
              <MdOutlineStar />
            ) : (
              <MdOutlineStarBorder />
            )}
          </span>
        </div>
        <h4>{currentDateTime.time}</h4>
      </div>
      <div className="main-cen">
        <img src={data.current.condition.icon} alt="" />
      </div>
      <div className="main-cen">
        <h1>{data.current.temp_c}&deg;C</h1>
      </div>
      <div className="main-cen">
        <h5>{data.current.condition.text}</h5>
      </div>
      <div className="main-cen">
        <h6>Today , {currentDateTime.date}</h6>
      </div>
      <div className="main-cen">
        <h5>
          <FaWind />
          &nbsp;Wind&nbsp;|&nbsp; {data.current.wind_kph} km/h
        </h5>
      </div>
      <div className="main-cen">
        <h5>
          <WiHumidity />
          &nbsp;Hum&nbsp;|&nbsp; {data.current.humidity}%
        </h5>
      </div>
    </div>
  );
};

export default SideMain;
