import React, { useEffect, useState } from 'react'
import './Exercises.css'
import SingleAnswerQuestion from "../single-answer-question/SingleAnswerQuestion"

import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import api from '../../../../../Api';

function Exercises({ onId }) {

    const correctStyle = { color: "#2FDE56", width: "20px", height: "20px" }
    const wrongStyle = { color: "#FF3737", width: "20px", height: "20px" }

    const [questoes, setQuestions] = useState([])
    const [userAnswer, setUserAnswer] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [isInfoVisible, setIsInfoVisible] = useState(true)

    let dataAnswer = [];
    let dataChangeAnswer = []

    function getListExercices() {
        api.get(`/game/questions/exercicios/${onId}`,
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setQuestions(response.data);

            response.data.map(item => {
                dataAnswer = [...dataAnswer, {
                    id: item.id,
                    answerCorrect: false,
                    explicacao: "",
                    }]
            })
            setUserAnswer(dataAnswer)
        }})
        
    .catch((error) => {
        console.log(error)
    });
    }


    useEffect(() => {
        getListExercices()
        
    },[])
    
    function getAswer(id, aswer, explicacao) {
        
        setIsInfoVisible(false)
        console.log(`${id} + ${aswer} + ${explicacao}`)
    
        dataChangeAnswer = userAnswer.map(item => {
        
            if (item.id == id) {
                item.answerCorrect = aswer
                item.explicacao = explicacao
            }
           return item
        })
        setUserAnswer(dataChangeAnswer)
        console.log(userAnswer)
    }

    function visibleAswer() {
        if (!isVisible) {
            const inputs = document.querySelectorAll('.answer')
            inputs.forEach((item, index) => {
                if (!item.checked) {
                    item.setAttribute("disabled", true)
                }
            }
            )
        } else {
            const inputs = document.querySelectorAll('.answer')
            inputs.forEach(item => {
                if (!item.checked) {
                    item.removeAttribute("disabled")
                }
            }
            )
        }
        setIsVisible(!isVisible)

    }


    return (
        <div className='exercices-container'>
            {
                isInfoVisible ? (<div className='exercises-content-info'>
                    <span className='exercises-info'>
                        Os exercícios são totalmente opcionais. Você pode prosseguir clicando nos botões acima. Eles foram criados para proporcionar uma oportunidade de praticar e reforçar o que foi apresentado nos conteúdos anteriores.
                    </span>
                </div>
                ) : ("")
            }
            {questoes !== null ? questoes.map((exercise, index) => (
                <React.Fragment key={index}>
                    <SingleAnswerQuestion
                        
                        questionNumber={index + 1}
                        onGetAswer={getAswer}
                        exercise={exercise}
                    />

                    {isVisible && (
                        <div className={"result"} style={userAnswer[index]?.answerCorrect ? { border: "solid 1px #2FDE56", color: "#2FDE56" } : { border: "solid 1px #FF3737", color: "#FF3737" }}>
                            <div className={"correct_wrong"}>
                                <span>{userAnswer[index]?.answerCorrect ? "Correto" : "Errado"}</span>
                                {userAnswer[index]?.answerCorrect ? <MdCheck style={correctStyle} /> : <MdClose style={wrongStyle} />}
                            </div>
                            <div className={"explanation"}>
                                <span>{userAnswer[index]?.explicacao} </span>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            )) : ""}

            <button className={"btn_corrigir"} onClick={() => visibleAswer()}>{isVisible ? "Tentar Novamente" : "Corrigir"}</button>
        </div>
    )
}

export default Exercises