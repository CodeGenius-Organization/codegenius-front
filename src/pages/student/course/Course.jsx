import React, { useState, useEffect } from "react";
import api from '../../../Api'
// import Course from '../course/Course'

import './Course.css'

import CourseTopBar from './components/course-top-bar/CourseTopBar'
import Filters from '../../../shared/components/filter/Filter'
import CardLesson from '../components/card-lesson/CardLesson'
import CoursesJson from './CoursesJson'

function LandingPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [coursesCache, setCoursesCache] = useState({});
    const [courses, setCourses] = useState([])
    const [selectedCardId, setSelectedCardId] = useState(null);

    const courseList = CoursesJson();
    const [courseListVariable, setCourseListVariale] = useState(courseList);

    const handleTabClick = (category) => {
        setSelectedCategory(category)
    }

    function filterCategory(categorySelected) {

        if (categorySelected === "All") {
            setCourseListVariale(courseList)
        } else {
            const newArray = []

            for (let i = 0; i < courseList.length; i++) {
                const categoria = courseList[i].categories;
                for (let j = 0; j < categoria.length; j++) {
                    if (categoria[j].category == categorySelected) {
                        newArray.push(courseList[i])
                    }
                }
            }
            setCourseListVariale(newArray);
        }
    }




    const handleCardClick = (courseId) => {
        // tentativa falha de fazer o navegador armazenar a última página acessada antes de redirecionar
        // pra poder usar o botão de voltar página do navegador...
        // window.history.pushState(null, null, "/");
        // window.dispatchEvent(new Event('popstate'));

        setSelectedCardId(courseId)
    }

    const getCourses = async () => {
        try {
            if (coursesCache[selectedCategory]) {
                setCourses(coursesCache[selectedCategory])
            } else {
                const response = await
                    api.get(`course/courses/category/Desenvolvimento`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                            }
                        });
                if (response.status === 200) {
                    // console.log(response.data)
                    // setCourses(response.data);
                    // setCoursesCache({...coursesCache, [selectedCategory]: response.data})
                }
            }
        } catch (error) {
            console.log(error)
            throw new Error("Ocorreu um erro interno")
        }
    }

    useEffect(() => {
        // setSelectedCardId(null);
        getCourses();
    }, [selectedCategory, coursesCache, selectedCardId]);

    return (

        <>
            <div className="main-section-course">
                <CourseTopBar
                    onChangeTab={handleTabClick}
                    currentCategory={selectedCategory}
                    onFilterCategory={filterCategory}
                />
                <Filters />
                {courseListVariable.length === 0 ? (
                    <div className="empty-courses">
                        <span className="not-found-courses">Cursos não encontrados!</span>
                    </div>
                ) : (
                    <>
                        <div className="course-list">
                            {
                                courseListVariable.map((course) => (
                                    <CardLesson onCardClick={handleCardClick} key={course.id} course={course} />
                                ))
                            }
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default LandingPage