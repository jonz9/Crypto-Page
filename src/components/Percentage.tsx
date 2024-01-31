interface PercentageProps {
  coin: number;
}

function Percentage({ coin }: PercentageProps) {
  function percentageColor() {
    return coin <= 0 ? " falling" : "rising";
  }
  const coinPercent = coin.toFixed(2);
  console.log(coinPercent);
  return <td className={percentageColor()}>{coinPercent}%</td>;
}

export default Percentage;
