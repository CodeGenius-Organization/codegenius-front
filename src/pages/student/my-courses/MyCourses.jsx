import React from "react";

import './MyCourses.css'

import Filter from '../../../shared/components/filter/Filter'
import CardLesson from '../components/card-lesson/CardLesson'
import MyCoursesTopBar from "./components/my-courses-top-bar/MyCoursesTopBar";

function MyCourses() {
    return (
        <>
            <div className="main_section">
                <MyCoursesTopBar/>
                <Filter />
                <div className="course_list">
                    {/* <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson />
                    <CardLesson /> */}
                </div>
            </div>
        </>
    )
}

export default MyCourses