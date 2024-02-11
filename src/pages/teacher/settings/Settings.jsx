import React from 'react'

import Avatar from "./avatar/Avatar"
import PasswordReset from './password-reset/PasswordReset'
import PersonalData from './personal-data/PersonalData'
import ConfirmEmail from './confirm-email/ConfirmEmail'

import "./Settings.css"

function Settings() {
  return (
    <>
      <div className='container-config-teacher'>
            <Avatar />
        <div className='content-settings'>
            <PersonalData /> 
            <PasswordReset/>
            <ConfirmEmail />
        </div>
      </div>
    </>
  )
}

export default Settings