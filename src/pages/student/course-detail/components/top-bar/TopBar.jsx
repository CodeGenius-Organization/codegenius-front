import React from "react";

import { MdOutlineLocalLibrary } from "react-icons/md";
import { PiBarbell } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";

import'./TopBar.css'

function TopBar({ changeTab, currentTab }) {
    
    return (
        <>
            <div className="top-bar-container">
                <div className={ `top-bar-item ${currentTab === "Aula" ? 'top-bar-active' : ""}`} onClick={() => changeTab("Aula")}>
                    <MdOutlineLocalLibrary className="top-bar-icon" />
                    <span>Introdução</span>
                </div>
                <div className={ `top-bar-item ${currentTab === "Exercícios" ? 'top-bar-active' : ""}` } onClick={() => changeTab("Exercícios")}>
                    <PiBarbell className="top-bar-icon"  />
                    <span>Exercícios</span>
                </div>
                <div className={ `top-bar-item ${currentTab === "Prova" ? 'top-bar-active' : ""}` } onClick={() => changeTab("Prova")}>
                    <CgNotes className="top-bar-icon"  />
                    <span>Prova</span>
                </div>

            </div>
        </>
    )
}

export default TopBar