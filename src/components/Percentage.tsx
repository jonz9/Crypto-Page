function Percentage({ coin }): unknown {
  function percentageColor() {
    return coin <= 0 ? " falling" : "rising";
  }
  return <td className={percentageColor()}>{coin.toFixed(1)}%</td>;
}

export default Percentage;
