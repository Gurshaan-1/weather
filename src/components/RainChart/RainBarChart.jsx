import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RainBarChart = ({ rainData }) => {
  return (
    <ResponsiveContainer width="90%" height={200}>
      <BarChart data={rainData} margin={{ top: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="chanceOfRain" fill="rgba(36,58,80,1)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RainBarChart;
