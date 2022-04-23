import React from "react";
import "./Chartbar.css";
function Chartbar({ key, value, max_value, label }) {
  let bar_ht = "0%";

  if (max_value > 0) {
    bar_ht = Math.round((value / max_value) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: bar_ht }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default Chartbar;
