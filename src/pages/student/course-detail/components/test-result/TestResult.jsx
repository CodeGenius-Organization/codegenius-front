import { useEffect, useState } from 'react'
import './TestResult.css'

import Feedback from "../feedback/Feedback"

function TestResult({
    hearts,
    onResult,
    onDuration,
    onStartTest,
    onSubmitFeedback,
    goTo }) {

    const [modalVisible, setModalVisible] = useState(onResult>=60)

    function closeModal() {
        setModalVisible(false)
    }

    return (
        <>
            <div className="test-result-container">
                <span className='test-result-score'>Pontuação: {onResult}%</span>
                <div className={`test-result-message ${onResult >= 60 ? "trm-success" : "trm-error"}`}>
                    <span>{onResult >= 60 ?
                     'Parabéns, você passou na prova! Não se esqueça: você pode revisar os conteúdos e praticar seu conhecimento nos exercícios quantas vezes forem necessárias.' :
                      'Infelizmente, você não passou na prova. No entanto, não desanime! Você pode revisar os conteúdos e praticar seu conhecimento nos exercícios quantas vezes forem necessárias e tentar novamente.'}</span>
                </div>
                <span>Prova iniciada às: <b>{onStartTest}</b></span>
                <span>Tempo de duração da prova: <b>{onDuration}</b></span>
                <span>Quantidade de vidas: <b>{hearts}</b></span>
                <div className='test-result-buttons'>
                    <button onClick={() => goTo('Aula')}>Voltar ao curso</button>
                    {onResult >= 60 ?
                        // CHAMAR O MODAL DE FEEDBACK
                        <button onClick={() => goTo('Aula')}>Continuar</button> :
                        <button onClick={() => goTo('Alerta-Prova')}>Tentar novamente</button>
                    }
                </div>
            </div>

            {modalVisible &&
            <div className='feedback-result'>
                <Feedback course={false} onModalClose={closeModal} onSubmitFeedback={onSubmitFeedback}/>
            </div>
            }
        </>
    )
}

export default TestResult