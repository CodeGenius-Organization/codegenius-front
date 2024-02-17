import React from 'react'
import "./Feedback.css"
import { MdOutlineClose } from "react-icons/md";
import {MdOutlineStarOutline, MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import trophy from "./assets/feedback-trophy.png"
//import medal from "./assets/feedback-medal.png"

function Feedback() {
  return (
    <>
    <span>
        <div className='feedback-container'>
            <div className='feedback-header'>
                <span>FEEDBACK DO CURSO</span>
                <MdOutlineClose className='feedback-close'/>
            </div>
            <div className='feedback-body'>
                <div className='feedback-content'>
                    <span className='feedback-title'>UHUU! Você concluiu este curso!</span>
                    <div className='feedback-content-description'>
                    <img className='feedback-image' src={trophy} alt="" />
                    <span className='feedback-description'>Nos dê sua opinião sobre o curso:</span>
                    <div className='feedback-stars'>
                        <MdOutlineStarOutline className='feedback-icon-star'/>
                        <MdOutlineStarOutline className='feedback-icon-star'/>
                        <MdOutlineStarOutline className='feedback-icon-star'/>
                        <MdOutlineStarOutline className='feedback-icon-star'/>
                        <MdOutlineStarOutline className='feedback-icon-star'/>
                    </div>
                    <textarea className='feedback-message' name="" id="" cols="30" rows="10" placeholder='Opcional'></textarea>
                    </div>
                    <div className='feedback-buttons'>
                        <button className='feedback-btn-red'>Agora não</button>
                        <button className='feedback-btn-blue'>Enviar</button>
                    </div>
                </div>

            </div>
        </div>
    </span>
    </>
  )
}

export default Feedback