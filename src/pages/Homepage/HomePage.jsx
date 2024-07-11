import React, { useState, useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Weekforecast from "../../components/weekForecast/weekforecast";
import TodayHighlights from "../../components/TodayHighlights/TodayHighlights";
import Analysis from "../../components/Analysis/Analysis";
import { LoaderIcon } from "react-hot-toast";
import { DataContext } from "../../context/DataContext";

const HomePage = () => {
  const { data, Sundata, Dailydata } = useContext(DataContext);
  const [component, setComponent] = useState("Weather");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [iscitiesopen, setIscitiesOpen] = useState(false);
  const handleviews = (text) => {
    setComponent(text);
  };

  const baropen = (val) => {
    setIsSidebarOpen(val);
  };
  const citiesopen = (val) => {
    setIscitiesOpen(val);
    console.log(iscitiesopen);
  };

  if (!data || !Sundata || !Dailydata) {
    return (
      <div className="main-load">
        <span>Loading Live Weather Data...</span>
        <LoaderIcon />
      </div>
    );
  }

  return (
    <div className={`home ${isSidebarOpen || iscitiesopen ? "no-scroll" : ""}`}>
      <Sidebar baropen={baropen} />
      <div className="hero">
        <Navbar handleviews={handleviews} citiesopen={citiesopen} />
        {component === "Weather" && (
          <>
            <Weekforecast />
            <TodayHighlights />
          </>
        )}
        {component === "Analysis" && <Analysis />}
      </div>
    </div>
  );
};

export default HomePage;
