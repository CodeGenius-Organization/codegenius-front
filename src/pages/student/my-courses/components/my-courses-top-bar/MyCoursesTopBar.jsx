import React from "react";

import {
  MdOutlineList,
  MdOutlineFavorite,
  MdCheckCircle,
} from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import "./MyCoursesTopBar.css";

function CoursesTopBar({ onChangeCategory, currentCategory }) {
  const iconStyle = { color: "#FFF", width: "24px", height: "24px" };

  return (
    <>
      <div className="container ">
        <div
          className={`item ${currentCategory === "Todos" && "item-active"}`}
          onClick={() => onChangeCategory?.("Todos")}
        >
          <MdOutlineList style={iconStyle} />
          <span>Todos</span>
        </div>
        <div
          className={`item ${currentCategory === "Favoritos" && "item-active"}`}
          onClick={() => onChangeCategory?.("Favoritos")}
        >
          <MdOutlineFavorite style={iconStyle} />
          <span>Favoritos</span>
        </div>
        <div
          className={`item ${
            currentCategory === "Em andamento" && "item-active"
          }`}
          onClick={() => onChangeCategory?.("Em andamento")}
        >
          <FaRegClock style={iconStyle} />
          <span>Em andamento</span>
        </div>
        <div
          className={`item ${currentCategory === "Concluído" && "item-active"}`}
          onClick={() => onChangeCategory?.("Concluído")}
        >
          <MdCheckCircle style={iconStyle} />
          <span>Concluído</span>
        </div>
      </div>
    </>
  );
}

export default CoursesTopBar;
