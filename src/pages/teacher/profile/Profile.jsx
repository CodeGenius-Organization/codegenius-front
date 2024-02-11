import React from 'react'
import './Profile.css'
import CardProfile from "./components/card-profile/CardProfile";
import CardCourse from "./components/card-course/CardCourse"

function Profile() {
  return (
    <div className='main-profile-container'>
        <CardProfile/>
        <div className='achivements-container-profile'>
        <CardCourse/>
         </div>
        </div>
  )
}

export default Profile