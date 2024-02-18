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
        data: [...sparkline.price],
      },
    ],
    chart: {
      type: "area",
      height: 40,
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    tooltip: { enabled: false },
    stroke: { width: 1 },
    colors: [chartColor()],
  });

  function chartColor() {
    return priceChange <= 0 ? "#ff3131" : "#25df3e";
  }

  return (
    <ReactApexChart
      options={chartOptions as any}
      series={chartOptions.series}
      className="chart"
    />
  );
};

export default Chart;
