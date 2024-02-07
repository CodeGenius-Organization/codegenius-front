import React, { useEffect, useState} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./HomeTeacher.css";
import { toast } from "react-toastify";

import api from "../../Api";
import NavBarTeacher from "./components/nav-bar/NavBarTeacher";




// import LandingPage from "../student/landing-page/LandingPage";
// import CourseCreation from '../../pages/teacher/CourseCreation';
// import Profile from "../../components/student-profile/Profile";
// import Contact from "../form-contact/Contact";
// import Social from "../student-social/Social";
// import Courses from "../student/courses/Courses";
// import Configurtion from "../teacher/teacher-settings/Configuration";
// import ModuleCreation from "../teacher/ModuleCreation";
// import ImportExport from "../teacher/teacher-import-txt/ImportExport";

function LogOut() {
    const navigate = useNavigate();
    // const [contentHome, setContentHome] = useState(<LandingPage />);
    const [emailUser, setEmailUser] = useState();
    const [token, setToken] = useState();

    const [courseTitle, setCourseTitle] = useState();
    const [courseDescription, setCourseDescription] = useState();
    const [courseLanguages, setCourseLanguages] = useState('Java');
    const [courseCategories, setCourseCategories] = useState('Desenvolvimento');
    const [modules, setModules] = useState([]);


    const handleNext = (nextPage) => {
        switch (nextPage) {
            case 'create-module':
                setContentHome(<ModuleCreation 
                                onNext={handleNext}
                                onFinish={handleFinish}
                                />)
                break;
            case 'importar-exportar':
                setContentHome(<ImportExport />)
                break;
        }
    }

    const getCategoryId = async () => {
        try {
            const response = await
            api.get(`course/categories/${courseCategories}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 200) {
                return response.data.id;
            }
        } catch (error) {
            throw new Error("Ocorreu um erro interno")
        }
    }
    
    const getLanguageId = async () => {
        try {
            const response = await
            api.get(`course/languages/${courseLanguages}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 200) {
                return response.data.id;
            }
        } catch (error) {
            throw new Error("Ocorreu um erro interno")
        }
    }

    const postCourse = async (courseInfo) => {
        console.log(courseInfo)
        try {
            const response = await
            api.post(`course/courses/`,
            courseInfo,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 201) {
                return response.data.id;
            }
        } catch (error) {
            console.log(error)
            throw new Error("Ocorreu um erro interno")
        }
    }

    const postModule = async (moduleInfo) => {
        console.log("Entrei no post do módulo")
        try {
            const response = await
            api.post(`course/modules/`,
            moduleInfo,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 201) {
                return 1;
            }
        } catch (error) {
            console.log(error)
            throw new Error("Ocorreu um erro interno")
        } 
    }
    
    const handleFinish = async (modules) => {
        try {
            const categoryId = await getCategoryId();
            const languageId = await getLanguageId();
    
            const courseInfo = {
                title: sessionStorage.getItem("courseTitle"),
                courseDescription: sessionStorage.getItem("courseDescription"),
                contentDescription: "Descrição do conteúdo muito bacana, você vai aprender muito neste curso!",
                available: true,
                languageIds: [languageId],
                categoryIds: [categoryId]
            };
    
            const newCourseId = await postCourse(courseInfo);
            
            await setModules(modules);
            let success = true;

            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleInfo = {
                    "courseId": newCourseId,
                    "moduleName": module,
                    "moduleOrder": index + 1
                };
    
                const result = await postModule(moduleInfo);
                
                if (!result) {
                    success = false;
                    break;
                }
            }
    
            if (success) {
                toast.success("Curso criado com sucesso!");
                setTimeout(() => {
                    setContentHome(<LandingPage />);
                }, 2500);
            } else {
                toast.error("Houve uma falha na criação do curso");
            }
        } catch (error) {
            console.error(error);
            // Trate o erro aqui
        }
    };
    

    const handleTitleChange = (title) => {
        sessionStorage.setItem("courseTitle", title)
        setCourseTitle(title);
    }

    const handleDescriptionChange = (description) => {
        sessionStorage.setItem("courseDescription", description)
        setCourseDescription(description);
    }

    function handleLogout() {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("dataUser");
        toast.success("Logout realizado com sucesso!")
        navigate("/institutional");
    }
    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };

    useEffect(() => {

        if(sessionStorage.getItem('authToken') !== null){
          try {
            const tokenT = sessionStorage.getItem('authToken')
            setToken(tokenT)
            const emailToken = parseJwt(tokenT).sub;
            setEmailUser(emailToken)
            // console.log(emailToken)
            if(location.pathname == "/teacher") navigate("/teacher/course")
            if(emailToken.split("@")[1] !== "mindtech.code"){
                navigate("/student/course");
              } 
    
            // getDataHome(emailToken, tokenT)
            
          } catch (error) {
            console.log(error)  
          }
          
        }  else {
          navigate("/")
          toast.error("Você não está autenticado!")
    
        }
      
      }, [])

    return (
        <>
            <div className="home-container">
                <NavBarTeacher/>
                <Outlet/>
            </div>
        </>
    );
}

export default LogOut;