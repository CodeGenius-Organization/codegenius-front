import React, { useState, useEffect } from "react";
import api from '../../../Api'

import './Course.css'

import CourseTopBar from './components/course-top-bar/CourseTopBar'
import Filters from '../../../shared/components/filter/Filter'
import CardLesson from '../components/card-lesson/CardLesson'

// import CoursesJson from './CoursesJson'

function Course() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedFilter, setSelectedFilter] = useState('none');
    const [coursesCache, setCoursesCache] = useState({});
    const [courses, setCourses] = useState([])
    const [selectedCardId, setSelectedCardId] = useState(null);
  

    const handleCategory = (category) => {
        setSelectedCategory(category)
        // console.log(category)
    }

    const handleFilter = (filter) => {
        setSelectedFilter(filter)
        // console.log(filter)
    }


    function getAllCourses(){
        api.get(`course/courses/`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
            }
        })
        .then((response) => {
            if (response.status === 200) {
                setCourses(response.data)
            }})
        .catch((error) => {
            console.log(error)
        });
    }

    function getByCategoryOrderSize(){
        setCourses([])
        api.get(`course/courses/category/${selectedCategory}/${selectedFilter}/${courses.length}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
            }
        })
        .then((response) => {
            if (response.status === 200) {
                setCourses(response.data)
            }})
        .catch((error) => {
            console.log(error)
        });
    }

    

    useEffect(() => {
        if (selectedCategory === 'All') {
            getAllCourses()
        }else{
            getByCategoryOrderSize()
        }
    }, [selectedCategory, selectedFilter]);
    
    return (
        <>
            <div className="main-section-course">
                <CourseTopBar
                    onChangeCategory={handleCategory}
                    currentCategory={selectedCategory}
                />
                <Filters onChangeFilter={handleFilter} />
                {courses.length === 0 ? (
                    <div className="empty-courses">
                        <span className="not-found-courses">Cursos não encontrados!</span>
                    </div>
                ) : (
                    <>
                        <div className="course-list">
                            {
                                courses.map((course, index) => (
                                    <React.Fragment key={index}>
                                    <CardLesson course={course} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Course