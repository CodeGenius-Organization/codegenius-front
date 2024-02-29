import "./CarouselInstitutional.css";
import codegenius_logo from '../../../../shared/assets/codegenius.svg';

import { useState, useEffect } from 'react';

const textos = [
    {
        titulo: 'Olá, visitante!',
        subtitulo: 'Seja nosso aluno!',
        texto: `A MindTech sempre prioriza o seu aprendizado, pois
        acreditamos que o conhecimento é a chave para abrir portas
        ilimitadas. Por isso, contamos com uma equipe de
        especialistas dedicados a guiá-lo em cada passo do seu
        percurso de aprendizagem.`         
    },
    {
        titulo: 'Ensino Dinâmico',
        subtitulo: 'Aprenda enquanto se diverte',
        texto: `Oferecemos uma ampla variedade de
        conteúdos práticos e exercícios envolventes, projetados para
        cativar e desafiar nossos alunos de forma única. Além disso, 
        os professores têm a oportunidade de criar seus próprios módulos personalizados.`         
    },
    {
        titulo: 'Dashboards e metas',
        subtitulo: 'Monitore sua evolução',
        texto: `Escolha os dias em que pode mergulhar no aprendizado em seu próprio 
        ritmo e abrace a jornada de evolução ao acompanhar de perto cada curso que 
        você conquista.`         
    },
    {
        titulo: 'Atualizações',
        subtitulo: 'Última versão: 1.0',
        texto: `Nesta útlima atualização, lançamos novas funcionalidades, 
        como ranking global dos alunos da plataforma, novos conteúdos, 
        materiais de consulta e muito mais.`         
    }
]

function CarouselLine({iterador, step, setIterador}){
    return <div onClick={() => setIterador(step)} className={`institucional-line-box ${iterador === step ? 'institucional-line-box-bold' : ""}`}>
                <p className={iterador !== step ? 'institucional-hide' : ""} >{`0${iterador + 1}`}</p>
                <div className={`institucional-line ${iterador === step ? 'institucional-bold' : ""}`}></div>
            </div>
}

function CarouselSteps({iterador, setIterador}) {
    return  (
    <>
       <CarouselLine step={0} iterador={iterador} setIterador={setIterador}/>
       <CarouselLine step={1} iterador={iterador} setIterador={setIterador}/>
       <CarouselLine step={2} iterador={iterador} setIterador={setIterador}/>
       <CarouselLine step={3} iterador={iterador} setIterador={setIterador}/>
    </>
    )
}

function CarouselInstitutional({ onModal }) {
    const [iterador, setIterador] = useState(0);

    useEffect(() => {},[]);

    function atualizarIterador() {
        let valorNovo = iterador + 1
        if (valorNovo === 4)
            valorNovo = 0;
        setIterador(valorNovo)
    }

    useEffect(() => {
        const interval = setInterval(atualizarIterador, 5000)
        return () => clearInterval(interval)
    })

    return (
        <>
            <div className='institucional-right-side'>
                <div className='institucional-carroussel'>
                    <CarouselSteps iterador={iterador} setIterador={setIterador}/>
                </div>
                <div className='institucional-logomarca-codegenius'>
                    <img src={codegenius_logo} />
                    <p>CodeGenius</p>
                </div>
                <div className='institucional-text'>
                    <h1>{textos[iterador].titulo}</h1>
                    <h2>{textos[iterador].subtitulo}</h2>
                    <p>{textos[iterador].texto}</p>
                </div>
                <button className='institucional-cadastre-se' onClick={() => onModal()}>Cadastre-se</button>
            </div>
            <div className="institucional-reset-modal-pos">  
            </div>
        </>
    );
}

export default CarouselInstitutional;