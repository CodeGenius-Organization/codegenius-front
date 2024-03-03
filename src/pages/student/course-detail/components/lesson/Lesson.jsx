import React from "react";
// import {MdDone} from "react-icons/md";
import './Lesson.css'

function Lesson({ lesson, moduleOrder, onLessonClick }) {
    const { lessonOrder, contentDescription, lessonTitle } = lesson;
    // pra fazer aparecer e desaparecer o check de concluído,
    // mexer aqui futuramente, adicionando alguma propriedade tipo hidden sla

    return (
        <>
            <div className="lesson_card" onClick={() => onLessonClick(lesson) }>
                <div className="lesson_order">
                    <span>{moduleOrder} - {lessonOrder}</span>
                </div>
                <div className="lesson_details">
                    <div className="details_header">
                        <span className="lesson_title">{ lessonTitle }</span> 
                        {/* <MdDone style={doneStyle}/> */}
                    </div>
                    <div className="details_body">
                        <span className="content">
                            {contentDescription}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lesson