import React from 'react';
import './TestWarning.css'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

function TestWarning(
    { goTo, hearts }
    ) {

    return (
        <>
            <div className="test-warning-container">
                {/* Fazer os corações espaçados >b */}
                <span className='test-warning-hearts'>Quantidade de vidas: <b>{hearts}</b></span>
                <span className='test-warning-warn'>AVISO</span>
                <span className='test-warning-text'>Ao clicar no botão 'Iniciar', a contagem de tempo será ativada, o que impactará diretamente na sua pontuação final ao concluir esta prova. Preste atenção aos enunciados, pois você dispõe de um limite de 3 tentativas a cada 12 horas, como indicado acima onde está escrito 'Quantidade de Vida:'. Isso significa que, ao esgotar todas as suas chances, será necessário aguardar 12 horas para receber uma vida adicional e realizar uma nova tentativa. Lembre-se de que é fundamental obter uma nota mínima nesta prova para avançar para os próximos módulos. Boa sorte!</span>
                <button disabled={hearts <= 0} onClick={() => goTo("Prova")}>Iniciar</button>
            </div>
        </>
    )
}

export default TestWarning