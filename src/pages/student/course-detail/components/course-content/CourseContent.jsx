import React from "react";
import  "./CourseContent.css"


function CourseContent({ lesson, goTo }) {
    
    return (
        <>
            <div className="course-content-container">
            <span className="course-content-title">{lesson ? lesson.title : "aulaaa"}</span>
            <span className="course-content-body">{lesson ? lesson.content: "aaaaaaaaaaaaaaaaaaaaaaaa"}</span>
            <button className="course-content-button" onClick={() => goTo("Exercícios")}>Próximo</button>
            </div>
        </>
    )
}

export default CourseContent