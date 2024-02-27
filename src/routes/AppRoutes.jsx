import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//CSS reponsável no App.css

import Login from '../pages/login/Login'
import Institutional from '../pages/institutional/Institutional'
import HomeStudent from '../pages/student/HomeStudent'
import HomeTeacher from '../pages/teacher/HomeTeacher'
import ContactUsS from '../pages/student/contact-us/ContactUs'
import ContactUsT from '../pages/teacher/contact-us/ContactUs'
import SettingsT from '../pages/teacher/settings/Settings'
import Settings from '../pages/student/settings/Settings'
import ProfileS from '../pages/student/profile/Profile'
import ProfileT from '../pages/teacher/profile/Profile'
import Social from '../pages/student/social/Social'
import MyCourses from '../pages/student/my-courses/MyCourses'
import Course from '../pages/student/course/Course'
import NotFound from '../pages/not-found/NotFound'
import CourseDetail from '../pages/student/course-detail/CourseDetail'


function AppRoutes() {
 
    return (
        <>
            <BrowserRouter>  
                <Routes>
                    <Route exact path='/'  element={<Institutional/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/student' element={<HomeStudent/>} >                        
                        <Route path='course' element={<Course/>}/>
                        <Route exact path='/student/course/:name' element={<CourseDetail/>} />                 
                        <Route path='contact' element={<ContactUsS/>} />    
                        <Route path='settings' element={<Settings/>} />    
                        <Route path='profile' element={<ProfileS/>} />    
                        <Route path='social' element={<Social/>} />  
                        <Route path='my-courses' element={<MyCourses/>} />             
                    </Route> 
                    <Route path='/teacher' element={<HomeTeacher/>} >
                        <Route path='course' element={<p>Ola Professor</p>}/>
                        <Route path='contact' element={<ContactUsT/>}/>
                        <Route path='settings' element={<SettingsT/>}/>
                        <Route path='profile' element={<ProfileT/>}/>
                    </Route>
                </Routes> 
            </BrowserRouter>
        </>
    )
}

export default AppRoutes