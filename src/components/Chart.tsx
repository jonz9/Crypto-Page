import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function Chart({ sparkline, priceChange }) {
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
    <ReactApexChart options={chartOptions} series={chartOptions.series} className="" />
  )
}

export default Chart