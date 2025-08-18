import React from "react";

interface DashedCircleProps {
  width: number;
  height: number;
  strokeWidth?: number;
  dash?: number;
  gap?: number;
  strokeColor?: string;
}

const DashedCircle: React.FC<DashedCircleProps> = ({
  width,
  height,
  strokeWidth = 4,
  dash = 8,
  gap = 4,
  strokeColor = "black",
}) => {
  const r = Math.min(width, height) / 2 - strokeWidth / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={width / 2}
        cy={height / 2}
        r={r}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={`${dash} ${gap}`}
      />
    </svg>
  );
};

export default DashedCircle;
