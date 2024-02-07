import React from 'react'
import './Settings.css'

import Privaty from './components/privaty/Privaty'
import UserData from './components/user-data/UserData'
import Achievements from '../components/achievements/Achievements'

function Settings() {

  const dataUser = JSON.parse(window.atob(sessionStorage.getItem('dataUser')))
  const token = sessionStorage.getItem('authToken')

  return (
    <div className='container-settings'>
        <Privaty />
        <div className='container-column'>
            <UserData data={dataUser} token={token}/>
            <Achievements/>
        </div>
    </div>
  )
}

export default Settings