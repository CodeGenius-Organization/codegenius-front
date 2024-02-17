import React from "react";

import { MdOutlineFormatListBulleted, MdDeveloperMode, MdOutlineSecurity } from "react-icons/md";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa"

import './CourseTopBar.css'

function DevTopBar({ onChangeCategory, currentCategory }) {

    return (
        <>
            <div className="container-course">
                <div className={`item-courses ${currentCategory === 'All' ? 'course-active' : ''}`}
                    onClick={() => {
                        if(currentCategory !== "All"){
                            onChangeCategory("All")
                        }
                    }
                    }>
                    <MdOutlineFormatListBulleted className="icon-style-course" />
                    <span>Todos</span>
                </div>
                <div className={`item-courses ${currentCategory === 'Backend' ? 'course-active' : ''}`}
                    onClick={() => {
                        if(currentCategory !== "Backend"){
                            onChangeCategory("Backend")
                        }
                    }}>

                    <FaCode className="icon-style-course" />
                    <span>Backend</span>
                </div>
                <div className={`item-courses ${currentCategory === 'Web' ? 'course-active' : ''}`}
                 onClick={() => {
                    if(currentCategory !== "Web"){
                        onChangeCategory("Web")
                    }
                }}>
                    <FaLaptopCode className="icon-style-course" />
                    <span>Web</span>
                </div>
                <div className={`item-courses ${currentCategory === 'Mobile' ? 'course-active' : ''}`} onClick={() => {
                    if(currentCategory !== "Mobile"){
                        onChangeCategory("Mobile")
                    }
                }}>
                    <MdDeveloperMode className="icon-style-course" />
                    <span>Mobile</span>
                </div>
                <div className={`item-courses ${currentCategory === 'Security' ? 'course-active' : ''}`} onClick={() => {
                    if(currentCategory !== "Security"){
                        onChangeCategory("Security")
                    }
                }}>
                    <MdOutlineSecurity className="icon-style-course" />
                    <span>Segurança</span>
                </div>
                <div className={`item-courses ${currentCategory === 'Database' ? 'course-active' : ''}`} onClick={() => {
                    if(currentCategory !== "Database"){
                    onChangeCategory("Database")
                    }
                }}>
                    <FaDatabase className="icon-style-course" />
                    <span>Banco de Dados</span>
                </div>
            </div>
        </>
    )
}

export default DevTopBar