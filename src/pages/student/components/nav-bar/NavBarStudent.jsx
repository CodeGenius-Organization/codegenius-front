import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useLocation, Link} from 'react-router-dom';

import {
  MdOutlineLocalLibrary,
  MdOutlineHiking,
  MdOutlinePerson,
  MdOutlineDiversity3,
  MdOutlineSettings,
  MdHelpOutline,
  MdLogout
} from "react-icons/md";

import './NavBarStudent.css'
import {
  MdArrowBackIosNew,
} from "react-icons/md";

import codegenius from "../../../../shared/assets/codegenius.svg";

function NavBarStudent() {
  const [navigateMenu, setNavigateMenu] = useState('cursos')
  const [menuToggle, setMenuToggle] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();


  function navigateLeft(teste) {
    switch (teste) {
      case 'seus-cursos':
        setNavigateMenu('seus-cursos')
        break;
      case 'profile':
        setNavigateMenu('profile')
        break;
      case 'social':
        setNavigateMenu('social')
        break;
      case 'contact':
        setNavigateMenu('contact')
        break;
      case 'settings':
        setNavigateMenu('settings')
        break;
      default:
        setNavigateMenu('cursos')
    }
  }

  
  function handleLogout() {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("dataUser");
    toast.success("Logout realizado com sucesso!")
    navigate("/");
  }



  return (
    <div className={`menu-left ${menuToggle ? 'menu-toggle' : ''}`}>
          <div className="logo-container">
            <div className={`logo-content ${menuToggle ? 'center-items' : ''}`}>
              <img src={codegenius} className="logo"></img>
              <div className={`${menuToggle ? 'text-toggle' : ''}`}>
                <h3>CodeGenius</h3>
                <p>version 1.0</p>
              </div>
            </div>
            <div className="arrow-container" onClick={() => {
              setMenuToggle(!menuToggle)
            }}>
              <MdArrowBackIosNew className={`arrow-menu ${menuToggle ? 'arrow-toggle' : ''}`} />
            </div>
          </div>

          <div className="list-menu-group">
            <div className={`list-menu-container`}>
              <h4>APRENDIZADO</h4>
              <ul>
                <Link to="course">
                <li className={`${location.pathname === '/student/course' ? 'active' : ''}`}>
                  <MdOutlineLocalLibrary className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>CURSOS</p>
                </li>
                </Link>
                <Link to="my-courses">
                <li className={`${location.pathname === '/student/my-courses' ? 'active' : ''}`}>
                <MdOutlineHiking className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                <p className={`${menuToggle ? 'text-toggle' : ''}`}>SEUS CURSOS</p>
                </li>
                </Link>
              </ul>
            </div>

            <div className={`list-menu-container`}>
              <h4>SOBRE VOCÊ</h4>
              <ul>
                <Link to="profile">
                <li className={`${location.pathname === '/student/profile' ? 'active' : ''}`}>
                <MdOutlinePerson className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                <p className={`${menuToggle ? 'text-toggle' : ''}`}>PERFIL</p>
                </li>
                </Link>
                <Link to="social">
                <li className={`${location.pathname === '/student/social' ? 'active' : ''}`}>
                <MdOutlineDiversity3 className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                <p className={`${menuToggle ? 'text-toggle' : ''}`}>SOCIAL</p>
                </li>
                </Link>
                <Link to="settings">
                <li className={`${location.pathname === '/student/settings' ? 'active' : ''}`}>
                <MdOutlineSettings className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                <p className={`${menuToggle ? 'text-toggle' : ''}`}>CONFIGURAÇÃO</p>
                </li>
                </Link>
              </ul>
            </div>

            <div className={`list-menu-container flex-end-style`}>
              <ul>
                
                <Link to="contact">
                <li className={`${location.pathname === '/student/contact' ? 'active' : ''}`}>
                  <MdHelpOutline className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>FALE CONOSCO</p>
                </li>
                </Link>
                <li onClick={() => handleLogout()}>
                  <MdLogout className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                  <p className={`${menuToggle ? 'text-toggle' : ''}`}>SAIR</p>
                </li>
              </ul>
            </div>
          </div>
          
          
        </div>
  )
}

export default NavBarStudent