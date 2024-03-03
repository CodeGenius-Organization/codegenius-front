import React from "react";

import style from './SingleAnswerQuestion.module.css'

function SingleAnswerQuestion({ payload, questionNumber, exercise, onGetAswer}) {
    // const { questionNumber, statement, questionsInfo, answersInfo } = payload;
    
    return (
        <form>
        <div className={ style.container }>
            <div className={ style.statement }><strong>Questão {questionNumber}</strong> - {exercise.statement}</div>
            <div className={ style.answers_container }>
                {exercise.respostas.map((item, index) => (
                    <label key={index}>
                    <input onClick={() => 
                        onGetAswer(exercise.id, item.correta, item.explicacao)
                    } className="answer" type="radio" name="1" value={item.correta}/>
                    <span>{item.resposta}</span>
                </label>
                ))}
            </div>
            
        </div>
        </form>
    )
}

export default SingleAnswerQuestion