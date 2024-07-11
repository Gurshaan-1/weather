import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./AnalysisChart.Module.css"

const TemperatureChart = ({ data }) => {
  const times = data.map((entry) => entry.time);
  const temperatures = data.map((entry) => entry.temperature);

  const chartData = {
    labels: times,
    datasets: [
      {
        label: "Today Temperature (°C)",
        data: temperatures,
        fill: false,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderColor: "rgba(36,58,80,1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
        ticks: {
          maxRotation: 0, // No rotation
          minRotation: 0, // No rotation
          autoSkip: true, // Auto skip labels to avoid overlap
          maxTicksLimit: 12, // Maximum number of ticks to show
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        min: Math.min(...temperatures) - 5,
        max: Math.max(...temperatures) + 5,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 30,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} width={1000} height={400} />
    </div>
  );
};

export default TemperatureChart;
