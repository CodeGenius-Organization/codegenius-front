import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useNavigate } from "react-router-dom";

import api from '../../../Api'
import "./CourseDetail.css"

import ModuleList from "./components/module-list/ModuleList"
import Cover from "./components/cover/Cover";
import TopBar from "./components/top-bar/TopBar";
import CourseContent from "./components/course-content/CourseContent";
import Exercises from "./components/exercises/Exercises";
import Test from "./components/test/Test";
import TestResult from "./components/test-result/TestResult";
import TestWarning from "./components/test-warning/TestWarning";

function CourseDetail() {

    const location = useLocation()
    const navigate = useNavigate()

    const [course, setCourse] = useState({});

    const [currentTab, setCurrentTab] = useState('Aula');
    const [currentContent, setCurrentContent] = useState();
    const [currentLesson, setCurrentLesson] = useState({});

    function getCourseDetails() {
        api.get(`course/courses/${location.state.id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    setCourse(response.data);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        getCourseDetails();
    }, [])

    // useEffect(() => {
    //     handleShowContent('Introdução');
    // }, [firstLesson, currentLesson])

    const goTo = (navigate) => {
        setCurrentTab(navigate);
    }

    const handleLessonSelection = (lesson) => {
        setCurrentLesson(lesson);
        setCurrentContent(lesson.lessonContent)
    }

    const finish = (respostas) => {
        // func para pegar resultado
        console.log("CHEGUEI AQ")
        console.log(respostas)
        // func para pegar hora
        goTo("Resultado-Prova")
    }

    const handleTryAgain = () => {
        hearts--;
        setIsTestStarted(false)
    }

    // function handleShowContent(selectedTab) {
    //     switch (selectedTab) {
    //         case 'Introdução':
    //             setCurrentContent(<Cover
    //                 lessonTitle={firstLesson && firstLesson.title}
    //                 lessonContent={firstLesson && firstLesson.content}
    //             />);
    //             setCurrentTab('Introdução');
    //             break;
    //         case 'Exercícios':
    //             setCurrentContent(<Exercises />)
    //             setCurrentTab('Exercícios');
    //             break;
    //         case 'Prova':
    //             break;
    //         default:
    //             setCurrentContent(<Cover
    //                 lessonTitle={course.title}
    //                 lessonContent={course.contentDescription}
    //             />)
    //             break;
    //     }
    // }

    let selectedTab;

    switch (currentTab) {
        case "Aula":
            selectedTab = <CourseContent lesson={currentContent} goTo={goTo} />
            break;
        case "Exercícios":
            selectedTab = <Exercises onId={currentContent.id} />
            break;
        case "Alerta-Prova":
            selectedTab = <TestWarning goTo={goTo} />
            break;
        case "Prova":
            selectedTab = <Test onId={currentContent.id} handleRespost={finish}/>
            break;
        case "Resultado-Prova":
            selectedTab = <TestResult goTo={goTo} />
            break;
        default:
            break;
    }

    return (
        <>
            <div className="main-section">
                <div className="breadcrumb">
                    <span className="breadcrumb_element" onClick={() => navigate("/student/course")}>
                        Cursos
                    </span>
                    <MdKeyboardArrowRight className="course-detail-arrow-style" />
                    <span className="breadcrumb_element now" onClick={() => window.location.reload()}>
                        {course.title}
                    </span>
                </div>
                <div className="course-detail-content">
                    <ModuleList modules={course.modules} onLessonClick={handleLessonSelection} />
                    <div className="course-detail-section">
                        {!currentLesson.id ?
                            <Cover
                                title={course.title}
                                courseDescription={course.courseDescription}
                                contentDescription={course.contentDescription}
                            /> :
                            <React.Fragment>
                                <TopBar currentTab={currentTab} goTo={goTo} />
                                {selectedTab}
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetail