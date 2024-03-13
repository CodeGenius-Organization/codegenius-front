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
import TestResult from "./components/test-result/TestResult";
import TestWarning from "./components/test-warning/TestWarning";

let hearts = 3 // TODO: get API para a quantidade de vidas

function CourseDetail() {
  
    const location = useLocation()
    const navigate = useNavigate()

    const [course, setCourse] = useState({});

    const [currentTab, setCurrentTab] = useState('Aula');
    const [firstLesson, setFirstLesson] = useState({});
    const [currentContent, setCurrentContent] = useState();
    const [currentLesson, setCurrentLesson] = useState({});

    const [isTestStarted, setIsTestStarted] = useState();
    
    function getCourseDetails(){
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
            }})
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

    const changeTab = (tabName) => {
        setCurrentTab(tabName);
    }

    const handleLessonSelection = (lesson) => {
        setCurrentLesson(lesson);
        console.log(lesson)
        setCurrentContent(lesson.lessonContent)
    }

    const handleStartTest = () => {
        setIsTestStarted(true);
    }

    const handleTryAgain = () => {
        hearts--;
        setIsTestStarted(false)
    }

    const goTo = (navigate) => {
        changeTab(navigate)
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
    if (currentTab === "Aula") {
        selectedTab = <CourseContent lesson={currentContent} goTo={goTo}/>
    } else if (currentTab === "Exercícios") {
        selectedTab = <Exercises onId={currentContent.id}/>
    } else if (currentTab === "Prova") {
        selectedTab = <TestWarning handleStartTest={handleStartTest} />
    }

    return (
        <>
            <div className="main-section">
                <div className="breadcrumb">
                    <span className="breadcrumb_element" onClick={ () => navigate("/student/course")}>
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
                        {currentLesson.id &&
                            <TopBar currentTab={currentTab} changeTab={changeTab}/>
                        }
                        {!currentLesson.id ? 
                            <Cover
                            title={course.title}
                            courseDescription={course.courseDescription}
                            contentDescription={course.contentDescription}
                            /> :
                            selectedTab
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetail