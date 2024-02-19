interface PercentageProps {
  coin: number;
}

function Percentage({ coin }: PercentageProps) {
  const coinPercent = coin;
  if (typeof coin === "undefined") {
    return <td>Percentage Unknown</td>;
  }
  function percentageColor() {
    if (coin <= 0) {
      return "text-red-500";
    } else {
      return "text-green-500";
    }
  }

  return (
    <td className={`${percentageColor()}`}>{coinPercent.toFixed(1)}%</td>
  );
}

export default Percentage;
