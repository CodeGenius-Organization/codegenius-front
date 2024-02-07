import React from "react";

import { MdOutlineFormatListBulleted, MdDeveloperMode, MdOutlineSecurity } from "react-icons/md";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa"

import './CourseTopBar.css'

function DevTopBar({ onChangeTab, currentCategory, onFilterCategory }) {

    return (
        <>
            <div className="container-course">
                <div className={`item ${currentCategory === 'Todos' ? 'course-active' : ''}`}
                    onClick={() => {
                        onChangeTab("All")
                        onFilterCategory("All")
                    }
                    }>
                    <MdOutlineFormatListBulleted className="icon-style-course" />
                    <span>Todos</span>
                </div>
                <div className={`item ${currentCategory === 'Backend' ? 'course-active' : ''}`}
                    onClick={() => {

                        onChangeTab("Backend")
                        onFilterCategory("Backend")
                    }}>

                    <FaCode className="icon-style-course" />
                    <span>Backend</span>
                </div>
                <div className={`item ${currentCategory === 'Web' ? 'course-active' : ''}`} onClick={() => {
                    onFilterCategory("Web")
                    onChangeTab("Web")
                }}>
                    <FaLaptopCode className="icon-style-course" />
                    <span>Web</span>
                </div>
                <div className={`item ${currentCategory === 'Mobile' ? 'course-active' : ''}`} onClick={() => {
                    onChangeTab("Mobile")
                    onFilterCategory("Mobile")
                }}>
                    <MdDeveloperMode className="icon-style-course" />
                    <span>Mobile</span>
                </div>
                <div className={`item ${currentCategory === 'Security' ? 'course-active' : ''}`} onClick={() => {
                    onChangeTab("Security")
                    onFilterCategory("Security")
                }}>
                    <MdOutlineSecurity className="icon-style-course" />
                    <span>Segurança</span>
                </div>
                <div className={`item ${currentCategory === 'Database' ? 'course-active' : ''}`} onClick={() => {
                    onChangeTab("Database")
                    onFilterCategory("Database")
                }}>
                    <FaDatabase className="icon-style-course" />
                    <span>Banco de Dados</span>
                </div>
            </div>
        </>
    )
}

export default DevTopBar