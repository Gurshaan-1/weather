import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "./BasicLineChart.Module.css"
const BasicLineChart = ({ windData }) => {
  const times = windData.map((data) => data.time);
  const windspeed = windData.map((data) => data.wind);

  return (
    <div
      className="line"
      style={{ width: "100%", height: "100%" }}
    >
      <LineChart
        xAxis={[
          {
            data: times,
            label: "X-Axis : Hours (4 A.M. - 8 P.M.)",
          },
        ]}
        series={[
          {
            data: windspeed,
            label: "Y-Axis : Today Wind Speed(kph)",
            color: "rgba(36,58,80,1)",
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
};

export default BasicLineChart;
