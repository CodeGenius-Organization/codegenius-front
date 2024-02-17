import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation, useNavigate } from "react-router-dom"; 

import api from '../../../Api'
import "./CourseDetail.css"

import ModuleList from "./components/module-list/ModuleList"
import Cover from "./components/cover/Cover";
import TopBar from "./components/top-bar/TopBar";

function CourseDetail() {
    const arrowStyle = { color: "#FFF", width: "24px", height: "24px" }
  
    const location = useLocation()
    const navigate = useNavigate()

    const [course, setCourse] = useState({});

    const [currentTab, setCurrentTab] = useState('Introdução');
    const [firstLesson, setFirstLesson] = useState({});
    const [currentContent, setCurrentContent] = useState();
    const [currentLesson, setCurrentLesson] = useState({});


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

    const handleLessonSelection = (course) => {
        setCourse(course)
        // setCurrentLesson(lesson);
        // setFirstLesson(lesson.lessonContent);
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
            <div className="main-section">
                {/* TODO: componentizar o breadcrumb */}
                <div className="breadcrumb">
                    <span className="breadcrumb_element" onClick={ () => navigate("/student/course")}>
                        Cursos
                    </span>
                    <MdKeyboardArrowRight style={arrowStyle} />
                    <span className="breadcrumb_element now" onClick={() => window.location.reload()}>
                        {course.title}
                    </span>
                </div>
                <div className="course-detail-content">
                    <ModuleList modules={course.modules} onLessonClick={handleLessonSelection} />
                    <div className="learn_section">
                        {currentLesson.id &&
                            <TopBar currentTab={currentTab} />
                        }
                        {course &&
                            <Cover
                            title={course.title}
                            courseDescription={course.courseDescription}
                            contentDescription={course.contentDescription}
                            />
                        }
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default CourseDetail