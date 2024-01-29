import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  sparkline: {
    price: number[];
  };
  priceChange: number;
}

const Chart: React.FC<ChartProps> = ({ sparkline, priceChange }) => {
  const seriesData = useMemo(
    () => [{ data: [...sparkline.price] }],
    [sparkline.price]
  );

  const chartOptions = {
    series: seriesData,
    chart: {
      type: "area",
      height: 150,
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    tooltip: { enabled: false },
    stroke: { width: 1 },
    colors: [chartColor()],
  };

  function chartColor() {
    return priceChange <= 0 ? "#ff3131" : "#25df3e";
  }

  return (
    <ReactApexChart options={chartOptions as any} series={seriesData} className="" />
  );
};

export default Chart;
