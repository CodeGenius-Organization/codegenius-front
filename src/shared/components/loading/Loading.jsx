import React from "react";

import "./Loading.css";

function Loading({ backgroundColor }) {
  //linear-gradient(90deg, rgba(127, 86, 188, 1), rgba(240, 112, 255, 1))
  return (
    <div className="loader spin">
      <div
        className="spin__blocker"
        style={{ backgroundColor: backgroundColor || "white" }}
      ></div>
      <div className="spin__bottom-left"></div>
      <div className="spin__bottom-right"></div>
      <div className="spin__top-left"></div>
    </div>
  );
}

export default Loading;
