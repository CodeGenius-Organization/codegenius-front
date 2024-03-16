import React, { useEffect, useState } from 'react'
import './Test.css'
import SingleAnswerQuestion from "../single-answer-question/SingleAnswerQuestion"

import api from '../../../../../Api';

function Test({onId, handleRespost}) {

    const [questoes, setQuestions] = useState([])
    const [userAnswer, setUserAnswer] = useState([])

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
        
        // console.log(`${id} + ${aswer} + ${explicacao}`)
        dataChangeAnswer = userAnswer.map(item => {
        
            if (item.id == id) {
                item.answerCorrect = aswer
                item.explicacao = explicacao
            }
           return item
        })
        setUserAnswer(dataChangeAnswer)
        // console.log(userAnswer)
    }

    return (
        <div className='exercices-container'>
            {questoes !== null ? questoes.map((exercise, index) => (
                <React.Fragment key={index}>
                    <SingleAnswerQuestion
                        questionNumber={index + 1}
                        onGetAswer={getAswer}
                        exercise={exercise}
                    />
                </React.Fragment>
            )) : ""}

            <button className={"btn_corrigir"} onClick={() => handleRespost(userAnswer)}>Finalizar</button>
        </div>
    )
}

export default Test