import React, {useContext, useState, useEffect} from 'react'
import './ContactUs.css'
import FormContact from '../../../shared/components/form-contact/FormContact'
import ContactImg from '../../../shared/assets/contact-us.svg'

function Contact() {

    return (
        <div className='contact-container'>
            <FormContact />
            <div className='img-contact-container'><img className='img-contact' src={ContactImg} alt=''></img></div>
        </div>
    )
}

export default Contact