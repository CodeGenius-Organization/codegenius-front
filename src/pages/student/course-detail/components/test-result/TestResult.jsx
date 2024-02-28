import { useEffect, useState } from 'react'
import './TestResult.css'

function TestResult() {

    
    let score = 60
    let isApproved = score >= 60
    
    let startTime = '16h47'
    let durationTime = '22 min 13 seg'
    let attempts = '1'
    let heartsLeft = '2'

    let resultMessage = isApproved ? 'Parabéns, você passou na prova! Não se esqueça: você pode revisar os conteúdos e praticar seu conhecimento nos exercícios quantas vezes forem necessárias.' : 'Infelizmente, você não passou na prova. No entanto, não desanime! Você pode revisar os conteúdos e praticar seu conhecimento nos exercícios quantas vezes forem necessárias e tentar novamente.'
    let resultMessageStyle = isApproved ? {border: 'solid 1px green', color: 'green'} : {border: 'solid 1px red', color: 'red'}

    return (
        <>
            <div className="test-result-container">
                <span className='test-result-score'>Pontuação: {score}%</span>
                <div className='test-result-message' style={resultMessageStyle}>
                    <span>{resultMessage}</span>
                </div>
                <span>Prova iniciada às: <b>{startTime}</b></span>
                <span>Tempo de duração da prova: <b>{durationTime}</b></span>
                <span>Tentativas: <b>{attempts}</b></span>
                <span>Quantidade de vidas: <b>{heartsLeft}</b></span>
                <div className='test-result-buttons'>
                    <button>Voltar ao curso</button>
                    <button>Tentar novamente</button>
                    {isApproved &&
                        <button>Continuar</button>
                    }
                </div>
            </div>
        </>
    )
}

export default TestResult