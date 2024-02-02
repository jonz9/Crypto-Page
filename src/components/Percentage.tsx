interface PercentageProps {
  coin: number;
}

function Percentage({ coin }: PercentageProps) {
  const coinPercent = coin;
  if (typeof coin === 'undefined') {
    return <td>Percentage Unknown</td>
  }
  function percentageColor() {
    return coin <= 0 ? " falling" : "rising";
  }
  return <td className={percentageColor()}>{coinPercent}%</td>;
}

export default Percentage;
