import React from "react";

import "./TopBarSocial.css";

function TopBarSocial({ currentTab, handleTabChange }) {
  return (
    <>
      <div className="container">
        <div
          className={`item ${currentTab === "Seguindo" && "active-filter"}`}
          onClick={() => handleTabChange("Seguindo")}
        >
          <span>Seguindo</span>
        </div>
        <div
          className={`item ${
            currentTab === "Seus Seguidores" && "active-filter"
          }`}
          onClick={() => handleTabChange("Seus Seguidores")}
        >
          <span>Seus Seguidores</span>
        </div>
      </div>
    </>
  );
}

export default TopBarSocial;
