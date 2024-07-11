import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const BasicLineChart = ({ windData }) => {
  const times = windData.map((data) => data.time);
  const windspeed = windData.map((data) => data.wind);

  const getChartSize = () => {
    if (window.innerWidth <= 430) {
      return { width: 300, height: 170 };
    } else if (window.innerWidth <= 600) {
      return { width: 400, height: 170 };
    } else if (window.innerWidth <= 700) {
      return { width: 500, height: 190 };
    } else if (window.innerWidth <= 800) {
      return { width: 600, height: 190 };
    }
     else if (window.innerWidth <=1065) {
      return { width: 395, height: 220 };
    }
    return { width: 370, height : 190};
  };

  const [chartSize, setChartSize] = useState(getChartSize());

  useEffect(() => {
    const handleResize = () => {
      setChartSize(getChartSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="line"
      style={{ width: chartSize.width, height: chartSize.height }}
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
        width={chartSize.width}
        height={chartSize.height}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
};

export default BasicLineChart;
