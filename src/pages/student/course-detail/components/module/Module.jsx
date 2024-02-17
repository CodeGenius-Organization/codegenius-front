import React from "react";
import './Module.css'
import Lesson from "../lesson/Lesson";

function Module({ module, onLessonClick }) {
    const { moduleName, lessons, moduleOrder } = module;
    
    return (
        <div className="module">
            <span>{ moduleName }</span>
            <div className="lessons">
                { lessons.map((lesson) => (
                    <Lesson 
                    lesson={ lesson }
                    key={ lesson.id }
                    moduleOrder={ moduleOrder }
                    onLessonClick={ onLessonClick }/> 
                ))}
            </div>
        </div>
    )
}

export default Module