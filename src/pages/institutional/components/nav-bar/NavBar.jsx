import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import scrollToHelper from "../../../../routes/AppRoutes";

function NavBar() {
  
  const navigate = useNavigate();
  
  function handleMenuMobile() {
    const menu = document.getElementById("navbar-mobile");
    menu.classList.toggle("active");
    const menuClose = document.getElementById("navbar-closeOut");
    menuClose.classList.toggle("activeClose");
  }

  return (
    <div className="institucional-navbar-container">
      <div className="institucional-navbar-content">
        <h3>MindTech</h3>
        <FiMenu className="institucional-menu-mobile" onClick={handleMenuMobile} />
        {/* Div ao lado do menu mobile para fechar ao clicar */}
        <div id="navbar-closeOut" className="institucional-navbar-handle-closeOut" onClick={handleMenuMobile}></div>
        <ul id="navbar-mobile" className="institucional-navbar-menu">
          <AiOutlineClose
            className="institucional-menuButtonClose"
            onClick={handleMenuMobile}
          />
          <li className="institucional-nav_button" data-scroll="#home" onClick={scrollToHelper}>HOME</li>
          <li className="institucional-nav_button" data-scroll="#sobre_nos" onClick={scrollToHelper}>SOBRE NÓS</li>
          <li className="institucional-nav_button" data-scroll="#codegenius" onClick={scrollToHelper}>CODEGENIUS</li>
          <li className="institucional-nav_button" data-scroll="#equipe" onClick={scrollToHelper}>EQUIPE</li>
          <li onClick={() => navigate("/login")}>
            <FiLogIn />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;