import React from "react";
import "./Chart.css";
import Chartbar from "./Chartbar";
function Chart({ dataPoints }) {
    const valueArray = dataPoints.map(element => element.value);
    // console.log(valueArray);
    const maxValue = Math.max(...valueArray);
 
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          max_value={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
