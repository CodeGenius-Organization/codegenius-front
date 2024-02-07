import React from "react";

import { MdOutlineList, MdOutlineFavorite, MdCheckCircle } from "react-icons/md";
import { FaRegClock } from "react-icons/fa"
import './MyCoursesTopBar.css'

function CoursesTopBar() {
    const iconStyle = {color: "#FFF", width: "24px", height: "24px"}
    
    return (
        <>
            <div className="container ">
                <div className="item ">
                    <MdOutlineList style={ iconStyle } />
                    <span>Todos</span>
                </div>
                <div className="item">
                    <MdOutlineFavorite  style={ iconStyle } />
                    <span>Favoritos</span>
                </div>
                <div className="item">
                    <FaRegClock style={ iconStyle } />
                    <span>Em andamento</span>
                </div>
                <div className="item">
                    <MdCheckCircle style={ iconStyle } />
                    <span>Concluído</span>
                </div>
            </div>
        </>
    )
}

export default CoursesTopBar