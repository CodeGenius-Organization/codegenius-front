import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation } from "react-router-dom"; 

import api from '../../../Api'
import "./CourseDetail.css"

import ModuleList from "./components/module-list/ModuleList"
import Cover from "./components/cover/Cover";
import TopBar from "./components/top-bar/TopBar";

function CourseDetail({ courseId, handleUnselectCourse }) {
    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }
  
    const location = useLocation()
    const [course, setCourse] = useState({});
    const [currentTab, setCurrentTab] = useState('Introdução');
    const [firstLesson, setFirstLesson] = useState({});
    const [currentContent, setCurrentContent] = useState();
    const [currentLesson, setCurrentLesson] = useState({});


    const getCourseDetails = async () => {

        console.log(location.state.id)
        try {
            const response = await
                api.get(`course/courses/${location.state.id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                        }
                    });
            if (response.status === 200) {
                console.log(response.data)
                setCourse(response.data);
            }

        } catch (error) {
            console.log(error);
            throw new Error("Ocorreu um erro interno");
        }
    }

    useEffect(() => {
        getCourseDetails();
    }, [courseId, firstLesson, currentLesson])


    useEffect(() => {
        if (Object.keys(course).length === 0) {
            setCurrentContent('<p>Carregando...</p>');
        } else {
            setCurrentContent(
                <Cover
                   
                    lessonTitle={course.title}
                    lessonContent={course.contentDescription}
                />
            );
        }
    }, [course])

    // useEffect(() => {
    //     handleShowContent('Introdução');
    // }, [firstLesson, currentLesson])

    const changeTab = (tabName) => {
        setCurrentTab(tabName);
    }

    // handle events
    const handleBreadcrumbClick = () => {
        handleUnselectCourse(null);
    }

    const handleLessonSelection = (lesson) => {
        setCurrentLesson(lesson);
        setFirstLesson(lesson.lessonContent);
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
    //             setCurrentContent(<FriendCard />)
    //             setCurrentTab('Prova');
    //             break;
    //         default:
    //             setCurrentContent(<Cover
                    
    //                 lessonTitle={course.title}
    //                 lessonContent={course.contentDescription}
    //             />)
    //             break;
    //     }
    // }

    // let selectedTab;
    // if (currentTab === "Introdução") {
    //     selectedTab = <CourseContent
    //         
    //         lessonTitle={firstLesson.title}
    //         lessonContent={firstLesson.content}
    //     />
    // } else if (currentTab === "Exercícios") {
    //     selectedTab = <Exercises />
    // } else if (currentTab === "Prova") {
    //     selectedTab = <FriendCard />
    // }

    return (
        <>
            {/* <div className="container}>
                <div className="left_section}>

                </div> */}
            <div className="main_section">
                {/* TODO: componentizar o breadcrumb */}
                <div className="breadcrumb">
                    <span className="breadcrumb_element" onClick={handleBreadcrumbClick}>
                        Cursos
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className="breadcrumb_element now">
                        {course.title}
                    </span>
                </div>
                <div className="content">
                    <ModuleList courseId={course.id} onLessonClick={handleLessonSelection} />
                    <div className="learn_section">
                        {currentLesson.id &&
                            <TopBar currentTab={currentTab} />
                        }
                        {course &&
                            currentContent
                        }
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default CourseDetail