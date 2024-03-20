import React, { useState } from 'react'
import "./Feedback.css"
import { MdOutlineClose } from "react-icons/md";
import trophy from "./assets/feedback-trophy.png"
import medal from "./assets/feedback-medal.png"
import StarRate from "../star-rating/StarRating"

function Feedback({ course, onModalClose, onSubmitFeedback }) {

    const [stars, setStars] = useState(0)
    const [message, setMessage] = useState("")

    function handleRate(star) {
        setStars(star)
    }

    return (
        <>
            <div className='feedback-container'>
                <div className='feedback-header'>
                    <span>FEEDBACK DO {course ? "CURSO" : "MÓDULO"}</span>
                    <MdOutlineClose className='feedback-close' onClick={() => onModalClose()} />
                </div>
                <div className='feedback-body'>
                    <div className='feedback-content'>
                        <span className='feedback-title'>{course ? "UHUU! Você concluiu este curso!" : "Parabéns por concluir o módulo!"}</span>
                        <div className='feedback-content-description'>
                            <img className='feedback-image' src={course ? trophy : medal} alt="" />
                            <span className='feedback-description'>{course ? "Nos dê sua opinião sobre o curso:" : "Nos dê sua opinião sobre o conteúdo deste módulo que acabou de concluir:"}</span>
                            <StarRate onRating={handleRate} />
                            <textarea className='feedback-message' name="" id="" cols="30" rows="10" placeholder='Opcional'
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}>
                            </textarea>
                        </div>
                        <div className='feedback-buttons'>
                            <button className='feedback-btn-red' onClick={() => onModalClose()}>Agora não</button>
                            <button className='feedback-btn-blue' onClick={() =>{ 
                            onSubmitFeedback(stars, message)
                            onModalClose()}}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback