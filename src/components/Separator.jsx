import React from "react";
import "../scss/Separator.scss";

export default function Separator({ height, type, color }) {
  if (color === undefined) {
    color = "#fff";
  }
  switch (type) {
    case "dots":
      return (
        <div style={{ height: height }} className="separator-container">
          <div style={{ background: color }} className="dot"></div>
          <div style={{ background: color }} className="dot"></div>
          <div style={{ background: color }} className="dot"></div>
        </div>
      );
    case "line":
      return (
        <div className="safearea">
          <div style={{ height: height }} className="separator-container">
            <div style={{ background: color }} className="line"></div>
          </div>
        </div>
      );
    case "small_line":
      return (
        <div className="safearea">
          <div style={{ height: height }} className="separator-container">
            <div style={{ background: color }} className="line small"></div>
          </div>
        </div>
      );
    default:
      return (
        <div style={{ height: height }} className="separator-container"></div>
      );
  }
}
