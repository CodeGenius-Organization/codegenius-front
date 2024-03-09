import React from "react";

import "./Loading.css";

function Loading({ backgroundColor }) {
  return (
    <div class="loader spin">
      <div
        class="spin__blocker"
        style={{ backgroundColor: backgroundColor || "white" }}
      ></div>
      <div class="spin__bottom-left"></div>
      <div class="spin__bottom-right"></div>
      <div class="spin__top-left"></div>
    </div>
  );
}

export default Loading;
