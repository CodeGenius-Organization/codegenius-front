import React, {useState} from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
    MdArrowBackIosNew,
    MdOutlineLocalLibrary,
    MdOutlinePerson,
    MdOutlineEditOff,
    MdOutlineSettings,
    MdHelpOutline,
    MdLogout
} from "react-icons/md";

import './NavBarTeacher.css'

import { IoBarChartSharp } from "react-icons/io5";

import codegenius from "../../../../shared/assets/codegenius.svg";

function NavBarTeacher() {
  const [navigateMenu, setNavigateMenu] = useState('cursos')

  const [menuToggle, setMenuToggle] = useState(false)
  const navigate = useNavigate();

  function navigateLeft(option) {
    switch (option) {
        case 'cursos':
            setNavigateMenu('cursos')
            break;
        case 'criar-editar-cursos':
            setNavigateMenu('criar-editar-cursos')
            break;
        case 'analise':
            setNavigateMenu('analise')
            break;
        case 'profile':
            setNavigateMenu('profile')
            break;
        case 'settings':
            setNavigateMenu('settings')
            break;
        case 'contact':
            setNavigateMenu('contact')
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
                                <li className={`${navigateMenu === 'cursos' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('cursos')
                                }}>
                                    <MdOutlineLocalLibrary className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>CURSOS</p>
                                </li>
                                <li className={`${navigateMenu === 'criar-editar-cursos' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('criar-editar-cursos')
                                }}>
                                    <MdOutlineEditOff className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>CRIAR/EDITAR CURSOS</p>
                                </li>
                                <li className={`${navigateMenu === 'analise' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('analise')
                                }}>
                                    <IoBarChartSharp className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>ANÁLISE</p>
                                </li>
                            </ul>
                        </div>

                        <div className={`list-menu-container`}>
                            <h4>SUA ÁREA</h4>
                            <ul>
                                <li className={`${navigateMenu === 'profile' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('profile')
                                }}>
                                    <MdOutlinePerson className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>PERFIL</p>
                                </li>
                                <li className={`${navigateMenu === 'settings' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('settings')
                                }}>
                                    <MdOutlineSettings className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>CONFIGURAÇÃO</p>
                                </li>
                                <li className={`${menuToggle ? 'center-items' : ''} cursor-none`}>
                                    <input id="toggle" className={`toggle `} type="checkbox"></input>
                                    <label htmlFor="toggle"></label>
                                </li>
                            </ul>
                        </div>

                        <div className={`list-menu-container flex-end-style`}>
                            <ul>
                                <li className={`${navigateMenu === 'contact' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('contact')
                                }}>
                                    <MdHelpOutline className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>FALE CONOSCO</p>
                                </li>
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

export default NavBarTeacher