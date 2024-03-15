import React from "react";

import {
  MdOutlineFormatListBulleted,
  MdOutlineFavorite,
  MdCheckCircle,
} from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

function CoursesTopBar({ onChangeCategory, currentCategory }) {
  const iconStyle = { color: "#FFF", width: "24px", height: "24px" };
  console.log();

  return (
    <>
      <div className="container-course">
        <div
          className={`item-courses ${
            currentCategory === "Todos" && "course-active"
          }`}
          onClick={() => onChangeCategory?.("Todos")}
        >
          <MdOutlineFormatListBulleted className="icon-style-course" />
          <span>Todos</span>
        </div>
        <div
          className={`item-courses ${
            currentCategory === "Favoritos" && "course-active"
          }`}
          onClick={() => onChangeCategory?.("Favoritos")}
        >
          <MdOutlineFavorite style={iconStyle} />
          <span>Favoritos</span>
        </div>
        <div
          className={`item-courses ${
            currentCategory === "Em andamento" && "course-active"
          }`}
          onClick={() => onChangeCategory?.("Em andamento")}
        >
          <FaRegClock style={iconStyle} />
          <span>Em andamento</span>
        </div>
        <div
          className={`item-courses ${
            currentCategory === "Concluído" && "course-active"
          }`}
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
