import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "./AnalysisChart.Module.css";

const TemperatureChart = ({ data }) => {
  const times = data.map((entry) => entry.time);
  const temperatures = data.map((entry) => entry.temperature);

  return (
    <div className="chart-container" style={{ width: "100%", height: "100%" }}>
      <LineChart
        xAxis={[
          {
            data: times,
            label: "X-Axis : Hours",
          },
        ]}
        series={[
          {
            data: temperatures,
            label: "Y-Axis : Temperature",
            color: "rgba(36,58,80,1)",
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
};

export default TemperatureChart;
