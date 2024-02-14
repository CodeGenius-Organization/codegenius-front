import React from "react";
import "./Cover.css"

import { CiHeart } from "react-icons/ci";

function CourseContent({ lessonTitle, lessonContent }) {
    const heartStyle = { color: "#FFF", width: "24px", height: "24px" }
    
    return (
        <>
            <div className="learn_section">
                <span>O que aprenderá:</span>
                <div className="lesson_content">
                    <div className="lesson_header">
                        <span>{ lessonTitle }</span>
                        <div className="like_button">
                            <CiHeart style={heartStyle} />
                            <span>Curtir</span>
                        </div>
                    </div>
                    <div className="lesson_body">
                        <span>{ lessonContent }</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseContent