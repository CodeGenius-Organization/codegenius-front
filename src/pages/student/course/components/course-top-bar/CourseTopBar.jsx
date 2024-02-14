import React from "react";

import { MdOutlineFormatListBulleted, MdDeveloperMode, MdOutlineSecurity } from "react-icons/md";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa"

import './CourseTopBar.css'

function DevTopBar({ onChangeCategory, currentCategory, onFilterCategory }) {

    return (
        <>
            <div className="container-course">
                <div className={`item ${currentCategory === 'All' ? 'course-active' : ''}`}
                    onClick={() => {
                        onChangeCategory("All")
                    }
                    }>
                    <MdOutlineFormatListBulleted className="icon-style-course" />
                    <span>Todos</span>
                </div>
                <div className={`item ${currentCategory === 'Backend' ? 'course-active' : ''}`}
                    onClick={() => {
                        onChangeCategory("Backend")
                    }}>

                    <FaCode className="icon-style-course" />
                    <span>Backend</span>
                </div>
                <div className={`item ${currentCategory === 'Web' ? 'course-active' : ''}`} onClick={() => {
                    onChangeCategory("Web")
                }}>
                    <FaLaptopCode className="icon-style-course" />
                    <span>Web</span>
                </div>
                <div className={`item ${currentCategory === 'Mobile' ? 'course-active' : ''}`} onClick={() => {
                    onChangeCategory("Mobile")
                }}>
                    <MdDeveloperMode className="icon-style-course" />
                    <span>Mobile</span>
                </div>
                <div className={`item ${currentCategory === 'Security' ? 'course-active' : ''}`} onClick={() => {
                    onChangeCategory("Security")
                }}>
                    <MdOutlineSecurity className="icon-style-course" />
                    <span>Segurança</span>
                </div>
                <div className={`item ${currentCategory === 'Database' ? 'course-active' : ''}`} onClick={() => {
                    onChangeCategory("Database")
                }}>
                    <FaDatabase className="icon-style-course" />
                    <span>Banco de Dados</span>
                </div>
            </div>
        </>
    )
}

export default DevTopBar