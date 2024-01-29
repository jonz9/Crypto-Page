/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

interface ChartProps {
  sparkline: {
    price: number[];
  };
  priceChange: any;
}

function Chart({ sparkline, priceChange }: ChartProps) {
  const [chartOptions] = useState({
    series: [{
      data: [...sparkline.price],
    }],
    chart: {
      type: "area",
      height: 150,
      sparkline: { enabled: true },
      animations: {enabled: false},
    },
    tooltip: { enabled: false },
    stroke: { width: 1 },
    colors: [chartColor()],
  })

  function chartColor() {
    return priceChange <= 0 ? "#ff3131" : "#25df3e";
  }

  return (
    <ReactApexChart options={chartOptions as any} series={chartOptions.series} className="" />
  )
}

export default Chart