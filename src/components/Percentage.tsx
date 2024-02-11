interface PercentageProps {
  coin: number;
}

function Percentage({ coin }: PercentageProps) {
  const coinPercent = coin;
  if (typeof coin === 'undefined') {
    return <td>Percentage Unknown</td>
  }
  function percentageColor() {
    return coin <= 0 ? "#ff0000" : "00ff00";
  }
  return <td className={percentageColor()}>{coinPercent.toFixed(2)}%</td>;
}

export default Percentage;
