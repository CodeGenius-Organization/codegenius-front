import React, { useEffect, useState } from "react";

import { MdOutlineLocalLibrary } from "react-icons/md";
import { PiBarbell } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";

import './TopBar.css'

function TopBar({ goTo, currentTab }) {

    const [secondState, setSecondState] = useState(0);
    const [minuteState, setMinuteState] = useState(0);
    const [hourState, setHourState] = useState(0);
    const [cronometro, setCronometro] = useState();

    let hour = 0;
    let minute = 0;
    let second = 0;
    let cron;

    function timer() {
        second++;
        setSecondState(second)
        if (second == 60) {
            minute++
            second = 0
            setSecondState(0);
            setMinuteState(minute);
        }
        if (minute == 60) {
            hour++
            minute = 0
            setMinuteState(0);
            setHourState(hour);
        }
    }

    function returnData(value) {
        return value > 9 ? value : `0${value}`
    }


    function finish() {
        clearInterval(cronometro);
        setSecondState(0);
        setMinuteState(0);
        setHourState(0);
    }

    useEffect(() => {
        clearInterval(cron);
        if (currentTab === "Prova") {
         cron = setInterval(() => { timer() }, 1000);
         setCronometro(cron)
        } else {
            finish()
        }
    }, [currentTab])

    return (
        <>
            <div className="top-bar-container">
                <div className="top-bar-content-item">
                    <div className={`top-bar-item ${currentTab === "Aula" ? 'top-bar-active' : ""}`} onClick={() => goTo("Aula")}>
                        <MdOutlineLocalLibrary className="top-bar-icon" />
                        <span>Introdução</span>
                    </div>
                    <div className={`top-bar-item ${currentTab === "Exercícios" ? 'top-bar-active' : ""}`} onClick={() => goTo("Exercícios")}>
                        <PiBarbell className="top-bar-icon" />
                        <span>Exercícios</span>
                    </div>
                    <div
                        className={`top-bar-item ${currentTab === "Prova" ||
                                currentTab === "Alerta-Prova" ||
                                currentTab === "Resultado-Prova"
                                ? 'top-bar-active' : ""}`}
                        onClick={() => {
                            if (currentTab === "Prova" ||
                                currentTab === "Alerta-Prova" ||
                                currentTab === "Resultado-Prova") {
                            } else {
                                goTo("Alerta-Prova")
                            }
                        }}>
                        <CgNotes className="top-bar-icon" />
                        <span>Prova</span>
                    </div>
                </div>
                {
                    currentTab === "Prova" ?
                        <div className="top-bar-timer-content">
                            <span>Tempo da prova: {returnData(hourState)}:{returnData(minuteState)}:{returnData(secondState)}</span>
                        </div>
                        : ""
                }
            </div>
        </>
    )
}

export default TopBar