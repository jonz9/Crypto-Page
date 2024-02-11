import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  sparkline: number[];
  priceChange: number;
}

const Chart: React.FC<ChartProps> = ({ sparkline, priceChange }) => {
  const [chartOptions] = useState({
    series: [
      {
        data: [...sparkline.price], // not getting second array
      },
    ],
    chart: {
      type: "area",
      height: 100,
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    tooltip: { enabled: false },
    stroke: { width: 1 },
    colors: [chartColor()],
  });

  function chartColor() {
    return priceChange <= 0 ? "#ff0000" : "#00ff00";
  }

  return (
    <ReactApexChart
      options={chartOptions as any}
      series={chartOptions.series}
      className=""
    />
  );
}

export default Chart;
