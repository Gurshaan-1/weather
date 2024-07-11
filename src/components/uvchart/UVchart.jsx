import React from "react";
import "./UVchart.Module.css"
const UVIndexGauge = ({ uvIndex }) => {
  const sections = [
    { name: "Normal (0-3)", uv: 3, fill: "#00C49F" },
    { name: "High (4-6)", uv: 6, fill: "#FFBB28" },
    { name: `VHigh (7-9)`, uv: 9, fill: "#FF8042" },
    { name: "Extreme(10-11)", uv: 11, fill: "#FF0000" },
  ];

  const radius = 100;
  const center = radius + 10;
  const anglePerUnit = 180 / 11; // 180 degrees for UV index range 0-11

  const calculateEndAngle = (uv) => {
    return uv * anglePerUnit - 90; // -90 to start from 0 degrees on the left
  };
  const needleangle = (uv) => {
    return uv * anglePerUnit - 180; // -90 to start from 0 degrees on the left
  };

  const needleAngle = needleangle(uvIndex);

  return (
    <>
      <svg width={2 * center} height={center + 10}>
        {/* Gauge sections */}
        {sections.map((section, index) => {
          const startAngle =
            index === 0 ? -90 : calculateEndAngle(sections[index - 1].uv);
          const endAngle = calculateEndAngle(section.uv);

          const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
          const start = polarToCartesian(center, center, radius, endAngle);
          const end = polarToCartesian(center, center, radius, startAngle);

          const pathData = [
            `M ${start.x} ${start.y}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
            `L ${center} ${center}`,
            "Z",
          ].join(" ");

          return (
            <g key={section.name}>
              <path d={pathData} fill={section.fill} />
              <text
                x={(start.x + end.x + 70) / 2.7}
                y={(start.y + end.y + 70) / 2.5}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="9"
                fill=""
              >
                {section.name}
              </text>
            </g>
          );
        })}

        {/* Needle */}
        <line
          x1={center}
          y1={center}
          x2={center + radius * Math.cos((needleAngle * Math.PI) / 180)}
          y2={center + radius * Math.sin((needleAngle * Math.PI) / 180)}
          stroke="black"
          strokeWidth="3"
        />
        <circle cx={center} cy={center} r="5" fill="black" />
      </svg>
    </>
  );
};

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

export default UVIndexGauge;
