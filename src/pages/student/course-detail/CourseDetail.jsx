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

    const [startTest, setStartTest] = useState("");
    const [durationTest, setDurationTest] = useState("");
    const [resultPercent, setResultPercent] = useState(0);
    const [hearts, setHearts] = useState(0);

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

    function getHearts() {
        api.get(`user/hearts/${JSON.parse(atob(sessionStorage.getItem("dataUser"))).id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    setHearts(response.data.coracao)
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    function patchHearts() {
        let updateVida = hearts

        api.put(`user/hearts/${JSON.parse(atob(sessionStorage.getItem("dataUser"))).id}`,
            {
                coracao: (updateVida - 1).toString(),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    setHearts(response.data.coracao)
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        getCourseDetails();
        getHearts()
    }, [])

    useEffect(() => {
        if (currentTab === "Prova") {
            let today = new Date()
            setStartTest(`${today.getHours() + 'h'}${today.getMinutes()}`)
        }
    }, [currentTab])


    const goTo = (navigate) => {
        setCurrentTab(navigate);
    }

    const handleLessonSelection = (lesson) => {
        setCurrentLesson(lesson);
        setCurrentContent(lesson.lessonContent)
    }

    const finish = (perc) => {
        setResultPercent(perc)

        if (perc < 60) {
            patchHearts()
        }

        goTo("Resultado-Prova")
    }

    function t(h, m, s) {
        let duration = `${h > 0 ? h + ' hr(s) ' : ""}${m > 0 ? m + ' min ' : ""}${s > 0 ? s + ' seg' : ""}`
        setDurationTest(duration)
    }

    let selectedTab;

    switch (currentTab) {
        case "Aula":
            selectedTab = <CourseContent lesson={currentContent} goTo={goTo} />
            break;
        case "Exercícios":
            selectedTab = <Exercises onId={currentContent.id} />
            break;
        case "Alerta-Prova":
            selectedTab = <TestWarning hearts={hearts} goTo={goTo} />
            break;
        case "Prova":
            selectedTab = <Test onId={currentContent.id} handleRespost={finish} />
            break;
        case "Resultado-Prova":
            console.log(hearts)
            console.log(resultPercent)
            console.log(durationTest)
            console.log(startTest)
            selectedTab = <TestResult
                hearts={hearts}
                onResult={resultPercent}
                onDuration={durationTest}
                onStartTest={startTest}
                goTo={goTo} />
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
                                <TopBar currentTab={currentTab} goTo={goTo} t={t} />
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