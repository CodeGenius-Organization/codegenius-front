import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
//CSS reponsável no App.css

import Login from '../pages/login/Login'
import Institutional from '../pages/institutional/Institutional'
import HomeStudent from '../pages/student/HomeStudent'
import HomeTeacher from '../pages/teacher/HomeTeacher'
import ContactUs from '../pages/student/contact-us/ContactUs'
import Settings from '../pages/student/settings/Settings'
import Profile from '../pages/student/profile/Profile'
import Social from '../pages/student/social/Social'
import MyCourses from '../pages/student/my-courses/MyCourses'
import Course from '../pages/student/course/Course'
import NotFound from '../pages/not-found/NotFound'

function AppRoutes() {
 
    return (
        <>
            <BrowserRouter>  
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/' element={<Institutional/>} />
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/student' element={<HomeStudent/>} >
                        <Route path='course' element={<Course/>} />        
                        <Route path='contact' element={<ContactUs/>} />    
                        <Route path='settings' element={<Settings/>} />    
                        <Route path='profile' element={<Profile/>} />    
                        <Route path='social' element={<Social/>} />  
                        <Route path='my-courses' element={<MyCourses/>} />  
                    </Route> 
                    <Route path='/teacher' element={<HomeTeacher/>} >
                        <Route path='course' element={<p>Ola Professor</p>}/>
                    </Route>
                </Routes> 
            </BrowserRouter>
        </>
    )
}

export default AppRoutes